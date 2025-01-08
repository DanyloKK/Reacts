const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const password = "Kuzka2015";
const uri = `mongodb+srv://domik12560:${password}@cluster0.sju2l.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;


// Подключаемся к базе данных
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((err) => {
        console.error('Failed to connect to MongoDB', err);
    });

app.use(cors());
app.listen(8080, () => {
    console.log("Server started on port 8080");
});
app.use(express.json());

const todoSchema = new mongoose.Schema({
    todos: {
        type: String,
        required: true,
    },
    checked: {
        type: Boolean,
        default: false,
    },
});

const Todo = mongoose.model('Todo', todoSchema);

const newTodo = new Todo({
    todos: "Learn MongoDB",
    checked: false,
});

app.get('/todos', async (req, res) => {
    try {
        const data = await Todo.find()
        res.json(data);
    } catch (err) {
        console.log(err);
    }
});

app.post('/todos', async (req, res) => {
    const {todos, checked} = req.body;

    try {
        const newTodos = new Todo({
            todos,
            checked,
        });
        await newTodos.save();
        res.status(201).json(newTodos);
    } catch (err) {
        res.status(500).send(err.message);
    }
});
app.delete('/todos/:id', async (req, res) => {
    try {
        const { id } = req.params;

        const result = await Todo.findByIdAndDelete(id);

        if (!result) {
            return res.status(404).send({ message: 'Элемент не найден' });
        }

        res.status(200).send({ message: `Элемент с ID ${id} успешно удален` });
    } catch (error) {
        console.error('Ошибка удаления:', error);
        res.status(500).send({ message: 'Ошибка при удалении элемента' });
    }
});