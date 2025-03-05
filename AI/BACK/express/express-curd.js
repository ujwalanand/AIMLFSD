import express from 'express';
const users =[{
    id: 1,
    name: 'Mithun',
    email: 'pandeymirtunjay@gmail.com'
}]
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("Welcome to my API");
});

app.get("/getusers", (req, res) => {
    res.send(users);
});

app.get("/getusers/:id", (req, res) => {
    const {id} = req.params;
    const user = users.find(user => user.id == id);
    res.send(user);
});

app.patch("/api/updateuser/:id", (req, res) => {
    const {id} = req.params;
    const { name } = erq.body;
    const user = users.findIndex(user => user.id == id);
    users[index].name=name
    res.send(" User is updated");
});

app.delete("/api/deleteuser/:id", (req, res) => {
    const {id} = req.params;
    const user = users.findIndex(user => user.id == id);
    users.splice(user,1)
    res.send(" User is updated");
});

app.get("/api", (req, res) => {
    res.send("Welcome to my new API");
});


app.use(express.json()); // built in middleware

app.post("/api/users", (req, res) => {
    const bodydata = req.body;
    console.log(bodydata)
    res.send("Data Successfully Recevied");
});

app.post("/api/createusers", (req, res) => {
    const {name,email} = req.body;
    const newid=users.length> 0 ? users[users.length -1].id+1: 1
    users.push({id : newid,name,email})
    res.status(201).send("User created Successfully ");
});

app.listen(port, () => {
    console.log(`server is running on the port ${port}`);
});