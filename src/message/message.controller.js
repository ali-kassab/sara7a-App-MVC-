import { messageModel } from './../../DBconnection/models/message.model.js';
import { userModel } from './../../DBconnection/models/user.model.js';



//this function is used to handel message page
export const messageController = async (req, res) => {
    if (!req.session.isLoggedIn) return res.redirect('/login')
    let fullUrl = req.protocol + '://' + req.get('host') + '/user/' + req.session.userId;
    const allMsg = await messageModel.find({ userId: req.session.userId })
    const user = await userModel.findOne({ name: req.session.name });
    res.render('message.ejs', { session: req.session, fullUrl, allMsg, user })
}
