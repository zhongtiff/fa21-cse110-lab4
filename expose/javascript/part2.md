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