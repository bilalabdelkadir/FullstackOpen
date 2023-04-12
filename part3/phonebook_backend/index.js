const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
require("dotenv").config();
const Phone = require("./models/person");

const app = express();
app.use(express.json());
app.use(morgan("tiny"));
app.use(cors());
app.use(express.static("dist"));

morgan.token("data", (request, response) => {
  return request.method === "POST" ? JSON.stringify(request.body) : " ";
});

app.use(
  morgan(":method :url :status :res[content-length] - :response-time ms :data")
);

app.get("/", (req, res) => {
  res.send("hello");
});

app.get("/api/persons", (req, res) => {
  Phone.find({}).then((persons) => {
    console.log(persons);
    res.json(persons);
  });
});

app.get("/api/persons/:id", (req, res) => {
  Phone.findById(req.params.id).then((person) => {
    res.json(person);
  });
});

app.post("/api/persons", (req, res) => {
  const body = req.body;

  if (!body.name) {
    return res.status(400).json({
      error: "name missing",
    });
  }

  // const exist = Phone.find((person) => person.name === body.name);

  // if (exist) {
  //   return res.status(400).json({
  //     error: "name must be unique",
  //   });
  // }

  if (!body.number) {
    return res.status(400).json({
      error: "number missing",
    });
  }

  const person = new Phone({
    name: body.name,
    number: body.number,
  });

  person.save().then((savedPerson) => {
    res.json(savedPerson);
  });
});

app.delete("/api/persons/:id", (req, res) => {
  const id = Number(request.params.id);
  persons = persons.filter((person) => person.id !== id);

  res.status(204).end();
});

app.get("/info", (req, res) => {
  const total = persons.length;
  const now = new Date();
  const options = {
    weekday: "short",
    month: "short",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    timeZoneName: "long",
  };
  const formatter = new Intl.DateTimeFormat("en-US", options);
  const formattedDate = formatter.format(now);
  console.log(formattedDate);

  const response = `phonebook has info for ${total} people\n${formattedDate} (${
    formatter.resolvedOptions().timeZone
  })`;
  res.send(response);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
