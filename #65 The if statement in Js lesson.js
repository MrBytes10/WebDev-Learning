..]]]]]]]]]]]]]]]].. ..]]]]]]]]]]]]]]]

..]]]]]]]]]]]]]]]]..The if statement..]]]]]]]]]]]]]]]
- Okay, now you know how to evaluate expressions, but what's the use for them?
- Let's suppose you are creating a program for a shop, where a discount is provided if the total purchase exceeds 1500.
- This means that your program needs to perform some action only if the given condition is true. And this is where the if statement comes in.
- An if statement looks like this: 
    js CODE:
    if (condition) {
        // block of code
    }
- This is where the fun begins!

..]]]]]]]]]]]]]]]]..QUIZ ..]]]]]]]]]]]]]]]
- The if statement is used to run code in case the condition evaluates to:
false
0
true =======

..]]]]]]]]]]]]]]]]..An "if statement\" Example with the discount ..]]]]]]]]]]]]]]]
The if statement
- So, let's use the if statement in our example with the discount in the shop.
- Here is what the solution looks like:
    js CODE:
        let purchase = 1700;

        if (purchase>=1500){
            console.log("Discount!")
        }
Click to run, and the result is; Discount!
Explanation:
/*
    The output of this JavaScript code will be: Discount!
    ```The explanation of the code:
    1. A variable `purchase` is declared and initialized to `1700`
    2. An `if` statement checks if `purchase` is greater than or equal to `1500`
    - Since `purchase` is `1700`, this condition evaluates to `true` (because 1700 is >= 1500)
    3. If the condition is true, it will print `"Discount!"` in the console 
    4. Since the `if` condition evaluated to `true`, the code inside the `if` statement is executed
    5. Therefore, `"Discount!"` is printed/logged to the console
        So in summary:
        - `purchase` was greater than 1500  
        - The `if` statement condition was `true`
        - `"Discount!"` was printed to the console
*/
- The purchase>=1500 condition is true, so the code inside the if statement will be executed.
- Notice that the condition should be enclosed in parentheses, followed by curly braces {}, 
where the block of code is written.

..]]]]]]]]]]]]]]]]..QUIZ:- Drag and drop to create a valid if statement. ..]]]]]]]]]]]]]]]
CODE: 
    let score = 95;
    (score >= 90){
        console.log('Level completed!');
    }

..]]]]]]]]]]]]]]]]..NOTE:-If the condition is false, the block of code will not be executed: ..]]]]]]]]]]]]]]]
The if Statement
- If the condition is false, the block of code will not be executed:
    CODE PLAYGROUND: JS
            let purchase = 1400;
            if (purchase>=1500){
                console.log("Discount!")
            }
        Click to run
    EXPLANATION: 
    - Since the value of purchase is 1400 which is less than 1500, the condition inside the if statement evaluates to false.
    - Therefore, the code inside the if block does not execute.
    - So there will be no output printed to the console.
    The full execution flow:
    Copy code
            let purchase = 1400; // purchase is initialized to 1400

            if (purchase >= 1500) { // This evaluates to false because 1400 is not >= 1500 
            console.log("Discount!");  
            }
    // Since the if condition is false, 
    // the code inside the block does NOT execute.
    // Therefore, nothing is printed.
    - In summary, because purchase was less than 1500 and the if condition evaluated to false as a result, nothing gets printed to the console.

...]]]]]]]]]]]]]]]]..You can use any expression that can be evaluated as true or false for your if statement. ..]]]]]]]]]]]]]]]
The if Statement
- You can use any expression that can be evaluated as true or false for your if statement.
- Here is an example with the equal operator:
    CODE PLAYGROUND: JS
            console.log("Do you enjoy learning?")

            let answer = "Maybe";
            if(answer == "Yes!"){
                console.log("You are tough!")
            }
    Click to run
- Is there anything wrong in the given code? If so, fix it!
ANSWER AND EXPLANATIONS: 
= Yes, there is one issue in the given JavaScript code. 
    The js code is:
        console.log("Do you enjoy learning?");
        let answer = "Maybe";
        if(answer == "Yes!") {
        console.log("You are tough!"); 
        }
    ```
- The issue is that the `if` condition is checking `answer == "Yes!"` but the `answer` variable is initialized to the string `"Maybe"`.
- So the `if` condition will evaluate to false and the code inside the `if` block will not execute.
- To fix this, the `answer` variable should be set to `"Yes!"` to match the condition:
    ``` The corrected js CODE:.......................................
            console.log("Do you enjoy learning?");
            let answer = "Yes!"; // Fixed
            if(answer == "Yes!") {
            console.log("You are tough!");
            }
    - Now the `if` condition will evaluate to true and "You are tough!" will be logged.
    - So in summary, the issue was a mismatch between the `if` condition and the actual `answer` value. 
    Setting them both to `"Yes!"` fixes it.

..]]]]]]]]]]]]]]]]..Fill in the blanks to create a valid if statement. ..]]]]]]]]]]]]]]]
CODE:
    let score = 95;
    if(score > 90){
        console.log('Level completed!');
    }

..]]]]]]]]]]]]]]]]..A simple personalized congratulations program using IF STATEMENT..]]]]]]]]]]]]]]]
The if Statement
- Here is an example of how we can create a simple personalized congratulations program using an if statement and a template literal:
    CODE PLAYGROUND: JS
        let player = 'John';
        let points = 144;
        let minPoints = 100;

        if(points>=minPoints){
            console.log(`Well done, ${player}!`);
        }
    Click to run
- Remember when you started this course? This code would have looked like hieroglyphics to you. Now you understand it at a glance. Awesome job!

..]]]]]]]]]]]]]]]]..Nesting if STATEMENTS inside another ..]]]]]]]]]]]]]]]
The if Statements
- Sometimes we’ll have to perform more complex checks. But that’s no problem because if statements can be nested, one inside the other.
- For example:
CODE PLAYGROUND: JS
    let num = 12;

    if(num > 5){
    console.log('Bigger than 5');
    if(num < 47){
        console.log('Between 5 and 47');
    }
    }
Click to run
- In the case of nesting, the second if statement will be performed only if the condition of the first one is evaluated as true.

..]]]]]]]]]]]]]]]].. ..]]]]]]]]]]]]]]]
What's the output of this code?
    let num = 4;
    if(num > 5){
    console.log("Bigger than 5");
    if(num<7){
        console.log("Smaller than 7");
    }
    }
JS
Smaller than 7
Bigger than 5
nothing ======
EXPLANATION: 
        In this code, there will be no output.
        Here is the explanation:
        CODE: 
        let num = 4;
        if(num > 5){
        // This condition is false because 4 is not greater than 5
        console.log("Bigger than 5"); 
        if(num<7){
            // This code is unreachable since outer if statement failed
            console.log("Smaller than 7");  
        }
        }
        ``        The key points:
        - `num` is initialized to 4
        - The outer `if` checks if `num > 5`. This evaluates to `false` since 4 is not greater than 5.
        - Since the outer `if` fails, the code inside that block does not execute
        - Therefore, `"Bigger than 5"` is never logged
        - Also the inner `if` statement is never reached
        - So there is no output from this code

    Since none of the `console.log` statements are ever executed, there is no output printed when this code runs.

..]]]]]]]]]]]]]]]]..Lesson Takeaways ..]]]]]]]]]]]]]]]
- You are doing great! Let's summarize what you've just learned:
    💡you can let your program make decisions using if statements
    💡the code inside of the if statement will be performed only if the condition is evaluated as true
    💡if statements can be nested, one inside the other
- So, you can shape the flow of your program now, and that's just great! 
Practice it in your next Code Coach exercise.

Take your kindle!
Airlines have a special promo for teenagers. Write a program to distribute kindles.
XP
+5
Practice

..]]]]]]]]]]]]]]]].. ..]]]]]]]]]]]]]]]
..]]]]]]]]]]]]]]]].. ..]]]]]]]]]]]]]]]
..]]]]]]]]]]]]]]]].. ..]]]]]]]]]]]]]]]
..]]]]]]]]]]]]]]]].. ..]]]]]]]]]]]]]]]
..]]]]]]]]]]]]]]]].. ..]]]]]]]]]]]]]]]
..]]]]]]]]]]]]]]]].. ..]]]]]]]]]]]]]]]
..]]]]]]]]]]]]]]]].. ..]]]]]]]]]]]]]]]
..]]]]]]]]]]]]]]]].. ..]]]]]]]]]]]]]]]
..]]]]]]]]]]]]]]]].. ..]]]]]]]]]]]]]]]
...]]]]]]]]]]]]]]]].. ..]]]]]]]]]]]]]]]
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