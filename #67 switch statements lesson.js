..]]]]]]]]]]]]]]]].. ..]]]]]]]]]]]]]]]

..]]]]]]]]]]]]]]]]..switch statement..]]]]]]]]]]]]]]]
- Let's suppose you are creating a social media application, and you need to develop a menu where the user can choose the topic he is interested in marked by corresponding numbers.
- Let's see the switch statement in action here:
-    CODE PLAYGROUND: JS
            let choice = 1;
            switch(choice){
            case 1://match!
                console.log("Sports");
                break;
            case 2:
                console.log("Business");
                break;
            case 3:
                console.log("Technology");
                break;
            }
    Click to run
- The switch expression is evaluated once. The value of the expression is compared with the values of each case,
 and if there’s a match, that block of code is executed.
- You can achieve the same result with multiple if else statements, but the switch statement is more effective
 in such situations and makes the code more readable.


..]]]]]]]]]]]]]]]]..The switch statement can be used to replace..]]]]]]]]]]]]]]]
    choices: 
        variable declarations
        multiple if else statements ===========
        comments

..]]]]]]]]]]]]]]]]..The break statement..]]]]]]]]]]]]]]]
- Imagine you have 10 boxes and there is a ball in one of them. If you find it in the 5th box, 
you don't need to check the other 5 boxes, right? After getting the ball you will just stop searching because
you've already gotten what you need.
- The break statement does the same thing in the switch statement. It stops the execution of other cases when there is a match and the program just goes out from the switch statement.
    CODE PLAYGROUND: JS
            let choice = 2;
            switch(choice){
            case 1:
                console.log("Sports");
                break;
            case 2://match
                console.log("Business");
                break;//stop
            case 3:
                console.log("Technology");
                break;
            }
    Click to run

..]]]]]]]]]]]]]]]]..QUIZ:-Fill in the blanks to create a valid switch statement. ..]]]]]]]]]]]]]]]
    The Answer code:
        let num = 0;
        switch (num) {
        case 1:
            console.log('One');
            break;
        case 0:
            console.log("Zero");
            break;
        }

..]]]]]]]]]]]]]]]]..The default keyword..]]]]]]]]]]]]]]]
- Often there will be no match, but we still need the program to do some action. For this, we use the default keyword, which specifies the code to run if there’s no case match.
- Like this:
    CODE JS:
        let color ="yellow";
        switch(color) {
        case "blue": 
            console.log("This is blue.");
            break;
        case "red": 
            console.log("This is red.");
            break;
        default: 
            console.log("Color not found.");
        }
Click to run
- The default block can be omitted if there is no need to handle the case when no match is found.

..]]]]]]]]]]]]]]]]..The default statement is executed..]]]]]]]]]]]]]]]
    CHOICES:
        Because it is obligatory
        To finish the "case" statement
        When no match is found ===========

..]]]]]]]]]]]]]]]]..Lesson Takeaways..]]]]]]]]]]]]]]]
- Lesson Takeaways
- Awesome, you learned something new! 🚀
- Let's summarize what you've just learned:
        💡The switch statement is used to perform different actions based on different conditions
        💡in some cases, especially when you need to compare values of an expression, the switch statement makes
         the code more readable
        💡use the break statement inside each case to stop the execution of other cases when there is a match
        💡the default keyword is used to perform an action when there is no match
- What's next?
- In the next lesson, you will learn how to create a conditional statement in just one line - a ternary operator!
PRACTICE CODE:
Making Coffee
Create a program for a coffee vending machine, which makes 3 types of coffee.
Practice

..]]]]]]]]]]]]]]]]..Answer for the practice:  ..]]]]]]]]]]]]]]]
- Here is JavaScript code for a coffee vending machine program using a switch statement based on your 
lesson takeaways:
Answer for the practice: 
        // Coffee types 
        const ESPRESSO = 1; 
        const LATTE = 2;
        const AMERICANO = 3;
        // Get coffee type selection
        let selectedCoffee = LATTE;
        // Make coffee
        switch(selectedCoffee) {
        case ESPRESSO: 
            console.log("Making espresso... ☕");
            break;
        case LATTE:
            console.log("Making latte... 🥛☕"); 
            break;
        case AMERICANO:
            console.log("Making americano... ☕");
            break;
        default:
            console.log("Invalid selection. Please try again.");
        }
The output is // Output: Making latte... 🥛☕
- This checks the `selectedCoffee` variable against various cases using the switch statement. Inside each case, it logs making the specific type of coffee. The default case handles invalid selections.
- Let me know if you need any clarification or have additional requirements for the coffee machine code!

..]]]]]]]]]]]]]]]].. ..]]]]]]]]]]]]]]]
..]]]]]]]]]]]]]]]].. ..]]]]]]]]]]]]]]]
..]]]]]]]]]]]]]]]].. ..]]]]]]]]]]]]]]]
..]]]]]]]]]]]]]]]].. ..]]]]]]]]]]]]]]]
..]]]]]]]]]]]]]]]].. ..]]]]]]]]]]]]]]]
..]]]]]]]]]]]]]]]].. ..]]]]]]]]]]]]]]]
..]]]]]]]]]]]]]]]].. ..]]]]]]]]]]]]]]]