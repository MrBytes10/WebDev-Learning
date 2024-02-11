..]]]]]]]]]]]]]]]].. ..]]]]]]]]]]]]]]]

..]]]]]]]]]]]]]]]]..The while loop..]]]]]]]]]]]]]]]
- The while loop is another way to create loops.
- It has the following syntax:
    CODE:
        while(condition) {
        //code to run
        }
    JS
- It runs as long as the condition is true.
- The expression to run after each iteration is placed inside the loop.

..]]]]]]]]]]]]]]]]..The while loop runs as long as its condition is:..]]]]]]]]]]]]]]]
    CODE:
        0
        true=======
        false

..]]]]]]]]]]]]]]]]..Using a while loop to output the numbers 0 to 10, : ..]]]]]]]]]]]]]]]
The while loop
- Here is the previous example, outputting the numbers 0 to 10, using a while loop:
    - CODE PLAYGROUND: JS
            let i = 0;
            while(i<=10) {
            console.log(i);
            i++;
            }
    Click to run
- Modify the code to output the numbers 50 to 0, in descending order.
    -= Modified CODE: 
        let i = 50;
        while(i>=0) {
        console.log(i);
        i--;
        }

..]]]]]]]]]]]]]]]]..QUIZ:-Fill in the blanks to output the even numbers from 0 to 10, using a while loop. ..]]]]]]]]]]]]]]]
    CODE:
        let x = 0;
        while (x<=10) {
        console.log(x);
        x+=2;
        }

..]]]]]]]]]]]]]]]]..QUIZ:-If your conditional doesn't eventually become false, you will have an infinite loop. ..]]]]]]]]]]]]]]]
The while loop
- If your conditional doesn't eventually become false, you will have an infinite loop.
- For example:
        let i = 0;
        while(i<=10) {
            console.log(i);
        }
- The answer is infinite...
- In this loop the value of the variable i isn't incremented during each iteration and never becomes 10, 
which means that the i<=10 condition is always true, and therefore the loop will be infinite.

..]]]]]]]]]]]]]]]]..QUIZ:-Fill in the blanks to output all numbers from 1 to 10 that are multiples of 3. ..]]]]]]]]]]]]]]]
- Fill in the blanks to output all numbers from 1 to 10 that are multiples of 3.
    CODE: 
        let x = 0;
        while(x<=10) {
        console.log(x);
        x+=3;
        }

..]]]]]]]]]]]]]]]].. ..]]]]]]]]]]]]]]]
- The last loop you're looking at is the do...while loop, it's a variant of the while loop but with one important
 difference.
- This loop will execute the code block once, before checking if the condition is true, and
 then it will repeat the loop as long as the condition is true. 
- For example:
    Js CODE:
        let i=5;
        do {  
            console.log(i);
            i++;  
        }
        while (i<5);
    - Click to run, and the result is explained below: 
    The output of this code is: 5
/*
Here is the explanation:
    - `i` is initialized to 5
    - The `do-while` loop runs at least once before checking the condition
    - So first `i=5` is logged out 
    - Then `i` is incremented to 6 
    - Now the condition `i < 5` is checked, which evaluates to FALSE since i=6
    - So the loop exits after just the one iteration
Key points:
    - The do-while runs code block first, then checks condition
    - Condition was false so loop exited after first iteration 
    - Only the initial value `i=5` was logged
So despite the increment, the loop exits after the first log, and hence prints only 5.
*/
    - The condition is tested after the first iteration, that's why the code inside it is executed once. 
    - The while loop with the same conditions will not output anything in this case.


..]]]]]]]]]]]]]]]]..Drag and drop to create a valid do...while loop...]]]]]]]]]]]]]]]
    CODE:- 
        let i=1;
        {
        console.log("hey");
        i++;
        }
        (i<5);

..]]]]]]]]]]]]]]]]..Summary on LOOPS..]]]]]]]]]]]]]]]
    Loops
        - Both, for and while can be used to accomplish the same task.
        - The for loop is usually used when the number of times we need to run the loop is known.
        - The while loop is used when the condition of the loop is more complex and the number of times
        it runs is based on the expression in the loop. 
    NOTE..- Use for loops when possible, as it has a cleaner syntax and is easier to read and understand.

..]]]]]]]]]]]]]]]]..TAKE-AWAYS..]]]]]]]]]]]]]]]
Lesson Takeaways
- You are amazing, you have taken another step! 🚀
- Let's summarize what you've just learned:
        💡the while loop runs as long as the condition is true
        💡make sure your condition eventually becomes false, otherwise, you will have an infinite loop.
        💡the do...while loop executes the code block once, before checking if the condition is true, and then it repeats the loop as long as the condition is true

Countdown
Create a timer program that will take the number of seconds as input and output the remaining time.
XP+5
Practice

..]]]]]]]]]]]]]]]]..ANSWER FOR THE PRACTICE ..]]]]]]]]]]]]]]]
- Here is JavaScript code for a countdown timer program using a do-while loop based on the lesson takeaways:
            JS CODE: 
                // Get input seconds 
                let seconds = 10;
                // Print initial seconds  
                console.log(`${seconds} seconds remaining`);
                // Count down loop
                do {
                seconds--;
                    // Print remaining seconds if not 0
                if(seconds > 0) {
                    console.log(`${seconds} seconds remaining`); 
                }
                // Keep looping until 0
                } while (seconds > 0);
                // All done
                console.log("Countdown finished!");
    /*
        Breakdown:

        - Get input seconds to start
        - Print initial value 
        - Use a do-while loop to count down each second
        - Decrement seconds each iteration
        - Print only if seconds still remaining  
        - Repeat until seconds reaches 0
        - After loop Print finished message

        Let me know if you need anything else!
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