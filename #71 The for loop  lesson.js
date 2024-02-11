..]]]]]]]]]]]]]]]].. ..]]]]]]]]]]]]]]]

..]]]]]]]]]]]]]]]]..Loops in js ..]]]]]]]]]]]]]]]
- Loops allow you to run the same code multiple times.
- This is useful, for example, when drawing animations in games, or creating a countdown.
- The for loop has the following syntax:
THE FOR LOOP:
    for (initializer; condition; final-expression) {
        // code to run
    }
JS
    - The initializer is a variable, which increments the number of times the loop has run.
    - The condition is used to stop the loop.
    - The final expression is run each time after the loop's code has run. It is usually used to increment 
        the variable used in the condition.
- Each run of the loop is called an iteration.


..]]]]]]]]]]]]]]]]..QUIZ:-Which component of the for loop runs after each iteration?..]]]]]]]]]]]]]]]
choices:
    condition
    initializer
    final expression==========

..]]]]]]]]]]]]]]]]..Loops EXAMPLE ..]]]]]]]]]]]]]]]
- Here is an example of a for loop outputting the number 1 to 10:
- Js CODE:
    for (let i = 1; i <= 10; i++) {
        console.log(i);
    }
Click to run
- The loop creates a variable called i and initializes it to 1.
- Then, after each iteration, it increments the i variable by 1.
- The loop stops when i reaches 11, breaking the condition.
- Modify the code to output the numbers 10 to 50.
ANSWER for the MODIFICATION:
    CODE: 
        for(let i=10; i<=50; i++) {
            console.log(i);
             }
      

..]]]]]]]]]]]]]]]].. ..]]]]]]]]]]]]]]]
Fill in the blanks to create a valid a for loop.
CODE:
    for (let x=1; x<100; x++) {
        //some code
    }

..]]]]]]]]]]]]]]]]..Loop to output only the even numbers from 0 to 20..]]]]]]]]]]]]]]]
Loops
- Let's make another loop, which outputs only the even numbers from 0 to 20: 
    - CODE PLAYGROUND: JS
            for(let i=0; i<=20; i+=2) {
                console.log(i);
            }
    Click to run
- We increment i by 2 after each iteration, resulting in only the even numbers.
- Change the code to output only the odd numbers.
= The changed code: 
    for(let i=1; i<=20; i+=2) {
        console.log(i);
    }

..]]]]]]]]]]]]]]]]..QUIZ:-What is the output of this code? ..]]]]]]]]]]]]]]]
What is the output of this code?
CODE:
    let x = 0;
    for(let i=0;i<3;i++) {
    x+=i;
    }
    console.log(x);
JS
ANSWER: 
The output of this code is: 3
EXPLANATION:
/*
    Let's go through it step-by-step:

    - `x` is initialized to `0`
    - The `for` loop iterates 3 times (`i` goes from 0 to 2)
    - Within the loop: 
    - `x` is updated by adding the current value of `i` to itself
    - On 1st iteration, `i` is 0, so nothing changes 
    - On 2nd iteration, `i` is 1, `x` becomes 0 + 1 = 1
    - On 3rd iteration, `i` is 2, `x` becomes 1 + 2 = 3
    - After the loop finishes, `x` is 3
    - We log `x`, which prints 3

    So with the incremental additions of `i` to `x` on each loop iteration, the end result stored in `x` is 
    the sum of 0 + 1 + 2 which is 3.
*/

..]]]]]]]]]]]]]]]].. Shooter game using The for loop ..]]]]]]]]]]]]]]]
The for loop
    - Let's write a program for a shooter game, which will control the number of shots fired. At the start of the level, the player has 5 bullets. Each time the player shoots, the number of bullets should be decreased by 1.
    - The for loop will help you here as well:
    CODE PLAYGROUND: JS
        for(let i=5; i>=0; i-=1) {
        console.log(`Bullets: ${i}`);
        }
Click to run, and the result is that the bullets keep diminishing one by one upto zero: 
EXPLANATION: 
- What is the output of this code:
        for(let i=5; i>=0; i-=1) { 
            console.log(`Bullets: ${i}`); 
        }
    /*
        - The output of this code is:
            Bullets: 5
            Bullets: 4 
            Bullets: 3
            Bullets: 2
            Bullets: 1
            Bullets: 0
        Let's understand why:
            - i starts at 5
            - The loop runs as long as i is greater than or equal to 0
            - i gets decremented by 1 in each iteration
            - So the value of i will be:
                5, 4, 3, 2, 1, 0
            - Inside the loop, we log the string "Bullets: " concatenated with the value of i
            - So it will log that string for values 5 down to 0
            - In essence, this outputs the bullet count from 5 down to 0, decrementing one on every iteration, 
            resulting in that sequence being printed.
    */

..]]]]]]]]]]]]]]]]..Lesson Takeaways..]]]]]]]]]]]]]]]
Great job! Let's summarize what you've just learned:
    -💡loops allow you to run the same code multiple times
    -💡the for loop has 3 components: the initializer, the condition, and the final expression
    What's next?
    - In the next lesson, you will learn a new type of loop - the while loop!
    widgetImg

PRACTICE:--Repeat and Learn Code! Code! Code!
    - Complete the code to output a motivational expression three times.
    XP +5
    Practice

..]]]]]]]]]]]]]]]]..ANSWER FOR THE PRACTICE ..]]]]]]]]]]]]]]]
Here is code to output a motivational expression 3 times based on the lesson summary:
    // Set counter 
    let i = 0;
    // Loop 3 times  
    for(; i < 3; ) {
    // Print motivational message
    console.log("You can do it!");
    // Increment counter
    i++; 
    }
// Output:
// You can do it!
// You can do it! 
// You can do it!

/*
Breaking down the solution:
    - Initialize counter variable i = 0 
    - Use a for loop to loop 3 times
    - Inside the loop, print the motivational message 
    - Increment i at the end of each iteration
    - This will repeat the console.log() 3 times
Let me know if you need any clarification or have additional requirements!
*/

..]]]]]]]]]]]]]]]].. ..]]]]]]]]]]]]]]]
..]]]]]]]]]]]]]]]].. ..]]]]]]]]]]]]]]]
..]]]]]]]]]]]]]]]].. ..]]]]]]]]]]]]]]]
..]]]]]]]]]]]]]]]].. ..]]]]]]]]]]]]]]]
..]]]]]]]]]]]]]]]].. ..]]]]]]]]]]]]]]]