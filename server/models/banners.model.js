import mongoose from "mongoose";
const { Schema } = mongoose;

const bannerSchema = new Schema(
  {
    title: {
      type: String,
      required: false,
    },
    slug: {
      type: String,
      required: true,
    },
    photoUrl: { 
      type: [String], 
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Banner", bannerSchema);
