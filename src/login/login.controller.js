import { userModel } from './../../DBconnection/models/user.model.js';

export const loginController = (req, res) => {


    res.render('login.ejs', { error: req.query?.error, session: undefined })
}
export const handelLogin = async (req, res) => {

    if (res.locals.validationError) {
        return res.render('login.ejs', { error: res.locals.validationError, session: req.session })
    }
    const user = await userModel.findOne({ email: req.body.email })
    if (!user || user?.password !== req.body.password) { return res.redirect('/login?error=email or password is not correct') }

    req.session.isLoggedIn = true
    req.session.userId = user._id
    req.session.name = user.name

    res.redirect('/message')
}