"use server"

import { createNewUser, getUserByCredentials } from "@/queries/index"
import { redirect } from "next/navigation"

export async function registerNewUser(formData) {
  const data = Object.fromEntries(formData)
  const newUser = await createNewUser(data)

  redirect("/login")
}

export async function loginUser(formData) {
  const credentials = {}
  credentials.email = formData.get("email")
  credentials.password = formData.get("password")

  const user = await getUserByCredentials(credentials)

  if (user) {
    redirect("/")
  } else {
    throw new Error(`The user with email ${credentials.email} was not found.`)
  }
}
