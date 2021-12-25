const ShiftRight = (a, b) => {
    for(i = 0; i < b; i++) {
        var lastIndex = a.length -1;
        var lastItem = a[lastIndex];
        for (j = lastIndex; j > -1; j--) {
            if (a[j - 1]) {
                a[j] = a [j - 1];
            }
            else {
                a[j] = lastItem
            }
        }
    }
    console.log(a);
};
ShiftRight([5,6,7,8,9], 1)