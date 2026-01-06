let companyName = "AlphaCorp";
let employe = {
    firstName: "Nozrul",
    lastName: "Islam",
    employeeId: 101,
    departmentCode: "HR"
}
let threeChar = ''

if (employe.lastName.length < 3) {
    threeChar = threeChar + lastName
} else {
    threeChar = employe.lastName.slice(0, 3).toLowerCase()
}
let UserId = threeChar + employe.employeeId + "@" + companyName.toLowerCase() + ".com"
let passWord = employe.firstName.slice(-3).toLowerCase() + "#" + employe.departmentCode

console.log("ID:" + UserId);

console.log("passWord:" + passWord);

