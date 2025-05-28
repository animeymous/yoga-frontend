"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const formSchema = z.object({
  firstname: z.string().min(2, { message: "First name must be at least 2 characters." }),
  lastname: z.string().min(2, { message: "Last name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z
    .string()
    .min(7, { message: "Phone number must be at least 7 digits." })
    .max(15, { message: "Phone number must be less than 15 digits." })
    .regex(/^\+?[0-9\s\-()]+$/, { message: "Phone number contains invalid characters." }),
  subject: z.string().min(3, { message: "Subject must be at least 3 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

type ContactFormValues = z.infer<typeof formSchema>;

const inputFocusVariants = {
  focused: { borderColor: "#ef4444", boxShadow: "0 0 8px rgba(239, 68, 68, 0.5)" }, // primary red glow
  unfocused: { borderColor: "#d1d5db", boxShadow: "none" }, // gray border, no shadow
};

const buttonVariants = {
  idle: { scale: 1, boxShadow: "none" },
  hover: {
    scale: 1.05,
    boxShadow: "0 8px 15px rgba(239, 68, 68, 0.6)",
    transition: { duration: 0.3, ease: "easeInOut" },
  },
  tap: { scale: 0.95 },
};

export default function ContactForm() {
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstname: "",
      lastname: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = (values: ContactFormValues) => {
    console.log("Form Submitted:", values);
    // Handle actual form submission here
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeInOut" } }}
      className="contact-us-form-wrap bg-white p-8 shadow-xl rounded-2xl"
      aria-labelledby="contact-form-heading"
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6" noValidate>
          <h2 id="contact-form-heading" className="sr-only">
            Contact Us Form
          </h2>

          {/* Name Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {["firstname", "lastname"].map((field) => (
              <FormField
                key={field}
                control={form.control}
                name={field as keyof ContactFormValues}
                render={({ field: formField, fieldState }) => (
                  <FormItem>
                    <FormLabel className="capitalize">{field.replace(/^\w/, (c) => c.toUpperCase())}</FormLabel>
                    <FormControl>
                      <motion.input
                        {...formField}
                        placeholder={field === "firstname" ? "John" : "Doe"}
                        className="rounded-xl border border-gray-300 px-4 py-2 w-full focus:outline-none"
                        initial="unfocused"
                        animate={formField.value ? "focused" : "unfocused"}
                        variants={inputFocusVariants}
                        onFocus={() => formField.onChange(formField.value)} // trigger animate on focus
                        onBlur={() => formField.onChange(formField.value)}  // trigger animate on blur
                        aria-invalid={fieldState.error ? "true" : "false"}
                        aria-describedby={`${field}-error`}
                      />
                    </FormControl>
                    <FormMessage id={`${field}-error`} />
                  </FormItem>
                )}
              />
            ))}
          </div>

          {/* Email & Phone */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {["email", "phone"].map((field) => (
              <FormField
                key={field}
                control={form.control}
                name={field as keyof ContactFormValues}
                render={({ field: formField, fieldState }) => (
                  <FormItem>
                    <FormLabel className="capitalize">{field}</FormLabel>
                    <FormControl>
                      <motion.input
                        {...formField}
                        placeholder={field === "email" ? "email@example.com" : "+1 234 567 890"}
                        className="rounded-xl border border-gray-300 px-4 py-2 w-full focus:outline-none"
                        initial="unfocused"
                        animate={formField.value ? "focused" : "unfocused"}
                        variants={inputFocusVariants}
                        onFocus={() => formField.onChange(formField.value)}
                        onBlur={() => formField.onChange(formField.value)}
                        aria-invalid={fieldState.error ? "true" : "false"}
                        aria-describedby={`${field}-error`}
                      />
                    </FormControl>
                    <FormMessage id={`${field}-error`} />
                  </FormItem>
                )}
              />
            ))}
          </div>

          {/* Subject */}
          <FormField
            control={form.control}
            name="subject"
            render={({ field: formField, fieldState }) => (
              <FormItem>
                <FormLabel>Subject</FormLabel>
                <FormControl>
                  <motion.input
                    {...formField}
                    placeholder="Your subject"
                    className="rounded-xl border border-gray-300 px-4 py-2 w-full focus:outline-none"
                    initial="unfocused"
                    animate={formField.value ? "focused" : "unfocused"}
                    variants={inputFocusVariants}
                    onFocus={() => formField.onChange(formField.value)}
                    onBlur={() => formField.onChange(formField.value)}
                    aria-invalid={fieldState.error ? "true" : "false"}
                    aria-describedby="subject-error"
                  />
                </FormControl>
                <FormMessage id="subject-error" />
              </FormItem>
            )}
          />

          {/* Message */}
          <FormField
            control={form.control}
            name="message"
            render={({ field: formField, fieldState }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <motion.textarea
                    {...formField}
                    rows={5}
                    placeholder="How can we help you?"
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 resize-none focus:outline-none"
                    initial="unfocused"
                    animate={formField.value ? "focused" : "unfocused"}
                    variants={inputFocusVariants}
                    onFocus={() => formField.onChange(formField.value)}
                    onBlur={() => formField.onChange(formField.value)}
                    aria-invalid={fieldState.error ? "true" : "false"}
                    aria-describedby="message-error"
                  />
                </FormControl>
                <FormMessage id="message-error" />
              </FormItem>
            )}
          />

          <motion.div
            initial="idle"
            whileHover="hover"
            whileTap="tap"
            className="flex justify-center"
          >
            <Button
              type="submit"
              className="w-full md:w-auto bg-gradient-to-r from-red-400 via-red-500 to-red-600 text-white rounded-xl px-6 py-3 font-medium focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 hover:bg-gradient-to-br"
              aria-label="Submit contact form"
            >
              Submit
            </Button>
          </motion.div>
        </form>
      </Form>
    </motion.section>
  );
}