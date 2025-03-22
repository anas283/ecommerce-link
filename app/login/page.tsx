import { Metadata } from "next"
import Link from "next/link"
import { LoginForm } from "./components/login-form";

export const metadata: Metadata = {
  title: "Login",
}

export default function AuthenticationPage() {
  return (
    <>
      <div className="min-h-screen flex justify-center px-4 py-10 lg:px-0">
        <div className="flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Log in to your account
            </h1>
          </div>
          <LoginForm />
          <p className="px-8 text-center text-sm text-muted-foreground">
            New to Stellium?{" "}
            <Link
              href="/register"
              className="underline underline-offset-4 hover:text-primary"
            >
              Create account
            </Link>
          </p>
        </div>
      </div>
    </>
  )
}