import { eventModel } from "@/models/event-models"
import { userModel } from "@/models/user-model"
import {
  replaceMongoIdInArray,
  replaceMongoIdInObject,
} from "@/utils/data-util"

export const getAllEvents = async () => {
  try {
    const events = await eventModel.find().lean()
    return replaceMongoIdInArray(events)
  } catch (error) {
    console.error("Error fetching events:", error)
  }
}

export const getEventById = async (id) => {
  try {
    const event = await eventModel.findById(id).lean()
    if (event) {
      return replaceMongoIdInObject(event)
    }
    return null
  } catch (error) {
    console.error(`Error fetching event with id ${id}:`, error)
  }
}

export const createNewUser = async (userData) => {
  try {
    const newUser = await userModel.create(userData)
    return newUser;
  } catch (error) {
    console.error("Error creating new user:", error)
  }
}

export const getUserByCredentials = async (formData) => {
  try {
    const user = await userModel.findOne({
      email: formData.email,
      password: formData.password,
    }).lean()

    return user;
  } catch (error) {
    console.error("Error fetching user by credentials:", error)
  }
}
