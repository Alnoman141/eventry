"use client"

import { useAuth } from "@/app/hooks/useAuth"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function SignInOut() {
  const { auth, setAuth } = useAuth()
  const router = useRouter()

  const handleSignOut = (e) => {
    e.preventDefault()
    setAuth(null)
    router.push("/login")
  }

  return (
    <>
      {auth ? (
        <>
          <span className="mx-2">{auth.name}</span>
          <span className="mx-1">|</span>
          <a className="cursor-pointer" href="#" onClick={handleSignOut}>
            Sign Out
          </a>
        </>
      ) : (
        <Link href="/login">Login</Link>
      )}
    </>
  )
}
