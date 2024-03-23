import { messageModel } from '../../DBconnection/models/message.model.js';
import { userModel } from './../../DBconnection/models/user.model.js';

//this function is used to handel user page
export const userController = async (req, res) => {
    const user = await userModel.findById(req.params.id);
    res.render('user.ejs', { session: undefined, userId: req.params.id, user })
}

//this function is used to handel user 
export const handelUser = async (req, res) => {
    const message = await messageModel.insertMany({ userId: req.params.id, message: req.body.message })
    res.redirect(`/user/${req.params.id}`)
}