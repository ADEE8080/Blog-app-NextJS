import mongoose from "mongoose";

export const ConnectDB = async() => {
    await mongoose.connect('mongodb+srv://greatstack:greatstack@cluster0.f57gv.mongodb.net/blog-app');
    console.log("DB Connected");
}

