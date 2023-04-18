import mongoose from "mongoose";
const { Schema } = mongoose;

const accountSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    avatar: {
      type: Schema.Types.ObjectId,
      ref: "Image",
      require: false,
    },
    phone: {
      type: Number,
      required: false,
    },
    description: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Account", accountSchema);
