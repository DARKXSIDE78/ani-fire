import MainWrapper from "@/components/main/layout/main-wrapper";
import Navbar from "@/components/main/ui/navbar";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "ZoroSenpai | Watch your favorite shows without any interrupts.",
  description:
    "Explore the trending anime, spotlight anime, latest anime & many more.",
  keywords: [
  "ZoroSenpai",              // Your brand
  "anime streaming",         // General term
  "Gogoanime",               // Competitor
  "9anime",                  // Competitor
  "KissAnime",               // Competitor
  "AnimeFreak",              // Competitor
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
  "anime for kids",          // Family-friendly content
  "anime for adults",        // More mature content
  "watch anime free",        // Free option
  "anime with English subtitles", // Subbed content
  "anime with English dub", // Dubbed content
  "watch anime online free", // Free streaming
  "AniWatch",                // Competitor
  "Masterani",               // Competitor
  "Animixplay",              // Competitor
  "AnimeHeaven",             // Competitor
  "Chia-Anime",              // Competitor
  "FMovies Anime",           // Movies section
],
  openGraph: {
    title: "ZoroSenpai | Watch your favorite shows without any interrupts.",
    description:
      "Explore the trending anime, spotlight anime, latest anime & many more.",
    images: "/og-image.png",
    type: "website",
  },
};

export default function MainRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <MainWrapper>
      <Navbar />
      {children}
      <footer className="bg-primary-100 px-4 py-10">
        <div className="wrapper-container flex w-full flex-col items-center justify-between gap-4 sm:flex-row">
          <p> ZoroSenpai!</p>

          <div className="flex items-center gap-1">
            <p><p> ZoroSenpai does not store any files on our server. We only provide links to media hosted on third-party services.<br>© ZoroSenpai.to. All rights reserved.</p></p>
          </div>
        </div>
      </footer>
    </MainWrapper>
  );
}
