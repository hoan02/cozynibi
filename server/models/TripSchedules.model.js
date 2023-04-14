import mongoose from "mongoose";
const { Schema } = mongoose;

const tripScheduleSchema = new Schema(
  {
    id: {
      type: String,
      unique: true,
      required: true,
    }, 
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
