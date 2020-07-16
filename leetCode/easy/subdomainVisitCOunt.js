'use strict';

// Subdomain Visit Count

// A website domain like "discuss.leetcode.com" consists of various subdomains. At the top level, we have "com", at the next level, we have "leetcode.com", and at the lowest level, "discuss.leetcode.com". When we visit a domain like "discuss.leetcode.com", we will also visit the parent domains "leetcode.com" and "com" implicitly.

// Now, call a "count-paired domain" to be a count (representing the number of visits this domain received), followed by a space, followed by the address. An example of a count-paired domain might be "9001 discuss.leetcode.com".

// We are given a list cpdomains of count-paired domains. We would like a list of count-paired domains, (in the same format as the input, and in any order), that explicitly counts the number of visits to each subdomain.

// Example 1:
// Input: 
// ["9001 discuss.leetcode.com"]
// Output: 
// ["9001 discuss.leetcode.com", "9001 leetcode.com", "9001 com"]
// Explanation: 
// We only have one website domain: "discuss.leetcode.com". As discussed above, the subdomain "leetcode.com" and "com" will also be visited. So they will all be visited 9001 times.

// Example 2:
// Input: 
// ["900 google.mail.com", "50 yahoo.com", "1 intel.mail.com", "5 wiki.org"]
// Output: 
// ["901 mail.com","50 yahoo.com","900 google.mail.com","5 wiki.org","5 org","1 intel.mail.com","951 com"]
// Explanation: 
// We will visit "google.mail.com" 900 times, "yahoo.com" 50 times, "intel.mail.com" once and "wiki.org" 5 times. For the subdomains, we will visit "mail.com" 900 + 1 = 901 times, "com" 900 + 50 + 1 = 951 times, and "org" 5 times.

// Notes:

// The length of cpdomains will not exceed 100. 
// The length of each domain name will not exceed 100.
// Each address will have either 1 or 2 "." characters.
// The input count in any count-paired domain will not exceed 10000.
// The answer output can be returned in any order.


//General idea: You need a count variable associated with the inputs, and then the break down of each input.  I think a hash map would be most useful. I think for each indez of i, II should save the whole key, iif it doesn't exisit already. then save count to it. then probably break the key into it's sub parts by splitting them on the dots. Then adding a count for those as well. Then for each index of i after, it can update the count of the split keys, and add the entire key with a count as well.

// We also probably need a return array to push to. At least for the naive solution.

//??????


const subdomainVisits = cpdomains => {
  let hash = new Map();
  for (let i = 0; i < cpdomains.length; i++) {
    let count = parseInt(cpdomains[i].split('.')[0].split(' ')[0])
    let firstKey = cpdomains[i].split(' ')[1]
    if (hash.has(firstKey) && firstKey.split('.').length === 3) {
      hash.set(firstKey, hash.get(firstKey) + count)
      hash.set(firstKey.split('.')[2], hash.get(firstKey.split('.')[2]) + count)
      hash.set(`${firstKey.split('.')[1]}.${firstKey.split('.')[2]}`, hash.get(`${firstKey.split('.')[1]}.${firstKey.split('.')[2]}`) + count)
    } else if (!hash.has(firstKey) && firstKey.split('.').length === 3) {
      hash.set(firstKey, count)
      if (hash.has(firstKey.split('.')[2])) {
        hash.set(firstKey.split('.')[2], hash.get(firstKey.split('.')[2]) + count)
      } else {
        hash.set(firstKey.split('.')[2], count)
      }
      if (hash.has(`${firstKey.split('.')[1]}.${firstKey.split('.')[2]}`)) {
        hash.set(`${firstKey.split('.')[1]}.${firstKey.split('.')[2]}`, hash.get(`${firstKey.split('.')[1]}.${firstKey.split('.')[2]}`) + count)
      } else {
        hash.set(`${firstKey.split('.')[1]}.${firstKey.split('.')[2]}`, count)
      }
    }
    else if (hash.has(firstKey) && firstKey.split('.').length === 2) {
      hash.set(firstKey, hash.get(firstKey) + count)
      hash.set(`${firstKey.split('.')[1]}`, hash.get(`${firstKey.split('.')[1]}`) + count)
    } else if (!hash.has(firstKey) && firstKey.split('.').length === 2) {
      hash.set(firstKey, count)
      if (hash.has(`${firstKey.split('.')[1]}`)) {
        hash.set(`${firstKey.split('.')[1]}`, hash.get(`${firstKey.split('.')[1]}`) + count)
      } else {
        hash.set(`${firstKey.split('.')[1]}`, count)
      }
    }
  }
  let final = [...hash.entries()].map(result => {
    return `${result[1]} ${result[0]}`
  })
  return final
};
console.log(subdomainVisits(["900 google.mail.com", "900 google.mail.com", "50 yahoo.com", "1 intel.mail.com", "5 wiki.org"]))