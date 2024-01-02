import React from 'react'
import '../styles/studentlist.css'

export default function StudentList() {
    const students = [
        { id: 1, name: 'John Doe', grade: 'A' },
        { id: 2, name: 'Jane Doe', grade: 'B' },
        { id: 3, name: 'Bob Smith', grade: 'C' },
        // Add more students as needed
      ];
    
      return (
        <div className="student-list-container">
      <h1 className="list-title">Student List</h1>
      <table className="students-table">
        <thead>
          <tr>
            <th className="table-header">ID</th>
            <th className="table-header">Name</th>
            <th className="table-header">Grade</th>
          </tr>
        </thead>
        <tbody>
          {students.map(student => (
            <tr key={student.id} className="table-row">
              <td className="table-data">{student.id}</td>
              <td className="table-data">{student.name}</td>
              <td className="table-data">{student.grade}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
