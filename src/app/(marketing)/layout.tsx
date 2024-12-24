import Navbar from "./_components/shared/navbar";

export default function MarketingRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <Navbar />
      <div className="">{children}</div>
    </main>
  );
}
