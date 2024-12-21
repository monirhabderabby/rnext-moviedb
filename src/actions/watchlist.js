"use server";

import { dbConnect } from "@/lib/mongo";
import { WatchlistModel } from "@/models/watchlist-modal";

export const addToWatchlist = async (data) => {
  try {
    await dbConnect();
    const res = await WatchlistModel.create(data);

    return JSON.stringify(res);
  } catch (error) {
    throw error;
  }
};

export const ifWatched = async ({ userId, movieId }) => {
  try {
    await dbConnect();
    const found = await WatchlistModel.findOne({
      userId,
      movieId,
    });

    if (found) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    throw error;
  }
};

export const removeWatchlist = async ({ userId, movieId }) => {
  try {
    await dbConnect();
    const deleted = await WatchlistModel.deleteOne({
      userId,
      movieId,
    });

    if (deleted) {
      return JSON.stringify(deleted);
    }
  } catch (error) {
    throw error;
  }
};
