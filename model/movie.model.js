const mongoose = require('mongoose');
const { Schema } = mongoose;

const movieSchema = new Schema({
    title:{
        type: String,
    },
    director:{
        type: String,
    },
    stars:{
        type: [String],
    },
    image:{
        type: String,
    },
    description:{
        type: String,
    },
    showTimes:{
        type: [String],
    }

})

const Movie = mongoose.model('Movie', movieSchema);
module.exports= Movie