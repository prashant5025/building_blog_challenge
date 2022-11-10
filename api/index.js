const express = require("express");
const app = express();
const dotenv = require("dotenv");
const path = require("path");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/user");
const postRoute = require("./routes/post");
const categoryRoute = require("./routes/categories");
const multer = require("multer");

dotenv.config();
app.use(express.json());
//
app.use("/images",express.static(path.join(__dirname,"/images")));
//Database connection
mongoose
  .connect(("mongodb://127.0.0.1:27017/blog"), {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));



  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "images");
    },
    filename: (req, file, cb) => {
      cb(null, "file.png");
    }
  })

  const upload = multer({storage: storage});
  app.post("/upload",upload.single("file"),(req,res)=> {
    res.status(200).json("File has been uploaded");
  })

//Routes
  app.use("/auth",authRoute);
  app.use("/users",userRoute);
  app.use("/posts",postRoute);
  app.use("/category",categoryRoute);

//Server
const PORT = process.env.PORT || 8000;
app.listen("5000", () => {
  console.log(`Server running on port ${PORT}`);
});
