const Job = require('../models/Job')
const { BadRequest } = require('../errors')
const {StatusCodes} = require('http-status-codes');


const getAllJobs = async (req, res) => {
    const jobs = await Job.find({});
    res.status(StatusCodes.OK).json({ msg:"success",jobs, count:jobs.length });
}
const getJob = async (req, res) => {
    const job = req.params.id;
    res.status(StatusCodes.OK).json({ msg:"success",job });
}
const createJob = async (req, res) => {
    const{title, description, salary, company, location} = req.body;
    if(!title || !description || !salary || !company || !location){
        throw new BadRequest('Please provide all fields',400);
    }
    const job = await Job.create({title, description, salary, company, location});
    res.status(StatusCodes.CREATED).json({job});

}
const updateJob = async (req, res) => {
    res.send('Get all jobs');
}
const deleteJob = async (req, res) => {
    const job = req.params.id;
    job = await Job.findByIdAndDelete(job);
    res.status(StatusCodes.OK).json({ msg:"success",job });
}

module.exports = {
    getAllJobs,
    getJob,
    createJob,
    updateJob,
    deleteJob
}