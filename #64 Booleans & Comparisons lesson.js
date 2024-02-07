..]]]]]]]]]]]]]]]].. ..]]]]]]]]]]]]]]]

..]]]]]]]]]]]]]]]]..Booleans..]]]]]]]]]]]]]]]
- Do you remember the Boolean data type? Let's quickly recap what they are and then see them in action.
- The Boolean data types can only take the values true or false.
    Js CODE:
        let isActive = true;
        let isHoliday = false;
    Click to run

..]]]]]]]]]]]]]]]].. ..]]]]]]]]]]]]]]]
Comparison Operators
- Imagine that you are creating a game, and that your code should check if the player's score is above 99. Technically speaking, you need to evaluate whether the expression is true or false.
- Let's check it out:
    CODE PLAYGROUND: JS
        let score = 85;
        console.log(score>99);
    Click to run, and the output is; false
        /*
        Here is the explanation:
    - score variable is declared and initialized to 85
    - The console.log statement prints out the result of evaluating the expression score > 99
    - This is comparing if score is greater than 99. Since score is 85, this expression evaluates to false.
    - So the code prints out false which is the boolean result of comparing 85 > 99. This evaluates to false since 85 is not greater than 99.
        */
- The > is a comparison operator, which compares the values and results in corresponding Boolean values 
    ... either true or false. So, in our case the result is false (or numerical 0).

...]]]]]]]]]]]]]]]].. ..]]]]]]]]]]]]]]]
QUIZ: What is the output of this code?
    CODE: 
        let price = 150;
        console.log(price > 120);
    JS ANSWERS:
        error
        true =======
        false

..]]]]]]]]]]]]]]]].. ..]]]]]]]]]]]]]]]
- Js Comparison Operators
- JavaScript has a number of comparison operators:
    equal to ==
    not equal to !=
    greater than >
    smaller than <
    greater or equal to >=
    smaller or equal to <=

    Js CODE:....................
    let x = 7;
        console.log(x == 7) //true
        console.log(x!=8) //true
        console.log(x > 10) //false
        console.log(x < 2) //false
        console.log(x >= 7) //true
        console.log(x <= 7) //true
        Click to run

..]]]]]]]]]]]]]]]].. ..]]]]]]]]]]]]]]]
Strict equality === Comparison Operator:
- Strict equality === comparison operator returns false for the values which are not of a similar type.
- For example:
    CODE PLAYGROUND: JS
        let x = 5;
        let y = '5';
        console.log(x == y); //true
        console.log(x === y); //false
    Click to run
- In the example above, x and y have equal values, but different types: x is a number, and y is a string. 
 That's why == returns true, while the strict equality operators === returns false.

..]]]]]]]]]]]]]]]].. ..]]]]]]]]]]]]]]]
QUIZ: What is the output of this code?
     CODE:
        let x = 15;
        let y = '15';
        console.log(x===y);
    JS CHOICES:
        true
        false

..]]]]]]]]]]]]]]]].. ..]]]]]]]]]]]]]]]
Booleans
Greater than and smaller than operators can also be used to compare strings lexicographically (where the alphabetical order of words is based on the alphabetical order of their component letters). 

For example:
    Js CODE:
        console.log('a' < 'b');
        console.log("Bob" > "Dave");
    Click to run, and the output is: 
            true
            false
    /* 
    The output of this JavaScript code will be:
true
false

Let's analyze this:
---The first statement:
js Copy code
console.log('a' < 'b');
= Compares the strings 'a' and 'b' using the less than < operator. In JavaScript, strings are compared 
lexicographically (alphabetically) based on the Unicode value of each character. Since 'a' has a lower Unicode 
value than 'b', this statement evaluates to true.
---The second statement:
js Copy code
console.log("Bob" > "Dave");
= Compares the strings "Bob" and "Dave" using the greater than > operator. Here, 
"Bob" does not come after "Dave" alphabetically, so this expression evaluates to false.

Therefore, the output is:
Copy code
true 
false
So in JavaScript, you can compare strings lexicographically using comparison operators like < and >. 
This compares strings character-by-character based on Unicode values.
Copy
Retry
    */

..]]]]]]]]]]]]]]]].. ..]]]]]]]]]]]]]]]
What is the output of this code?
    JS code:
        console.log('b'<'d');
    answer:
        false
        true =====

..]]]]]]]]]]]]]]]].. ..]]]]]]]]]]]]]]]
Lesson Takeaways:
- Let's summarize what you've just learned:
        💡comparison operators are used for evaluating whether an expression is true or false
        💡that expression results in a Boolean data type with values of either true or false
        💡the strict equality === comparison operator returns false for the values which are not of a similar type
        💡you can compare strings with comparison operators as well

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