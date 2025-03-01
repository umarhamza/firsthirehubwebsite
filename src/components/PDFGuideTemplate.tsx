import React from 'react';
import { Document, Page, Text, View, StyleSheet, Link, Image } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    padding: 40,
  },
  section: {
    margin: 10,
    padding: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#2563eb', // blue-600
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 20,
    color: '#1e40af', // blue-800
  },
  text: {
    fontSize: 12,
    marginBottom: 10,
    lineHeight: 1.5,
  },
  bulletPoint: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  bullet: {
    width: 10,
    fontSize: 12,
  },
  bulletText: {
    flex: 1,
    fontSize: 12,
    lineHeight: 1.5,
  },
  ctaBox: {
    backgroundColor: '#eff6ff', // blue-50
    borderRadius: 5,
    padding: 15,
    marginTop: 20,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#bfdbfe', // blue-200
  },
  ctaTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#2563eb', // blue-600
  },
  ctaText: {
    fontSize: 12,
    marginBottom: 10,
    lineHeight: 1.5,
  },
  ctaLink: {
    fontSize: 12,
    color: '#2563eb', // blue-600
    textDecoration: 'none',
    fontWeight: 'bold',
  },
  footer: {
    position: 'absolute',
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: 'center',
    fontSize: 10,
    color: '#6b7280', // gray-500
  },
  pageNumber: {
    position: 'absolute',
    bottom: 30,
    right: 40,
    fontSize: 10,
    color: '#6b7280', // gray-500
  },
  logo: {
    width: 150,
    height: 'auto',
    marginBottom: 20,
    alignSelf: 'center',
  },
  checkmark: {
    width: 10,
    fontSize: 12,
    color: '#10b981', // emerald-500
  },
  xmark: {
    width: 10,
    fontSize: 12,
    color: '#ef4444', // red-500
  },
});

// Type for page number render function
interface PageNumberProps {
  pageNumber: number;
  totalPages: number;
}

// Create Document Component
const PDFGuideTemplate: React.FC = () => (
  <Document>
    {/* Cover Page */}
    <Page size="A4" style={styles.page}>
      <Image src="/images/logo.png" style={styles.logo} />
      <Text style={[styles.title, { fontSize: 28, marginTop: 100 }]}>
        Finding Your North Star
      </Text>
      <Text style={[styles.subtitle, { textAlign: 'center', marginTop: 20 }]}>
        A Business Clarity Guide for Coaches and Entrepreneurs
      </Text>
      <Text style={[styles.text, { textAlign: 'center', marginTop: 50 }]}>
        By First Hire Hub
      </Text>
      <Text style={[styles.text, { textAlign: 'center', marginTop: 150, fontStyle: 'italic' }]}>
        Your roadmap to business clarity, ideal clients, and sustainable growth
      </Text>
    </Page>

    {/* Introduction Page */}
    <Page size="A4" style={styles.page}>
      <Text style={styles.title}>Introduction: Why Clarity Matters</Text>
      <Text style={styles.text}>
        Every successful business starts with a clear purpose. If you're feeling overwhelmed or unsure about your next steps, you're not alone. Many business coaches and entrepreneurs struggle with identifying their ideal audience and refining their services. Without clarity, it's easy to waste time, resources, and energy chasing the wrong opportunities.
      </Text>
      <Text style={styles.text}>
        At First Hire Hub, we help business owners define their services, identify their ideal clients, and build a foundation for sustainable growth. With over 24 years of experience and 20,000+ customers served, we've developed a proven framework to help you gain clarity and scale with confidence.
      </Text>
      <Text style={styles.text}>
        This guide will help you pinpoint where you are in your business journey, define your audience, and refine your offerings so that you can attract the right clients and grow effectively.
      </Text>
      
      {/* First CTA Box */}
      <View style={styles.ctaBox}>
        <Text style={styles.ctaTitle}>Need personalized guidance?</Text>
        <Text style={styles.ctaText}>
          If you'd like personalized help in finding your business North Star, our expert coaches are ready to assist you.
        </Text>
        <Link src="https://calendly.com/ismaelfraser47/30min" style={styles.ctaLink}>
          Click here to book your free 30-minute strategy call →
        </Link>
      </View>
      
      <Text style={styles.subtitle}>The First Piece of Information You Need</Text>
      <Text style={styles.text}>
        If you had to traverse a mountain, a jungle, a sea, or a desert and found yourself in the middle of it, needing to get back to an urban area, what's the first thing you would need?
      </Text>
      <Text style={styles.text}>
        Some people say you need to know where you're going. Others say you need a map. Some believe the most important things are water, food supplies, or transportation. But let's say you already have all of these things. What is the single most crucial piece of information you need?
      </Text>
      <Text style={styles.text}>
        It's simple, it's your LOCATION!
      </Text>
      <Text style={styles.text}>
        Even if you're in a city or town, when you open Google Maps, it first needs to know where you are before it can guide you to your destination. If you don't know your current position, you can't navigate anywhere.
      </Text>
      <Text style={styles.text}>
        The same applies to business.
      </Text>
      
      <Text style={styles.pageNumber} render={({ pageNumber, totalPages }: PageNumberProps) => (
        `${pageNumber} / ${totalPages}`
      )} fixed />
    </Page>

    {/* Chapter 1: Finding Your North Star */}
    <Page size="A4" style={styles.page}>
      <Text style={styles.title}>Chapter 1: Where Are You Right Now?</Text>
      <Text style={styles.text}>
        You might have a vision, an idea, and even resources, but if you don't truly understand where you are, you'll struggle to get where you want to go. What's happening with you right now?
      </Text>
      
      <Text style={styles.subtitle}>The Key to Business Success</Text>
      <View style={styles.bulletPoint}>
        <Text style={styles.bullet}>•</Text>
        <Text style={styles.bulletText}>What is the state of your business?</Text>
      </View>
      <View style={styles.bulletPoint}>
        <Text style={styles.bullet}>•</Text>
        <Text style={styles.bulletText}>What is your financial situation?</Text>
      </View>
      <View style={styles.bulletPoint}>
        <Text style={styles.bullet}>•</Text>
        <Text style={styles.bulletText}>What is your mental, spiritual, and emotional disposition?</Text>
      </View>
      <View style={styles.bulletPoint}>
        <Text style={styles.bullet}>•</Text>
        <Text style={styles.bulletText}>Are you physically and psychologically prepared for the journey ahead?</Text>
      </View>
      
      <Text style={styles.text}>
        If you don't know where you stand holistically, how can you possibly reach your destination?
      </Text>
      
      <Text style={styles.subtitle}>Why Most People Fail in Business</Text>
      <Text style={styles.text}>
        Did you know that 99% of businesses fail and only 1% succeed?
      </Text>
      <Text style={styles.text}>
        One major reason is that people start without a realistic understanding of what it takes. They don't have the right mindset, resilience, or discipline. They don't realize the level of mental, psychological, and emotional strength required to succeed.
      </Text>
      <Text style={styles.text}>
        Most businesses fail before they even begin, not because of bad ideas, but because the person behind the business isn't ready.
      </Text>
      
      <Text style={styles.subtitle}>Know Your Starting Point Before Moving Forward</Text>
      <Text style={styles.text}>
        Before setting goals, before planning strategies, before even thinking about scaling, identify your current position. This will determine what steps you need to take next.
      </Text>
      <Text style={styles.text}>
        The most successful entrepreneurs are not the ones with the best ideas, but the ones who truly understand themselves, their circumstances, and their ability to navigate challenges.
      </Text>
      
      {/* Second CTA Box */}
      <View style={styles.ctaBox}>
        <Text style={styles.ctaTitle}>Need help identifying your starting point?</Text>
        <Text style={styles.ctaText}>
          Our community of like-minded entrepreneurs can provide support and feedback to help you gain clarity on where you are in your business journey.
        </Text>
        <Link src="https://www.skool.com/first-hire-hub-7163/about" style={styles.ctaLink}>
          Click here to join our supportive community →
        </Link>
      </View>
      
      <Text style={styles.pageNumber} render={({ pageNumber, totalPages }: PageNumberProps) => (
        `${pageNumber} / ${totalPages}`
      )} fixed />
    </Page>

    {/* Chapter 2: The Importance of Having a Guide */}
    <Page size="A4" style={styles.page}>
      <Text style={styles.title}>Chapter 2: The Importance of Having an Expert Guide</Text>
      <Text style={styles.text}>
        The desert is one of the most unforgiving environments on Earth. With its vast, featureless landscapes, extreme temperatures, and limited resources, it is easy to lose direction, run out of supplies, or succumb to the elements. This is why having an expert guide is not just a convenience, but a matter of survival and success.
      </Text>
      
      <Text style={styles.subtitle}>1. Navigational Expertise</Text>
      <Text style={styles.text}>
        Without clear landmarks, deserts can disorient even the most prepared travelers. An expert guide:
      </Text>
      <View style={styles.bulletPoint}>
        <Text style={styles.checkmark}>✅</Text>
        <Text style={styles.bulletText}>Knows how to use the sun, stars, wind patterns, and terrain for direction.</Text>
      </View>
      <View style={styles.bulletPoint}>
        <Text style={styles.checkmark}>✅</Text>
        <Text style={styles.bulletText}>Understands how sand dunes shift, avoiding paths that could lead you deeper into the wilderness.</Text>
      </View>
      <View style={styles.bulletPoint}>
        <Text style={styles.checkmark}>✅</Text>
        <Text style={styles.bulletText}>Can identify hidden landmarks that indicate nearby settlements or water sources.</Text>
      </View>
      
      <Text style={styles.subtitle}>2. Survival Knowledge</Text>
      <Text style={styles.text}>
        The desert is ruthless—temperatures can soar during the day and drop drastically at night. A guide ensures that you:
      </Text>
      <View style={styles.bulletPoint}>
        <Text style={styles.checkmark}>✅</Text>
        <Text style={styles.bulletText}>Conserve water and energy by traveling at the right times.</Text>
      </View>
      <View style={styles.bulletPoint}>
        <Text style={styles.checkmark}>✅</Text>
        <Text style={styles.bulletText}>Avoid heat exhaustion by understanding when to rest and when to move.</Text>
      </View>
      <View style={styles.bulletPoint}>
        <Text style={styles.checkmark}>✅</Text>
        <Text style={styles.bulletText}>Find natural shelters to protect against sun exposure and sandstorms.</Text>
      </View>
      
      <Text style={styles.subtitle}>Business Lesson: Why You Need a Guide in Entrepreneurship</Text>
      <Text style={styles.text}>
        Starting a business is much like crossing a desert. If you try to navigate alone without guidance, you risk:
      </Text>
      <View style={styles.bulletPoint}>
        <Text style={styles.xmark}>❌</Text>
        <Text style={styles.bulletText}>Wasting time and money on the wrong paths.</Text>
      </View>
      <View style={styles.bulletPoint}>
        <Text style={styles.xmark}>❌</Text>
        <Text style={styles.bulletText}>Burning out due to lack of preparation.</Text>
      </View>
      <View style={styles.bulletPoint}>
        <Text style={styles.xmark}>❌</Text>
        <Text style={styles.bulletText}>Making critical mistakes that could have been avoided.</Text>
      </View>
      
      {/* Third CTA Box */}
      <View style={styles.ctaBox}>
        <Text style={styles.ctaTitle}>Need an expert guide for your business journey?</Text>
        <Text style={styles.ctaText}>
          Our expert coaches can help you navigate the challenges of entrepreneurship through a personalized strategy session.
        </Text>
        <Link src="https://calendly.com/ismaelfraser47/30min" style={styles.ctaLink}>
          Book your free strategy call today →
        </Link>
      </View>
      
      <Text style={styles.pageNumber} render={({ pageNumber, totalPages }: PageNumberProps) => (
        `${pageNumber} / ${totalPages}`
      )} fixed />
    </Page>

    {/* Chapter 3: Identifying Your Business Stage */}
    <Page size="A4" style={styles.page}>
      <Text style={styles.title}>Chapter 3: Identifying Where You Are in Your Business Journey</Text>
      <Text style={styles.text}>
        Understanding your current business stage is key to knowing what to focus on next. Below are the five stages most businesses go through. Identify where you are to determine your next action steps:
      </Text>
      
      <Text style={styles.subtitle}>1. Idea Stage (Pre-launch)</Text>
      <View style={styles.bulletPoint}>
        <Text style={styles.bullet}>•</Text>
        <Text style={styles.bulletText}>You have a business concept but haven't started offering services yet.</Text>
      </View>
      <View style={styles.bulletPoint}>
        <Text style={styles.bullet}>•</Text>
        <Text style={styles.bulletText}>Your focus: Market research, validating demand, and refining your offer.</Text>
      </View>
      
      <Text style={styles.subtitle}>2. Start-Up Stage (Early growth)</Text>
      <View style={styles.bulletPoint}>
        <Text style={styles.bullet}>•</Text>
        <Text style={styles.bulletText}>You have a few clients but are still figuring things out.</Text>
      </View>
      <View style={styles.bulletPoint}>
        <Text style={styles.bullet}>•</Text>
        <Text style={styles.bulletText}>Your focus: Defining your audience, refining your service model, and testing different strategies.</Text>
      </View>
      
      <Text style={styles.subtitle}>3. Growth Stage (Gaining traction)</Text>
      <View style={styles.bulletPoint}>
        <Text style={styles.bullet}>•</Text>
        <Text style={styles.bulletText}>You're consistently getting clients, but you feel stretched thin.</Text>
      </View>
      <View style={styles.bulletPoint}>
        <Text style={styles.bullet}>•</Text>
        <Text style={styles.bulletText}>Your focus: Streamlining services, increasing pricing, and improving efficiency.</Text>
      </View>
      
      <Text style={styles.subtitle}>4. Scaling Stage (Expansion)</Text>
      <View style={styles.bulletPoint}>
        <Text style={styles.bullet}>•</Text>
        <Text style={styles.bulletText}>You're ready to automate, delegate, and optimize for bigger growth.</Text>
      </View>
      <View style={styles.bulletPoint}>
        <Text style={styles.bullet}>•</Text>
        <Text style={styles.bulletText}>Your focus: Building a team, refining your client journey, and creating scalable offers.</Text>
      </View>
      
      <Text style={styles.subtitle}>5. Established Stage (Sustained success)</Text>
      <View style={styles.bulletPoint}>
        <Text style={styles.bullet}>•</Text>
        <Text style={styles.bulletText}>You have a well-oiled business and are looking for ways to innovate.</Text>
      </View>
      <View style={styles.bulletPoint}>
        <Text style={styles.bullet}>•</Text>
        <Text style={styles.bulletText}>Your focus: Expanding your impact, developing new revenue streams, and mentoring others.</Text>
      </View>
      
      <Text style={styles.text}>
        Once you identify your stage, focus on what will move you forward instead of getting distracted by things that don't align with your business needs.
      </Text>
      
      {/* Fourth CTA Box */}
      <View style={styles.ctaBox}>
        <Text style={styles.ctaTitle}>Not sure which stage you're in?</Text>
        <Text style={styles.ctaText}>
          Join our community of coaches and entrepreneurs to get feedback on your business stage and connect with others at similar points in their journey.
        </Text>
        <Link src="https://www.skool.com/first-hire-hub-7163/about" style={styles.ctaLink}>
          Join our community here →
        </Link>
      </View>
      
      <Text style={styles.pageNumber} render={({ pageNumber, totalPages }: PageNumberProps) => (
        `${pageNumber} / ${totalPages}`
      )} fixed />
    </Page>

    {/* Chapter 4: Defining Your Ideal Client */}
    <Page size="A4" style={styles.page}>
      <Text style={styles.title}>Chapter 4: Defining Your Ideal Client</Text>
      <Text style={styles.text}>
        One of the biggest mistakes entrepreneurs make is trying to serve everyone. To grow effectively, you need to focus on a specific audience. Here's how to define your ideal client:
      </Text>
      
      <Text style={styles.subtitle}>1. Identify Common Traits</Text>
      <Text style={styles.text}>
        Ask yourself:
      </Text>
      <View style={styles.bulletPoint}>
        <Text style={styles.bullet}>•</Text>
        <Text style={styles.bulletText}>Who are the people I enjoy working with the most?</Text>
      </View>
      <View style={styles.bulletPoint}>
        <Text style={styles.bullet}>•</Text>
        <Text style={styles.bulletText}>What industry are they in?</Text>
      </View>
      <View style={styles.bulletPoint}>
        <Text style={styles.bullet}>•</Text>
        <Text style={styles.bulletText}>What challenges do they face?</Text>
      </View>
      
      <Text style={styles.subtitle}>2. Understand Their Pain Points</Text>
      <Text style={styles.text}>
        Your ideal client has specific struggles. What are they? Some examples:
      </Text>
      <View style={styles.bulletPoint}>
        <Text style={styles.bullet}>•</Text>
        <Text style={styles.bulletText}>Business coaches: Struggling to attract clients.</Text>
      </View>
      <View style={styles.bulletPoint}>
        <Text style={styles.bullet}>•</Text>
        <Text style={styles.bulletText}>Entrepreneurs: Unsure how to scale beyond a certain point.</Text>
      </View>
      
      <Text style={styles.subtitle}>3. Define How You Help Them</Text>
      <Text style={styles.text}>
        What transformation do you provide? Example:
      </Text>
      <View style={styles.bulletPoint}>
        <Text style={styles.bullet}>•</Text>
        <Text style={styles.bulletText}>Before working with you: Overwhelmed and stuck.</Text>
      </View>
      <View style={styles.bulletPoint}>
        <Text style={styles.bullet}>•</Text>
        <Text style={styles.bulletText}>After working with you: Clear strategy, consistent clients, and structured business model.</Text>
      </View>
      
      <Text style={styles.subtitle}>4. Create a Client Avatar</Text>
      <Text style={styles.text}>
        Summarize your ideal client in one paragraph. Example: "I help early-stage business coaches who struggle with finding consistent clients. They need a clear marketing strategy and a structured way to scale their coaching business."
      </Text>
      <Text style={styles.text}>
        With this clarity, your marketing and messaging will become more effective, helping you attract the right clients effortlessly.
      </Text>
      
      {/* Fifth CTA Box */}
      <View style={styles.ctaBox}>
        <Text style={styles.ctaTitle}>Need help defining your ideal client?</Text>
        <Text style={styles.ctaText}>
          Our expert coaches can help you identify and understand your ideal clients through a personalized strategy session.
        </Text>
        <Link src="https://calendly.com/ismaelfraser47/30min" style={styles.ctaLink}>
          Book your free strategy call today →
        </Link>
      </View>
      
      <Text style={styles.pageNumber} render={({ pageNumber, totalPages }: PageNumberProps) => (
        `${pageNumber} / ${totalPages}`
      )} fixed />
    </Page>

    {/* Chapter 5: Refining Your Offerings */}
    <Page size="A4" style={styles.page}>
      <Text style={styles.title}>Chapter 5: Refining Your Offerings for Sustainable Growth</Text>
      <Text style={styles.text}>
        Once you know your audience, the next step is to refine your services so they align with your ideal client's needs.
      </Text>
      
      <Text style={styles.subtitle}>1. Focus on Your Core Offer</Text>
      <Text style={styles.text}>
        Instead of offering a variety of services, focus on a core offer that delivers the best results.
      </Text>
      <View style={styles.bulletPoint}>
        <Text style={styles.bullet}>•</Text>
        <Text style={styles.bulletText}>Example: Instead of general coaching, offer a structured 12-week Business Accelerator Program.</Text>
      </View>
      
      <Text style={styles.subtitle}>2. Create a Simple Value Ladder</Text>
      <Text style={styles.text}>
        Offer services at different levels to attract and retain clients:
      </Text>
      <View style={styles.bulletPoint}>
        <Text style={styles.bullet}>•</Text>
        <Text style={styles.bulletText}>Low-ticket: Free guides, webinars, or strategy calls.</Text>
      </View>
      <View style={styles.bulletPoint}>
        <Text style={styles.bullet}>•</Text>
        <Text style={styles.bulletText}>Mid-ticket: Group coaching or digital courses.</Text>
      </View>
      <View style={styles.bulletPoint}>
        <Text style={styles.bullet}>•</Text>
        <Text style={styles.bulletText}>High-ticket: One-on-one consulting or premium mastermind programs.</Text>
      </View>
      
      <Text style={styles.subtitle}>3. Streamline Your Process</Text>
      <Text style={styles.text}>
        Create repeatable systems to ensure a seamless client experience. Automate onboarding, invoicing, and client follow-ups to save time and improve efficiency.
      </Text>
      
      <Text style={styles.subtitle}>4. Scaling with Confidence</Text>
      <Text style={styles.text}>
        Now that you have clarity on your audience and services, it's time to scale your business. Here's how:
      </Text>
      <View style={styles.bulletPoint}>
        <Text style={styles.bullet}>•</Text>
        <Text style={styles.bulletText}>Automate & Delegate: Use tools like CRM systems and outsource admin tasks.</Text>
      </View>
      <View style={styles.bulletPoint}>
        <Text style={styles.bullet}>•</Text>
        <Text style={styles.bulletText}>Build Authority & Trust: Publish valuable content and share success stories.</Text>
      </View>
      <View style={styles.bulletPoint}>
        <Text style={styles.bullet}>•</Text>
        <Text style={styles.bulletText}>Focus on Lead Generation: Run targeted ads and network in relevant communities.</Text>
      </View>
      
      <Text style={styles.text}>
        Scaling isn't about doing more work—it's about optimizing what's already working.
      </Text>
      
      {/* Sixth CTA Box */}
      <View style={styles.ctaBox}>
        <Text style={styles.ctaTitle}>Ready to refine your offerings?</Text>
        <Text style={styles.ctaText}>
          Join our community of coaches and entrepreneurs to share ideas, get feedback on your service offerings, and connect with potential collaboration partners.
        </Text>
        <Link src="https://www.skool.com/first-hire-hub-7163/about" style={styles.ctaLink}>
          Join our community here →
        </Link>
      </View>
      
      <Text style={styles.pageNumber} render={({ pageNumber, totalPages }: PageNumberProps) => (
        `${pageNumber} / ${totalPages}`
      )} fixed />
    </Page>

    {/* Conclusion Page */}
    <Page size="A4" style={styles.page}>
      <Text style={styles.title}>Conclusion: Your Next Steps</Text>
      <Text style={styles.text}>
        Gaining clarity is the foundation of a successful business. By pinpointing where you are, defining who you serve, and refining your services, you set yourself up for long-term success.
      </Text>
      <Text style={styles.text}>
        Remember that finding your business clarity is a journey, not a destination. As you implement these strategies, you'll gain new insights that will help you refine your approach over time.
      </Text>
      <Text style={styles.subtitle}>Action Plan:</Text>
      <View style={styles.bulletPoint}>
        <Text style={styles.bullet}>1.</Text>
        <Text style={styles.bulletText}>Identify your current business stage and focus on key priorities.</Text>
      </View>
      <View style={styles.bulletPoint}>
        <Text style={styles.bullet}>2.</Text>
        <Text style={styles.bulletText}>Define your ideal client using the steps outlined in this guide.</Text>
      </View>
      <View style={styles.bulletPoint}>
        <Text style={styles.bullet}>3.</Text>
        <Text style={styles.bulletText}>Streamline your services and pricing for sustainable growth.</Text>
      </View>
      <View style={styles.bulletPoint}>
        <Text style={styles.bullet}>4.</Text>
        <Text style={styles.bulletText}>Implement systems to automate and delegate.</Text>
      </View>
      <View style={styles.bulletPoint}>
        <Text style={styles.bullet}>5.</Text>
        <Text style={styles.bulletText}>Stay consistent and committed to your growth plan.</Text>
      </View>
      
      <Text style={styles.text}>
        With the right strategy, confidence, and commitment, you can build a thriving business that not only grows but creates lasting impact.
      </Text>
      
      {/* Final CTA Box */}
      <View style={styles.ctaBox}>
        <Text style={styles.ctaTitle}>Ready for personalized guidance?</Text>
        <Text style={styles.ctaText}>
          Take the next step in your business clarity journey with a free 30-minute strategy call. Our expert coaches will help you apply these concepts to your specific situation and develop a clear action plan.
        </Text>
        <Link src="https://calendly.com/ismaelfraser47/30min" style={styles.ctaLink}>
          Book your free strategy call now →
        </Link>
      </View>
      
      <Text style={styles.text}>
        Thank you for trusting First Hire Hub to guide you on your business clarity journey. We're excited to see how you'll implement these strategies and transform your business!
      </Text>
      
      <Text style={styles.footer}>
        © {new Date().getFullYear()} First Hire Hub. All rights reserved.
      </Text>
      
      <Text style={styles.pageNumber} render={({ pageNumber, totalPages }: PageNumberProps) => (
        `${pageNumber} / ${totalPages}`
      )} fixed />
    </Page>
  </Document>
);

export default PDFGuideTemplate; 