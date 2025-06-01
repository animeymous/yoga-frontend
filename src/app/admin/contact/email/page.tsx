import EmailSection from "@/components/sections/email/EmailSection";
import { getUserRoleFromToken } from "@/utils/auth";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function EmailPage() {
  const cookieStore = await cookies();
  const token = cookieStore.get('token')?.value;

  console.log('token', token);

  if (!token) {
    redirect('/admin/auth/login');
  }

  const role = getUserRoleFromToken(token);

  if (role !== 'ADMIN') {
    // Unauthorized access, redirect or show error page
    redirect('/admin/auth/login'); // or any other page
  }
  
  return (
    <>
      <EmailSection />
    </>
  );
}