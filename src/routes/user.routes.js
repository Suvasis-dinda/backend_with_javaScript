import pkg from 'express';
import { loggedOutUser, loginUser, registerUser,refershAcessToken } from "../controllers/user.controller.js";
import { upload } from '../middlewares/multer.middlewares.js';
import { verifyJWT } from '../middlewares/auth.middileware.js';
const { Router } = pkg;

const router = Router();

router.route("/register").post(
    upload.fields([
        { name: 'avatar', maxCount: 1 },
        { name: 'coverImage', maxCount: 1 }
    ]),
    registerUser
);
router.route("/loggedin").post(loginUser)
router.route("/loggOut").post(verifyJWT, loggedOutUser)
router.route("/refresh-token").post(refershAcessToken)
export default router;