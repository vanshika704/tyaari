const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');

// Load HTML templates
const adminPanelTemplate = fs.readFileSync(path.join(__dirname, 'dashboard.html'), 'utf-8');
const studentDashboardTemplate = fs.readFileSync(path.join(__dirname, 'students.html'), 'utf-8');
const studentListTemplate = fs.readFileSync(path.join(__dirname, 'studentslist.html'), 'utf-8');

// Load and parse JSON data
const students = JSON.parse(fs.readFileSync(path.join(__dirname, 'data.json'), 'utf-8'));

// Function to replace placeholders with actual student data
const replacement = (temp, student) => {
    let output = temp.replace(/{%NAME%}/g, student.name);
    output = output.replace(/{%ID%}/g, student.id);
    output = output.replace(/{%GRADE%}/g, student.grade);
    output = output.replace(/{%ATTENDANCE%}/g, student.attendance);
    return output;
};

http.createServer((req, res) => {
    const { pathname, query } = url.parse(req.url, true);

    if (pathname === "/") {
        // Display the admin panel with all students
        const studentsHTML = students.map(student => replacement(adminPanelTemplate, student)).join(''); // Generate HTML for each student
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(studentsHTML);

    } else if (pathname === '/studentlist') {
        // Generate a list of all students
        const studentListHTML = students.map(student => `<li>${student.name} (ID: ${student.id})</li>`).join('');
        const output = studentListTemplate.replace(/{%STUDENT_LIST%}/g, studentListHTML);
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(output);

    } else if (pathname === '/studentdashboard') {
        // Check if an ID query is provided to view a specific student's dashboard
        const studentID = query.id;
        const student = students.find(stud => stud.id === studentID); 

        if (student) {
            // Replace placeholders in the student dashboard template
            const output = replacement(studentDashboardTemplate, student);
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(output);
        } else {
            // If no student with the provided ID is found
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end("Student not found");
        }

    } else {
        // Handle 404 for non-existent routes
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end("404 - Page not found");
    }
}).listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});
