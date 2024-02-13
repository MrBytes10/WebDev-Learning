..]]]]]]]]]]]]]]]].. ..]]]]]]]]]]]]]]]
..]]]]]]]]]]]]]]]].. ..]]]]]]]]]]]]]]]
1. Fill in the blanks to create a valid for loop.
    code:
        for (let x=0;
        x<10; x++){
            console.log("Great job");
        }

..]]]]]]]]]]]]]]]].. ..]]]]]]]]]]]]]]]
2. The while loop runs as long as its condition is:
    Answers:
        false
        true =============

..]]]]]]]]]]]]]]]].. ..]]]]]]]]]]]]]]]
3. Fill in the blanks to output all numbers from 0 to 100 that are multiples of 4.
CODE:
    let x = 0;
    while (x<100){
    x+=4;
    console.log(x);
    }
EXPLANATION: 
   /* Here is an explanation for the solution:
    let x = 0;
    - Initialize x to 0 to start at the first multiple of 4 (which is 0).
        while (x<100) {
        - Set up the loop condition to continue looping as long as x is less than 100. This will iterate through
         all multiples of 4 up to 100.
        x+=4;
        - Increment x by 4 on each iteration. This allows us to step through the multiples of 4 (0, 4, 8, 16, etc.).

        console.log(x);
        - Print out the current value of x, which will print all the multiples of 4.
        }
    So by initializing x to 0, incrementing it by 4 each time, and logging the value each iteration 
    while x is less than 100, we can print out all the multiples of 4 from 0 to 100.

    The key aspects are:
    - Starting at 0 
    - Incrementing by 4 each loop
    - Logging the value of x each time
    - Looping while x is less than the upper limit of 100
    */

..]]]]]]]]]]]]]]]].. ..]]]]]]]]]]]]]]]
4. How many numbers will the following code output?
    CODE:
        for(i = 1; i<7; i++){
            if(i == 4){
                break;
            }
            console.log(i);
        }
    JS answer:
        1
        3 =============
        5
EXPLANATION: 
/*
    The code will output 3 numbers.
    Let's walk through it:
        for(i = 1; i<7; i++) {
        - Sets i to start at 1
        - Will loop as long as i is less than 7
        - Increments i by 1 each iteration
        if(i == 4) {
        - When i reaches 4, this will evaluate to true
        break;
        - The break statement will terminate the loop
        }
        console.log(i); 
        - Prints out the value of i each iteration
        So it will print:
                1
                2 
                3
    - On the 4th iteration, i equals 4, so it will hit the break statement, terminating the loop.
   - Therefore, it prints out 3 numbers before terminating. The answer is 3.
*/
..]]]]]]]]]]]]]]]].. ..]]]]]]]]]]]]]]]
Fill in the blanks to print only even numbers.
            for(i = 1; i<=100; i++){
            if( i%2!=0 ){
            continue;
            }
            console.log(i);
            } 
Here is the solution with the blanks filled in:
    CODE:
        for(i = 1; i<=100; i++){
        if( i%2!=0 ){
            continue;
        }
        console.log(i);
        }
/*
Explanation:
- The for loop iterates i from 1 to 100 
- Using the modulus operator (%), we check if i divided by 2 has a remainder (i.e. it's odd)
- If i % 2 != 0 evaluates to true, it's an odd number
- So we use the continue statement to skip logging odd i values
- If i % 2 != 0 evaluates to false, i is even and we log the even number
So this prints all the even integers from 1 to 100 by only logging i when it's divisible by 2 with no remainder.
*/
..]]]]]]]]]]]]]]]].. ..]]]]]]]]]]]]]]]
..]]]]]]]]]]]]]]]].. ..]]]]]]]]]]]]]]]
..]]]]]]]]]]]]]]]].. ..]]]]]]]]]]]]]]]
..]]]]]]]]]]]]]]]].. ..]]]]]]]]]]]]]]]
..]]]]]]]]]]]]]]]].. ..]]]]]]]]]]]]]]]
..]]]]]]]]]]]]]]]].. ..]]]]]]]]]]]]]]]
..]]]]]]]]]]]]]]]].. ..]]]]]]]]]]]]]]]
..]]]]]]]]]]]]]]]].. ..]]]]]]]]]]]]]]]
..]]]]]]]]]]]]]]]].. ..]]]]]]]]]]]]]]]
..]]]]]]]]]]]]]]]].. ..]]]]]]]]]]]]]]]
..]]]]]]]]]]]]]]]].. ..]]]]]]]]]]]]]]]
..]]]]]]]]]]]]]]]].. ..]]]]]]]]]]]]]]]
..]]]]]]]]]]]]]]]].. ..]]]]]]]]]]]]]]]
..]]]]]]]]]]]]]]]].. ..]]]]]]]]]]]]]]]
..]]]]]]]]]]]]]]]].. ..]]]]]]]]]]]]]]]
..]]]]]]]]]]]]]]]].. ..]]]]]]]]]]]]]]]
..]]]]]]]]]]]]]]]].. ..]]]]]]]]]]]]]]]
..]]]]]]]]]]]]]]]].. ..]]]]]]]]]]]]]]]
..]]]]]]]]]]]]]]]].. ..]]]]]]]]]]]]]]]
..]]]]]]]]]]]]]]]].. ..]]]]]]]]]]]]]]]
..]]]]]]]]]]]]]]]].. ..]]]]]]]]]]]]]]]
..]]]]]]]]]]]]]]]].. ..]]]]]]]]]]]]]]]
..]]]]]]]]]]]]]]]].. ..]]]]]]]]]]]]]]]
..]]]]]]]]]]]]]]]].. ..]]]]]]]]]]]]]]]
..]]]]]]]]]]]]]]]].. ..]]]]]]]]]]]]]]]
..]]]]]]]]]]]]]]]].. ..]]]]]]]]]]]]]]]
..]]]]]]]]]]]]]]]].. ..]]]]]]]]]]]]]]]
..]]]]]]]]]]]]]]]].. ..]]]]]]]]]]]]]]]
..]]]]]]]]]]]]]]]].. ..]]]]]]]]]]]]]]]
..]]]]]]]]]]]]]]]].. ..]]]]]]]]]]]]]]]
..]]]]]]]]]]]]]]]].. ..]]]]]]]]]]]]]]]
..]]]]]]]]]]]]]]]].. ..]]]]]]]]]]]]]]]
..]]]]]]]]]]]]]]]].. ..]]]]]]]]]]]]]]]
..]]]]]]]]]]]]]]]].. ..]]]]]]]]]]]]]]]