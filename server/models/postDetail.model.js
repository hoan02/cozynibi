import mongoose from "mongoose";
const { Schema } = mongoose;

const postDetailSchema = new Schema(
  {},
  {
    timestamps: true,
  }
);

export default mongoose.model("PostDetail", postDetailSchema);
