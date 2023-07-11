function reverse_digits(num) {
    let res = 0

    while (num !== 0) {
        res *= 10
        res += num % 10
        num = Math.floor(num / 10)
    }
    return res
}

// console.log(reverse_digits(12345))

/*
710
0 * 10 = 0
710 % 10 = 0
710 / 10 = 71
0 * 10 = 0
71 % 10 = 1
71 / 10 = 7
1 * 10 = 10
7 % 10 = 7
10 + 7 = 17
*/

// Converting denary to binary
function convert_to_binary(num){
    let res = ''

    while (num !== 0) {
        res += num % 2
        num  = Math.floor(num / 2)
    }
    return [...res].reverse().join('')
}

/* 
13 % 2 = 1
res = 1
13 / 2 = 6.1 => 1 is shifted
6 % 2 = 0
res = 10
*/


// console.log(convert_to_binary(50));
// Here is the factorialization function
function factorial(num){

    let res = num
    
    if(num === 0 || num === 1) return 1

    while(num > 1){
        num--
        res *= num
    }

    return res
}


/*
Explanation:

while(num > 1){ starting the loop over
        num--  <-- here displaying the actual number
        res *= num <-- here res is unchanged in out case is 4
                        num is decreased by 1 and it is now equals to 3
    
    The loop is iterated until we reach 1

    when each iteration started num is decreased by 1
    and multiplied by res in out case is 4
    }

    return res
*/

//Copy paste the function and use anywhere with numbers. 


// This function determines how many rook we can fit into n number of cells
function fit_rooks(num){ // Here num is the number of cells of the chess board
    // Here we are going to fit rooks in the available cells

    if(num < 0) return -1
    if(num === 0) return 1

  return (num * fit_rooks(num - 1))
}
console.time('time');
console.log(fit_rooks(1000));  // The time is compared with recursive and loop = no big difference
console.timeEnd('time');
