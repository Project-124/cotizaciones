const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const userRouter = require("./routes/UserRoute")
const PORT = 5050;


// prueba
app.listen(PORT, () => {
  console.log(`El servidor esta en escuchando en el puerto ${PORT}`);
});

app.use(cors());
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));
app.use("/user", userRouter);

app.get("/", (req, res) => {
  res.json({
    success: true,
  });
});

app.use((req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;
  next(error);
});

app.use((err, req, res, next) => {
  console.log(err.message);
  res.status(err.status || 500);
  res.json({
    error: {
      message: err.message,
    },
  });
});
