/*
This is my solution the Codewars Challenge: Complementary DNA
This take in a DNA sequence of 'A', 'T', 'C', or 'G' and returns the corresponding
amino acid, as if it were being copied in a true biological process.
*/

function DNAStrand(dna){
  let i;
  let complement = '';
  for (i = 0; i < dna.length; i++) {
    if (dna[i] === 'A') {
      complement += 'T'
    } else if (dna[i] === 'C') {
      complement += 'G'
    } else if (dna[i] === 'T') {
      complement += 'A'
    } else if (dna[i] === 'G') {
      complement += 'C'
    }
  }
  return complement
}
