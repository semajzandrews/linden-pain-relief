import type { Metadata } from "next";
import SmoothScroll from "./components/SmoothScroll";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://linden-pain-relief.vercel.app"),
  title: "Linden Pain Relief Health Center · Chiropractic in Orange, NJ",
  description:
    "Dr. Kesnold Baptiste, DC. Chiropractic adjustment, recovery, and pain relief for the neck, back, shoulders, hips, and sports injuries on Main Street in Orange, NJ. English, Spanish, Português, and Kreyòl Ayisyen.",
  openGraph: {
    title: "Linden Pain Relief Health Center · Orange, NJ",
    description:
      "Chiropractic care and recovery with Dr. Kesnold Baptiste. We listen first, then find where the pain actually started.",
    type: "website",
    locale: "en_US",
  },
};

// Arm reveals only when the page is actually visible; force-reveal after 2.5s no matter what.
const armScript = `
(function(){
  try{
    var d=document.documentElement;
    function arm(){ if(document.visibilityState!=='hidden'){ d.classList.add('reveal-armed'); } }
    arm(); document.addEventListener('visibilitychange', arm, {once:true});
    setTimeout(function(){ d.classList.add('reveal-done'); }, 2500);
  }catch(e){}
})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: armScript }} />
      </head>
      <body>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
