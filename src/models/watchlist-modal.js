const { Schema, default: mongoose } = require("mongoose");

const schema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "users",
    },
    movieId: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const WatchlistModel =
  mongoose.models.Watchlist ?? mongoose.model("Watchlist", schema);
