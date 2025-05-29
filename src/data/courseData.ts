import { CourseDetail } from '@/types/course';

export const courseData: CourseDetail[] = [
  {
    id: 1,
    title: "100 Hour Yoga Teacher Training",
    subtitle: "Begin Your Journey into Yoga Teaching",
    heroImage: "/images/yoga5.jpg",
    duration: "12 Days",
    nextBatch: "1st-12th of every month",
    level: "Beginner Friendly",
    style: "Multi-style Yoga",
    certification: "Yoga Alliance Certified (RYS 200)",
    language: "English",
    location: "Rishikesh, India",
    pricing: {
      private: 699,
      shared: 499
    },
    overview: "Our 100-hour yoga teacher training course in Rishikesh is designed for beginners who want to deepen their practice and start their journey toward becoming a yoga teacher. This foundational course provides a perfect blend of traditional yogic wisdom and modern teaching methodologies.",
    highlights: [
      "Small batch sizes for personalized attention",
      "Expert teachers with international experience",
      "Daily meditation and pranayama sessions",
      "Comprehensive study materials provided",
      "Practical teaching experience",
      "Traditional Indian yogic lifestyle experience",
      "Serene location near the Ganges River",
      "Post-course support and guidance"
    ],
    curriculum: [
      {
        title: "Asana Practice",
        topics: [
          "Basic to intermediate level asanas",
          "Alignment and adjustments",
          "Props usage and modifications",
          "Sequencing principles",
          "Safety guidelines"
        ]
      },
      {
        title: "Philosophy & Theory",
        topics: [
          "Introduction to Yoga Philosophy",
          "History of Yoga",
          "Yoga Sutras of Patanjali",
          "Anatomy basics for yoga",
          "Yogic lifestyle and ethics"
        ]
      },
      {
        title: "Teaching Methodology",
        topics: [
          "Basic teaching skills",
          "Voice modulation",
          "Class structuring",
          "Student interaction",
          "Teaching practice sessions"
        ]
      }
    ],
    schedule: [
      { time: "06:00 - 07:30", activity: "Morning Meditation & Pranayama" },
      { time: "07:30 - 09:00", activity: "Asana Practice" },
      { time: "09:00 - 10:00", activity: "Breakfast & Rest" },
      { time: "10:00 - 11:30", activity: "Yoga Philosophy" },
      { time: "11:30 - 13:00", activity: "Teaching Methodology" },
      { time: "13:00 - 14:00", activity: "Lunch Break" },
      { time: "14:00 - 15:30", activity: "Anatomy & Physiology" },
      { time: "15:30 - 17:00", activity: "Asana Practice" },
      { time: "17:00 - 18:30", activity: "Teaching Practice" },
      { time: "18:30 - 19:30", activity: "Dinner" },
      { time: "19:30 - 20:30", activity: "Evening Meditation/Kirtan" }
    ],
    included: [
      "Course materials and manual",
      "Yoga Alliance certified certificate",
      "Accommodation as per selection",
      "Three vegetarian meals daily",
      "Weekend excursions",
      "Airport pickup and drop (Delhi)",
      "Wifi access",
      "Yoga mat and props during classes"
    ],
    prerequisites: [
      "Basic understanding of yoga",
      "Commitment to learn and practice",
      "Good physical and mental health",
      "Valid visa for India",
      "Travel and health insurance"
    ],
    accommodation: {
      title: "Comfortable Stay at Our Ashram",
      description: "Experience traditional ashram living with modern amenities. Our rooms are designed to provide a peaceful environment conducive to learning and self-reflection.",
      amenities: [
        "Clean and spacious rooms",
        "Private bathroom",
        "Hot water 24/7",
        "Daily housekeeping",
        "Meditation hall access",
        "Garden view options",
        "Laundry service",
        "Safe deposit lockers"
      ]
    },
    gallery: [
      "/images/yoga5.jpg",
      "/images/yoga6.jpg",
      "/images/yoga7.jpg",
      "/images/yoga8.jpg"
    ]
  },
  {
    id: 2,
    title: "200 Hour Yoga Teacher Training",
    subtitle: "Comprehensive Yoga Teacher Certification",
    heroImage: "/images/yoga6.jpg",
    duration: "24 Days",
    nextBatch: "1st-24th of every month",
    level: "Beginner to Intermediate",
    style: "Multi-style Yoga",
    certification: "Yoga Alliance Certified (RYS 200)",
    language: "English",
    location: "Rishikesh, India",
    pricing: {
      private: 1249,
      shared: 1049
    },
    overview: "Our comprehensive 200-hour yoga teacher training program offers an immersive experience in the ancient art and science of yoga. This transformative journey combines traditional yogic wisdom with modern teaching methodologies to prepare you for a successful career as a yoga teacher.",
    highlights: [
      "In-depth study of yoga philosophy and history",
      "Advanced asana practice and teaching methodology",
      "Extensive anatomy and physiology training",
      "Business of yoga and career development",
      "Teaching practice with real students",
      "Meditation and pranayama mastery",
      "Sanskrit study and chanting",
      "Ayurveda basics and yogic lifestyle"
    ],
    curriculum: [
      {
        title: "Advanced Asana Practice",
        topics: [
          "Intermediate and advanced asanas",
          "Alignment principles and adjustments",
          "Sequencing for different levels",
          "Props and modifications",
          "Teaching methodology and cues",
          "Risk assessment and safety"
        ]
      },
      {
        title: "Yoga Philosophy & History",
        topics: [
          "Deep dive into Yoga Sutras",
          "Study of Bhagavad Gita",
          "History of yoga traditions",
          "Modern yoga evolution",
          "Ethics for yoga teachers",
          "Yogic lifestyle principles"
        ]
      },
      {
        title: "Anatomy & Physiology",
        topics: [
          "Functional anatomy for yoga",
          "Body systems and yoga",
          "Common injuries and prevention",
          "Energy systems and chakras",
          "Biomechanics of asanas",
          "Therapeutic applications"
        ]
      }
    ],
    schedule: [
      { time: "05:30 - 06:30", activity: "Morning Meditation & Pranayama" },
      { time: "06:30 - 08:30", activity: "Advanced Asana Practice" },
      { time: "08:30 - 09:30", activity: "Breakfast & Rest" },
      { time: "09:30 - 11:00", activity: "Yoga Philosophy" },
      { time: "11:00 - 12:30", activity: "Teaching Methodology" },
      { time: "12:30 - 13:30", activity: "Lunch Break" },
      { time: "13:30 - 15:00", activity: "Anatomy & Physiology" },
      { time: "15:00 - 16:30", activity: "Asana Lab" },
      { time: "16:30 - 18:00", activity: "Teaching Practice" },
      { time: "18:00 - 19:00", activity: "Evening Meditation" },
      { time: "19:00 - 20:00", activity: "Dinner" }
    ],
    included: [
      "Comprehensive course materials and manual",
      "Yoga Alliance certified certificate",
      "Premium accommodation",
      "Three organic vegetarian meals daily",
      "Weekend excursions and cultural activities",
      "Airport pickup and drop (Delhi)",
      "High-speed Wifi access",
      "Yoga mat and props",
      "Post-course support and mentoring"
    ],
    prerequisites: [
      "Minimum 6 months regular yoga practice",
      "Physical and mental fitness",
      "Strong commitment to learning",
      "Valid passport and Indian visa",
      "Travel and health insurance",
      "Basic English communication skills"
    ],
    accommodation: {
      title: "Premium Ashram Living",
      description: "Experience authentic ashram living with modern comforts. Our newly renovated accommodation provides the perfect balance of traditional atmosphere and contemporary amenities, creating an ideal environment for deep learning and self-discovery.",
      amenities: [
        "Spacious private/shared rooms",
        "En-suite bathrooms",
        "24/7 hot water",
        "Air conditioning",
        "Daily housekeeping",
        "Meditation garden access",
        "Study areas",
        "Free Wifi",
        "Laundry service",
        "Security lockers"
      ]
    },
    gallery: [
      "/images/yoga6.jpg",
      "/images/yoga7.jpg",
      "/images/yoga8.jpg",
      "/images/yoga5.jpg"
    ]
  },
  {
    id: 3,
    title: "300 Hour Yoga Teacher Training",
    subtitle: "Advanced Yoga Teacher Training for Experienced Practitioners",
    heroImage: "/images/yoga7.jpg",
    duration: "30 Days",
    nextBatch: "1st-30th of every month",
    level: "Intermediate to Advanced",
    style: "Multi-style Advanced Yoga",
    certification: "Yoga Alliance Certified (RYS 300)",
    language: "English",
    location: "Rishikesh, India",
    pricing: {
      private: 1899,
      shared: 1599
    },
    overview: "Our 300-hour advanced yoga teacher training is designed for experienced practitioners and teachers looking to deepen their practice and expand their teaching capabilities. This intensive program covers advanced asanas, therapeutic applications, and in-depth philosophical studies.",
    highlights: [
      "Advanced asana and alignment techniques",
      "Therapeutic yoga applications",
      "Advanced pranayama and meditation",
      "Yoga therapy principles",
      "Advanced teaching methodology",
      "Energy healing and chakra work",
      "Advanced anatomy and physiology",
      "Sanskrit and mantra studies"
    ],
    curriculum: [
      {
        title: "Advanced Asana & Alignment",
        topics: [
          "Complex asana variations",
          "Advanced alignment principles",
          "Therapeutic adjustments",
          "Injury prevention and management",
          "Advanced sequencing",
          "Energy flow in asanas"
        ]
      },
      {
        title: "Therapeutic Applications",
        topics: [
          "Yoga therapy foundations",
          "Condition-specific sequences",
          "Props and modifications",
          "Assessment techniques",
          "Client consultation skills",
          "Therapeutic program design"
        ]
      },
      {
        title: "Advanced Philosophy & Energy Work",
        topics: [
          "Advanced pranayama techniques",
          "Subtle body anatomy",
          "Advanced meditation practices",
          "Tantric philosophy",
          "Chakra therapy",
          "Kundalini awakening"
        ]
      }
    ],
    schedule: [
      { time: "05:00 - 06:30", activity: "Advanced Meditation & Pranayama" },
      { time: "06:30 - 09:00", activity: "Advanced Asana Practice" },
      { time: "09:00 - 10:00", activity: "Breakfast & Rest" },
      { time: "10:00 - 11:30", activity: "Advanced Teaching Methodology" },
      { time: "11:30 - 13:00", activity: "Therapeutic Applications" },
      { time: "13:00 - 14:00", activity: "Lunch Break" },
      { time: "14:00 - 15:30", activity: "Philosophy & Energy Work" },
      { time: "15:30 - 17:00", activity: "Advanced Sequencing" },
      { time: "17:00 - 18:30", activity: "Teaching Practice" },
      { time: "18:30 - 19:30", activity: "Dinner" },
      { time: "19:30 - 21:00", activity: "Advanced Meditation/Energy Work" }
    ],
    included: [
      "Advanced course materials and manual",
      "Yoga Alliance 300-hour certification",
      "Luxury accommodation",
      "Three organic vegetarian/vegan meals",
      "Weekend excursions and retreats",
      "Airport pickup and drop (Delhi)",
      "High-speed Wifi access",
      "Premium yoga props and equipment",
      "One-on-one mentoring sessions",
      "Post-course support program"
    ],
    prerequisites: [
      "200-hour YTT certification",
      "Minimum 2 years teaching experience",
      "Regular yoga practice",
      "Good physical and mental health",
      "Valid passport and Indian visa",
      "Travel and health insurance"
    ],
    accommodation: {
      title: "Luxury Ashram Living",
      description: "Experience premium accommodation in our newly renovated ashram. Designed for serious practitioners, our facilities offer the perfect blend of traditional ashram living with modern luxury amenities.",
      amenities: [
        "Spacious private rooms",
        "Premium en-suite bathrooms",
        "Air conditioning and heating",
        "Meditation garden access",
        "Private balcony/terrace",
        "24/7 hot water",
        "Room service",
        "Daily housekeeping",
        "High-speed internet",
        "Personal study area"
      ]
    },
    gallery: [
      "/images/yoga7.jpg",
      "/images/yoga8.jpg",
      "/images/yoga5.jpg",
      "/images/yoga6.jpg"
    ]
  },
  {
    id: 4,
    title: "500 Hour Yoga Teacher Training",
    subtitle: "Master Level Yoga Teacher Training Program",
    heroImage: "/images/yoga8.jpg",
    duration: "60 Days",
    nextBatch: "Every 2 months",
    level: "Advanced to Master",
    style: "Comprehensive Multi-style Yoga",
    certification: "Yoga Alliance Certified (RYS 500)",
    language: "English",
    location: "Rishikesh, India",
    pricing: {
      private: 2999,
      shared: 2499
    },
    overview: "Our comprehensive 500-hour yoga teacher training combines both foundational and advanced yoga studies into one transformative program. This intensive course is designed to create master-level yoga teachers with deep understanding of both practical and philosophical aspects of yoga.",
    highlights: [
      "Complete yoga teaching methodology",
      "Advanced asana and adjustment techniques",
      "Therapeutic and restorative yoga",
      "Business of yoga and studio management",
      "Advanced meditation and pranayama",
      "Yoga therapy and healing",
      "Ayurveda and yoga integration",
      "Research methodology in yoga"
    ],
    curriculum: [
      {
        title: "Master Level Asana",
        topics: [
          "Advanced postural alignment",
          "Complex asana sequences",
          "Therapeutic applications",
          "Advanced adjustments",
          "Sequencing for specific outcomes",
          "Teaching methodology mastery"
        ]
      },
      {
        title: "Advanced Yoga Studies",
        topics: [
          "Classical yoga texts",
          "Advanced pranayama",
          "Meditation mastery",
          "Energy healing techniques",
          "Advanced anatomy",
          "Research in yoga"
        ]
      },
      {
        title: "Professional Development",
        topics: [
          "Studio management",
          "Yoga business ethics",
          "Marketing strategies",
          "Online teaching skills",
          "Workshop development",
          "Retreat planning"
        ]
      }
    ],
    schedule: [
      { time: "05:00 - 06:30", activity: "Advanced Meditation & Pranayama" },
      { time: "06:30 - 09:00", activity: "Master Level Asana Practice" },
      { time: "09:00 - 10:00", activity: "Breakfast & Rest" },
      { time: "10:00 - 11:30", activity: "Advanced Teaching Methodology" },
      { time: "11:30 - 13:00", activity: "Yoga Therapy & Healing" },
      { time: "13:00 - 14:00", activity: "Lunch Break" },
      { time: "14:00 - 15:30", activity: "Professional Development" },
      { time: "15:30 - 17:00", activity: "Advanced Studies & Research" },
      { time: "17:00 - 18:30", activity: "Teaching Practice" },
      { time: "18:30 - 19:30", activity: "Dinner" },
      { time: "19:30 - 21:00", activity: "Special Workshops/Sessions" }
    ],
    included: [
      "Comprehensive course materials",
      "Yoga Alliance 500-hour certification",
      "Premium accommodation",
      "Three gourmet vegetarian meals",
      "Extended weekend retreats",
      "Airport transfers (Delhi)",
      "High-speed internet",
      "All yoga equipment",
      "Personal mentoring",
      "Business development guidance",
      "Lifetime support program"
    ],
    prerequisites: [
      "200-hour YTT certification",
      "Minimum 3 years teaching experience",
      "Established personal practice",
      "Letter of recommendation",
      "Good physical and mental health",
      "Valid passport and Indian visa",
      "Travel and health insurance"
    ],
    accommodation: {
      title: "Executive Ashram Living",
      description: "Experience the ultimate in ashram luxury with our executive accommodations. Designed for long-term stays, our premium facilities offer all modern amenities while maintaining the sacred atmosphere of traditional ashram living.",
      amenities: [
        "Deluxe private rooms",
        "Luxury en-suite bathrooms",
        "Climate control",
        "Private yoga space",
        "Mountain view rooms",
        "24/7 room service",
        "Premium bedding",
        "Workspace",
        "Mini refrigerator",
        "Digital safe"
      ]
    },
    gallery: [
      "/images/yoga8.jpg",
      "/images/yoga5.jpg",
      "/images/yoga6.jpg",
      "/images/yoga7.jpg"
    ]
  }
]; 