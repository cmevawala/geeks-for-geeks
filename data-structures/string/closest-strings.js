// Ref: https://www.geeksforgeeks.org/minimum-distance-between-words-of-a-string/
// Closest Strings: https://practice.geeksforgeeks.org/problems/closest-strings0611/1?page=1&curated[]=3&sortBy=submissions

function shortestDistance(s, word1, word2) {
  // code here
  if (word1 === word2) return 0;

  let word1Index = 0;
  let word2Index = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === word1) {
      word1Index = i;
    }
  }

  for (let i = 0; i < s.length; i++) {
    if (s[i] === word2) {
      word2Index = i;
    }
  }

  console.log(word2Index - word1Index);
}

let distance = shortestDistance(
  ["geeks", "for", "geeks", "contribute", "practice"],
  "geeks",
  "practice"
);

// let distance = shortestDistance(
//   ["the", "quick", "brown", "fox", "quick"],
//   "the",
//   "fox"
// );

console.log(distance);
