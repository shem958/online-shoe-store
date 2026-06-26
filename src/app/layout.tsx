import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import Providers from "@/components/Providers";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Box } from "@mui/material";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Shoe Haven | Elevate Your Step",
  description: "Explore Shoe Haven's modern collection of running, basketball, and casual footwear. High performance meets premium comfort.",
  keywords: "shoes, sneakers, running shoes, basketball shoes, footwear, shop shoes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <body>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <Providers>
            <Header />
            <Box component="main" sx={{ display: "flex", flexDirection: "column", flexGrow: 1, minHeight: "calc(100vh - 72px - 200px)" }}>
              {children}
            </Box>
            <Footer />
          </Providers>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
