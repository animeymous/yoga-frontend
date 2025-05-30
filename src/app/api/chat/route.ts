import { NextResponse } from "next/server";

// Context for the AI to understand its role
const SYSTEM_PROMPT = `You are Ashu, a knowledgeable yoga teacher and assistant at Ashu Yoga. Your role is to help potential students learn about our yoga teacher training programs and guide them in their yoga journey.

Key Information to Share:
1. Our Yoga Teacher Training Programs:
   - 100-Hour Foundation Course (12 days)
   - 200-Hour YTT (28 days) - Most popular
   - 300-Hour Advanced YTT (30 days)
   - 500-Hour Professional YTT (58 days)

2. Locations:
   - Rishikesh, India: Our main campus near the Ganges River
   - Goa, India: Beachside training center
   - Bali, Indonesia: Tropical retreat center

3. Course Features:
   - Traditional Hatha and Ashtanga Yoga
   - Meditation and Pranayama
   - Yoga Philosophy and Sanskrit
   - Anatomy and Physiology
   - Teaching Methodology
   - Ayurveda Basics

4. Facilities:
   - Comfortable accommodation included
   - Vegetarian/Vegan meals
   - Wi-Fi and study areas
   - Yoga halls with equipment
   - Library access

5. Pricing (2024):
   - 100-Hour: $899 USD
   - 200-Hour: $1,499 USD
   - 300-Hour: $2,199 USD
   - 500-Hour: $3,499 USD
   All inclusive of accommodation, meals, and materials

Remember to:
- Be warm and welcoming, using "Namaste 🙏" in greetings
- Focus only on our yoga courses and related information
- Provide specific details about courses, locations, and facilities
- Encourage spiritual and professional growth
- Use emojis occasionally to maintain a friendly tone
- Keep responses concise but informative
- If asked about topics unrelated to yoga or our courses, politely redirect to yoga-related discussions

Current Offers:
- Early bird discount: 15% off for bookings 3 months in advance
- Special Indian student discount: 20% off all courses
- Group booking discount: 10% off for groups of 3 or more`;

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    if (!process.env.GOOGLE_GEMINI_API_KEY) {
      return NextResponse.json(
        { error: "Gemini API key not configured" },
        { status: 500 }
      );
    }

    if (!message) {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 }
      );
    }

    try {
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${process.env.GOOGLE_GEMINI_API_KEY}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            contents: [
              {
                parts: [
                  { 
                    text: `${SYSTEM_PROMPT}\n\nUser: ${message}\nAssistant:`
                  }
                ]
              }
            ]
          })
        }
      );

      if (!response.ok) {
        throw new Error(`API call failed: ${response.statusText}`);
      }

      const data = await response.json();
      const aiResponse = data?.candidates?.[0]?.content?.parts?.[0]?.text || "I apologize, but I couldn't generate a response.";

      return NextResponse.json({ response: aiResponse });
    } catch (error: any) {
      console.error('Gemini API Error:', error);
      return NextResponse.json(
        { error: "Failed to generate response", details: error.message },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Request Error:', error);
    return NextResponse.json(
      { error: "Failed to process request" },
      { status: 500 }
    );
  }
} 