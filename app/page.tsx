"use client"

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import SellixLogo from "../public/sellix.svg";
import { useState } from "react";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import supabase from "@/utils/supabase";
import { CircleCheck, Loader2 } from "lucide-react";
 
const formSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
})

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  })
 
  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    joinWaitlist(values.email);
    form.reset();
  }

  const joinWaitlist = async (email: string) => {
    const { error } = await supabase
      .from('waitlist')
      .insert({ email: email })

    if (!error) {
      console.log('insert success');
      setIsLoading(false);
      setIsComplete(true);
    } else {
      console.log('error');
      setIsLoading(false);
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6">

      <div className="flex flex-row mx-auto items-center gap-2 mb-6">
        <Image src={SellixLogo} width={30} height={30} alt="sellix-logo" />
        <span className="text-lg font-bold">Sellix</span>
      </div>

      <h1 className="text-4xl lg:text-6xl text-slate-700 font-bold mb-4 max-w-2xl text-center">Turn Your Bio Link into a Shoppable Store</h1>
      <p className="text-base text-gray-600 mt-2 mb-6">Sell products, track analytics, and accept payments directly from your bio link.</p>
      
      <div className="w-full sm:w-fit">
        {!isComplete ?
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex flex-col lg:flex-row space-4 gap-3 w-full md:w-fit">
                      <FormControl>
                        <Input placeholder="Enter your email" {...field} className="w-full sm:w-64" />
                      </FormControl>
                      <Button type="submit" disabled={isLoading}>
                        {isLoading &&
                          <Loader2 className="animate-spin" />
                        }
                        Join the Waitlist
                      </Button>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </form>
          </Form>
          :
          <div className="flex flex-col gap-2">
            <CircleCheck className="w-10 h-10 text-green-500 mx-auto" />
            <p className="text-center">
              Yay, you are on the waitlist!
            </p>
          </div>
        }
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
        <Card>
          <CardContent className="px-5">
            <h3 className="text-lg font-semibold">Shoppable Links</h3>
            <p className="text-sm text-gray-600 mt-2">Embed product links with instant checkout.</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="px-5">
            <h3 className="text-lg font-semibold">Real-Time Analytics</h3>
            <p className="text-sm text-gray-600 mt-2">Track clicks, conversions, and sales.</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="px-5">
            <h3 className="text-lg font-semibold">Stripe & PayPal Integration</h3>
            <p className="text-sm text-gray-600 mt-2">Accept payments seamlessly.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
