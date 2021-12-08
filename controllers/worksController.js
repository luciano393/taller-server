const Work = require('../models/works');

exports.newWork = async (req, res, next) => {
    const work = new Work(req.body);

    try {
        await work.save();
        res.json({ message: 'Success'});
    } catch (error) {
        console.log(error);
        next();
    }
}

exports.getWorks = async (req, res, next) => {
    try {
        const works = await Work.find({})
        res.json(works);
    } catch (error) {
        console.log(error);
        next();
    }
}

exports.getWork = async (req, res, next) => {
    try {
        const work = await Work.findById(req.params.id);
        res.json(work);
    } catch (error) {
        console.log(error);
        next();
    }
}

exports.putWork = async (req, res, next) => {
    try {
        const work = await Work.findOneAndUpdate({_id : req.params.id}, req.body, { new: true });
        res.json(work);
    } catch (error) {
        console.log(error);
        next();
    }
}

exports.deleteWork = async(req, res, next) => {
    try {
        await Work.findOneAndDelete({ _id: req.params.id});
        res.json({ message: 'Success'});
    } catch (error) {
        console.log(error);
        next();
    }
}
