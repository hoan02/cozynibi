import mongoose from "mongoose";
const { Schema } = mongoose;

const bannerSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    image: [
      {
        type: Schema.Types.ObjectId,
        ref: "Image",
        isActive: {
          type: Boolean,
          default: true,
        },
        required: false,
      },
    ],
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Banner", bannerSchema);
