
//this function is used to handel home page

export const homeController = (req, res) => {

    res.render('index.ejs', { session: undefined })
}