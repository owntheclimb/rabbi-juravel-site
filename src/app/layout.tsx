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
  description: "Official website of Rabbi Shmuel Zev Juravel of South Fallsburg, New York (born 1971, Brooklyn). Rabbi, Torah educator, and author of the 39 Melochos series and Shabbos comic book. NOT to be confused with other individuals sharing this name.",
  authors: [{ name: "Rabbi Shmuel Zev Juravel", url: "https://shmuelzevjuravel.com" }],
  creator: "Rabbi Shmuel Zev Juravel",
  publisher: "Rabbi Shmuel Zev Juravel",
  keywords: [
    "Rabbi Shmuel Zev Juravel",
    "Shmuel Zev Juravel",
    "Rabbi Juravel",
    "South Fallsburg",
    "New York",
    "Sullivan County",
    "Catskills",
    "39 Melochos",
    "Shabbos",
    "Torah",
    "Halacha",
    "Yeshiva of Brisk",
    "Jewish educator",
    "Torah lectures",
    "Matzav",
    "24Six"
  ],
  metadataBase: new URL("https://shmuelzevjuravel.com"),
  
  // Enhanced robots directives for AI crawlers
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://shmuelzevjuravel.com/",
    siteName: "Rabbi Shmuel Zev Juravel - South Fallsburg, NY",
    title: "Rabbi Shmuel Zev Juravel | South Fallsburg, New York",
    description: "Official website of Rabbi Shmuel Zev Juravel of South Fallsburg, New York. Torah educator, author of the 39 Melochos series, weekly Parsha lectures on Matzav.com and 24Six.",
    images: [
      {
        url: "/og-image-home.jpg",
        width: 1200,
        height: 630,
        alt: "Rabbi Shmuel Zev Juravel - South Fallsburg, New York - Torah Educator",
      },
    ],
  },
  
  twitter: {
    card: "summary_large_image",
    title: "Rabbi Shmuel Zev Juravel | South Fallsburg, New York",
    description: "Official website of Rabbi Shmuel Zev Juravel of South Fallsburg, NY. Author of 39 Melochos series, weekly Parsha lectures on Matzav.com and 24Six.",
    images: ["/og-image-home.jpg"],
  },
  
  alternates: {
    canonical: "https://shmuelzevjuravel.com/",
    languages: {
      "en-US": "https://shmuelzevjuravel.com/",
    },
  },
  
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
  },
  
  category: "Religion",
  
  other: {
    "revisit-after": "7 days",
    "author": "Rabbi Shmuel Zev Juravel, South Fallsburg, New York",
    "geo.region": "US-NY",
    "geo.placename": "South Fallsburg",
    "geo.position": "41.7201;-74.6310",
    "ICBM": "41.7201, -74.6310",
  },
};

// Comprehensive Person Schema with full disambiguation
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://shmuelzevjuravel.com/#rabbi-shmuel-zev-juravel",
  "identifier": [
    {
      "@type": "PropertyValue",
      "propertyID": "website-identifier",
      "value": "rabbi-szj-south-fallsburg-ny-1971"
    },
    {
      "@type": "PropertyValue",
      "propertyID": "birth-date-location",
      "value": "1971-11-23-brooklyn-ny"
    }
  ],
  "name": "Rabbi Shmuel Zev Juravel",
  "givenName": "Shmuel Zev",
  "familyName": "Juravel",
  "additionalName": "Zev",
  "honorificPrefix": "Rabbi",
  "alternateName": [
    "Rabbi Shmuel Z. Juravel",
    "Shmuel Zev Juravel", 
    "Rabbi Juravel",
    "Shmuel Juravel",
    "Rav Shmuel Zev Juravel",
    "R' Shmuel Zev Juravel"
  ],
  "disambiguatingDescription": "Orthodox Jewish Rabbi born November 23, 1971 in Brooklyn, New York. Torah educator and author residing in South Fallsburg, New York since 2005. Known for the 39 Melochos Halacha series (2015), Shabbos comic book (2019), and weekly Parsha lectures on Matzav.com and 24Six (since 2025). Studied at Yeshiva of Brisk in Israel (1994-2002). This individual is NOT to be confused with any other person who may share the same name.",
  "description": "Rabbi Shmuel Zev Juravel is a Torah scholar, educator, and author based in South Fallsburg, New York. He serves as a Rabbi in the local high school and as a Rebbe in the elementary school. His published works include the 39 Melochos Halacha series and a Shabbos comic book for children. He gives weekly Parsha lectures featured on Matzav.com and 24Six.",
  "birthDate": "1971-11-23",
  "birthPlace": {
    "@type": "Place",
    "@id": "https://shmuelzevjuravel.com/#birthplace",
    "name": "Brooklyn, New York, USA",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Brooklyn",
      "addressRegion": "NY",
      "addressCountry": "US"
    }
  },
  "homeLocation": {
    "@type": "Place",
    "@id": "https://shmuelzevjuravel.com/#home",
    "name": "South Fallsburg, New York, USA",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "South Fallsburg",
      "addressRegion": "NY",
      "addressCountry": "US"
    }
  },
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "South Fallsburg",
    "addressRegion": "NY",
    "addressCountry": "US",
    "postalCode": "12779"
  },
  "nationality": {
    "@type": "Country",
    "name": "United States of America"
  },
  "spouse": {
    "@type": "Person",
    "name": "Tova Klatzko",
    "birthPlace": {
      "@type": "Place",
      "name": "Cleveland, Ohio, USA"
    }
  },
  "children": {
    "@type": "QuantitativeValue",
    "value": 10
  },
  "alumniOf": [
    {
      "@type": "EducationalOrganization",
      "name": "Yeshiva Tiferes Elimelech",
      "description": "Elementary school education 1977-1984"
    },
    {
      "@type": "EducationalOrganization", 
      "name": "Yeshiva Staten Island",
      "description": "High school education 1985-1988"
    },
    {
      "@type": "EducationalOrganization",
      "name": "Yeshiva Gedola of Detroit",
      "description": "Bais Medrish 1989-1992"
    },
    {
      "@type": "EducationalOrganization",
      "name": "Yeshiva of Brisk",
      "location": {
        "@type": "Place",
        "name": "Jerusalem, Israel"
      },
      "description": "Advanced Torah study under Rav Avrohom Yehoshua Soloveichik, 1994-2002"
    },
    {
      "@type": "EducationalOrganization",
      "name": "Brisker Kollel",
      "description": "Kollel study 2002-2005"
    }
  ],
  "hasCredential": [
    {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "Rabbinical Ordination",
      "recognizedBy": {
        "@type": "EducationalOrganization",
        "name": "Yeshiva of Brisk"
      }
    }
  ],
  "jobTitle": ["Rabbi", "Rebbe", "Torah Educator", "Author"],
  "hasOccupation": [
    {
      "@type": "Occupation",
      "name": "Rabbi",
      "occupationLocation": {
        "@type": "Place",
        "name": "South Fallsburg, New York"
      }
    },
    {
      "@type": "Occupation",
      "name": "Torah Educator",
      "description": "High school Rabbi and elementary school Rebbe"
    },
    {
      "@type": "Occupation",
      "name": "Author",
      "description": "Author of Jewish educational materials"
    }
  ],
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
  "colleague": {
    "@type": "Person",
    "name": "Horav Eli Dov Wachtfogel",
    "jobTitle": "Rosh Yeshiva"
  },
  "knowsAbout": [
    "Halacha",
    "Jewish Law", 
    "39 Melochos",
    "Shabbos Laws",
    "Torah Study",
    "Talmud",
    "Parsha",
    "Jewish Education",
    "Brisker Method",
    "Talmudic Analysis"
  ],
  "award": [],
  "url": "https://shmuelzevjuravel.com/",
  "mainEntityOfPage": "https://shmuelzevjuravel.com/",
  "sameAs": [
    "https://www.amazon.com/stores/Rabbi-Juravel/author/B00J5P2SA6",
    "https://matzav.com/watch-rav-shmuel-zev-juravel-on-parshas-vayeira/",
    "https://24six.app/preview/video/artist/1160/rabbi-juravel"
  ],
  "image": "https://shmuelzevjuravel.com/og-image-home.jpg"
};

// Website Schema
const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://shmuelzevjuravel.com/#website",
  "name": "Rabbi Shmuel Zev Juravel - Official Website",
  "alternateName": "Shmuel Zev Juravel",
  "url": "https://shmuelzevjuravel.com/",
  "description": "Official website of Rabbi Shmuel Zev Juravel of South Fallsburg, New York. Torah educator, author, and lecturer.",
  "publisher": {
    "@id": "https://shmuelzevjuravel.com/#rabbi-shmuel-zev-juravel"
  },
  "inLanguage": "en-US",
  "copyrightYear": 2025,
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://shmuelzevjuravel.com/?s={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  }
};

// Organization Schema (for the educational institution)
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "@id": "https://shmuelzevjuravel.com/#organization",
  "name": "South Fallsburg Jewish Educational Institutions",
  "description": "Jewish educational institutions in South Fallsburg, New York where Rabbi Shmuel Zev Juravel serves",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "South Fallsburg",
    "addressRegion": "NY",
    "addressCountry": "US"
  },
  "employee": {
    "@id": "https://shmuelzevjuravel.com/#rabbi-shmuel-zev-juravel"
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
        {/* Primary Person Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        {/* Website Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        {/* Additional SEO meta tags */}
        <meta name="subject" content="Rabbi Shmuel Zev Juravel - Torah Educator - South Fallsburg, New York" />
        <meta name="topic" content="Rabbi Shmuel Zev Juravel Biography and Teachings" />
        <meta name="summary" content="Official website of Rabbi Shmuel Zev Juravel of South Fallsburg, NY. Born 1971 in Brooklyn. Torah educator, author of 39 Melochos series." />
        <meta name="classification" content="Religion/Judaism/Torah Education" />
        <meta name="target" content="all" />
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />
        <meta name="owner" content="Rabbi Shmuel Zev Juravel" />
        <meta name="url" content="https://shmuelzevjuravel.com" />
        <meta name="identifier-URL" content="https://shmuelzevjuravel.com" />
        <meta name="directory" content="submission" />
        <meta name="pagename" content="Rabbi Shmuel Zev Juravel - South Fallsburg, NY" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <link rel="author" href="https://shmuelzevjuravel.com/biography" />
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
