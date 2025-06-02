// src/app/admin/contact/page.tsx
'use client';

import { useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { useRouter } from 'next/navigation';
import { getApiUrl } from '@/config/env';

interface Contact {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export default function ContactListSection() {
  const router = useRouter();
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const storedContacts = sessionStorage.getItem('contacts');
        if (storedContacts) {
          setContacts(JSON.parse(storedContacts));
          setLoading(false);
          return;
        }

        const token = document.cookie.split('; ').find(row => row.startsWith('token='))?.split('=')[1];

        const res = await fetch(`${getApiUrl('contact')}`, {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });

        const data = await res.json();

        setContacts(data);
        sessionStorage.setItem('contacts', JSON.stringify(data));
      } catch (error) {
        console.error('Failed to fetch contacts:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchContacts();
  }, []);

  const handleCardClick = (email: string) => {
    sessionStorage.setItem('contact_email', email);
    router.push('/admin/contact/email');
  };  

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold">Contact Submissions</h1>

      {loading ? (
        <p>Loading contacts...</p>
      ) : contacts.length === 0 ? (
        <p>No contacts found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {contacts.map((contact) => (
            <article
              key={contact.id}
              onClick={() => handleCardClick(contact.email)}
              className="cursor-pointer rounded-md shadow-md hover:shadow-lg transition-shadow duration-300"
              aria-label={`Contact from ${contact.firstname} ${contact.lastname}`}
              style={{
                backgroundColor: '#F5F5F0', // Light sage from theme
                color: '#2C3639', // Deep gray from theme
              }}
            >
              <CardContent className="space-y-2 p-4">
                <p>
                  <strong>Name:</strong> {contact.firstname} {contact.lastname}
                </p>
                <p>
                  <strong>Email:</strong> {contact.email}
                </p>
                <p>
                  <strong>Phone:</strong> {contact.phone}
                </p>
                <p>
                  <strong>Subject:</strong> {contact.subject}
                </p>
                <p>
                  <strong>Message:</strong> {contact.message}
                </p>
              </CardContent>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}