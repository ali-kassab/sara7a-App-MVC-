import { userModel } from "../../DBconnection/models/user.model.js"


//this function is used to handel register page
export const registerController = (req, res) => {

    const errorFlash = req.flash('error');

    return res.render('register.ejs', { error: errorFlash, errorquery: req.query?.error, session: req.session });
}



//this function is used to handel registration - check user exist 
export const handelRegister = async (req, res) => {
    if (res.locals.validationError) {
        return res.render('register.ejs', { error: res.locals.validationError, session: req.session });
    }
    const userExist = await userModel.findOne({ email: req.body.email })
    if (userExist) { return res.redirect('/register?error=user already exist') }
    await userModel.insertMany(req.body)
    res.redirect('/login')
}

