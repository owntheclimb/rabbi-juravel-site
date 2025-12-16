import type { Metadata } from "next";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Weekly Lectures",
  description: "Weekly Parsha lectures by Rabbi Shmuel Zev Juravel on Matzav.com and 24Six. Torah insights and commentary from South Fallsburg, NY educator since 2025.",
  openGraph: {
    title: "Weekly Lectures | Rabbi Shmuel Zev Juravel",
    description: "Weekly Parsha lectures by Rabbi Shmuel Zev Juravel on Matzav.com and 24Six.",
    type: "website",
    url: "https://shmuelzevjuravel.com/lectures",
    images: [
      {
        url: "/og-image-lectures.jpg",
        width: 1200,
        height: 630,
        alt: "Lectures - Rabbi Shmuel Zev Juravel",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lectures | Rabbi Shmuel Zev Juravel",
    description: "Weekly Parsha lectures by Rabbi Shmuel Zev Juravel on Matzav.com and 24Six.",
    images: ["/og-image-lectures.jpg"],
  },
  alternates: {
    canonical: "https://shmuelzevjuravel.com/lectures",
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
      "name": "Lectures",
      "item": "https://shmuelzevjuravel.com/lectures"
    }
  ]
};

const collectionJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "Weekly Parsha Lectures by Rabbi Shmuel Zev Juravel",
  "description": "Weekly Torah lectures on the Parsha by Rabbi Shmuel Zev Juravel of South Fallsburg, New York",
  "url": "https://shmuelzevjuravel.com/lectures",
  "about": {
    "@type": "Person",
    "name": "Rabbi Shmuel Zev Juravel",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "South Fallsburg",
      "addressRegion": "NY"
    }
  }
};

const videoJsonLd = {
  "@context": "https://schema.org",
  "@type": "VideoObject",
  "name": "Weekly Parsha Lecture by Rabbi Shmuel Zev Juravel",
  "description": "Torah insights and commentary on the weekly portion by Rabbi Shmuel Zev Juravel",
  "thumbnailUrl": "https://shmuelzevjuravel.com/og-image-lectures.jpg",
  "uploadDate": "2025-01-01",
  "contentUrl": "https://player.vimeo.com/video/1133508456",
  "embedUrl": "https://player.vimeo.com/video/1133508456",
  "author": {
    "@type": "Person",
    "name": "Rabbi Shmuel Zev Juravel"
  }
};

export default function Lectures() {
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoJsonLd) }}
      />

      <div className="bg-gradient-to-r from-primary to-primary-hover text-primary-foreground py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-2">Weekly Parsha Lectures</h1>
          <p className="text-lg opacity-90">Torah insights on the weekly portion</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Card className="mb-8">
          <CardContent className="pt-6">
            <p className="text-lg leading-relaxed mb-4">
              Beginning in 2025, Rabbi Shmuel Zev Juravel expanded his reach in Torah education by giving weekly Parsha lectures that are featured on two major platforms: <strong>Matzav.com</strong> and <strong>24Six</strong>. These lectures provide listeners with deep insights into the weekly Torah portion, combining rigorous scholarship with practical application.
            </p>
            <p className="text-lg leading-relaxed">
              Drawing from his extensive background in Talmudic learning at Yeshiva of Brisk and his years of teaching experience in South Fallsburg, Rabbi Juravel brings clarity and depth to each week&apos;s reading, making complex concepts accessible to learners at all levels.
            </p>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-2 gap-6">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>Matzav.com</CardTitle>
              <CardDescription>Torah news and content platform</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Listen to Rabbi Juravel&apos;s weekly Parsha lectures on Matzav.com, a leading platform for Torah content and Jewish news.
              </p>
              <Button className="w-full" asChild>
                <a href="https://matzav.com/watch-rav-shmuel-zev-juravel-on-parshas-vayeira/" target="_blank" rel="noopener noreferrer">
                  Visit Matzav.com <ExternalLink className="ml-2 w-4 h-4" />
                </a>
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>24Six</CardTitle>
              <CardDescription>Jewish audio and video platform</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Access Rabbi Juravel&apos;s weekly teachings on 24Six, a comprehensive platform for Jewish audio and video content.
              </p>
              <Button className="w-full" asChild>
                <a href="https://24six.app/preview/video/artist/1160/rabbi-juravel" target="_blank" rel="noopener noreferrer">
                  Visit 24Six <ExternalLink className="ml-2 w-4 h-4" />
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>

        <section className="mt-8" aria-label="Featured lecture video">
          <Card>
            <CardHeader>
              <CardTitle>Watch: Latest Parsha Lecture</CardTitle>
              <CardDescription>Rabbi Juravel&apos;s weekly Torah insights</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  src="https://player.vimeo.com/video/1133508456"
                  className="absolute top-0 left-0 w-full h-full rounded-lg"
                  frameBorder={0}
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  title="Rabbi Shmuel Zev Juravel - Weekly Parsha Lecture"
                  loading="lazy"
                />
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                Watch Rabbi Juravel&apos;s insightful weekly Parsha lecture, exploring the depth and practical applications of Torah wisdom.
              </p>
            </CardContent>
          </Card>
        </section>

        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Lecture Topics and Approach</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Each weekly lecture explores the themes, narratives, and Halachic implications of the Torah portion. Rabbi Juravel&apos;s teaching style combines:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>Deep textual analysis rooted in classical commentaries</li>
              <li>Practical lessons for contemporary life</li>
              <li>Clear explanations of complex concepts</li>
              <li>Relevant stories and examples that bring the Torah to life</li>
            </ul>
            <div className="bg-accent p-4 rounded-lg mt-6">
              <p className="text-sm">
                <strong>Presented by:</strong> Rabbi Shmuel Zev Juravel, South Fallsburg, New York
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}

