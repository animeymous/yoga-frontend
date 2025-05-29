'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { fadeIn, staggerContainer } from '@/utils/motion';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Bed, UtensilsCrossed, Wifi, Library, Leaf, Shirt, Lock, Heart } from 'lucide-react';

const roomTypes = [
  {
    type: "Private Rooms",
    price: "₹2500/night",
    features: ["En-suite bathroom", "Study desk", "Wardrobe", "Daily housekeeping"],
    image: "/images/yoga1.jpg"
  },
  {
    type: "Shared Rooms",
    price: "₹1500/night",
    features: ["2-3 persons per room", "Shared bathroom", "Personal lockers", "Common study area"],
    image: "/images/yoga2.jpg"
  },
  {
    type: "Dormitory",
    price: "₹800/night",
    features: ["Budget-friendly option", "Shared facilities", "Community living", "Secure storage"],
    image: "/images/yoga3.jpg"
  }
];

const mealSchedule = [
  {
    meal: "Breakfast (8:00 AM)",
    items: ["Fresh fruits", "Porridge", "Herbal tea", "Nuts and seeds"],
    description: "Start your day with light, energizing foods that prepare you for morning practice."
  },
  {
    meal: "Lunch (12:30 PM)",
    items: ["Rice", "Dal", "Seasonal vegetables", "Salad", "Yogurt"],
    description: "Our main meal of the day is nutritious and balanced, following yogic principles."
  },
  {
    meal: "Dinner (7:00 PM)",
    items: ["Soup", "Whole grain bread", "Steamed vegetables", "Herbal tea"],
    description: "Light evening meals promote good sleep and digestion."
  }
];

const amenities = [
  {
    title: "Wi-Fi",
    description: "High-speed internet in common areas",
    icon: Wifi
  },
  {
    title: "Library",
    description: "Extensive collection of yoga and spiritual books",
    icon: Library
  },
  {
    title: "Garden",
    description: "Peaceful garden for meditation and relaxation",
    icon: Leaf
  },
  {
    title: "Laundry",
    description: "Washing machines and drying area available",
    icon: Shirt
  },
  {
    title: "Security",
    description: "24/7 security and CCTV surveillance",
    icon: Lock
  },
  {
    title: "Medical Care",
    description: "First aid and nearby medical facilities",
    icon: Heart
  }
];

export default function FacilitiesPage() {
  return (
    <article className="bg-gradient-to-b from-amber-50 to-white min-h-screen">
      {/* Hero Section - Custom for performance */}
      <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/yoga6.jpg"
            alt="Accommodation at Ashu Yoga Ashram"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="absolute inset-0 flex items-center justify-center text-center px-4">
          <div className="max-w-3xl">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-bold text-white mb-4"
            >
              Food & Accommodation
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl text-white/90"
            >
              Experience peaceful living with nourishing sattvic meals
            </motion.p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Main Sections Tabs */}
        <Tabs defaultValue="accommodation" className="w-full">
          <TabsList className="w-full flex flex-wrap h-auto gap-2 bg-transparent mb-8 justify-center">
            <TabsTrigger 
              value="accommodation"
              className="data-[state=active]:bg-amber-100 data-[state=active]:text-amber-900 px-6"
            >
              <div className="flex items-center gap-2">
                <Bed className="h-4 w-4" />
                <span>Accommodation</span>
              </div>
            </TabsTrigger>
            <TabsTrigger 
              value="food"
              className="data-[state=active]:bg-amber-100 data-[state=active]:text-amber-900 px-6"
            >
              <div className="flex items-center gap-2">
                <UtensilsCrossed className="h-4 w-4" />
                <span>Food</span>
              </div>
            </TabsTrigger>
          </TabsList>

          {/* Accommodation Section */}
          <TabsContent value="accommodation" className="mt-0">
            <motion.section
              variants={staggerContainer(0.1, 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="mb-16"
            >
              <div className="grid md:grid-cols-2 gap-8">
                <motion.div variants={fadeIn('right', 'tween', 0.2, 1)}>
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-xl font-semibold text-gray-900">Room Types</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {roomTypes.map((room) => (
                        <div key={room.type} className="bg-stone-50 rounded-lg p-4">
                          <div className="flex justify-between items-start mb-2">
                            <h4 className="font-medium text-gray-900">{room.type}</h4>
                            <Badge variant="secondary">{room.price}</Badge>
                          </div>
                          <ul className="space-y-2">
                            {room.features.map((feature) => (
                              <li key={feature} className="flex items-center gap-2 text-gray-600">
                                <svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                </motion.div>
                <motion.div variants={fadeIn('left', 'tween', 0.2, 1)}>
                  <div className="grid grid-cols-2 gap-4">
                    {roomTypes.map((room) => (
                      <div key={room.type} className="relative h-48 rounded-lg overflow-hidden">
                        <Image
                          src={room.image}
                          alt={room.type}
                          fill
                          className="object-cover hover:scale-110 transition-transform duration-300"
                          sizes="(max-width: 768px) 50vw, 25vw"
                        />
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.section>
          </TabsContent>

          {/* Food Section */}
          <TabsContent value="food" className="mt-0">
            <motion.section
              variants={staggerContainer(0.1, 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="mb-16"
            >
              <Card className="bg-gradient-to-r from-amber-50 to-stone-50">
                <CardContent className="p-8 md:p-12">
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <motion.div variants={fadeIn('right', 'tween', 0.2, 1)}>
                      <h2 className="text-3xl font-bold mb-6 text-gray-900">Sattvic Food</h2>
                      <p className="text-gray-600 mb-6">
                        Our kitchen serves fresh, nutritious, and balanced vegetarian meals prepared according to yogic principles. 
                        All meals are cooked with love and mindfulness to support your practice and well-being.
                      </p>
                      <div className="space-y-4">
                        {mealSchedule.map((meal) => (
                          <Card key={meal.meal} className="bg-white">
                            <CardContent className="p-4">
                              <h4 className="font-medium mb-2 text-gray-900">{meal.meal}</h4>
                              <p className="text-sm text-gray-600 mb-3">{meal.description}</p>
                              <div className="flex flex-wrap gap-2">
                                {meal.items.map((item) => (
                                  <Badge key={item} variant="secondary" className="bg-amber-100 text-amber-800 hover:bg-amber-200">
                                    {item}
                                  </Badge>
                                ))}
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </motion.div>
                    <motion.div variants={fadeIn('left', 'tween', 0.2, 1)}>
                      <div className="relative h-[500px] rounded-xl overflow-hidden">
                        <Image
                          src="/images/yoga5.jpg"
                          alt="Sattvic Food"
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      </div>
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
            </motion.section>
          </TabsContent>
        </Tabs>

        {/* Amenities Section - Using shadcn Card */}
        <motion.section
          variants={staggerContainer(0.1, 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">Additional Amenities</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {amenities.map((amenity, index) => (
              <motion.div
                key={amenity.title}
                variants={fadeIn('up', 'spring', index * 0.2, 0.8)}
              >
                <Card className="hover:shadow-xl transition-shadow">
                  <CardContent className="p-6">
                    <amenity.icon className="w-8 h-8 text-amber-500 mb-4" />
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">{amenity.title}</h3>
                    <p className="text-gray-600">{amenity.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section
          variants={fadeIn('up', 'spring', 0.5, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <h2 className="text-2xl font-bold mb-4 text-gray-900">Ready to Begin Your Journey?</h2>
          <p className="text-gray-600 mb-6">
            Book your stay with us and experience the perfect blend of comfort and spiritual growth.
          </p>
          <Button 
            variant="default"
            size="lg"
            className="bg-amber-600 hover:bg-amber-700 rounded-full px-8"
          >
            Book Now
          </Button>
        </motion.section>
      </div>
    </article>
  );
} 