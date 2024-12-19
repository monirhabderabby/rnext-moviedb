const { Schema, default: mongoose } = require("mongoose");

const schema = new Schema({
  first_name: {
    required: true,
    type: String,
  },
  last_name: {
    required: true,
    type: String,
  },
  email: {
    required: true,
    type: String,
  },
  password: {
    required: true,
    type: String,
  },
});

export const UserModal =
  mongoose.models.users ?? mongoose.model("users", schema);
