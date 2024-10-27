"use client";
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { blackOpsOne, robotoMono } from '@/app/fonts/fonts';

// Define the form data type
interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

const Contact: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const { register, handleSubmit, formState: { errors } } = useForm<ContactFormData>();

  const onSubmit: SubmitHandler<ContactFormData> = async (data) => {
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitMessage("Message sent successfully!");
      } else {
        setSubmitMessage("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setSubmitMessage(`An error occurred. Please try again later.`);
    }
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#1c0101] px-4">
      <div className="bg-[#F5F5DC] p-8 rounded-lg shadow-2xl w-full max-w-md">
        <h2 className={`${blackOpsOne.className} text-4xl mb-6 text-center text-[#1c0101]`}>
          Contact Me
        </h2>
        <form 
          onSubmit={handleSubmit(onSubmit)} 
          className={`${robotoMono.className} space-y-6`}
        >
          {/* Name Input */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-[#1c0101]">
              Name
            </label>
            <input
              type="text"
              id="name"
              {...register("name", { required: "Name is required" })}
              className="mt-1 block w-full rounded-lg border-none bg-[#1c0101] text-[#F5F5DC] shadow-sm 
                focus:ring-[#F5F5DC] focus:ring-2 focus:outline-none px-4 py-2"
              placeholder="Your Name"
            />
            {errors.name && <span className="text-red-500 text-xs">{errors.name.message}</span>}
          </div>

          {/* Email Input */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-[#1c0101]">
              Email
            </label>
            <input
              type="email"
              id="email"
              {...register("email", { 
                required: "Email is required", 
                pattern: { 
                  value: /^\S+@\S+$/i, 
                  message: "Invalid email address" 
                } 
              })}
              className="mt-1 block w-full rounded-lg border-none bg-[#1c0101] text-[#F5F5DC] shadow-sm 
                focus:ring-[#F5F5DC] focus:ring-2 focus:outline-none px-4 py-2"
              placeholder="your-email@example.com"
            />
            {errors.email && <span className="text-red-500 text-xs">{errors.email.message}</span>}
          </div>

          {/* Message Input */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-[#1c0101]">
              Message
            </label>
            <textarea
              id="message"
              {...register("message", { required: "Message is required" })}
              rows={4}
              className="mt-1 block w-full rounded-lg border-none bg-[#1c0101] text-[#F5F5DC] shadow-sm 
                focus:ring-[#F5F5DC] focus:ring-2 focus:outline-none px-4 py-2"
              placeholder="Write your message here..."
            ></textarea>
            {errors.message && <span className="text-red-500 text-xs">{errors.message.message}</span>}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 px-4 rounded-lg text-[#1c0101] bg-[#F5F5DC] font-bold 
              hover:bg-opacity-90 transition-all duration-300 ease-in-out shadow-md"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </form>

        {/* Submission Message */}
        {submitMessage && (
          <p className="mt-4 text-center text-sm text-[#1c0101]">
            {submitMessage}
          </p>
        )}
      </div>
    </div>
  );
};

export default Contact;
