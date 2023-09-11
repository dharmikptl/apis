const express = require("express");
const server = express();

const data = [
  {
    id: 1,
    name: "Movie 1",
    directed_by: "Director 1",
    produced_by: "Producer 1",
    release_date: "2023-09-10",
    box_office: "$150 million",
    imageUrl: "https://example.com/movie1.jpg",
  },
  {
    id: 2,
    name: "Movie 2",
    directed_by: "Director 2",
    produced_by: "Producer 2",
    release_date: "2023-08-15",
    box_office: "$120 million",
    imageUrl: "https://example.com/movie2.jpg",
  },
  {
    id: 3,
    name: "Movie 3",
    directed_by: "Director 3",
    produced_by: "Producer 3",
    release_date: "2023-07-20",
    box_office: "$180 million",
    imageUrl: "https://example.com/movie3.jpg",
  },
];
server.use(express.json());

server.get("/", function (req, res) {
  res.send(data);
});

server.get("/data/:id", function (req, res) {
  const daTa = data.find((t) => t.id.toString() === req.params.id);
  if (daTa) {
    res.send(daTa);
  } else {
    res.status(404).send("Not Found");
  }
});

server.post("/data1", function (req, res) {
  const newData = req.body;
  data.push(newData);
  res.status(201).send("Post Data");
});

server.delete("/data/:id", function (req, res) {
  const daTa = data.findIndex((t) => t.id.toString() === req.params.id);
  // console.log(daTa);
  if (daTa > -1) {
    data.splice(daTa, 1);
    res.send("delete");
  } else {
    res.status(404).send("not found");
  }
});

server.patch("/data/update/:id", function (req, res) {
  const id = req.params.id;
  const daTa = req.body;
  const dataIndex = data.findIndex((t) => t.id.toString() === id);
  if (dataIndex > -1) {
    data[dataIndex] = {
      id,
      ...daTa,
    };
    res.send("Updated");
  } else {
    res.status(404).send("not found");
  }
});
server.listen(3500);
