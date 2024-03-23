// Object of Array //
// Types and Interface//

type employeeType = {
    firstName : string;
    lastName : string;
    gender : string;
    appointmentDate : string;
    emailAddress : string;
    nicNo : number;
    salary : number;
    experience : string;
    skills : string [];
    education : string[];
    bank : bankDetails;
};

interface bankDetails {
    bankName : string;
    branch : string;
    accountNumber : string;
};

let  myEmployee = {
    firstName : "Areeba",
    lastName : "Nadeem",
    gender : "Female",
    appointmentDate : "3-4-2024",
    emailAddress : "nadeemareeba123@gmail.com",
    nicNo : "123456789",
    salary : 100000,
    experience : "5 year",
    skills : ["Communication","Leadership", "Data Analysis", "Microsoft Excel"],
    education : [
        {degree : "Bachelor's",
        institution : "University Of Karachi",
        graduationYear : 2015,
        },
    ],
 bankDetails : {
    bankName : "HBL Bank",
    branch : "Jouhar",
    accountNumber : "135647890"
 }
};

console.log(myEmployee.firstName);
console.log(myEmployee.skills);
console.log(myEmployee.bankDetails);
console.log(myEmployee);





