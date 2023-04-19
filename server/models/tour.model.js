import mongoose from "mongoose";
const { Schema } = mongoose;

const tourSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    note: {
      type: String,
      required: true,
    },
    detail: {
      type: Schema.Types.ObjectId,
      ref: "TourDetail",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Tour", tourSchema);
