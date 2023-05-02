const Blog = require('../models/Blog.js');

let blogController = {
    comeToBlog: async (req, res) => {
        res.render('blog');
    },
    createBlog: async (req, res) => {
        let body = req.body;
        let newBlog = new Blog(body);
        await newBlog.save();
        res.redirect('/');
    },
}
module.exports = blogController;