import MainWrapper from "@/components/main/layout/main-wrapper";
import Navbar from "@/components/main/ui/navbar";
import type { Metadata } from "next";
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
    "ZoroSenpai",              // Your brand
    "anime streaming",         // General term
    "Gogoanime",               // Competitor
    "9anime",                  // Competitor
    "KissAnime",               // Competitor
    "AnimeFreak",              // Competitor
    "KayoAnime",               // Competitor
    "download anime for free", // For download-focused searches
    "free anime download",     // Free download option
    "free anime streaming",    // Emphasizes free streaming
    "watch anime free",        // Free viewing option
    "anime download site",     // People looking for anime download sources
    "anime torrents",          // Popular among users looking for torrent links
    "download anime episodes", // Episode download
    "anime free download",     // For those seeking free anime to download
    "watch anime for free",    // Free streaming searches
    "best free anime site",    // For people looking for the best free platforms
    "anime streaming free",    // Another free search term
    "anime download HD",       // For high-definition downloads
    "anime download MP4",      // Specific download format
    "anime download 1080p",    // High-definition download for anime fans
    "anime download 720p",     // Another popular resolution for downloads
    "subbed anime free",       // Subtitled anime for free
    "dubbed anime free",       // Dubbed anime for free
    "watch anime online free", // Free watch option
    "AniWatch",                // Competitor
    "Masterani",               // Competitor
    "Animixplay",              // Competitor
    "AnimeHeaven",             // Competitor
    "Chia-Anime",              // Competitor
    "FMovies Anime",
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
    "watch anime online free",
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
          <p>ZoroSenpai</p>

          <div className="flex items-center gap-1">
            <p>ZoroSenpai does not store any files on our server. We only provide links to media hosted on third-party services. <br>© ZoroSenpai.to. All rights reserved.</p>
            <Link
              href="/home"
              target="_blank"
              className="text-secondary underline underline-offset-2"
            >
              ZoroSenpai
            </Link>
          </div>
        </div>
      </footer>
    </MainWrapper>
  );
}
