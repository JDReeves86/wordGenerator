let string = ""
let count = 0
const letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", " "];
//const letters2 = ["h", "e", "l"]
function counter(phrase){
    while (string!=phrase){
        count ++;
        string = ""
        generateStr(phrase)
        //generateHel(phrase);
        //console.log(`${string} total:${count}`)
    }
    if (string == phrase){
        console.log(`It took me ${count} attempts to generate "${string}".`)
    }
    return count
}

function generateStr(x) {
    for (i=0; i<x.length; i++) {
        string += letters[Math.floor(Math.random() * letters.length)]
    }
    return string
}

function generateHel(x) {
    for (i=0; i<x.length; i++){
        string += letters2[Math.floor(Math.random() * letters2.length)]
    }
    return string
}

counter("jacob")
