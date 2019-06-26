function TimeConvert(num){
    var hora=Math.floor(num/60);
    var min=num%60;
    return hora+':'+min;
}

console.log(TimeConvert(45))