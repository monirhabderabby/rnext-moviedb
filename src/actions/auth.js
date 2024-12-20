"use server";

import { UserModal } from "@/models/user-modal";

export async function registerUser(data) {
  try {
    const user = await UserModal.create(data);

    return JSON.stringify({
      success: true,
      data: user,
    });
  } catch (error) {
    console.error("Error registering user:", error);
    throw error;
  }
}

export async function loginUser(data) {
  try {
    const user = await UserModal.findOne({ email: data.email });

    if (!user) {
      throw new Error("User not found. Please check your email or sign up.");
    } else if (user.password !== data.password) {
      throw new Error("Incorrect password. Please try again.");
    } else {
      console.log(user);
      return JSON.stringify(user);
    }
  } catch (error) {
    console.error("Error logging in user:", error.message);
    throw error; // Rethrow the error with a meaningful message for the caller
  }
}
