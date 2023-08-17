const isPalindrome = (x) => {
    if(x < 0) return false;
    const str = x.toString(); // convert
    for(var i = 0; i < str.length; i++) {
        if(str[i] !== str[str.length - (i + 1)]) {
            return false;
        }
    } 
    return true;
}


const isPalindrome  = (x) => {
    let res = 0;
    let temp = x;
    while(temp > 0) {
        res = res * 10
        res = res + (temp % 10)  // last number
        temp = Math.floor(temp / 10)  // remove last number
    }
    return x === res
}
