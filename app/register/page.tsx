import { Metadata } from "next"
import Link from "next/link"
import { UserAuthForm } from "./components/user-auth-form";

export const metadata: Metadata = {
  title: "Register",
}

export default function AuthenticationPage() {
  return (
    <>
      <div className="min-h-screen flex justify-center px-4 py-10 lg:px-0">
        <div className="flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Create an account
            </h1>
            <p className="text-sm text-muted-foreground">
              Enter your email below to create your account
            </p>
          </div>
          <UserAuthForm />
          <p className="px-8 text-center text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link
              href="/login"
              className="underline underline-offset-4 hover:text-primary"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </>
  )
}