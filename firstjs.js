function freqCount(str) {
    var counts = {};
    var letters = str.split("");

    for(var i=0; i < letters.length; i++){
        var letter = letters[i];
        if (!counts[letter]){
            counts[letters]=0;
        }
        counts[letter]++;
    }
return counts
}
console.log(freqCount("wordwordlyworlddorlwwwdorwd"));