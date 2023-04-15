import mongoose from "mongoose";
const { Schema } = mongoose;

const travelDetailSchema = new Schema(
  {
    product: {
      type: Schema.Types.ObjectId,
      ref: "Products",
      required: true,
    },
    tourCode:{
      type: String, 
      required: false
    },
    photos:{
      type: [String], 
      required: false
    },
    tripSchedule: {
      type: Schema.Types.ObjectId,
      ref: "TripSchedules",
      required: false, 
    },
    inclusions:{
      type: [String], 
      required: false
    },
    exclusions:{
      type: [String], 
      required: false
    },
    price: {
      type: [String], 
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

export default mongoose.model("TravelDetails", travelDetailSchema);
