import React from 'react';
import MainWrapper from "@/components/main/layout/main-wrapper";
import Navbar from "@/components/main/ui/navbar";
import { Metadata } from "next";
import { FaTelegram, FaInstagram, FaDiscord, FaYoutube } from 'react-icons/fa'; // Import social icons
import Link from "next/link";

export const metadata: Metadata = {
  title: "ZoroSenpai | Watch your favorite shows without any interrupts.",
  description:
    "Explore the trending anime, spotlight anime, latest anime & many more.",
  keywords: [
    "ZoroSenpai",
    "anime streaming website",
    "trending anime",
    "latest anime",
    "popular anime",
    "anime streaming",         // General term
    "anime streaming free",    // Another free search term
    "subbed anime free",       // Subtitled anime for free
    "dubbed anime free",       // Dubbed anime for free
    "watch anime online free", // Free watch option
    "AniWatch",    
    "Zoro",
    "HiAnime",// Competitor
    "watch anime online",      // Common search
    "trending anime",          // Popular content
    "latest anime",            // Fresh content
    "anime series",            // Focus on series
    "anime episodes",          // For episode-based searches
    "anime movies",            // For movie-focused searches
    "anime HD streaming",      // High-quality streaming
    "subbed anime",            // Subtitles
    "dubbed anime",            // Dubs
    "action anime",            // Action-focused shows
    "romance anime",           // Romance genre
    "shonen anime",            // Popular genre
    "isekai anime",            // Popular genre
  ],
  openGraph: {
    title: "ZoroSenpai | Watch your favorite shows without any interrupts.",
    description:
      "Explore the trending anime, spotlight anime, latest anime & many more.",
    images: "/og-ZoroX.png", // Ensure you have the correct image path
    type: "website",
  },
};

export default function MainRootLayout({ children }: { children: React.ReactNode }) {
  return (
    <MainWrapper>
      <Navbar />
      {children}

      {/* Social Media Icons Above Footer */}
      <div className="flex justify-center gap-8 py-6">
        <a href="https://t.me/zoro_senpai" target="_blank" rel="noopener noreferrer" className="text-2xl text-[#0088cc] hover:text-primary-500">
          <FaTelegram />
        </a>
        <a href="https://www.instagram.com/zoro_senpai" target="_blank" rel="noopener noreferrer" className="text-2xl text-[#E4405F] hover:text-primary-500">
          <FaInstagram />
        </a>
        <a href="https://discord.gg/zoro_senpai" target="_blank" rel="noopener noreferrer" className="text-2xl text-[#7289DA] hover:text-primary-500">
          <FaDiscord />
        </a>
        <a href="https://www.youtube.com/c/zoro_senpai" target="_blank" rel="noopener noreferrer" className="text-2xl text-[#FF0000] hover:text-primary-500">
          <FaYoutube />
        </a>
      </div>

      <footer className="bg-primary-100 px-4 py-10">
        <div className="wrapper-container flex w-full flex-col items-center justify-between gap-4 sm:flex-row">
          <p>
            ZoroSenpai does not store any files on our server. We only provide links to media hosted on third-party services.
          </p>
          <p>© ZoroSenpai.to. All rights reserved.</p>
        </div>
      </footer>
    </MainWrapper>
  );
}
