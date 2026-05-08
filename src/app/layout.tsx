import "../styles/globals.css";
import "@fontsource/inter";
import Navbar from "@/components/layout/Navbar";

export const metadata = {
  title: "PIKUS | MDLI™ Vape Technology",
  description:
    "PIKUS is a global vape technology brand powered by MDLI™ innovation.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}