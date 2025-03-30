import ToDo from "../models/ToDoList.js"; // Fix import for ES modules

export const createToDo = async (req, res) => {
    try {
        const data = req.body;
        if (data.deadline) {
            data.deadline = new Date(data.deadline);
        }
        const todo = new ToDo(data);
        const result = await todo.save();
        res.status(201).json({ message: "Created New Task!", task: result });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

export const getAllToDo = async (req, res) => {
    const { userId } = req.params;

    try {
        const result = await ToDo.find({ createdBy: userId });
        res.json(result);
    } catch (err) {
        console.log(err);
        res.status(400).json({ error: err.message });
    }
};

export const updateToDo = async (req, res) => {
    try {
        const { id } = req.params;
        const data = req.body;
        if (data.deadline) {
            data.deadline = new Date(data.deadline);
        }
        const result = await ToDo.findByIdAndUpdate(id, { $set: data }, { new: true });
        res.json({ message: "ToDo list Updated!", updatedTask: result });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

export const deleteToDo = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await ToDo.findByIdAndDelete(id);
        console.log(result);
        res.json({ message: "ToDo Task Deleted!" });
    } catch (err) {
        console.log(err);
        res.status(400).json({ error: err.message });
    }
};
