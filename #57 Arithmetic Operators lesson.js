
..]]]]]]]]]]]]]]]].. ..]]]]]]]]]]]]]]]

..]]]]]]]]]]]]]]]]..Mathematical Operations ..]]]]]]]]]]]]]]]
- You are doing great!
- Let's quickly recall some simple mathematical operations from previous lessons before learning new stuff:
    CODE PLAYGROUND: JS
        let x = 8;
        let y = 3;
        console.log(x+y);//addition
        console.log(x-y);//subtraction
        console.log(x*y);//multiplication
        console.log(x/y);//division
    Click to run

..]]]]]]]]]]]]]]]]..What is the output of this code: ..]]]]]]]]]]]]]]]
    CODE: 
        let x = 5;
        x = 8;
        console.log(x+1);
    CHOICE: 
        5
        9 =======
        6

..]]]]]]]]]]]]]]]]..Exponentiation ..]]]]]]]]]]]]]]]
- Two asterisks ** are used to raise a number to the power of another, which is called exponentiation.
For example:
    JS CODE:
        let x = 2;
        let y = 5
        console.log(x**y);
    Click to run, WHICH WILL GIVE YOU OUTPUT OF : 32 

..]]]]]]]]]]]]]]]]..Fill in the blank to output 5 raised to the 3rd power. ..]]]]]]]]]]]]]]]
    ANSWER: console.log(5**3);

..]]]]]]]]]]]]]]]]..You can also use decimals in exponentiation. ..]]]]]]]]]]]]]]]
- Check it out. The following code will result in the square root (√) of 9:
    CODE PLAYGROUND: JS
        let x = 9;
        let y = 1/2;
        console.log(x**y);
    Click to run, WHICH WILL GIVE YOU : 3 -//the squareroot of 9

..]]]]]]]]]]]]]]]]..Squareroot Quiz ..]]]]]]]]]]]]]]]
- Drag and drop to calculate and output the square root of variable x:
    ANSWER: 
        x = 4;
        let y =1/2;
        console.log(x**y)

..]]]]]]]]]]]]]]]]..Calculating thr Remainder in Js ..]]]]]]]]]]]]]]]
- Let's imagine you want to equally distribute 100 balls in boxes. Each box contains only 3 balls. How many balls will be left over?
- In other words, we need to calculate the remainder of 100 divided by 3, which is done using the modulo operator %.
- So, let's find out the answer:
    CODE PLAYGROUND: JS
        let balls = 100;
        let boxes = 3;

        console.log(balls % boxes);
    Click to run, which gives you output as: 1 //only what remains
- If the boxes could contain 5 balls, all the 100 will be equally distributed in 20 boxes, and the remainder would be 0.

..]]]]]]]]]]]]]]]]..Increment in js ..]]]]]]]]]]]]]]]
- Sometimes we need to repeatedly add 1 to a variable.
- For example, when counting attempts in a game, or the number of clicks on a web page.
- This can be done using the increment (++) operator:
    CODE PLAYGROUND: JS
        let count = 0;
        count++;
        console.log(count);
    Click to run
- Basically, count++ is a shorthand for count = count+1.

..]]]]]]]]]]]]]]]]..Incrementing a value using the ++ operator ..]]]]]]]]]]]]]]]
CHOICES:
    does not change it
    adds 1 to it ========
    subtracts 1 from it
    assign 1 to it

..]]]]]]]]]]]]]]]]..Decrement in js ..]]]]]]]]]]]]]]]
- Similarly, the decrement (--) operator can be used to subtract 1 from a variable:
    CODE PLAYGROUND: JS
        let score = 100;
        score--;
        score--;
        console.log(score);
    Click to run, which will give you 98, //due to 2 decrements..
- Remember that these operations can only be applied to variables, and applying this operation to numerical 
values will return an error.

..]]]]]]]]]]]]]]]].. quiz: What is the output of this code?..]]]]]]]]]]]]]]]
  CODE:
    let attempts = 10;
    attempts--;
    attempts++;
    console.log(attempts);
CHOICES:
    9
    11
    10======

..]]]]]]]]]]]]]]]]..Postfix and Prefix ..]]]]]]]]]]]]]]]
- The ++ or -- can be applied both before and after the variable. This is where it gets a bit tricky. Let's figure this out!
        ..]]]]]]]]]]]]]]]]..Postfix: ..]]]]]]]]]]]]]]]
- The postfix form returns the original value of the variable, and only then increments/decrements it.
    CODE PLAYGROUND: JS
        let x = 5;
        console.log(x++);//5
        console.log(x);//6
    Click to run
- In the example above, the original value will be outputted, and then will be incremented.

..]]]]]]]]]]]]]]]]..What is the output of this code? ..]]]]]]]]]]]]]]]
CODE:
    let x = 10;
    console.log(x--);
CHOICES:
    9
    8
    10======

..]]]]]]]]]]]]]]]]..The Prefix format..]]]]]]]]]]]]]]]
- The prefix form increments/decrements the value, and only then returns it.
    CODE PLAYGROUND: JS
        let x = 5;
        console.log(++x);//6
    Click to run
- In this case, the incremented value will be outputted.

..]]]]]]]]]]]]]]]]..What is the output of this code? ..]]]]]]]]]]]]]]]
    CODE:
        let x = 10;
        console.log(--x);
    ANSWER:
        9

..]]]]]]]]]]]]]]]]..Lesson Takeaways ..]]]]]]]]]]]]]]]
- Fantastic job! 🚀 Now you can complete many arithmetic operations, and that's really cool!
Here is a quick summary:
    💡two asterisks ** are used for exponentiation
    💡modulo operator % is used to calculate the remainder of a division
    💡you can use ++/-- operators to increment/decrement the value of a variable
    💡increment and decrement operators can be used only with variables
- What's next?
- In the next lesson, you will learn about another type of operator in JavaScript - assignment operators. 
Surprise!
- Calculate and output how many items will be left over once you create gift boxes.
XP
+5
Practice

..]]]]]]]]]]]]]]]].. START OF PRACTICE..]]]]]]]]]]]]]]]
    Problem
    Gift Boxes
    You are making gift boxes. Each box contains 7 items.

    Given 200 items in total, you need to calculate and output how many items will be left over if you create gift boxes from all of the items.

    The modulo operator % can be useful in solving this challenge.
    
    CODE:..........................................
        let items = 200;
        //your code goes here
        let box = 7;
        console.log(items%box);

..]]]]]]]]]]]]]]]].. END OF PRACTICE..]]]]]]]]]]]]]]]

MOOOOOOOOOOOORE practice:
- Select the symbol that we use for multiplication in JavaScript:
asterisk * ============
quote " "
slash /
hashtag #

- Drag and drop to calculate and output in the console the sum of 3 and 10.
ANSWER: console.log(3+10);

- Select the symbol that we use to raise a number to a power in JavaScript.
    asterisk *
    two asterisks ** ============
    increment ++
    modulo operator %

- Drag and drop to output 11.
CODE:
    let count = 10;
    console.log(++count);

- Fill in the blanks to create a message variable and assign text to it.
    CODE:
        let message;
        message = "Keep going!";

- Fill in the blanks to calculate the remainder of x divided by 2.
    let x = 15;
    console.log(x% 2);

= Rearrange the code to output 15 to the console and then 16.
CODE ANSWER:
    let x=15;
    console.log(x++);
    console.log(x);

= What is the output of this code?
    CODE:
    let x = 20;
    console.log(x--);
 ANSWER:
    20

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
