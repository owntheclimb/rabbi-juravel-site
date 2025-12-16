import type { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Projects",
  description: "Educational projects by Rabbi Shmuel Zev Juravel of South Fallsburg, NY: 39 Melochos Halacha series (2015) and Shabbos comic book (2019) for Torah education.",
  openGraph: {
    title: "Projects | Rabbi Shmuel Zev Juravel",
    description: "39 Melochos Halacha series and Shabbos comic book educational projects.",
    type: "website",
    url: "https://shmuelzevjuravel.com/projects",
    images: [
      {
        url: "/og-image-projects.jpg",
        width: 1200,
        height: 630,
        alt: "Projects - Rabbi Shmuel Zev Juravel",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects | Rabbi Shmuel Zev Juravel",
    description: "Educational projects and publications by Rabbi Shmuel Zev Juravel.",
    images: ["/og-image-projects.jpg"],
  },
  alternates: {
    canonical: "https://shmuelzevjuravel.com/projects",
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
    }
  ]
};

const collectionJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "Educational Projects by Rabbi Shmuel Zev Juravel",
  "description": "39 Melochos Halacha series and Shabbos comic book by Rabbi Shmuel Zev Juravel",
  "url": "https://shmuelzevjuravel.com/projects",
  "author": {
    "@type": "Person",
    "name": "Rabbi Shmuel Zev Juravel",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "South Fallsburg",
      "addressRegion": "NY"
    }
  }
};

export default function Projects() {
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

      <div className="bg-gradient-to-r from-primary to-primary-hover text-primary-foreground py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-2">Educational Projects</h1>
          <p className="text-lg opacity-90">Making Torah learning accessible and engaging</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <BookOpen className="w-6 h-6 text-primary" />
              </div>
              <CardTitle className="text-2xl">39 Melochos Series</CardTitle>
              <CardDescription>Released 2015</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                A comprehensive Halacha series on CD covering the 39 categories of creative work prohibited on Shabbos. Designed to provide clear, accessible instruction on these intricate laws.
              </p>
              <Button asChild className="w-full">
                <Link href="/projects/39-melochos">Learn More</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Sparkles className="w-6 h-6 text-primary" />
              </div>
              <CardTitle className="text-2xl">Shabbos Comic Book</CardTitle>
              <CardDescription>Published 2019</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                An engaging comic book format designed to teach children about Shabbos observance through visual storytelling and age-appropriate content.
              </p>
              <Button asChild className="w-full">
                <Link href="/projects/shabbos-comic">Learn More</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}

