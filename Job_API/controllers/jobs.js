const { StatusCodes } = require('http-status-codes');
const { BadRequestError } = require('../errors');
const Job = require('../models/Job');


const getAllJobs = async (req, res) => {
    res.send('Get all jobs');
}
// @desc Get a single job
const getJob = async (req, res) => {
    res.send('Get all jobs');
}

//@desc Create a job
const createJob = async (req, res) => {
    req.body.createdBy = req.user.userId
    const job = await Job.create(req.body)
    res.status(StatusCodes.CREATED).json({ job })
  }
const updateJob = async (req, res) => {
    res.send('Get all jobs');
}
const deleteJob = async (req, res) => {
    res.send('Get all jobs');
}

module.exports = {
    getAllJobs,
    getJob,
    createJob,
    updateJob,
    deleteJob
}