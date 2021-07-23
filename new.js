//Find Longest Word
function findLongestWord(str) {
    let word = ''
    for(let i = 0; i < str.length; i++) {
        if( word.length < str[i].length) {
            word = str[i]
        }
    
    }
    return word
}

findLongestWord(['cat', 'eggggggs', 'chickens', 'hehehehehehehehehehe'])
//Unique Characters
function unique(str) {
    var object = {}
    for( let i = 0; i < str.length; i++) {
      let it = str[i]
      if(object[it]) return false
      object[it] = true
    }
    return true
  }
  
  console.log(unique('abc'))
  console.log(unique('aa'))