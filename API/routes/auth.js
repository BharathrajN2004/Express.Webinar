import Express from "express";
const router = Express.Router();

// 4
const middleWear = (req,res,next)=>{
    console.log(req.originalUrl);
    next();
}

// 1
// router.get("/login", (req, res) => {
//     res.send("login page");
// })

router.get("/signup", middleWear, (req, res) => {
    res.send("signup page");
})

//2
// router.post("/login", (req, res) => {
//     const body = req.body;
//     res.send(`login auth processing for : ${body.name} with password: ${body.password}`);
// })

router.post("/signup", middleWear, (req, res) => {
    const { name, email, password } = req.body;
    res.send(`signup auth processing with details : ${name} ${email} ${password}`);
})

// 3
router.route("/login")
    .get((req, res) => {
        res.send("login page");
    })
    .post((req, res) => {
        const body = req.body;
        res.send(`login auth processing for : ${body.name} with password: ${body.password}`);
    })




export default router;