const {
    Types,
    Schema
} = require('mongoose');

const reactSchema = new Schema({
    //set in place to avoid mix up with parent thought id
    reactId: {
        type: Schema.Types.ObjectId, 
        default: () => new Types.ObjectId()
    },
    reactBody: {
        type: String,
        required: true,
        maxLength: 280
    },
    username: {
        type: String,
        required: true
    }
});

module.exports = reactionSchema;