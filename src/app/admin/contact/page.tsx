import ContactListSection from '@/components/sections/contact-list/ContactListSection';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { getUserRoleFromToken } from '@/utils/auth';

export default async function ContactPage() {
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

  return <ContactListSection />;
}