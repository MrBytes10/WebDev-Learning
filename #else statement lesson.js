
..]]]]]]]]]]]]]]]].. ..]]]]]]]]]]]]]]]
..]]]]]]]]]]]]]]]]..else statement ..]]]]]]]]]]]]]]]
else statement
- Let's imagine you are developing a game where the level is considered completed if the player has collected 100 points. You can already output the congratulations message with the if statement, and that's great! But what about the loss case? How to show a message when the player didn't get enough points (the condition is false)? The else statement will help you out here!
- How? Look at this code:
    CODE:
        let score = 98;

        if(score >=100){
        console.log("Level Completed!");
        } else {
        console.log("Try again!");
        }
Click to run
- The code inside the else statement will be executed only if the condition is false.

..]]]]]]]]]]]]]]]]..   QUESTION-- ..]]]]]]]]]]]]]]]
- The code inside the else statement will be executed only if the condition is
    true
    false

..]]]]]]]]]]]]]]]]..The piece of code inside the else statement is enclosed in curly braces {}..]]]]]]]]]]]]]]]
else statement 
- As with the if statement, the piece of code inside the else statement is enclosed in curly braces {}:
- CODE PLAYGROUND: JS
    else{
    console.log("Try again!");
    }
Click to run
- The else statement doesn't have its own condition - it just checks the condition of the if statement and
 performs a specific action if it's false.

..]]]]]]]]]]]]]]]]..QUIZ:-What is the output of this code? ..]]]]]]]]]]]]]]]
CODE:
    let number = -5;
    if(number >=0){
    console.log("Positive number");
    } 
    else {
    console.log("Negative number");
    }
JS
nothing
Negative number=====
Positive number

..]]]]]]]]]]]]]]]]..else if statement..]]]]]]]]]]]]]]]
else if statement
- There will be times when you want to test multiple conditions. That is where the else if block comes in. It's written between if and else statements.
- For example:
    CODE PLAYGROUND: JS
        let time = 15;
        if (time < 10) {
        console.log("Good morning");
        } 
        else if (time < 20) {
        console.log("Good day");
        } 
        else {
        console.log("Good evening");
        }

NOTE: The program will move to the else if statement when the condition of the if statement is false. 
If its condition is also false, then the program will move to the else block.

..]]]]]]]]]]]]]]]]..QUIZ: What is the output of this code? ..]]]]]]]]]]]]]]]
    CODE:
        let purchase = 2300;
        if(purchase > 3000){
        console.log('Discount: 20%');
        } else if (purchase > 2000){
        console.log('Discount: 10%');
        } else {
        console.log('No discount');
        }
    answers:
        Discount: 20%
        Discount: 10% =============
        No discount

..]]]]]]]]]]]]]]]]..With the help of the else if statements you can use as many conditions as you need:..]]]]]]]]]]]]]]]
else if statement
- With the help of the else if statements you can use as many conditions as you need:

    CODE  js:
            let stopLight = 'green';
            if (stopLight == 'red') {
            console.log('Stop!');
            } else if (stopLight == 'yellow') {
            console.log('Slow down.');
            } else if (stopLight == 'green') {
            console.log('Go!');
            } else {
            console.log('Unknown!');
            }
    Click to run

..]]]]]]]]]]]]]]]]..QUIZ: Fill in the blanks to create valid code that checks the sign of the num variable: ..]]]]]]]]]]]]]]]
- Fill in the blanks to create valid code that checks the sign of the num variable:
       CODE: 
        let num = 42;
        if (num <0){
        console.log('Negative');
        }
        else if (num > 0){
        console.log('Positive');
        }
        else {console.log('Zero');
        }

...]]]]]]]]]]]]]]]].. Lesson Takeaways..]]]]]]]]]]]]]]]
        Lesson Takeaways
    - You've taken another giant step forward, great job!
    - Let's summarize what you've just learned:
        💡the else statement allows you to control the cases when the condition in the if statement is false
        💡you can use else if statements to handle multiple conditions
    - What's next?
    - In the next lesson, you will learn to control your program with switch statements!
    Organized Robot
    - Let's create a program used in a robot that categorizes items by their color.
    Practice

..]]]]]]]]]]]]]]]]..PRACTICE ANSWER ..]]]]]]]]]]]]]]]
        - Here is code to create an "Organized Robot" program that categorizes items by color:
        // List of colors
        const colors = ['red', 'green', 'blue', 'yellow', 'white', 'black'];

        // Inventory bins for each color
        const bins = {
        red: [],
        green: [], 
        blue: [],
        yellow: [],
        white: [],
        black: []   
        };

        // Function to categorize an item  
        function categorizeItem(item, color) {
        // Check if valid color
        if(colors.includes(color)) {
            // Add item to bin  
            bins[color].push(item);
        } else {
            // Invalid color
            console.log("Invalid color");
        }
        }

        // Example items
        const ball = "Ball";
        const book = "Book";
        const shirt = "Shirt";

        // Categorize 
        categorizeItem(ball, "red"); 
        categorizeItem(book, "blue");
        categorizeItem(shirt, "green");

        // Print inventory
        for(let color in bins) {
        console.log(color + ": " + bins[color]);  
        }

- This first defines the valid colors and inventory bins. The categorizeItem() function checks the color, 
then adds the item to the correct bin. Finally, some examples are shown categorizing items, and printing 
the inventory.
- Let me know if you have any other questions!

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