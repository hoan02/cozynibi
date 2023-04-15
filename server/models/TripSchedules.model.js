import mongoose from "mongoose";
const { Schema } = mongoose;

const tripScheduleSchema = new Schema(
  {
    time: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    }
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("TripSchedules", tripScheduleSchema);
