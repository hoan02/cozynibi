import mongoose from "mongoose";
const { Schema } = mongoose;

const roomDetailSchema = new Schema(
  {
    product: {
      type: Schema.Types.ObjectId,
      ref: "Products",
      required: true,
    },
    contents: { 
      type: String, 
      required: true,
    },
    area: { 
      type: Number, 
      required: false,
      default: 0
    },
    high: { 
      type: Number, 
      required: false,
      default: 0
    },
    bedSize:{
      type: String, 
      required: false,
    },
    price: { 
      type: Number, 
      required: false,
      default: 0
    },
    equipment:{
      type: [String], 
      required: false,
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

export default mongoose.model("RoomDetails", roomDetailSchema);
