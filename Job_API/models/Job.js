const mongoose = requier('mongoose');
const { Schema } = mongoose;


const JobsSchema = new Schema({
    title: {
        type: String,
        required: [true, 'Please provide a title'],
        trim: true,

    },
    description: {
        type: String,
        required: [true, 'Please provide a description'],
        trim: true,
        maxlength: [500, 'Description cannot be more than 500 characters']
    },
    salary: {
        type: Number,
        required: [true, 'Please provide a salary'],
        maxlength: [10, 'Salary cannot be more than 10 characters']
    
    },
    company: {
        type: String,
        required: [true, 'Please provide a company'],
        trim: true,
        maxlength: [50, 'Company cannot be more than 50 characters']

    },
    location: {
        type: String,
        required: [true, 'Please provide a location'],
        trim: true,
        maxlength: [50, 'Location cannot be more than 50 characters']

    }
})

module.exports = mongoose.model('Job', JobsSchema);