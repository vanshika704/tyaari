const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');

// Load HTML templates
const adminPanelTemplate = fs.readFileSync(path.join(__dirname, 'dashboard.html'), 'utf-8');
const studentDashboardTemplate = fs.readFileSync(path.join(__dirname,'students.html'), 'utf-8');
const studentListTemplate = fs.readFileSync(path.join(__dirname, 'studentslist.html'), 'utf-8');

// Load JSON data
const students = JSON.parse(fs.readFileSync(path.join(__dirname, 'data.json'), 'utf-8'));

// Define the replacement function
const replacement = (temp, student) => {
    let output = temp.replace(/{%NAME%}/g, student.name);
    output = output.replace(/{%ID%}/g, student.id);
    output = output.replace(/{%GRADE%}/g, student.grade);
    output = output.replace(/{%ATTENDANCE%}/g, student.attendance);
    // You can add more replacements based on the structure of your HTML templates
    return output;
};

http.createServer((req, res) => {
    const pathName = url.parse(req.url, true).pathname;

    if (pathName === "/") {
        // Example usage: Assuming the first student in the data array
        const student = students[0]; // Adjust based on your requirements
        const output = replacement(adminPanelTemplate, student);
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(output);
    } else if (pathName === '/studentlist') {
        // Generate student list HTML
        const studentListHTML = students.map(student => `<li>${student.name}</li>`).join('');
        const output = studentListTemplate.replace(/{%STUDENT_LIST%}/g, studentListHTML);
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(output);
    } else if (pathName === '/studentdashboard') {
        // Example usage: Assuming the first student in the data array
        const student = students[0]; // Adjust based on your requirements
        const output = replacement(studentDashboardTemplate, student);
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(output);
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end("404 - Page not found");
    }
}).listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});
