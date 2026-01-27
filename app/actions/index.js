"use server"

import { createNewUser, getUserByCredentials, updateEventInterest } from "@/queries/index"
import { redirect } from "next/navigation"
import { revalidatePath } from "next/cache"

export async function registerNewUser(formData) {
  const data = Object.fromEntries(formData)
  const newUser = await createNewUser(data)

  redirect("/login")
}

export async function loginUser(formData) {
  try {
    const credentials = {}
    credentials.email = formData.get("email")
    credentials.password = formData.get("password")

    const user = await getUserByCredentials(credentials)

    if (user) {
      // Set a cookie or session here as needed
      return user
    }

  } catch (error) {
    throw error
  }
}

export const updateInterestedEvent = async (eventId, authId) => {
  try {
    await updateEventInterest(eventId, authId)
  } catch (error) {
    throw error
  }
  
  revalidatePath("/")
}
