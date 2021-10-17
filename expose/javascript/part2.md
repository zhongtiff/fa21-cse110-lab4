1. Line 12 would print out the value of i, which is 3, because i holds the length of the price array. 
2. Line 13 would print out the value of discountedPrice, which is 150, because discountedPrice declared by var, which means that the variable exists outside of the block that it was defined in. 
3. Line 14 would print out the value of finalPrice, which is 150, because finalPrice exists outside of the block that it was defined in. 
4. This function will return the array discounted that contains the discounted prices. 
5. Line 12 will return an error message because the line 12 is trying to call the variable i outside of the for block, which is where i was defined. 
6. Line 13 will return an error message because discountedPrice was defined inside the for block by let, thus it can only be called within the for block. 
7. Line 14 will return the value of finalPrice, which is 150, because finalPrice was declared by let inside the function block and line 14 is still within the function block.  
8. This function will return the array discounted that contains the discounted price because all the varibles are called within their allowed scope.
9. Line 11 would return the value of i, which is 3, because none of the const variables are being reassigned within the same scope and the for loop runs accordingly. 
10. Line 12 would return 3 because the length variable is a constant and is assigned the length of the price array in line 4. 
11. This function will return the discounted array because all the variables within the function follow the rules of calling variables only within their appropiate scopes. 
## Data Types
12. 
    a. student.name
    b. student["Grad Year"]
    c. student.greeting()
    d. student["Favorite Teacher"].name
    e. student.courseLoad[0]
13. 
    a. '3'+2 = '32'
        The output is a string because the first input is a string and the 2 maps to '2'.
    b. '3'-2 = 1
        The output is a number because it's subtraction and the '3' maps to a 3.
    c. 3+null = 3
        The output is a number because null maps to 0 and the first input is a number.
    d. '3'+null = '3null'.
        The output is a string because the first input is a string and null maps to 'null'.
    e. true+3 = 4
        The output is a number because it's addition and you can't add booleans together. The true maps to a 1. 
    f. false+null = 0
        The output is a number because it's addition. The false maps to 0 and so does the null.
    g. '3'+undefined = '3undefined'
        The output is a string because the first input is a string. The undefined maps to 'undefined'.
    h. '3'-undefined = NaN
        The output is NaN because undefined maps to NaN. 
14. 
    a. '2'>1
        true. The string '2' becomes the number 2. 
    b. '2'<'12'
        false. The string '2' becomes the number 2 and the string '12' becomes the number 12.
    c. 2 == '2'
        true. The string '2' becomes the number 2. 
    d. 2 === '2'
        false. The === checks for equality without type conversion, which in this case a number type is not the same as a string type. 
    e. true == 2
        false. true becomes the number 1 and 1 is not equal to 2. 
    f. true === Boolean(2)
        true. Boolean(2) becomes true because Boolean(2) results in true and is of boolean type. 
15. The difference between the == and === is that == does a type conversion first then checks for equality, while === checks for equality without doing a type conversion. 
  