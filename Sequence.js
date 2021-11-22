function sequence(n) {
    n = Number(n);
    let currentNumber =  1;
    while (currentNumber <= n) {
        console.log(currentNumber);
        currentNumber = currentNumber*2+1;
    }
    
}

sequence(3);
sequence(8);
sequence(17);
sequence(31);