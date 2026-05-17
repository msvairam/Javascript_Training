function test() {
    for (let i =0; i < 10; i++) {
        if (i ==5) {
            return ;
        }
        console.log(i);
    }

    for (let j = 0; j < 5; j++) {
        console.log('break and return ', j);
    }
}

test();