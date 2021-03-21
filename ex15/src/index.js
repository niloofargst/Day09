function myDoWhile() {
    var myNumbers = "";
    var i = 0;
    do {
        if (i != 9) {
            myNumbers += i + ", ";
        } else {
            myNumbers += i;
        }
        i++;
    } while (i < 10);
    return myNumbers;
}
console.log(myDoWhile());
module.exports = myDoWhile;