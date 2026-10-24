import { Router } from "express";
import { signup,login,getAccessToken,verifyAccount ,logout} from "./auth.service.js";
import { SuccessResponse } from "../../common/response/success.response.js";
import { auth } from "../../common/middleware/auth/auth.js";
import { validation } from "../../common/middleware/validation.js";
import joi from "joi"
import { signupSchema,loginSchema } from "./auth.validation.js";

const router = Router();


// router.get('/', (req, res) => {
//     res.json({message: "Auth route"});
// })
router.post('/signup',validation(signupSchema),async (req, res) => {
let addedUser=await signup(req.body)
SuccessResponse({
    res,
    message: "User added successfully", 
    status: 201,
    data: addedUser
})
})

router.post('/login',validation(loginSchema),async (req, res) => {
  let loginUser=await login(req.body,req.get("host"))
    SuccessResponse({
        res,
        message: "User logged in successfully", 
        data: loginUser
    })
})

router.post('/verify-account', async (req, res) => {
let userData=await verifyAccount(req.body)
    SuccessResponse({
        res,
        message: "Account verified successfully", 
        data: userData
    })

})

router.get('/get-access-Token', async (req, res) => {

let data= await getAccessToken(req.headers.authorization, req.get("host"))
    SuccessResponse({
        res,
        message: "new access token generated successfully", 
        data
    })


})

router.post("/logout",auth, async (req, res) => {
let data = await logout(req)
SuccessResponse({
        res,
        message: "User logged out successfully", 
        data
    })
})
export default router;