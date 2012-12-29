#!/usr/bin/env ruby -w

file = ARGV[0]

case
when file == nil
  puts "ERROR: input file argument missing\n\n    usage: #{File.basename(__FILE__)} file_name\n "
  exit
when ! File.exist?(file)
  puts "ERROR: input file not found\n "
  exit
when ! File.readable?(file)
  puts "ERROR: input file cannot be read\n "
  exit
end

fh = File.expand_path(file)
dna_string = label = ""
results = []

File.readlines(fh).each do |line|
  if hit = /^>(.*)$/.match(line)
    if dna_string.length > 0 && label.length > 0
      results.push({label: label, dna_string: dna_string})
      dna_string = label = ""
    end
    label = hit[1]
  else
    dna_string = "#{dna_string}#{line.chomp}"
  end
end
results.push({label: label, dna_string: dna_string})

puts "var dnaStrings = ["
results.each { |result| puts "    {\"label\": \"#{result[:label]}\", \"dna_string\": \"#{result[:dna_string]}\"}#{result == results.last ? "" : ","}" }
puts "];"