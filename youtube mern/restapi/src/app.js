const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
require("./dbb/conn");
const Student = require("./models/students");

//middle ware
app.use(express.json());

app.get("/", (req, res) => {
  res.send("home");
});

// app.post("/students", (req, res) => {

//     console.log(req.body)
//     const user = new Student(req.body)
//     user.save().then(() => {
//         res.status(201).send(user)
//     }).catch((err) => {
//         res.status(400).send(err)
//     })
// })

//post using async await
app.post("/students", async (req, res) => {
  try {
    const user = new Student(req.body);
    const createuser = await user.save();
    res.status(201).send(createuser);
  } catch (err) {
    res.status(400).send(err);
  }
});

//get data
app.get("/students", async (req, res) => {
  try {
    const studentdata = await Student.find();
    res.send(studentdata);
  } catch (err) {
    res.send(err);
  }
});

//indivisual data
app.get("/students/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const studentdata = await Student.findById(_id);
    console.log(studentdata);

    if (!studentdata) {
      return res.status(404).send();
    } else {
      res.send(studentdata);
    }
  } catch (err) {
    res.send(err);
  }
});

//update using patch
app.patch("/students/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const updatestudent = await Student.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    res.send(updatestudent);
  } catch (err) {
    res.status(404).send(err);
  }
});

//delete
app.delete("/students/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const deletestudent = await Student.findByIdAndDelete(req.params.id);
    if (!req.params.id) {
      return res.status(400).send();
    }
    res.send(deletestudent);
  } catch (err) {
    res.status(500).send(err);
  }
});

function print_message() {
  console.log(`connected to ${port}`);
}

app.listen(port, print_message);
