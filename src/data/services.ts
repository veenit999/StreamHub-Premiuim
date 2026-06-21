export interface Service {
  id: string;
  name: string;
  category: "Streaming" | "Music" | "Productivity" | "AI Tools";
  price: number;
  period: "mo" | "yr";
  originalPrice?: number;
  benefits: string[];
  accent: string;
  initial: string;
}

export const services: Service[] = [
  {
    id: "netflix",
    name: "Netflix",
    category: "Streaming",
    price: 199,
    period: "mo",
    originalPrice: 649,
    benefits: ["4K Ultra HD", "4 screens at once", "Full catalog access"],
    accent: "#E50914",
    initial: "N",
  },
  {
    id: "prime-video",
    name: "Amazon Prime Video",
    category: "Streaming",
    price: 149,
    period: "mo",
    originalPrice: 299,
    benefits: ["Originals & live sport", "Download & watch offline", "Multi-device"],
    accent: "#00A8E1",
    initial: "P",
  },
  {
    id: "spotify",
    name: "Spotify Premium",
    category: "Music",
    price: 59,
    period: "mo",
    originalPrice: 119,
    benefits: ["Ad-free listening", "Offline downloads", "Unlimited skips"],
    accent: "#1DB954",
    initial: "S",
  },
  {
    id: "youtube-premium",
    name: "YouTube Premium",
    category: "Streaming",
    price: 99,
    period: "mo",
    originalPrice: 149,
    benefits: ["No ads, ever", "Background play", "YouTube Music included"],
    accent: "#FF0000",
    initial: "Y",
  },
  {
    id: "disney-hotstar",
    name: "Disney+ Hotstar",
    category: "Streaming",
    price: 149,
    period: "mo",
    originalPrice: 299,
    benefits: ["Live sports", "Disney, Marvel, Pixar", "4K on select titles"],
    accent: "#0F1D8C",
    initial: "D",
  },
  {
    id: "chatgpt-plus",
    name: "ChatGPT Plus",
    category: "AI Tools",
    price: 999,
    period: "mo",
    originalPrice: 1700,
    benefits: ["Priority access to latest models", "Faster response times", "Advanced data analysis"],
    accent: "#74AA9C",
    initial: "C",
  },
  {
    id: "microsoft-365",
    name: "Microsoft 365",
    category: "Productivity",
    price: 299,
    period: "mo",
    originalPrice: 489,
    benefits: ["Word, Excel, PowerPoint", "1TB OneDrive storage", "Copilot built in"],
    accent: "#0078D4",
    initial: "M",
  },
];

export const categories = ["All", "Streaming", "Music", "Productivity", "AI Tools"] as const;
