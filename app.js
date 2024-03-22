// Object of Array //
// Types and Interface//
;
var myemployee = {
    firstName: "Areeba",
    lastName: "Nadeem",
    gender: "Female",
    appointmentDate: "3-4-2024",
    emailAddress: "nadeemareeba123@gmail.com",
    nicNo: "123456789",
    salary: 100000,
    experience: "5 year",
    skills: ["Communication", "Leadership", "Data Analysis", "Microsoft Excel"],
    education: [
        { degree: "Bachelor's",
            institution: "University Of Karachi",
            graduationYear: 2015,
        },
    ],
    bankDetails: {
        bankName: "HBL Bank",
        branch: "Jouhar",
        accountNumber: "135647890"
    }
};
console.log(myemployee.firstName);
console.log(myemployee.skills);
console.log(myemployee.bankDetails);
console.log(myemployee);
