function VowelSquare(strArr) {
    strArr = strArr.map(val => {
      return val.toLowerCase().replace(/[aeiou]/g, "!");
    })
    for (let r = 0, len = strArr.length; r < len - 1; r++) {
      for (let c = 0, len = strArr[0].length; c < len - 1; c++) {
        if (checkPoint(strArr, [r, c])) {
          return `${r}-${c}`;
        }
      }
    }
    return 'No Encontrado'
  
  }
  
  function checkPoint(arr, point) {
    return (
      arr[point[0]][point[1]] === '!' &&
      arr[point[0] + 1][point[1]] === '!' &&
      arr[point[0]][point[1] + 1] === '!' &&
      arr[point[0] + 1][point[1] + 1] === '!'
    )
  }
     
  // keep this function call here 
  console.log(VowelSquare(["aqrst", "ukaei", "ffooo"]));