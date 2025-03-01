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
      <Text style={styles.title}>Introduction</Text>
      <Text style={styles.text}>
        Welcome to "Finding Your North Star" – your guide to gaining clarity in your business journey. As coaches and entrepreneurs, it's easy to feel lost in the sea of possibilities, strategies, and advice. This guide will help you find your direction and create a business that truly reflects your strengths and serves your ideal clients.
      </Text>
      <Text style={styles.text}>
        In the following pages, you'll discover frameworks and exercises designed to help you identify your unique business North Star, define your perfect target audience, and create compelling service offerings that stand out in the marketplace.
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
      
      <Text style={styles.text}>
        Let's begin by understanding why having a clear business direction is so crucial for your success.
      </Text>
      <Text style={styles.pageNumber} render={({ pageNumber, totalPages }: PageNumberProps) => (
        `${pageNumber} / ${totalPages}`
      )} fixed />
    </Page>

    {/* Chapter 1: Finding Your North Star */}
    <Page size="A4" style={styles.page}>
      <Text style={styles.title}>Chapter 1: Finding Your North Star</Text>
      <Text style={styles.text}>
        Your business North Star is the guiding principle that informs all your decisions. It's a combination of your unique strengths, values, and the transformation you provide to clients.
      </Text>
      
      <Text style={styles.subtitle}>Why Your North Star Matters</Text>
      <Text style={styles.text}>
        Having a clear North Star helps you:
      </Text>
      <View style={styles.bulletPoint}>
        <Text style={styles.bullet}>•</Text>
        <Text style={styles.bulletText}>Make confident business decisions aligned with your vision</Text>
      </View>
      <View style={styles.bulletPoint}>
        <Text style={styles.bullet}>•</Text>
        <Text style={styles.bulletText}>Attract clients who resonate with your approach</Text>
      </View>
      <View style={styles.bulletPoint}>
        <Text style={styles.bullet}>•</Text>
        <Text style={styles.bulletText}>Stand out in a crowded marketplace</Text>
      </View>
      <View style={styles.bulletPoint}>
        <Text style={styles.bullet}>•</Text>
        <Text style={styles.bulletText}>Create services that leverage your unique strengths</Text>
      </View>
      
      <Text style={styles.subtitle}>Finding Your North Star: Exercise</Text>
      <Text style={styles.text}>
        Take some time to reflect on and write down your answers to these questions:
      </Text>
      <View style={styles.bulletPoint}>
        <Text style={styles.bullet}>1.</Text>
        <Text style={styles.bulletText}>What are the top 3 strengths that make you unique in your field?</Text>
      </View>
      <View style={styles.bulletPoint}>
        <Text style={styles.bullet}>2.</Text>
        <Text style={styles.bulletText}>What transformation do you most enjoy helping clients achieve?</Text>
      </View>
      <View style={styles.bulletPoint}>
        <Text style={styles.bullet}>3.</Text>
        <Text style={styles.bulletText}>What values are non-negotiable in how you conduct your business?</Text>
      </View>
      
      {/* Second CTA Box */}
      <View style={styles.ctaBox}>
        <Text style={styles.ctaTitle}>Is this making sense?</Text>
        <Text style={styles.ctaText}>
          If you're finding it challenging to identify your unique strengths or business North Star, our community of like-minded entrepreneurs can provide support and feedback.
        </Text>
        <Link src="https://www.skool.com/first-hire-hub-7163/about" style={styles.ctaLink}>
          Click here to join our supportive community →
        </Link>
      </View>
      
      <Text style={styles.pageNumber} render={({ pageNumber, totalPages }: PageNumberProps) => (
        `${pageNumber} / ${totalPages}`
      )} fixed />
    </Page>

    {/* Chapter 2: Defining Your Target Audience */}
    <Page size="A4" style={styles.page}>
      <Text style={styles.title}>Chapter 2: Defining Your Target Audience</Text>
      <Text style={styles.text}>
        Once you've identified your North Star, the next step is to clearly define who you serve best. Your target audience isn't just anyone who might buy your services—it's the specific group of people who will benefit most from your unique approach.
      </Text>
      
      <Text style={styles.subtitle}>The Power of Specificity</Text>
      <Text style={styles.text}>
        Many entrepreneurs fear that narrowing their audience will limit opportunities. In reality, the opposite is true. When you speak directly to a specific audience:
      </Text>
      <View style={styles.bulletPoint}>
        <Text style={styles.bullet}>•</Text>
        <Text style={styles.bulletText}>Your marketing becomes more effective and less expensive</Text>
      </View>
      <View style={styles.bulletPoint}>
        <Text style={styles.bullet}>•</Text>
        <Text style={styles.bulletText}>Your messaging resonates more deeply with the right people</Text>
      </View>
      <View style={styles.bulletPoint}>
        <Text style={styles.bullet}>•</Text>
        <Text style={styles.bulletText}>You become known as the go-to expert for a specific problem</Text>
      </View>
      <View style={styles.bulletPoint}>
        <Text style={styles.bullet}>•</Text>
        <Text style={styles.bulletText}>You attract clients who value your specific expertise</Text>
      </View>
      
      <Text style={styles.subtitle}>Defining Your Ideal Client: Exercise</Text>
      <Text style={styles.text}>
        Create a detailed profile of your ideal client by answering:
      </Text>
      <View style={styles.bulletPoint}>
        <Text style={styles.bullet}>1.</Text>
        <Text style={styles.bulletText}>What specific problem or challenge are they facing?</Text>
      </View>
      <View style={styles.bulletPoint}>
        <Text style={styles.bullet}>2.</Text>
        <Text style={styles.bulletText}>What have they tried before that hasn't worked?</Text>
      </View>
      <View style={styles.bulletPoint}>
        <Text style={styles.bullet}>3.</Text>
        <Text style={styles.bulletText}>What transformation are they seeking?</Text>
      </View>
      <View style={styles.bulletPoint}>
        <Text style={styles.bullet}>4.</Text>
        <Text style={styles.bulletText}>What demographic and psychographic characteristics do they share?</Text>
      </View>
      
      {/* Third CTA Box */}
      <View style={styles.ctaBox}>
        <Text style={styles.ctaTitle}>Need help defining your target audience?</Text>
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

    {/* Chapter 3: Creating Compelling Service Offerings */}
    <Page size="A4" style={styles.page}>
      <Text style={styles.title}>Chapter 3: Creating Compelling Service Offerings</Text>
      <Text style={styles.text}>
        With your North Star and target audience clearly defined, it's time to create service offerings that deliver real value and stand out in the marketplace.
      </Text>
      
      <Text style={styles.subtitle}>The Value Ladder Approach</Text>
      <Text style={styles.text}>
        A value ladder provides multiple entry points for clients at different stages of readiness:
      </Text>
      <View style={styles.bulletPoint}>
        <Text style={styles.bullet}>•</Text>
        <Text style={styles.bulletText}>Low-cost or free entry offers (like this guide)</Text>
      </View>
      <View style={styles.bulletPoint}>
        <Text style={styles.bullet}>•</Text>
        <Text style={styles.bulletText}>Mid-tier offers that solve specific problems</Text>
      </View>
      <View style={styles.bulletPoint}>
        <Text style={styles.bullet}>•</Text>
        <Text style={styles.bulletText}>Premium offers that provide comprehensive transformation</Text>
      </View>
      
      <Text style={styles.subtitle}>Designing Your Services: Exercise</Text>
      <Text style={styles.text}>
        For each service level, define:
      </Text>
      <View style={styles.bulletPoint}>
        <Text style={styles.bullet}>1.</Text>
        <Text style={styles.bulletText}>What specific problem does this service solve?</Text>
      </View>
      <View style={styles.bulletPoint}>
        <Text style={styles.bullet}>2.</Text>
        <Text style={styles.bulletText}>What transformation does it provide?</Text>
      </View>
      <View style={styles.bulletPoint}>
        <Text style={styles.bullet}>3.</Text>
        <Text style={styles.bulletText}>What makes this service unique compared to competitors?</Text>
      </View>
      <View style={styles.bulletPoint}>
        <Text style={styles.bullet}>4.</Text>
        <Text style={styles.bulletText}>How does it leverage your unique strengths?</Text>
      </View>
      
      {/* Fourth CTA Box */}
      <View style={styles.ctaBox}>
        <Text style={styles.ctaTitle}>Did you know we have a community?</Text>
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
        Congratulations on completing "Finding Your North Star"! You now have the frameworks needed to gain clarity in your business direction, define your ideal clients, and create compelling service offerings.
      </Text>
      <Text style={styles.text}>
        Remember that finding your business clarity is a journey, not a destination. As you implement these strategies, you'll gain new insights that will help you refine your approach over time.
      </Text>
      <Text style={styles.text}>
        Here are your recommended next steps:
      </Text>
      <View style={styles.bulletPoint}>
        <Text style={styles.bullet}>1.</Text>
        <Text style={styles.bulletText}>Complete the exercises in each chapter</Text>
      </View>
      <View style={styles.bulletPoint}>
        <Text style={styles.bullet}>2.</Text>
        <Text style={styles.bulletText}>Review your current marketing to ensure it aligns with your North Star</Text>
      </View>
      <View style={styles.bulletPoint}>
        <Text style={styles.bullet}>3.</Text>
        <Text style={styles.bulletText}>Refine your service offerings based on your insights</Text>
      </View>
      
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