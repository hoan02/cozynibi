import mongoose from "mongoose";
const { Schema } = mongoose;

const roomDetailSchema = new Schema(
  {
    images: [
      {
        type: Schema.Types.ObjectId,
        ref: "Image",
        required: true,
      },
    ],
    area: {
      type: Number,
      required: true,
    },
    high: {
      type: Number,
      required: true,
    },
    bedSize: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    equipment: {
      type: [String],
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("RoomDetail", roomDetailSchema);
