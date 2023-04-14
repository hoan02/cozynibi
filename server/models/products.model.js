import mongoose from "mongoose";
const { Schema } = mongoose;

const productSchema = new Schema(
  {
    id: {
      type: String,
      required: true,
      unique: true,
    },
    idCategory:{
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
      required: false,
    },
    notes: {
      type: String,
      required: false,
    },
    image: { 
      type: String, 
      required: true,
    },
    metaTitle: { 
      type: String, 
      required: false
    },
    metaKeyword: { 
      type: String, 
      required: false
    },
    metaDescription: { 
      type: String, 
      required: false
    },
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    updatedBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Products", productSchema);
