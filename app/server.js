const express = require('express');
const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const router = express.Router();

const app = express();

const PORT = process.env.PORT || 8080;
const HOST = '0.0.0.0';
const MONGO_URI = process.env.MONGO_URI || '';

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('MongoDB connected !!!');
  })
  .catch((err) => {
    console.log(err);
  });

const TodoSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
});

const Todo = mongoose.model('todo', TodoSchema);

router.get('/', async (req, res) => {
  try {
    const result = await Todo.find();

    res.json(
      result.map((value) => {
        return value.name;
      })
    );
  } catch (err) {
    console.error(err);
  }
});

router.get('/add', async (req, res) => {
  try {
    const name = req.query.name ? req.query.name : 'do nothing';
    const newTodo = new Todo({
      name,
    });

    await newTodo.save();
    res.redirect('/get');
  } catch (err) {
    console.error(err);
  }
});

router.get('/remove', async (req, res) => {
  try {
    const id = req.query.id ? req.query.id : '';
    const result = await Todo.findById(id);
    await result.remove();
    res.redirect('/get');
  } catch (err) {
    console.error(err);
  }
});

app.use('/get', router);

app.get('/', (req, res) => {
  res.send(`Hello from ${process.env.SERVER_NAME}`);
});

app.listen(PORT, HOST, () => {
  console.log(`App is running on ${PORT}`);
});
