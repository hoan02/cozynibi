import mongoose from "mongoose";
const { Schema } = mongoose;

const tourDetailSchema = new Schema(
  {
    tourCode: {
      type: Number,
      required: true,
    },
    tripSchedule: [
      {
        time: {
          type: String,
          required: true,
        },
        content: {
          type: String,
          required: true,
        },
      },
    ],
    inclusions: {
      type: [String],
      required: true,
    },
    exclusions: {
      type: [String],
      required: true,
    },
    price: [
      {
        person: {
          type: Number,
          required: true,
        },
        pricePerPerson: {
          type: Number,
          required: true,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("TourDetail", tourDetailSchema);
