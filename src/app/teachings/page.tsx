import type { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Teachings",
  description: "Torah teachings, divrei Torah, and essays by Rabbi Shmuel Zev Juravel of South Fallsburg, NY. Halacha insights and Jewish thought from a Yeshiva of Brisk scholar.",
  openGraph: {
    title: "Teachings | Rabbi Shmuel Zev Juravel",
    description: "Torah teachings and essays by Rabbi Shmuel Zev Juravel.",
    type: "website",
    url: "https://shmuelzevjuravel.com/teachings",
    images: [
      {
        url: "/hero-teachings.jpg",
        width: 1200,
        height: 630,
        alt: "Rabbi Shmuel Zev Juravel teaching Torah in the study hall",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Teachings | Rabbi Shmuel Zev Juravel",
    description: "Torah teachings and essays by Rabbi Shmuel Zev Juravel.",
    images: ["/hero-teachings.jpg"],
  },
  alternates: {
    canonical: "https://shmuelzevjuravel.com/teachings",
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
      "name": "Teachings",
      "item": "https://shmuelzevjuravel.com/teachings"
    }
  ]
};

const collectionJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "Torah Teachings by Rabbi Shmuel Zev Juravel",
  "description": "Collection of divrei Torah, essays, and recordings by Rabbi Shmuel Zev Juravel of South Fallsburg, New York",
  "author": {
    "@type": "Person",
    "name": "Rabbi Shmuel Zev Juravel",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "South Fallsburg",
      "addressRegion": "NY",
      "addressCountry": "US"
    }
  }
};

export default function Teachings() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }}
      />

      <div className="relative h-[350px] sm:h-[400px] md:h-[450px] overflow-hidden">
        <img 
          src="/hero-teachings.jpg" 
          alt="Rabbi Shmuel Zev Juravel teaching Torah in the study hall"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/40" aria-hidden="true"></div>
        <div className="absolute bottom-0 left-0 z-10 max-w-4xl px-4 sm:px-6 lg:px-8 pb-12">
          <h1 className="text-4xl font-bold mb-3 text-white">Teaching Torah</h1>
          <p className="text-xl text-white/90">Teaching Divrei Torah, essays, and recordings</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">About These Teachings</CardTitle>
            <CardDescription>
              Authored by <strong>Rabbi Shmuel Zev Juravel</strong>, South Fallsburg, New York
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed">
              This section features Torah insights, Halachic discussions, and essays on Jewish thought. Rabbi Juravel&apos;s teachings draw from his extensive background learning at Yeshiva of Brisk and his years of experience in Torah education. Each teaching reflects his commitment to making complex Torah concepts accessible and relevant.
            </p>
          </CardContent>
        </Card>

        <div className="text-center py-12">
          <p className="text-muted-foreground text-lg">
            Written teachings will be added here as they become available.
          </p>
          <p className="text-muted-foreground mt-4">
            For audio lectures, please visit the <Link href="/lectures" className="text-primary hover:underline font-semibold">Lectures page</Link>.
          </p>
        </div>
      </div>
    </>
  );
}

