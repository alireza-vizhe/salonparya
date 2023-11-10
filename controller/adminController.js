const Post = require("../module/PostModel");

exports.getPosts = async (req, res) => {
    try {
        res.json(await Post.find());
    } catch (error) {
        console.log(error);
    }
}

exports.updatePost = async (req, res) => {
    console.log(req.body);
    try {
        const post = await Post.findOne({_id: req.body.id});
        post.name = req.body.name;
        post.description = req.body.description;
        post.status = req.body.status;
        post.category = req.body.category
        post.save();
        res.json({messageSUC: "پست مورد نظر شما با موفقیت برزورسانی شد"})
    } catch (error) {
        console.log(error);
    }
}

exports.getSingle = async (req, res) => {
    try {
        res.json(await Post.findOne({_id: req.body.id}))
    } catch (error) {
        console.log(error);
    }
}

exports.deletePost = async (req, res) => {
    try {
        await Post.deleteOne({_id: req.body.id});
        res.json({message: "پست مورد نظر شما با موفقیت پاک شد"});
    } catch (error) {
        console.log(error);
    }
}