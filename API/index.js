import Express from "express";
import path from "path";
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = Express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
// foe accessing the body of request
app.use(Express.urlencoded({ extended: true }));
app.use(Express.json());

// 2
app.get("/", (req, res) => {
    // res.send("Hello World");
    // res.json({ "wish": "Hello World", "Date": new Date().toDateString });
    // sending status response
    // res.send(500, "Hello");
    // res.status(500).send("Hello this is 500");
    // res.sendStatus(500).send("Hello World"); 
    // res.download('index.js');

    // rendering
    // res.render("index");
    // res.render("index", { name: "Bharathraj" })
})

// 3
// app.get("/auth/login", (req, res) => {
//     res.send("login page");
// })

// app.get("/auth/signup", (req, res) => {
//     res.send("signup page");
// })

// 4
// app.post("/auth/login", (req, res) => {
//     const body = req.body;
//     res.send(`login auth processing for : ${body.name} with password: ${body.password}`);
// })

// app.post("/auth/signup", (req, res) => {
//     const { name, email, password } = req.body;
//     res.send(`signup auth processing with details : ${name} ${email} ${password}`);
// })

import authRouter from "./routes/auth.js";

app.use("/auth", authRouter);

// 1
app.listen(3000, () => {
    console.log(`Server is serving at port 3000`);
})

