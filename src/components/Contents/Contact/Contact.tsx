"use client";
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { inter } from "@/app/fonts/fonts";
import { motion } from "framer-motion";

// Define the form data type
interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

const Contact: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>();

  const onSubmit: SubmitHandler<ContactFormData> = async (data) => {
    setIsSubmitting(true);
    setSubmitMessage("");
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitMessage("Message sent successfully!");
        reset();
      } else {
        setSubmitMessage("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setSubmitMessage(`An error occurred. Please try again later.`);
    }
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--background)] px-4 py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        className="glass border border-[var(--border)] p-8 sm:p-12 rounded-2xl w-full max-w-2xl"
        style={{ boxShadow: "0 8px 32px rgba(0, 0, 0, 0.06)" }}
      >
        <h2
          className={`${inter.className} text-4xl sm:text-5xl font-semibold mb-3 text-center text-[var(--foreground)] tracking-tight`}
        >
          Get in Touch
        </h2>
        <p
          className={`${inter.className} text-base sm:text-lg text-center text-[var(--secondary)] mb-10 leading-relaxed`}
        >
          Let&#39;s build something amazing together
        </p>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className={`${inter.className} space-y-6`}
        >
          {/* Name Input */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-[var(--foreground)] mb-2.5"
            >
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              {...register("name", { required: "Name is required" })}
              className={`w-full rounded-xl border ${
                errors.name
                  ? "border-red-500 focus:ring-red-500"
                  : "border-[var(--border)] focus:ring-[var(--accent)]"
              } bg-[var(--card-bg)] text-[var(--foreground)] 
                focus:ring-2 focus:border-transparent focus:outline-none px-4 py-3.5 transition-all text-[15px] placeholder:text-[var(--secondary)]`}
              placeholder="John Doe"
            />
            {errors.name && (
              <motion.span
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-red-500 text-sm mt-2 block flex items-center gap-1"
              >
                ⚠ {errors.name.message}
              </motion.span>
            )}
          </div>

          {/* Email Input */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-[var(--foreground)] mb-2.5"
            >
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Please enter a valid email address",
                },
              })}
              className={`w-full rounded-xl border ${
                errors.email
                  ? "border-red-500 focus:ring-red-500"
                  : "border-[var(--border)] focus:ring-[var(--accent)]"
              } bg-[var(--card-bg)] text-[var(--foreground)] 
                focus:ring-2 focus:border-transparent focus:outline-none px-4 py-3.5 transition-all text-[15px] placeholder:text-[var(--secondary)]`}
              placeholder="john.doe@example.com"
            />
            {errors.email && (
              <motion.span
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-red-500 text-sm mt-2 block flex items-center gap-1"
              >
                ⚠ {errors.email.message}
              </motion.span>
            )}
          </div>

          {/* Message Input */}
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-[var(--foreground)] mb-2.5"
            >
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              {...register("message", {
                required: "Message is required",
                minLength: {
                  value: 10,
                  message: "Message must be at least 10 characters",
                },
              })}
              rows={6}
              className={`w-full rounded-xl border ${
                errors.message
                  ? "border-red-500 focus:ring-red-500"
                  : "border-[var(--border)] focus:ring-[var(--accent)]"
              } bg-[var(--card-bg)] text-[var(--foreground)] 
                focus:ring-2 focus:border-transparent focus:outline-none px-4 py-3.5 transition-all resize-none text-[15px] placeholder:text-[var(--secondary)] leading-relaxed`}
              placeholder="Tell me about your project or idea..."
            ></textarea>
            {errors.message && (
              <motion.span
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-red-500 text-sm mt-2 block flex items-center gap-1"
              >
                ⚠ {errors.message.message}
              </motion.span>
            )}
          </div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            disabled={isSubmitting}
            whileHover={{ scale: isSubmitting ? 1 : 1.01 }}
            whileTap={{ scale: isSubmitting ? 1 : 0.99 }}
            className={`w-full py-4 px-4 rounded-full text-white font-medium text-[16px]
              transition-all duration-200 flex items-center justify-center gap-2 mt-8
              ${
                isSubmitting
                  ? "bg-[var(--secondary)] cursor-not-allowed"
                  : "bg-[var(--accent)] hover:bg-[var(--accent-hover)] shadow-lg hover:shadow-xl"
              }`}
          >
            {isSubmitting ? (
              <>
                <svg
                  className="animate-spin h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Sending...
              </>
            ) : (
              <>
                Send Message
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 8L14 8M14 8L8 2M14 8L8 14"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </>
            )}
          </motion.button>
        </form>

        {/* Submission Message */}
        {submitMessage && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`${
              inter.className
            } mt-6 p-4 rounded-xl text-center text-sm font-medium ${
              submitMessage.includes("success")
                ? "bg-green-500/10 text-green-600 border border-green-500/20"
                : "bg-red-500/10 text-red-600 border border-red-500/20"
            }`}
          >
            {submitMessage.includes("success") ? "✓ " : "✗ "}
            {submitMessage}
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default Contact;
