"use server"

import { render } from "@react-email/render";
import { createNewUser, getUserByCredentials, updateEventInterest, updateGoingEvent, getEventById } from "@/queries/index"
import { redirect } from "next/navigation"
import { revalidatePath } from "next/cache"
import { Resend } from "resend"
import EmailTemplate from "@/components/payment/EmailTemplate"

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

export const addGoingEvent = async (eventId, authUser) => {
  try {
    await updateGoingEvent(eventId, authUser?.id)
    await sendEmail(eventId, authUser)
  } catch (error) {
    throw error
  }

  revalidatePath("/")
  redirect("/")
}

export const sendEmail = async (eventId, authUser) => {
  try {
    const event = await getEventById(eventId)

    if (event) {
      const resend = new Resend(process.env.RESEND_API_KEY)
      const message = `Dear ${authUser.name},\n\nThank you for registering for ${event.name}!\n\nEvent Details:\nLocation: ${event.location}\nDate & Time: ${new Date(event.date).toLocaleString()}\n\nWe look forward to seeing you there!\n\nBest regards,\nEventry Team`

      // const html = render(<EmailTemplate message={message} />);

      const send = await resend.emails.send({
        from: "onboarding@resend.dev",
        to: authUser?.email,
        subject: `Registration Confirmation for ${event.name}`,
        text: message,
      })
    }

  } catch (error) {
    throw error
  }
}
