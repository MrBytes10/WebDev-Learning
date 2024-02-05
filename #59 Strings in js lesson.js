..]]]]]]]]]]]]]]]].. ..]]]]]]]]]]]]]]]

..]]]]]]]]]]]]]]]]..Strings ..]]]]]]]]]]]]]]]
- We met strings in the previous lessons, but now it’s time to get better acquainted.
- Remember, we can create a string by entering text between two single or double quotation marks.
- Like this:
    js CODE:
        let msg = "Hey!";
        let msg2 = 'Keep it up!';
        
        console.log(msg);
        console.log(msg2);
    Click to run, and the output will be:
        Hey! 
        Keep it up! 

..]]]]]]]]]]..You can use quotes inside the strings, 
            just make sure that they are different from the enclosing ones. ..]]]]]]]]]]]]]]]
- For example:
Js CODE:
    console.log("I'm happy!");
    console.log('She said "Yes!"');
Click to run, and the output should be: 
        I'm happy! 
        She said "Yes!" 

..]]]]]]]]]]]]]]]]..QUIZ: Fill in the blanks to output text with a single quotation mark...]]]]]]]]]]]]]]]
ANSWER: 
    console.log("That's easy");

..]]]]]]]]]]]]]]]]..Escape Character ..]]]]]]]]]]]]]]]
- In JavaScript, the backslash \ is a special character, called the escape character.
- It is used to represent certain things in a string, such as new lines, tabs, and other useful things.
- Don't confuse it with the division operator /.

..]]]]]]]]]]]]]]]]..QUIZ: Which of the following is the escape character? ..]]]]]]]]]]]]]]]
CHOICES:
    {
    %
    /
    \ =========

..]]]]]]]]]]]]]]]]..Escape a quotre using a backslash [\] ..]]]]]]]]]]]]]]]
- If you want to include a quote in a string, you need to escape it using a backslash. In this case, you don't need to use different enclosing quotes.
For example:
    CODE PLAYGROUND: JS
        console.log('I'm happy');//error
        console.log('I\'m happy');
        console.log("She said \"Yes!\"");
    Click to run, and the output should be: 
            I'm happy 
            She said "Yes!" 

..]]]]]]]]]]]]]]]]..Complete the code to output a string containing a single quote. ..]]]]]]]]]]]]]]]
ANSWER CODE: 
    console.log('Don\'t give up!');

..]]]]]]]]]]]]]]]]..Creating a Newline in js ..]]]]]]]]]]]]]]]
- The backslash is also used to create new lines in text.
- To create a new line we use \n.
- For example:
    Js CODE:
        console.log("One \nTwo \nThree");
    Click to run, and the answer should be: 
        One 
        Two
        Three 

..]]]]]]]]]]]]]]]]..Which of the following options results in exactly two lines? ..]]]]]]]]]]]]]]]
CHOICES:
    "1 2 3"
    "Title \nDescription" ========
    "One \nTwo \nThree"

..]]]]]]]]]]]]]]]]..Creating a new Tab in js..]]]]]]]]]]]]]]]
Tab
- Similar to a new line, we can create a tab using \t:
    CODE PLAYGROUND: JS
        console.log("\t hey \t there");
    Click to run, and the result should be: 
    	 hey 	 there 

..]]]]]]]]]]]]]]]]..Which is the tab symbol? ..]]]]]]]]]]]]]]]
    CHOICES:
        \b
        \tab
        \n
        \t ==============

..]]]]]]]]]]]]]]]]..Lesson Takeaways ..]]]]]]]]]]]]]]]
                You rock! 🚀

        - Let's summarize what you've just learned:

                💡you can include a quote in a string if it's different from the ones that enclose it

                💡as an alternative, you can escape it using the backslash

                💡you can use \n for a new line and \t for a tab

        What's next?
        Is it possible to use a variable inside a string? Here come template literals with tons of new opportunities for working with strings.

      .............
            Output The String
            Fix the given code to generate the expected output.
                   Practice
..]]]]]]]]]]]]]]]]..PRACTICE ..]]]]]]]]]]]]]]]

..]]]]]]]]]]]]]]]].. STAR OF  PRACTICE..]]]]]]]]]]]]]]]
Strings
- You are given code that should output a string with quotes.
- However, it contains errors.
-#### Task
- Fix the given code to generate the expected output.
- Remember, you need to escape the quotes in the strings to fix the errors in the code. 
CODE: 
    //fix the code
    console.log('I\'m learning JavaScript. It\'s easy');

            Results:
                    Test Case 1
                    Input
                    No Input

                    Your Output
                    I'm learning JavaScript. It's easy
                    Expected Output
                    I'm learning JavaScript. It's easy

..]]]]]]]]]]]]]]]].. MOOOOOOOOOOOOOOOOOOOOORE: ..]]]]]]]]]]]]]]]
         - What is the output of this code?
        CODE:
        x = 10
        x += 5
        print(x)
        JS choices:
            10
            5
            15 ========

        - What do we use to create a new line:
        CHOICES:
                \t
                /*....*/
                //....
                \n ======

        -Drag and drop to create shorter version of this code:
                let x = 2;
                x = x+2;
                ANSWER: X+=2
        
        - Drag and drop to create variables of height and width on the same line.
            Answer: let heigh= 150, width = 200;

        - Fill in the blanks to output You're doing amazing to the console:
            ANSWER: console.log("You're doing amazing");
            
        - Type the symbol that we use for escaping.
            ANSWER: \

..]]]]]]]]]]]]]]]].. ..]]]]]]]]]]]]]]]
..]]]]]]]]]]]]]]]].. ..]]]]]]]]]]]]]]]
..]]]]]]]]]]]]]]]].. ..]]]]]]]]]]]]]]]
..]]]]]]]]]]]]]]]].. ..]]]]]]]]]]]]]]]

