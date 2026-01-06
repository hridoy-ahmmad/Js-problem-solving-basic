let companyName = "AlphaCorp";
let employe = {
    firstName: "Nozrul",
    lastName: "Islam",
    employeeId: 101,
    departmentCode: "HR"
}

let threeChar = employe.lastName.slice(0, 3).toLowerCase()
let result = threeChar + employe.employeeId + "@" + companyName.toLowerCase() + ".com"

console.log(result);

