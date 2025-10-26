import React from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl w-full space-y-8 bg-white p-8 rounded-xl shadow-lg">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-extrabold text-gray-900">Contact Us</h2>
          <p className="mt-2 text-sm text-gray-600">
            We'd love to hear from you! Fill out the form below and we'll get back to you soon.
          </p>
        </div>
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input type="text" placeholder="Your Name" required />
            <Input type="email" placeholder="Your Email" required />
          </div>
          <Input type="text" placeholder="Subject" required />
          <Textarea placeholder="Your Message" rows={5} required />
          <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg">
            Send Message
          </Button>
        </form>
      </div>
    </div>
  );
}
