#!/usr/bin/env ruby -w

file = File.expand_path("#{File.dirname(__FILE__)}/../data/gc.txt")

dna_string, json_string, label = ""

puts "var dnaStrings = ["

File.readlines(file).each do |line|
  if hit = /^>(.*)$/.match(line)
    if dna_string.length > 0
      dna_string = "\"dna_string\": \"#{dna_string}\""
      puts "    #{"{#{label}, #{dna_string}}"},"
      dna_string = ""
    end
    label = "\"label\": \"#{hit[1]}\""
  else
  	dna_string = "#{dna_string}#{line.chomp}"
  end
end

dna_string = "\"dna_string\": \"#{dna_string}\""
puts "    #{"{#{label}, #{dna_string}}"}\n];"