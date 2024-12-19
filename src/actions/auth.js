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
