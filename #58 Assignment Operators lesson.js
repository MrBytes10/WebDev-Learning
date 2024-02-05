
..]]]]]]]]]]]]]]]].. ..]]]]]]]]]]]]]]]

..]]]]]]]]]]]]]]]]..Assignment Operators ..]]]]]]]]]]]]]]]
- Assignment operators assign values to variables.
- You already know one of them: when initializing a variable we use the = assignment operator to assign a value to it:
JS CODE: 
    let num = 5;

..]]]]]]]]]]]]]]]]..Which one is an assignment operator?..]]]]]]]]]]]]]]]
CHOICES: 
    **
    -
    = is the answer.

..]]]]]]]]]]]]]]]]..You can create different variables on the same line, separating them with commas:..]]]]]]]]]]]]]]]
- It's time for some syntax sugar! JavaScript has lots of it.
- You can create different variables on the same line, separating them with commas:
    JS CODE:
        let x = 5, y = 6, z = 8;

        console.log(x);
        console.log(y);
        console.log(z);
    Click to run

..]]]]]]]]]]]]]]]]..QUIZ:Fill in the blanks to create x, y, and z variables. ..]]]]]]]]]]]]]]]
ANSWER:
    let x = "this", y="is", z = "handy";

..]]]]]]]]]]]]]]]]..IMAGINE OF A COIN-COLLECTOR-GAME ..]]]]]]]]]]]]]]]
-Let's imagine you are creating a coin collector game. The game starts with a score of 100, and when the player collects a coin the score increases by 10.
- In this case, you will write this code:
    JS CODE:
        let score = 100;
        score = score+10;
- But there is an easier way to do this. Keep going to see it!

..]]]]]]]]]]]]]]]]..addition assignment operator. ..]]]]]]]]]]]]]]]
- JavaScript lets you write the code score = score + 10 more concisely, using the += operator.
Check it out:
        JS CODE:
            let score = 100;
            score+=10;
            console.log(score);
    Click to run
- This operator is called addition assignment operator.

..]]]]]]]]]]..QUIZ: Fill in the blanks to increase the value of variable x by 5 using the addition assignment operator. ..]]]]]]]]]]]]]]]
ANSWER CODE:
    let x = 10;
    x+=5;

..]]]]]]]]]]]]]]]]..NOTE: The above pattern can be followed for other arithmetic operators: ..]]]]]]]]]]]]]]]
- Best of all, this pattern can be followed for other arithmetic operators:
    Js CODE:
        let x = 15;
        x+=5; // x = x+5;
        x-=5; // x = x-5;
        x*=5; // x = x*5;
        x/=5; // x = x/5;
        x%=5; // x = x%5;

 ......THE EXACT CODE: .....................................................
            let x = 15;
            x+=5; // x = x+5;
            console.log(x);

            x-=5; // x = x-5;
            console.log(x);

            x*=5; // x = x*5;
            console.log(x);

            x/=5; // x = x/5;
            console.log(x);

            x%=5; // x = x%5;
            console.log(x);
    Click to run, AND THE OUTPUT IS: 
                20
                15
                75
                15
                0

..]]]]]]]]]]]]]]]]..QUIZ:-What is the output of this code? ..]]]]]]]]]]]]]]]
    CODE: 
        let x = 8;
        x++;
        x/=3;
        console.log(x);
    ANSWER:-
        3


..]]]]]]]]]]]]]]]]..You can perform the same operations with two variables. ..]]]]]]]]]]]]]]]
-You can perform the same operations with two variables. 
For example:
    Js CODE:
        let price = 50;
        let rate = 1.2;
        price*=rate;//The total same as, [price = price*rate;]
        
        console.log(price);
    Click to run, //and the answer is 60.

..]]]]]]]]]]]]]]]]..Shorthand for x = x*y;..]]]]]]]]]]]]]]]
- What is the shorthand for x = x*y; statement?
    choices:
        x=*y;
        x*y;
        x*=y; ==========

..]]]]]]]]]]]]]]]]..Lesson Takeaways..]]]]]]]]]]]]]]]
- Amazing! 🚀 You’ve taken another step forward!
- Let's summarize what you've just learned:
    💡we use the assignment operator = to assign a value to a variable
    💡you can shorthand codes like x=x+5 with x+=5, and similar logic for all the other mathematical operations 

What's next?
- In the next lesson, you will learn more about the strings - how to escape characters, and create new lines and tabs. Keep it up!

####Bank Account Balance:
    - You want to withdraw some money from your bank account. Calculate and output the remaining balance.
    Practice

..]]]]]]]]]]]]]]]]..THE START OF PRACTICE ..]]]]]]]]]]]]]]]
        Assignment operators PRACTICE:
        - You want to withdraw some money from your bank account.
        - The program takes two numbers as input, your account balance and the amount you want to withdraw,
         and assigns them to corresponding "balance" and "withdraw" variables.
        Task:
        - Calculate and output the remaining balance after the withdrawal.
        Sample Input
        450000
        9000
        Sample Output
        441000

        Explanation:
        - The first two lines of the given code declare the balance and the withdraw variables, 
        whose values will be automatically taken as input and will be used in test cases. 
        This means that your solution will be tested with different values of those variables.
        - Don't change that part of the code and treat it as a usual variable.
        - Use the -= shorthand for easier calculation.

        ANSWER: 
        let balance = parseInt(readLine(), 10);
        let withdraw = parseInt(readLine(), 10);
        //your code goes here
        balance-=withdraw
        console.log(balance);
..]]]]]]]]]]]]]]]]..END OF PRACTICE ..]]]]]]]]]]]]]]]

..]]]]]]]]]]]]]]]]..OUTPUT OF THE ABOVE CODE IS..]]]]]]]]]]]]]]]
        Results:
            Test Case 1.............
                Input
                416500
                160000
                Your Output
                256500
                Expected Output
                256500

            Test Case 2....................
                Input
                964100
                900000
                Your Output
                64100
                Expected Output
                64100

            Test Case 3...................
                Input
                145632
                145632
                Your Output
                0
                Expected Output
                0

            Test Case 4.................
                Input
                350
                20
                Your Output
                330
                Expected Output
                330

            Test Case 5...................
                Input
                450000
                9000
                Your Output
                441000
                Expected Output
                441000

..]]]]]]]]]]]]]]]].. ..]]]]]]]]]]]]]]]
..]]]]]]]]]]]]]]]].. ..]]]]]]]]]]]]]]]
..]]]]]]]]]]]]]]]].. ..]]]]]]]]]]]]]]]
..]]]]]]]]]]]]]]]].. ..]]]]]]]]]]]]]]]
..]]]]]]]]]]]]]]]].. ..]]]]]]]]]]]]]]]
..]]]]]]]]]]]]]]]].. ..]]]]]]]]]]]]]]]
..]]]]]]]]]]]]]]]].. ..]]]]]]]]]]]]]]]