
import { config } from "@/config";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter, Libre_Baskerville, Unna, Frank_Ruhl_Libre, Rethink_Sans} from "next/font/google";
import "./globals.css";
import {Header} from "@/components/Header";
import {Footer} from "@/components/Footer";
import Providers from "@/components/theme-provider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// const fontSans = Inter({ subsets: ["latin"], variable: "--font-sans" });

const fontSans = Frank_Ruhl_Libre({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["400", "700"],
})

const fontSerif = Rethink_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-rethink-sans",
});


export const metadata: Metadata = {
  title: {
    absolute: config.name.metadata.title.absolute,
    default: config.name.metadata.title.default,
    template: config.name.metadata.title.template,
  },
  description: config.name.metadata.description,
  openGraph: {
    title: config.name.metadata.title.default,
    description: config.name.metadata.description,
    // images: [
    //   signOgImageUrl({
    //     title: config.name.name,
    //   }),
    // ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased scroll-smooth",
          fontSans.variable,
          fontSerif.variable,
        )}
      >
        <Providers
          attribute="class"
          defaultTheme="light"
          // enableSystem
          disableTransitionOnChange
        >
          <main>
            <Header />
            {children}
            <Footer />
            </main>
        </Providers>
      </body>
    </html>
  );
}
