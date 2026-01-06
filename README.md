// Problem 01:
=============
A seat planner needs to be created for a new cinema hall. The seats in this cinema hall are designed in such a way that if the seat number is divisible by 3 or 5 and there is no remainder then it will be considered as a 'premium' seat. That is, if the seat number is 1 then it will be a normal seat, if the seat number is 3/5 then it will be a premium seat

Problem: Your task is to create a program that will take the total number of seats (totalRows) and for each seat it will print whether it is a 'Normal Row' or a 'Premium Row'. Row 1 - Normal Row, Row 4 - Premium Row

ADVANCED: If the seat is normal then the prize will be 500 Taka and if it is a premium seat then the prize will be 800 Taka. You need to calculate the total income of a show e.g. Total Income: 5000 Taka

// Problem 02 : 
Product Tagging
For an online store, you need to write a program (productDescription) that takes (string) input and automatically adds some tags (Tags) based on the product details. For example:

details

If the word "cotton" is in the details, then the program output will show "Material: Cotton".

If the word "sale" is in the details, then the program output will show "Category: Sale Item".

If the word "new arrival" is in the details, then the program output will show "Status: New Arrival".

If the word "limited edition" is in the details, then the program output will show "Availability: Limited".

If none of the conditions are met, then a default tag "Tag: General"

ADVANCED: Handle case insensitively.


// Problem 03:
A new company, "AlphaCorp", wants to automatically generate a Unique Employee username for their employees to access their database. This username will be based on some personal information about the employee.

You need to write a program that takes an object named employee as input, where the employee information is as follows:
{ 
    firstName: "Nozrul", 
    lastName: "Islam", 
    employeeId: 101, 
    departmentCode: "HR" }

// Output:
username: doe101@alphacorp.com

Rules:
👉 First, the first three letters of lastName will be lowercase.
👉 Then, the employeeId.
👉 Then, the @.
👉 Then, the company name will be lowercase.
👉 Finally, the .com.

ADVANCED: Generate a Temporary Password along with the username.
👉 If lastName is less than three characters, then all the letters of lastName will be used.
👉 for Password generate use firstname last 3 char + # + departmentCode

// Output:
ID: doe101@alphacorp.com, TempPass: jn1#AC