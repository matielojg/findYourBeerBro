import mongoose from "mongoose";

mongoose.connect("mongodb+srv://alura:<senha_banco>@node-express.s3z5wdp.mongodb.net/alura-node");

let db = mongoose.connection;
export default db;
