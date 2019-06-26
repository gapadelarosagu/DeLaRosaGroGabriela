function ChessboardTraveling(str) {
    expresion = /\(\d\s\d\)\(\d\s\d\)/g
    var correcto = expresion.test(str);
    if (correcto) {
        var horizontal = parseInt(str.charAt(8), 10) - parseInt(str.charAt(3), 10);
        var vertical = parseInt(str.charAt(6), 10) - parseInt(str.charAt(1), 10);
        return factorial(horizontal + vertical) / (factorial(vertical) * factorial(horizontal));
    } else {
      return 'error';
    }
}

function factorial(num) {
    return num === 0 ? 1 : num * factorial(num - 1);
}
console.log(ChessboardTraveling("(1 1)(3 3)"));    