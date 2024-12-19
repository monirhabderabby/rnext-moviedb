"use server";

import { WatchlistModel } from "@/models/watchlist-modal";

export const addToWatchlist = async (data) => {
  try {
    const res = await WatchlistModel.create(data);

    return JSON.stringify(res);
  } catch (error) {
    throw error;
  }
};

export const ifWatched = async ({ userId, movieId }) => {
  try {
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
