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
// res = 5*10=50
// res = 54
// res = 54*10=540
// res = 543
// res = 543*10=5430
// res = 5432
// res = 5432*10=54320
// res = 54321

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
        num = Math.floor(num / 2)
    }
    return [...res].reverse().join('')
}
// console.log(convert_to_binary(13));
/* 
13 % 2 = 1
res = 1
13 / 2 = 6.1 => 1 is shifted
6 % 2 = 0
res = 10
*/
function convert_to_denary(num){
    let res = 0
    num = Number(num)
    let lastDigit;
    let base = 1
    while (num !== 0) {
        lastDigit = (num % 10)
        num = Math.floor(num / 10)

        res += lastDigit * base
        base = base * 2
    }
    return res
}

console.log(convert_to_denary(1101));

// console.log(convert_to_binary(13));
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
// console.time('time');
// console.log(fit_rooks(1000));  // The time is compared with recursive and loop = no big difference
// console.timeEnd('time');

// Check if words are palindrome

function is_palindrome(word){
    let start = 0
    let end = word.length - 1

    while(start < end){
        if(word[start] !== word[end]) return false
        start += 1
        end -= 1
    }

    return true
}

// console.log(is_palindrome('doniyor'));

function merge_arrays(arr1, arr2) {

    let result = []
    let i = 0;
    let j = 0;

    while(i < arr1.length && j < arr2.length){
        if(arr1[i] < arr2[j]){
            result.push(arr1[i])
            i += 1
        } else {
            result.push(arr2[j])
            j += 1
        }

        while (i < arr1.length){
            result.push(arr1[i])
            i += 1
        }
        while (j < arr2.length){
            result.push(arr2[j])
            j += 1
        }
    }
    return result
}

// console.log(merge_arrays([2,4,3], [5,7,6]));

function twoSum (nums, target){
    for(let i = 0; i < nums.length; i++){
        for(let j = nums.length - 1; j > i ; j--){
            if(nums[i] + nums[j] == target){
                return [i, j]
            }
        }
    }
    return []
}
// console.time("twoSum")
// console.log(twoSum([3,2,4,5,7], 9));
// console.timeEnd("twoSum");

function addTwoNumbers(l1, l2){
    l1 = l1.toString().replace(/,/gi, '')
    l2 = l2.toString().replace(/,/gi, '')
    let sum = +l1 + +l2
    let res = 0
    while(sum !== 0){
        res *= 10
        res += sum % 10
        sum = Math.floor(sum / 10)
    }
    return Array.from(String(res), Number)
}
// console.log(addTwoNumbers([2,4,3], [5,6,4]));


