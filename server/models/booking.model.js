import mongoose from "mongoose";
const { Schema } = mongoose;

const bookingSchema = new Schema(
  {
    checkIn: {
      type: String,
      required: true,
    },
    checkOut: {
      type: String,
      required: true,
    },
    numberAdults: {
      type: Number,
      required: true,
      default: 0,
    },
    numberChildren: {
      type: Number,
      required: true,
      default: 0,
    },
    idRoom: {
      type: String,
      required: true,
    }
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Booking", bookingSchema);
