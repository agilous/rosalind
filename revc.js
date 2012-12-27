var dnaString = "CGGCAAACATTGCCTCATGGGAGGTAAGATTTAATCTATAAGAGAACAGGACCTACGATGCGCCGGACAGGCAGTGCTCCGCGGACATTTAAATTTAGACTCTGCATTCCAGATGCACTCACAGCGCCCACACGCTAAGGGCCAGTTTATAGACGTCGGATTTGTCGGTCGACGTCATTGCAGGCGGGTCAGGTGTCATTCTCGGCAACGAAGGCCTCCTACGCTGCGAACGCTCAATACGACTGTTCCGACGTTGTACTGACGACGAGAGCCTAGGTGTCGCAGGTCAATCTATCCGTGGAATAGGCTAGCGTACCGAATGCCCTGATTGACAATTCCAAGATAGCGAATGGCATTGGGAGAAGACGGCAATTGTTTTGACGAAGGTAATGAAGTCAGGAAAACAAGTGGTCCATACTTCCCACTTAGCTTGGCGTACAAGTGTTCCCACTAGCGATAAAGCTCCAACGACTTCCTTAGTTTCACTCGCAGCTGGAGGTCTAAACATCGCGGGTCAACAGGTTCTGGTCGGATGATAGGGGTCTAAGACAGGGGGGTCCGTTTTGCAACCCTAACAGGCATAAAGCTTTTCCGATTCATTTTGCACTACCGATTTTAAGCCATTCTTCCAAGGTCAGCGAACGGCCGAAGTAGGGATAATAATCATGCTTGTACCGAGCCGCCCCGTTTCCCATCTAAGTACGCCCCAAACCCCTCGGAGCACTCATAGTTTATCAATCAAAATGACACTCAGACTCGATGCGTGATTGATTCCGGTGCTTTAAGCGGAAATGTAGCTTACGCTTGGCTCTGCGGTATGTTCGCTTATTTCGTTCTTATATGGAGATCCGCTGACACAAGACGGCAAATACAGTCTGTATACCGTGGGCTCAA";
var reverseCompliment = "";

var i;
for (i = dnaString.length; i >= 0; i -= 1) {
    var ch = dnaString.charAt(i);
    switch (ch) {
    case 'A':
        reverseCompliment += 'T';
        break;
    case 'C':
        reverseCompliment += 'G';
        break;
    case 'G':
        reverseCompliment += 'C';
        break;
    case 'T':
        reverseCompliment += 'A';
        break;
    }
}

var document;
var revcSolution = document.getElementById('revc-solution');
revcSolution.innerHTML = reverseCompliment;