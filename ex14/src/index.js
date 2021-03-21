function myForLoop1() {
    var evenNumbers = "";
    for (var i = 0; i <= 8; i++) {
        if (i % 2 == 0) {
            if (i === 8) {
                evenNumbers += i;
                return console.log(evenNumbers);
            }
            evenNumbers += i + ",";
        }
    }
}

function myForLoop2() {
    var evenInverseNumbers = " ";
    for (var i = 8; i >= 0; i--) {
        if (i % 2 == 0) {
            if (i === 0) {
                evenInverseNumbers += i;
                return console.log(evenInverseNumbers);
            }
            evenInverseNumbers += i + ",";
        }
    }
}

myForLoop1();
myForLoop2();
module.exports = {
    myForLoop1,
    myForLoop2
};