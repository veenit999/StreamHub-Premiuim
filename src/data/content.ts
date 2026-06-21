export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  rating: number;
  initials: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Aarav Mehta",
    role: "Product Designer, Pune",
    quote:
      "Switched my whole household over — Netflix, Spotify and Microsoft 365 are all active within minutes now. Haven't looked back.",
    rating: 5,
    initials: "AM",
  },
  {
    id: "t2",
    name: "Priya Nair",
    role: "Freelance Editor, Kochi",
    quote:
      "I was skeptical at first, but support replied at midnight and sorted my activation in five minutes. That alone earned my trust.",
    rating: 5,
    initials: "PN",
  },
  {
    id: "t3",
    name: "Rohan Kapoor",
    role: "Software Engineer, Bengaluru",
    quote:
      "Pay once, everything just works. The dashboard makes it dead simple to see what's renewing and when.",
    rating: 5,
    initials: "RK",
  },
  {
    id: "t4",
    name: "Sana Iyer",
    role: "Marketing Lead, Mumbai",
    quote:
      "Cut my monthly subscription spend by more than half without giving up a single service I actually use.",
    rating: 4,
    initials: "SI",
  },
];

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const faqs: FAQItem[] = [
  {
    id: "f1",
    question: "How does activation work?",
    answer:
      "Once payment is confirmed, our system provisions your access automatically. Most services activate within minutes; a few premium tiers may take up to a few hours during peak demand. You'll get a confirmation the moment it's ready.",
  },
  {
    id: "f2",
    question: "Is payment secure?",
    answer:
      "Yes. All payments are processed through industry-standard encrypted gateways. We never store your card details on our servers — every transaction is tokenized end to end.",
  },
  {
    id: "f3",
    question: "What support is available?",
    answer:
      "Our team is reachable 24/7 over WhatsApp and email. Most queries get a first response within minutes, day or night, including weekends and holidays.",
  },
  {
    id: "f4",
    question: "How quickly will I receive access?",
    answer:
      "The vast majority of orders are delivered instantly or within 15 minutes. If anything is delayed beyond that, we'll proactively message you with a status update.",
  },
];
