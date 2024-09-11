// module.exports = (temp, student) => {
//     let 
//     // output = temp.replace(/{%ID%}/g, student.id);
//     output = output.replace(/{%STUDENTNAME%}/g, student.name);
//     // output = output.replace(/{%AGE%}/g, student.age);
//     // output = output.replace(/{%GRADE%}/g, student.grade);
//     // output = output.replace(/{%EMAIL%}/g, student.email);
//     // output = output.replace(/{%PHONE%}/g, student.phone);
//     // output = output.replace(/{%ADDRESS%}/g, student.address);
//     output = output.replace(/{%PERCENTAGE%}/g, student.attendance_percentage);
//     // output = output.replace(/{%COURSES%}/g, student.courses.join(", "));
//     // output = output.replace(/{%EXTRA_CURRICULAR%}/g, student.extra_curricular.join(", "));
    
//     return output;
// };

// module.exports = (temp, students) => {
//     // Initialize output with the template content


//     // Perform the replacements with student data
//     // output = output.replace(/{%ID%}/g, student.id);
//     output = temp.replace(/{%STUDENTNAME%}/g, students.name);
//     // output = output.replace(/{%AGE%}/g, student.age);
//     // output = output.replace(/{%GRADE%}/g, student.grade);
//     // output = output.replace(/{%EMAIL%}/g, student.email);
//     // output = output.replace(/{%PHONE%}/g, student.phone);
//     // output = output.replace(/{%ADDRESS%}/g, student.address);
//     output = temp.replace(/{%PERCENTAGE%}/g, students.attendance_percentage);
//     // output = output.replace(/{%COURSES%}/g, student.courses.join(", "));
//     // output = output.replace(/{%EXTRA_CURRICULAR%}/g, student.extra_curricular.join(", "));

//     // Return the modified output
//     return output;
// };

module.exports = (temp, student) => {
    // Perform the replacements with student data
    let output = temp.replace(/{%STUDENTNAME%}/g, student.name);
    output = output.replace(/{%PERCENTAGE%}/g, student.attendance_percentage);
    // Repeat for other placeholders if needed

    return output;
};

