import mongoose from "mongoose";
const { Schema } = mongoose;

const bannerSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Please specify a title"],
    },
    slug: {
      type: String,
      required: [true, "Please specify a slug"],
    },
    image: { 
      public_id: {
        type: String,
        required: true
      },
      url: {
        type: String,
        required: true
      }
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Banner", bannerSchema);
