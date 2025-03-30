import mongoose from 'mongoose';

const { Schema } = mongoose;

const toDoSchema = new Schema(
    {
        title: { type: String, required: true },
        description: { type: String, required: true },
        isCompleted: { type: Boolean, required: true },
        completedOn: String,
        deadline: { type: Date }, 
        createdBy: {
            ref: "User",
            type: Schema.ObjectId
        }
    },
    {
        timestamps: true
    }
);

const ToDo = mongoose.model("ToDo", toDoSchema);

export default ToDo;