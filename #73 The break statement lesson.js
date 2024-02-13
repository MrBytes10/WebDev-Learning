
..]]]]]]]]]]]]]]]].. ..]]]]]]]]]]]]]]]
..]]]]]]]]]]]]]]]]..The break statement..]]]]]]]]]]]]]]]
The break statement
- Do you remember the break statement from the switch statement? Well, that's not the only place where 
you can use it.
- The break statement allows you to exit a loop prematurely, based on the given condition.
- For example:
        Js CODE:
            for(let i=0; i<10;i++) {
            if(i==3) {
                break;
            }
            console.log(i);
            }
        Click to run
This can be useful, for example, to exit a loop when the user enters a specific number, or taps on a specific button.

..]]]]]]]]]]]]]]]]..QUIZ: How many numbers will the following code output?..]]]]]]]]]]]]]]]
    CODE:
        for(i = 1; i<5; i++){
            if(i == 3){
                break;
            }
            console.log(i);
        }
    JS answers:
        5
        1
        2 ========
        0
        EXPLANATION: 
    /*
                The output of the given code is:
                                                1
                                                2
        Let's understand this:
            - The for loop starts from i=1, and runs till i<5
            - So i takes values 1, 2, 3, 4 
            - Inside the loop there is an if statement checking if i==3
            - When i becomes 3, this if condition evaluates to true
            - In that case, we hit the break statement, which terminates the loop
            - Before hitting break, console.log(i) is printing the current i value

        So, the steps that happen:
            - i = 1 -> print 1 
            - i = 2 -> print 2
            - i = 3 -> meet break condition -> terminate loop
        Since the loop terminates when i=3, only 1 and 2 are printed, hence the output is:
                1
                2
        So in this way, break exits out of the full loop when a certain condition is met.
    */

..]]]]]]]]]]]]]]]]..The break statement in while loops. ..]]]]]]]]]]]]]]]
The break statement
- In the same way, you can use the break statement in while loops.
- For example:
    jS CODE:
            let num = 1;
            while(num<=10){
                if(num == 3){
                    break;
                }
                console.log(num);
                num++;
            }
    Click to run
    /*
        -The output of this code is:
                                    1
                                    2
        Let's understand why:
            - num starts at 1  
            - The while loop runs as long as num <= 10
            - Inside the loop, we check if num == 3
            - If so, we execute `break` to exit the loop completely
            - Before breaking, we log num
            - We also increment num at the end of the loop
        So here is the execution flow:
            - First iteration: num=1  
            - 1 is logged  
            - num incremented to 2
            - Second iteration: num=2
            - 2 is logged
            - num incremented to 3  
            - Third iteration: num=3
            - Break condition met
            - Loop terminated
        Since the break executes when num gets to 3, only 1 and 2 are logged before the loop exits.
        Therefore output is:
                            1
                            2
        So break jumps out without completing remaining iterations.
    */

..]]]]]]]]]]]]]]]]..Drag and drop to create a while loop with a break statement:..]]]]]]]]]]]]]]]
CODE js:
    let num = 50;
    while(num>0) {
    if(num == 25){
    break;
    }
    console.log(num);
    num--;
    }
    The answer is numers from 50 upto number 26.
            /*
        VM166:6 50
        VM166:6 49
        VM166:6 48
        VM166:6 47
        VM166:6 46
        VM166:6 45
        VM166:6 44
        VM166:6 43
        VM166:6 42
        VM166:6 41
        VM166:6 40
        VM166:6 39
        VM166:6 38
        VM166:6 37
        VM166:6 36
        VM166:6 35
        VM166:6 34
        VM166:6 33
        VM166:6 32
        VM166:6 31
        VM166:6 30
        VM166:6 29
        VM166:6 28
        VM166:6 27
        VM166:6 26
            */

..]]]]]]]]]]]]]]]]..The continue STATEMENT..]]]]]]]]]]]]]]]
continue
- The continue statement is used to skip an iteration of the loop and continue from the next one.
- This can be useful, for example, to skip some particular elements in the loop:
    JS CODE:
        for(let i=0;i<10;i++) {
        if(i == 5) {
            continue;
        }
        console.log(i);
        }
    Click to run
NOTE:- This will skip the number 5.

..]]]]]]]]]]]]]]]]..What will be the output of this code?..]]]]]]]]]]]]]]]
- What will be the output of this code?
- CODE:
        let sum=0; 
        for(let i=1; i<=3; i++) {
        if (i == 2) {
            continue; 
        }
        sum += i;
        }
        console.log(sum);
JS ANSWERS:
    10
    1
    4
    /*
    This code has a for loop that iterates from 1 to 3. Inside the loop, there is an if statement that checks if i is equal to 2. If so, it uses the continue statement to skip the rest of the current iteration and go to the next one.

It first sums 1. On the second iteration when i is 2, it hits the continue so doesn't execute the sum += i line. On the third iteration, it sums 3.

Therefore, the output will be:

4

The flow is:

i = 1 -> sum = 0 + 1 = 1  
i = 2 -> hit continue, skip sum += i
i = 3 -> sum = 1 + 3 = 4

So the sum prints out as 4.
    */

..]]]]]]]]]]]]]]]]..Lesson Takeaways and PRACTICE..]]]]]]]]]]]]]]]
Lesson Takeaways
- The break statement didn't break you down, and on you go!
- Let's summarize what you've just learned:
    💡you can use the break statement in for and while loops
    💡the break statement allows you to exit a loop prematurely, based on the given condition
    💡the continue statement is used to skip an iteration of the loop and continue from the next one

    Practice.....................
        Break The Loop
        Make the necessary changes to break the loop when the result gets larger than 10000 and output the result.
        XP+5
    Practice..................

..]]]]]]]]]]]]]]]]..END OF PRACTICE ..]]]]]]]]]]]]]]]
    ANSWER TO THE PRACTICE:
..]]]]]]]]]]]]]]]].. ..]]]]]]]]]]]]]]]
==Here is the code to break the loop when the result gets larger than 10000:
- js code:
        let result = 0;
        for(let i = 0; i < 1000000; i++) {
        result += i;
        if(result > 10000) {
            break;
        }
        }
        console.log(result);
        /*
        The key points:........................................
    - Initialize a result variable to sum up the numbers
    - Use a for loop to iterate up to 1000000
    - Increment result by adding i in each iteration
    - Check if result goes over 10000 with an if statement
    - Use break to exit the loop when result > 10000
    - Print out the final result after the loop terminates
    - This will add numbers starting from 0, and break when the sum in result exceeds 10000, 
    printing out the value of result at that point.
Do additional practice examples!
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