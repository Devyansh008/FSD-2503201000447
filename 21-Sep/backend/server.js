const express = require('express')

const app = express()
const port = process.env.PORT || 3000

const students = [
  { name: 'Aarav Sharma', rollNo: 'CS101', class: 'B.Tech CSE - 3rd Year', admissionNo: 'ADM2024001' },
  { name: 'Diya Patel', rollNo: 'CS102', class: 'B.Tech CSE - 3rd Year', admissionNo: 'ADM2024002' },
  { name: 'Kabir Singh', rollNo: 'CS103', class: 'B.Tech CSE - 3rd Year', admissionNo: 'ADM2024003' },
]

app.use(express.json())

app.get('/api/students', (request, response) => response.json(students))

app.get('/api/students/:rollNo', (request, response) => {
  const student = students.find(
    (item) => item.rollNo.toLowerCase() === request.params.rollNo.toLowerCase(),
  )

  if (!student) return response.status(404).json({ message: 'Student not found' })
  response.json(student)
})

app.listen(port, () => console.log(`Student API running at http://localhost:${port}`))
