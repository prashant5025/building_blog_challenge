const getAllJobs = async (req, res) => {
    res.send('Get all jobs');
}
const getJob = async (req, res) => {
    res.send('Get all jobs');
}
const createJob = async (req, res) => {
    const{title, description, salary, company, email, new_job} = req.body;
    if(!title || !description || !salary || !company || !email || !new_job){
        throw new BadRequest("Please provide all fields");
    }
    const job = await Job.create({title, description, salary, company, email, new_job});
    res.status(201).json({job});

    
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