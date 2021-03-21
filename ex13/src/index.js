function inverseWhile() {
    var i = 5;
    var fiveNumbers = "";
    while (i >= 0) {
        if (i === 0) {
            fiveNumbers += i;
            return fiveNumbers;
        }
        fiveNumbers += i + ",";
        i--;
    }
}
console.log(inverseWhile());
module.exports = inverseWhile;