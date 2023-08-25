import express from "express";
import multer from "multer";
import { login, signup } from "../controllers/auth.js";

const router = express.Router();

// Set up storage destination and file naming
const storage = multer.diskStorage({
    destination: (req, file, cd) => {
        cd(null, "Images");
    },
    filename: (req, file, cd) => {
        console.log(file);
        cd(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });
// upload.single('picture'),

router.post("/login", login);
router.post("/signup", signup);

export default router;
