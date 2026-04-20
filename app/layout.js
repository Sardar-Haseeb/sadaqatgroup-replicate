import "./globals.css";

export const metadata = {
  title: "Sadaqat Limited | A Vertically Integrated Textile Manufacturer",
  description:
    "Sadaqat Limited homepage replica built with Next.js 14 App Router, Tailwind CSS, Framer Motion, and Lucide React.",
  keywords: [
    "Sadaqat Limited",
    "Textile Manufacturer",
    "Faisalabad",
    "Home Textiles",
    "Garments",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
