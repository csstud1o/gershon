import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Loader from "@/components/Loader";

export const metadata: Metadata = {
  title: "ГЕРШОН — Premium Café & Restaurant Moscow",
  description:
    "Премиальное кафе ГЕРШОН в Москве. Specialty coffee, авторские завтраки, изысканные бранчи и незабываемые вечера. Дубининская ул., 59Б.",
  keywords: ["кафе москва", "гершон", "specialty coffee", "бранч москва", "ресторан москва"],
  openGraph: {
    title: "ГЕРШОН — Premium Café & Restaurant",
    description: "A place where every cup tells a story.",
    locale: "ru_RU",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body>
        <Loader />
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
