// This function finds a string "needle" in an array "haystack"
function findNeedle(haystack) {
    let i = haystack.indexOf("needle")
    return i === undefined ? 'no needle found' : 
        `found the needle at position ${i}`
  }

console.log(findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk']))