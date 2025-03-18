import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6">
      <h1 className="text-4xl lg:text-6xl text-slate-700 font-bold mb-4 max-w-2xl text-center">Turn Your Bio Link into a Shoppable Store</h1>
      <p className="text-base text-gray-600 mt-2 mb-6">Sell products, track analytics, and accept payments directly from your bio link.</p>
      
      <div className="flex space-x-4">
        <Input placeholder="Enter your email" className="w-64" />
        <Button>Join the Waitlist</Button>
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
