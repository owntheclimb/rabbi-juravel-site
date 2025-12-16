import type { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "39 Melochos Series",
  description: "39 Melochos Halacha series on CD by Rabbi Shmuel Zev Juravel (2015). Comprehensive instruction on Shabbos laws from South Fallsburg, NY Torah educator.",
  openGraph: {
    title: "39 Melochos Series | Rabbi Shmuel Zev Juravel",
    description: "Comprehensive Halacha series covering the 39 categories of creative work prohibited on Shabbos.",
    type: "article",
    url: "https://shmuelzevjuravel.com/projects/39-melochos",
    images: [
      {
        url: "/og-image-39-melochos.jpg",
        width: 1200,
        height: 630,
        alt: "39 Melochos - Rabbi Shmuel Zev Juravel",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "39 Melochos Halacha Series | Rabbi Shmuel Zev Juravel",
    description: "39 Melochos Halacha series (2015) by Rabbi Shmuel Zev Juravel: Comprehensive Shabbos law CD course from South Fallsburg Torah educator.",
    images: ["/og-image-39-melochos.jpg"],
  },
  alternates: {
    canonical: "https://shmuelzevjuravel.com/projects/39-melochos",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://shmuelzevjuravel.com/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Projects",
      "item": "https://shmuelzevjuravel.com/projects"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "39 Melochos Series",
      "item": "https://shmuelzevjuravel.com/projects/39-melochos"
    }
  ]
};

// CreativeWork schema for 39 Melochos series with Amazon identifiers
const creativeWorkJsonLd = {
  "@context": "https://schema.org",
  "@type": "CreativeWorkSeries",
  "@id": "https://shmuelzevjuravel.com/projects/39-melochos#series",
  "name": "39 Melochos Halacha Series",
  "alternateName": ["39 Melachos", "Thirty-Nine Melochos"],
  "description": "Comprehensive Halacha series covering the 39 categories of creative work prohibited on Shabbos. Created by Rabbi Shmuel Zev Juravel of South Fallsburg, New York.",
  "author": { "@id": "https://shmuelzevjuravel.com/#rabbi-shmuel-zev-juravel" },
  "creator": { "@id": "https://shmuelzevjuravel.com/#rabbi-shmuel-zev-juravel" },
  "datePublished": "2015",
  "inLanguage": "en",
  "about": [
    { "@type": "Thing", "name": "39 Melochos" },
    { "@type": "Thing", "name": "Shabbos Laws" },
    { "@type": "Thing", "name": "Halacha" },
    { "@type": "Thing", "name": "Jewish Law" }
  ],
  "genre": ["Religious Education", "Jewish Law", "Halacha"],
  "audience": {
    "@type": "Audience",
    "audienceType": "Torah learners and Jewish educators"
  },
  "identifier": [
    {
      "@type": "PropertyValue",
      "propertyID": "ASIN",
      "value": "B0BN2CRTFX"
    }
  ],
  "sameAs": [
    "https://www.amazon.com/39-Melachos-Rabbi-Juravel-Shipwrecked/dp/B0BN2CRTFX",
    "https://www.amazon.com/stores/Rabbi-Juravel/author/B00J5P2SA6"
  ],
  "url": "https://shmuelzevjuravel.com/projects/39-melochos",
  "mainEntityOfPage": "https://shmuelzevjuravel.com/projects/39-melochos"
};

// WebPage schema
const webPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://shmuelzevjuravel.com/projects/39-melochos#webpage",
  "url": "https://shmuelzevjuravel.com/projects/39-melochos",
  "name": "39 Melochos Halacha Series by Rabbi Shmuel Zev Juravel",
  "description": "39 Melochos Halacha series on CD by Rabbi Shmuel Zev Juravel of South Fallsburg, NY (2015). Comprehensive instruction on Shabbos laws.",
  "isPartOf": { "@id": "https://shmuelzevjuravel.com/#website" },
  "about": { "@id": "https://shmuelzevjuravel.com/projects/39-melochos#series" },
  "mainEntity": { "@id": "https://shmuelzevjuravel.com/projects/39-melochos#series" }
};

export default function Project39Melochos() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(creativeWorkJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
      />

      <div className="bg-gradient-to-r from-primary to-primary-hover text-primary-foreground py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-2">39 Melochos Halacha Series</h1>
          <p className="text-lg opacity-90">Released 2015</p>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Card>
          <CardContent className="pt-6">
            <p className="text-lg leading-relaxed mb-6">
              The <strong>39 Melochos</strong> Halacha series represents Rabbi Shmuel Zev Juravel&apos;s commitment to making the intricate laws of Shabbos observance accessible to a broad audience. Released in 2015, this comprehensive CD series provides clear, practical instruction on the thirty-nine categories of creative work that are prohibited on Shabbos.
            </p>

            <h2 className="text-2xl font-bold mb-4 text-primary">Purpose and Audience</h2>
            <p className="text-lg leading-relaxed mb-6">
              Drawing from his years of intensive study at Yeshiva of Brisk and his experience in Torah education, Rabbi Juravel created this series to bridge the gap between complex Halachic scholarship and everyday Shabbos observance. The series is designed for:
            </p>
            <ul className="list-disc list-inside space-y-2 text-lg ml-4 mb-6">
              <li>Individuals seeking to deepen their understanding of Shabbos laws</li>
              <li>Torah educators looking for clear, authoritative teaching materials</li>
              <li>Community members who want practical guidance for Shabbos observance</li>
              <li>Advanced learners interested in the underlying principles of the 39 Melochos</li>
            </ul>

            <h2 className="text-2xl font-bold mb-4 text-primary">Content Overview</h2>
            <p className="text-lg leading-relaxed mb-6">
              Each melachah (creative category) is presented with clarity and precision, exploring both the theoretical foundations and practical applications. The series addresses common Shabbos questions and situations, providing listeners with the knowledge they need to observe Shabbos with confidence and understanding.
            </p>

            <h2 className="text-2xl font-bold mb-4 text-primary">Educational Approach</h2>
            <p className="text-lg leading-relaxed mb-6">
              Rabbi Juravel&apos;s teaching style combines rigorous scholarship with accessibility. His background in the Brisker method of Talmudic analysis ensures accuracy and depth, while his years of educational experience make the material approachable for learners at various levels. The audio format allows for repeated listening and convenient learning.
            </p>

            <div className="bg-accent p-6 rounded-lg mt-8">
              <p className="text-sm text-muted-foreground">
                <strong>Authored by:</strong> Rabbi Shmuel Zev Juravel, South Fallsburg, New York
              </p>
            </div>
          </CardContent>
        </Card>
      </article>
    </>
  );
}

