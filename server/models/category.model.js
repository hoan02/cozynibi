import mongoose from "mongoose";
const { Schema } = mongoose;

const categorySchema = new Schema(
  {
    id: {
      type: String,
      required: true,
      unique: true,
    },
    idCategory: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
      unique: true,
    },
    iconUrl: {
      type: String,
      required: false,
    },
    slug: { 
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
      required: false,
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

export default mongoose.model("Category", categorySchema);
