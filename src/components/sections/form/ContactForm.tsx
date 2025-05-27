import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"

const formSchema = z.object({
    firstname: z.string().min(2, {
      message: "First name must be at least 2 characters long.",
    }),
    lastname: z.string().min(2, {
      message: "Last name must be at least 2 characters long.",
    }),
    email: z.string().email({
      message: "Please enter a valid email address.",
    }),
    phone: z
      .string()
      .min(7, { message: "Phone number must be at least 7 digits." })
      .max(15, { message: "Phone number must be less than 15 digits." })
      .regex(/^\+?[0-9\s\-()]+$/, {
        message: "Phone number contains invalid characters.",
      }),
    subject: z.string().min(3, {
      message: "Subject must be at least 3 characters long.",
    }),
    message: z.string().min(10, {
      message: "Message must be at least 10 characters long.",
    }),
});

type ContactFormValues = z.infer<typeof formSchema>

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
  })

  const onSubmit = (values: ContactFormValues) => {
    console.log("Submitted:", values)
    // TODO: Handle your form submission logic
  }

  return (
    <div className="contact-us-form-wrap bg-white p-8 shadow-xl rounded-2xl">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {/* Row 1: First & Last Name */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="firstname"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>First Name</FormLabel>
                  <FormControl>
                    <Input placeholder="John" {...field} className="rounded-xl border-gray-300 focus:ring-primary" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastname"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Last Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Doe" {...field} className="rounded-xl border-gray-300 focus:ring-primary" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Row 2: Email & Phone */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="email@example.com" {...field} className="rounded-xl border-gray-300 focus:ring-primary" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone</FormLabel>
                  <FormControl>
                    <Input placeholder="+1 234 567 890" {...field} className="rounded-xl border-gray-300 focus:ring-primary" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Row 3: Subject */}
          <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Subject</FormLabel>
                <FormControl>
                  <Input placeholder="Subject" {...field} className="rounded-xl border-gray-300 focus:ring-primary" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Row 4: Message */}
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <textarea
                    {...field}
                    rows={5}
                    placeholder="Your message here..."
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full md:w-auto bg-primary text-white hover:bg-primary/90 rounded-xl px-6 py-3">
            Submit
          </Button>
        </form>
      </Form>
    </div>
  )
}
