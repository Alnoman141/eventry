"use client"

import { useState } from "react"
import { loginUser } from "@/app/actions"
import { useRouter } from "next/navigation"
import { useAuth } from "@/app/hooks/useAuth"

export default function LoginForm() {
  const [error, setError] = useState(null)
  const { setAuth } = useAuth()
  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {

      const formData = new FormData(e.currentTarget)
      const authUser = await loginUser(formData)

      if (authUser) {
        setAuth(authUser)
        
        router.push("/")
      } else {
        setError("Invalid email or password")
      }


    } catch (error) {
      setError(error.message)
    }
  }

  return (
    <>
      <div className="mb-4 text-center">
        {error && <p className="text-red-500">{error}</p>}
      </div>
      <form className="login-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email Address</label>
          <input type="email" name="email" id="email" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" />
        </div>

        <button
          type="submit"
          className="btn-primary w-full mt-4 bg-indigo-600 hover:bg-indigo-800"
        >
          Login
        </button>
      </form>
    </>
  )
}
