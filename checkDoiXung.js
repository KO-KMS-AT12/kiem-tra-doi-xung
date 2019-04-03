function check(str1, str2) {
    if (str1.length !== str2.length) {
        return false
    } else {
        if (str1[0] !== str2[str1.length - 1]) {
            return false;
        } else {
            let i = 1;
            while (i < str1.length) {
                if (str1[i] === str2[str1.length - 1 - i]) {
                    return true;
                    i++;
                } else {
                    return false;
                }
            }
        }
    }
}

console.log(check('abcd def', 'fed dcba'));