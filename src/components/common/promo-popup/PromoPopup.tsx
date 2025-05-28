'use client';

import Image from 'next/image';
import { Dialog, DialogClose, DialogContent } from '@/components/ui/dialog';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

export default function PromoPopup() {

  const [open, setOpen] = useState(false);

  const EXPIRY_DAYS = 1;

  useEffect(() => {
    const stored = localStorage.getItem('seenPromoPopup');
    const now = Date.now();
  
    if (stored) {
      const parsed = JSON.parse(stored);
      const expiresAt = parsed.expiresAt;
  
      if (now < expiresAt) {
        return; // Still within cooldown period
      }
    }
  
    const timeout = setTimeout(() => {
      setOpen(true);
      localStorage.setItem(
        'seenPromoPopup',
        JSON.stringify({ expiresAt: now + EXPIRY_DAYS * 24 * 60 * 60 * 1000 })
      );
    }, 1000);
  
    return () => clearTimeout(timeout);
  }, []);

  const handleClose = () => setOpen(false);

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <AnimatePresence>
        {open && (
          <DialogContent className="max-w-4xl w-full p-0 bg-transparent border-0 shadow-none">
            <DialogClose className="absolute top-4 right-4 z-10 bg-white text-black rounded-full p-2 shadow-md hover:bg-gray-200 transition">
                <X className="w-4 h-4" />
            </DialogClose>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 bg-gray-900 text-white rounded-2xl overflow-hidden w-full min-h-[400px]"
            >
              {/* Image */}
              <div className="relative h-64 md:h-auto">
                <Image
                  src="/images/instagram1.jpg"
                  alt="Yoga Retreat"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>

              {/* Text */}
              <div className="p-6 flex flex-col justify-center gap-4">
                <h2 className="text-2xl font-bold">Are you excited?</h2>
                <p className="text-lg font-semibold">
                  Become a Certified Yoga Teacher in <span className="text-yellow-400">24 Days</span>
                </p>
                <p className="text-sm text-gray-300">
                  🎉 Special Offers! Get <span className="text-green-400 font-medium">$200 USD Early Bird Discount</span>
                </p>
                <Button
                  onClick={() => (window.location.href = '/teacher-training')}
                  className="w-full md:w-auto bg-gradient-to-r from-red-400 via-red-500 to-red-600 text-white rounded-xl px-6 py-3 font-medium focus:ring-4 focus:outline-none focus:ring-red-300 hover:bg-gradient-to-br"
                >
                  Know More
                </Button>
              </div>
            </motion.div>
          </DialogContent>
        )}
      </AnimatePresence>
    </Dialog>
  );
}