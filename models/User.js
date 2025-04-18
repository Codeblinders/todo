import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const { Schema } = mongoose;

const userSchema = new Schema({
    firstName: String,
    lastName: String,
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});

// Hash password before saving the user
userSchema.pre("save", async function (next) {
    if (!this.isModified('password')) return next();
    try {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
        next();
    } catch (err) {
        next(err);
    }
});

// Method to compare passwords
userSchema.methods.comparePassword = async function (password) {
    return bcrypt.compare(password, this.password);
};

// Export User model
const User = mongoose.model("User", userSchema);
export default User;
