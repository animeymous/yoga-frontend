'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { fadeIn, staggerContainer } from '@/utils/motion';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Book, Users, Flower2, Heart, Star, Sunrise } from 'lucide-react';

export default function AshramPage() {
  return (
    <article className="bg-gradient-to-b from-stone-50 to-white">
      {/* Hero Section - Custom for performance */}
      <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
        <Image
          src="/images/yoga7.jpg"
          alt="Ashu Yoga Ashram"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center text-center px-4">
          <div className="max-w-3xl">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-bold text-white mb-4"
            >
              Welcome to Ashu Yoga Ashram
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl text-white/90"
            >
              A sacred space for transformation, learning, and spiritual growth
            </motion.p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Main Content Tabs */}
        <Tabs defaultValue="about" className="w-full">
          <TabsList className="w-full flex flex-wrap h-auto gap-2 bg-transparent mb-8 justify-center">
            <TabsTrigger 
              value="about"
              className="data-[state=active]:bg-amber-100 data-[state=active]:text-amber-900 px-6"
            >
              <div className="flex items-center gap-2">
                <Book className="h-4 w-4" />
                <span>About</span>
              </div>
            </TabsTrigger>
            <TabsTrigger 
              value="philosophy"
              className="data-[state=active]:bg-amber-100 data-[state=active]:text-amber-900 px-6"
            >
              <div className="flex items-center gap-2">
                <Flower2 className="h-4 w-4" />
                <span>Philosophy</span>
              </div>
            </TabsTrigger>
            <TabsTrigger 
              value="community"
              className="data-[state=active]:bg-amber-100 data-[state=active]:text-amber-900 px-6"
            >
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4" />
                <span>Community</span>
              </div>
            </TabsTrigger>
          </TabsList>

          {/* About Tab */}
          <TabsContent value="about" className="mt-0">
            <motion.section
              variants={staggerContainer(0.1, 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="mb-16"
            >
              <Card className="bg-gradient-to-r from-amber-50 to-stone-50">
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <motion.div
                      variants={fadeIn('right', 'tween', 0.2, 1)}
                      className="relative h-[400px] rounded-2xl overflow-hidden"
                    >
                      <Image
                        src="/images/yoga2.jpg"
                        alt="Yoga practice at Ashu Yoga Ashram"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </motion.div>
                    <motion.div variants={fadeIn('left', 'tween', 0.2, 1)}>
                      <h2 className="text-3xl font-bold mb-6 text-gray-900">Our Sacred Space</h2>
                      <p className="text-gray-600 mb-4">
                        Ashu Yoga Ashram is more than just a yoga school – it's a sanctuary where ancient wisdom meets modern understanding. 
                        Nestled in a serene environment, our ashram provides the perfect setting for deep spiritual practice and authentic yoga training.
                      </p>
                      <p className="text-gray-600 mb-6">
                        We maintain the traditional guru-shishya (teacher-student) relationship while incorporating contemporary teaching methodologies 
                        to make the ancient science of yoga accessible to modern practitioners.
                      </p>
                      <Button variant="outline" className="rounded-full">Learn More</Button>
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
            </motion.section>
          </TabsContent>

          {/* Philosophy Tab */}
          <TabsContent value="philosophy" className="mt-0">
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
                      <CardTitle className="text-2xl font-bold text-gray-900">Our Philosophy</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      {[
                        {
                          title: "Traditional Wisdom",
                          description: "Preserving and sharing authentic yogic knowledge passed down through generations.",
                          icon: <Book className="h-6 w-6 text-amber-600" />
                        },
                        {
                          title: "Holistic Growth",
                          description: "Focusing on the complete development of body, mind, and spirit.",
                          icon: <Heart className="h-6 w-6 text-amber-600" />
                        },
                        {
                          title: "Modern Integration",
                          description: "Adapting ancient practices to meet contemporary needs while maintaining authenticity.",
                          icon: <Star className="h-6 w-6 text-amber-600" />
                        },
                        {
                          title: "Daily Practice",
                          description: "Encouraging consistent sadhana (practice) for lasting transformation.",
                          icon: <Sunrise className="h-6 w-6 text-amber-600" />
                        }
                      ].map((item, index) => (
                        <div key={item.title} className="flex gap-4 items-start">
                          {item.icon}
                          <div>
                            <h3 className="font-semibold text-gray-900">{item.title}</h3>
                            <p className="text-gray-600">{item.description}</p>
                          </div>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                </motion.div>
                <motion.div variants={fadeIn('left', 'tween', 0.2, 1)}>
                  <Card className="h-full">
                    <CardHeader>
                      <CardTitle className="text-2xl font-bold text-gray-900">Daily Schedule</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ScrollArea className="h-[400px] pr-4">
                        {[
                          { time: "5:00 AM", activity: "Wake Up", description: "Begin the day with intention" },
                          { time: "5:30 AM", activity: "Meditation", description: "Morning silence and mindfulness" },
                          { time: "6:30 AM", activity: "Asana Practice", description: "Dynamic morning yoga session" },
                          { time: "8:00 AM", activity: "Breakfast", description: "Sattvic morning meal" },
                          { time: "9:30 AM", activity: "Philosophy Class", description: "Study of yoga texts and principles" },
                          { time: "11:00 AM", activity: "Karma Yoga", description: "Selfless service activities" },
                          { time: "12:30 PM", activity: "Lunch", description: "Main meal of the day" },
                          { time: "2:00 PM", activity: "Self-Study", description: "Personal practice and reflection" },
                          { time: "4:00 PM", activity: "Evening Practice", description: "Gentle asana and pranayama" },
                          { time: "6:00 PM", activity: "Meditation", description: "Evening spiritual practice" },
                          { time: "7:00 PM", activity: "Dinner", description: "Light evening meal" },
                          { time: "9:00 PM", activity: "Rest", description: "Prepare for sleep" }
                        ].map((item, index) => (
                          <div key={item.time} className="mb-4">
                            <div className="flex justify-between items-center mb-1">
                              <Badge variant="outline" className="font-mono">{item.time}</Badge>
                              <span className="font-semibold text-gray-900">{item.activity}</span>
                            </div>
                            <p className="text-sm text-gray-600">{item.description}</p>
                            {index < 11 && <Separator className="mt-4" />}
                          </div>
                        ))}
                      </ScrollArea>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </motion.section>
          </TabsContent>

          {/* Community Tab */}
          <TabsContent value="community" className="mt-0">
            <motion.section
              variants={staggerContainer(0.1, 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <Card className="bg-gradient-to-r from-amber-50 to-stone-50">
                <CardContent className="p-8">
                  <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Global Community</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                      Join a thriving community of practitioners from around the world, united in their journey of self-discovery and spiritual growth.
                    </p>
                  </div>
                  
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                      {
                        stat: "15+",
                        label: "Years of Teaching",
                        description: "Dedicated to spreading authentic yoga knowledge"
                      },
                      {
                        stat: "1000+",
                        label: "Certified Teachers",
                        description: "Trained in traditional yogic practices"
                      },
                      {
                        stat: "50+",
                        label: "Countries Reached",
                        description: "Global community of practitioners"
                      },
                      {
                        stat: "10000+",
                        label: "Students Transformed",
                        description: "Lives touched through yoga"
                      },
                      {
                        stat: "30+",
                        label: "Annual Retreats",
                        description: "Immersive spiritual experiences"
                      },
                      {
                        stat: "24/7",
                        label: "Spiritual Support",
                        description: "Continuous guidance and mentorship"
                      }
                    ].map((item, index) => (
                      <motion.div
                        key={item.label}
                        variants={fadeIn('up', 'spring', index * 0.2, 0.8)}
                      >
                        <Card>
                          <CardContent className="p-6 text-center">
                            <h3 className="text-3xl font-bold text-amber-600 mb-2">{item.stat}</h3>
                            <h4 className="font-semibold text-gray-900 mb-2">{item.label}</h4>
                            <p className="text-sm text-gray-600">{item.description}</p>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.section>
          </TabsContent>
        </Tabs>

        {/* CTA Section */}
        <motion.section
          variants={fadeIn('up', 'spring', 0.5, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Card className="bg-gradient-to-r from-amber-100 to-amber-50">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">Begin Your Spiritual Journey</h2>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Take the first step towards transformation. Join our community and discover the profound wisdom of yoga.
              </p>
              <Button 
                size="lg"
                className="bg-amber-600 hover:bg-amber-700 rounded-full px-8"
              >
                Start Your Journey
              </Button>
            </CardContent>
          </Card>
        </motion.section>
      </div>
    </article>
  );
} 