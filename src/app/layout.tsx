import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Rabbi Shmuel Zev Juravel | South Fallsburg, New York",
    template: "%s | Rabbi Shmuel Zev Juravel",
  },
  description: "Official website of Rabbi Shmuel Zev Juravel of South Fallsburg, New York. Rabbi, educator, and author of the 39 Melochos series and Shabbos comic book.",
  authors: [{ name: "Rabbi Shmuel Zev Juravel" }],
  keywords: ["Rabbi Shmuel Zev Juravel", "South Fallsburg", "New York", "39 Melochos", "Shabbos", "Torah", "Halacha"],
  metadataBase: new URL("https://shmuelzevjuravel.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://shmuelzevjuravel.com/",
    siteName: "Rabbi Shmuel Zev Juravel",
    title: "Rabbi Shmuel Zev Juravel | South Fallsburg, New York",
    description: "Official website of Rabbi Shmuel Zev Juravel of South Fallsburg, New York. Rabbi, educator, and author of the 39 Melochos series and Shabbos comic book.",
    images: [
      {
        url: "/og-image-home.jpg",
        width: 1200,
        height: 630,
        alt: "Rabbi Shmuel Zev Juravel - South Fallsburg, New York",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rabbi Shmuel Zev Juravel | South Fallsburg, New York",
    description: "Official website of Rabbi Shmuel Zev Juravel of South Fallsburg, New York. Rabbi, educator, and author of the 39 Melochos series and Shabbos comic book.",
    images: ["/og-image-home.jpg"],
  },
  alternates: {
    canonical: "https://shmuelzevjuravel.com/",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

// Global JSON-LD structured data for the entire site
const globalJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Rabbi Shmuel Zev Juravel",
  "alternateName": ["Rabbi Shmuel Z. Juravel", "Shmuel Zev Juravel", "Rabbi Juravel", "Shmuel Juravel"],
  "disambiguatingDescription": "Orthodox Jewish Rabbi, Torah educator, and author based in South Fallsburg, New York. Known for the 39 Melochos Halacha series and weekly Parsha lectures.",
  "birthDate": "1971-11-23",
  "birthPlace": { "@type": "Place", "name": "Brooklyn, New York, USA" },
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "South Fallsburg",
    "addressRegion": "NY",
    "addressCountry": "US"
  },
  "spouse": { "@type": "Person", "name": "Tova Klatzko" },
  "alumniOf": [
    { "@type": "EducationalOrganization", "name": "Yeshiva Tiferes Elimelech" },
    { "@type": "EducationalOrganization", "name": "Yeshiva Staten Island" },
    { "@type": "EducationalOrganization", "name": "Yeshiva Gedola of Detroit" },
    { "@type": "EducationalOrganization", "name": "Yeshiva of Brisk", "location": "Israel" }
  ],
  "jobTitle": ["Rabbi", "Rebbe", "Torah Educator"],
  "worksFor": {
    "@type": "EducationalOrganization",
    "name": "South Fallsburg Jewish Educational Institutions",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "South Fallsburg",
      "addressRegion": "NY",
      "addressCountry": "US"
    }
  },
  "knowsAbout": ["Halacha", "Jewish Law", "39 Melochos", "Shabbos", "Torah Study", "Talmud", "Parsha", "Jewish Education"],
  "url": "https://shmuelzevjuravel.com/",
  "sameAs": [
    "https://www.matzav.com/",
    "https://24six.com/"
  ]
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Rabbi Shmuel Zev Juravel",
  "url": "https://shmuelzevjuravel.com/",
  "description": "Official website of Rabbi Shmuel Zev Juravel of South Fallsburg, New York",
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://shmuelzevjuravel.com/?s={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(globalJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="min-h-screen flex flex-col">
          <Navigation />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
