..]]]]]]]]]]]]]]]].. ..]]]]]]]]]]]]]]]
..]]]]]]]]]]]]]]]]..Ternary operator..]]]]]]]]]]]]]]]
- Conditional, or ternary, operators assign a value to a variable, based on some condition.
- This is what the syntax would look like:
    CODE: 
        variable = (condition) ? value1: value2
- It takes three operands: a condition followed by a question mark ?, then an expression to execute if
 the condition is true followed by a colon :, and finally, the expression to execute if the condition is false.
- This operator is frequently used as an alternative to an if else statement.

..]]]]]]]]]]]]]]]]..QUIZ:- Ternary operators can be used as an alternative to..]]]]]]]]]]]]]]]
    CHOICES: 
        arithmetic operators
        template literals
        if else statements ========

..]]]]]]]]]]]]]]]]..Ternary operator EXAMPLE..]]]]]]]]]]]]]]]
- Here is an example of a ternary operator:
    - CODE JS:
        let age = 42;
        let isAdult = (age < 18) ? "Too young": "Old enough";
        console.log(isAdult);
    Click to run, and the answer is "Old enough"
    EXPLANATION:- 
        /*
        - The output will be:Old enough
        - Here is the explanation:
            - `age` is initialized to `42`
            - `isAdult` is assigned a ternary operator
            - The ternary checks if `age < 18`. Since 42 is not less than 18, this evaluates to `false`.
            - If the condition was `true`, the ternary would assign the string `"Too young"`
            - Since the condition is `false`, the ternary assigns the string `"Old enough"`
            - This `isAdult` variable gets logged out
        - So because 42 is greater than 18, the `"Old enough"` string gets assigned and output.
        - The key thing to understand is the ternary operator assigns one value if the condition is true, and another if false. In this case the age check determines which string gets put into `isAdult`.
        - The ternary operator is much shorter than the if else.
        */

..]]]]]]]]]]]]]]]]..QUIZ:-What will be the output of this code?..]]]]]]]]]]]]]]]
    CODE:
        let num = 2;
        let isZero = (num == 0) ? "Zero": "Not zero";
        console.log(isZero);
    JS ANSWERS:
        Zero
        Not zero =========

..]]]]]]]]]]]]]]]]..Ternary operator DISCOUNT EXAMPLE..]]]]]]]]]]]]]]]
- Remember the discount example? If the total amount is equal to or above 1500 it will be discounted by 15%.
- Let's calculate and show the discounted bill to your customers using the ternary operator:
    CODE PLAYGROUND: JS
            let bill = 1800;
            bill = (bill >= 1500) ? bill * 0.85 : bill;
            console.log(bill);
    Click to run, and the answer is 1800*0.85=1530
    /*
        The output will be: 1530
        Here is the explanation:
        - `bill` is initialized to `1800`
        - The ternary operator checks if `bill >= 1500`
        - Since 1800 is greater than 1500, this evaluates to true
        - If true, it will assign `bill * 0.85` to `bill`
        - This is applying a 15% discount (taking 85% of the value)
        - If false, it just assigns `bill` (no discount)
        - So `bill` gets reassigned to `1800 * 0.85 = 1530` 
        - 1530 gets logged out

        In summary:
        - The ternary checked if bill was eligible for discount 
        - The condition was true, so the 15% off calculation was applied
        - Updated bill value was assigned back and logged
        So the output is the discounted bill amount.
    */
- The same example with the if else statements would require many more lines of code.
- An example of the same bill using the if else statement:- 
// Here is the code rewritten using if/else statements instead of the ternary operator:

js code:-
        let bill = 1800;
        if(bill >= 1500) {
        // Apply 15% discount if bill is >= $1500
        bill = bill * 0.85; 
        } 
        else {
        // No discount
        bill = bill;
        }
        console.log(bill);
    /*
        Breaking it down:
        - Initialize bill as 1800
        - Use if/else conditional instead of ternary
        - Check if bill meets the discount threshold
        - If so, calculate the 15% discount and update bill
        - Else, reassign bill to itself (no change)
        - Log out final bill value
        - So this implements the same logic - applying a 15% discount if bill is over $1500. 
        - But it uses standard if/else syntax instead of the ternary shortcut.
    */

..]]]]]]]]]]]]]]]]..QUIZ:- Fill in the blanks to create a valid ternary operator. ..]]]]]]]]]]]]]]]
    JS CODE: 
        let num = 14;
        let res = (num%2==0) ? "even" : "odd";
        console.log(res);

..]]]]]]]]]]]]]]]]..Lesson Takeaways ..]]]]]]]]]]]]]]]
Lesson Takeaways
- The ternary operator is in your coding arsenal now! 🚀
- Let's summarize the lesson:
        💡you can use ternary operators as an alternative to if else statements
        💡they have 3 operands: the condition, and 2 values, one of which will be assigned to the variable based on that condition
        💡ternary operators make the code much shorter
- What's next?
In the next lesson, you will learn another important concept - loops. Keep going!
Practice with this:
    Noon Or Midnight
    Given a clock that measures 24 hours in a day, write a program that takes the hour as input.

    Practice
..]]]]]]]]]]]]]]]]..ANSWER FOR THE PRACTICE..]]]]]]]]]]]]]]]
= Here is code to check if an input hour is noon or midnight using a ternary operator based on the lesson takeaways:
        // Get hour input 
        const hour = 12;
        // Check if noon or midnight
        const timeOfDay = (hour == 12) ? "Noon" : "Midnight";
        console.log(timeOfDay);
        // If hour is 12, assign "Noon", otherwise assign "Midnight"
        // Output:
        // Noon
EXPLANATION:
    Breaking down the code:
    - Get the input hour 
    - Use a ternary to check if equal to 12
    - If so, assign "Noon"
    - If not, assign "Midnight"
    - Logs out string that was assigned
    - This provides a clean shorthand way to check if noon or midnight based on the hour using a ternary instead of an if/else statement.


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