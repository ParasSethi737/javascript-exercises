const fibonacci = function(n) {
    let count
    if (typeof n !== 'number') {
        count = parseInt(n)
    } else {
        count = n
    }

    if (count < 0) return "OOPS";
    if (count == 0) return 0;

    let first=1;
    let second=1
    for(let i=2;i<n;i++){
        let current = first+second
        first=second
        second=current
    }
    return second;
};

// Do not edit below this line
module.exports = fibonacci;
