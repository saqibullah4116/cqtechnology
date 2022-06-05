const express = require("express");
const cors = require("cors");
const pool = require("./db");

const app = express();

// middleware

app.use(cors());
app.use(express.json()); //req.boday

// Routes
// creat student
app.post("/student", async (req, res) => {
  try {
    const { firstname, lastname } = req.body;
    const newstudentbook = await pool.query(
      "INSERT INTO students (firstname, lastname) VALUES ($1,$2) RETURNING *",
      [firstname, lastname]
    );
    res.json(newstudentbook.rows[0]);
  } catch (err) {
    console.log(err.message);
  }
});

// getting all the student
app.get("/student", async (req, res) => {
  try {
    const allstudents = await pool.query("SELECT *FROM students");
    res.json(allstudents.rows);
  } catch (error) {
    console.log(error.message);
  }
});

//gettign specific students

app.get("/student/:id", async (req, res) => {
  try {
    const getSpecficeStudent = await pool.query(
      "SELECT *FROM students WHERE student_id = $1",
      [req.params.id]
    );
    res.json(getSpecficeStudent.rows);
  } catch (error) {
    console.log(error.message);
  }
});

// updating a student
app.put("/student/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { firstname, lastname } = req.body;
    //    console.log(`firstname = ${firstname} ,lastname = ${lastname} ,firstname = ${id}`)
    const updateStudent = await pool.query(
      "UPDATE students SET firstname = $1,lastname = $2 WHERE student_id = $3",
      [firstname, lastname, id]
    );
    res.json("student has been successfully update");
  } catch (error) {
    console.log(error.message);
  }
});

// deleting the student
app.delete("/student/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteStudent = await pool.query(
      "DELETE FROM students WHERE student_id = $1",
      [id]
    );
    res.json("student has been successfully deleted");
  } catch (error) {
    console.log(error.message);
  }
});

//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
////             This is the record for booklist table             //////////

app.post("/book", async (req, res) => {
  try {
    const { book_name, author_name, borrow_by, expected_return_date } =
      req.body;
    const newstudentbook = await pool.query(
      "INSERT INTO booklist (book_name,author_name,borrow_by,expected_return_date) VALUES ($1,$2,$3,$4) RETURNING *",
      [book_name, author_name, borrow_by, expected_return_date]
    );
    res.json(newstudentbook.rows[0]);
  } catch (err) {
    console.log(err.message);
  }
});

//geting all the books
app.get("/book", async (req, res) => {
  try {
    const allbooklist = await pool.query("SELECT *FROM booklist");
    console.log(allbooklist.rows);
    res.json(allbooklist.rows);
  } catch (err) {
    console.log(err.message);
  }
});





app.listen(5000, () => {
  console.log("The server has been started on port 5000");
});
