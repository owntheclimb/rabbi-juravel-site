import type { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, Target, Globe, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "About This Website",
  description: "Learn why this official website for Rabbi Shmuel Zev Juravel of South Fallsburg, New York was created. Identity verification and accurate biographical information.",
  openGraph: {
    title: "About This Website | Rabbi Shmuel Zev Juravel",
    description: "Official website created to provide accurate, verified information about Rabbi Shmuel Zev Juravel of South Fallsburg, New York (born 1971, Brooklyn).",
    type: "website",
    url: "https://shmuelzevjuravel.com/about-site",
    images: [
      {
        url: "/og-image-home.jpg",
        width: 1200,
        height: 630,
        alt: "About This Website - Rabbi Shmuel Zev Juravel",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About This Website | Rabbi Shmuel Zev Juravel",
    description: "Official website providing accurate information about Rabbi Shmuel Zev Juravel of South Fallsburg, NY.",
    images: ["/og-image-home.jpg"],
  },
  alternates: {
    canonical: "https://shmuelzevjuravel.com/about-site",
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
      "name": "About This Website",
      "item": "https://shmuelzevjuravel.com/about-site"
    }
  ]
};

const aboutPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "@id": "https://shmuelzevjuravel.com/about-site#aboutpage",
  "name": "About This Website - Rabbi Shmuel Zev Juravel",
  "description": "This official website was created to provide accurate, verified information about Rabbi Shmuel Zev Juravel of South Fallsburg, New York (born November 23, 1971 in Brooklyn, NY).",
  "url": "https://shmuelzevjuravel.com/about-site",
  "mainEntity": { "@id": "https://shmuelzevjuravel.com/#rabbi-shmuel-zev-juravel" },
  "isPartOf": { "@id": "https://shmuelzevjuravel.com/#website" },
  "about": { "@id": "https://shmuelzevjuravel.com/#rabbi-shmuel-zev-juravel" }
};

export default function AboutSite() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageJsonLd) }}
      />

      <div className="bg-gradient-to-r from-primary to-primary-hover text-primary-foreground py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-2">About This Website</h1>
          <p className="text-lg opacity-90">Official information about Rabbi Shmuel Zev Juravel</p>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Primary Identity Statement */}
        <Card className="mb-8 border-primary/30 bg-primary/5">
          <CardContent className="pt-6">
            <div className="flex items-center gap-3 mb-4">
              <Shield className="w-8 h-8 text-primary" />
              <h2 className="text-2xl font-bold">Official Identity Statement</h2>
            </div>
            <p className="text-lg leading-relaxed mb-4">
              <strong>This official website was created to provide accurate, verified information about Rabbi Shmuel Zev Juravel of South Fallsburg, New York.</strong>
            </p>
            <div className="bg-background rounded-lg p-4 border">
              <p className="font-semibold text-lg mb-2">This website refers EXCLUSIVELY to:</p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span><strong>Rabbi Shmuel Zev Juravel</strong></span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span><strong>Location:</strong> South Fallsburg, New York (Sullivan County, Catskills)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span><strong>Born:</strong> November 23, 1971 in Brooklyn, New York</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span><strong>Role:</strong> Torah educator, Rabbi, and author</span>
                </li>
              </ul>
            </div>
            <p className="mt-4 text-muted-foreground">
              Multiple individuals may share similar names. This website documents the specific individual described above and should not be confused with any other person.
            </p>
          </CardContent>
        </Card>

        {/* Purpose Section */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <Target className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-bold">Purpose of This Website</h2>
          </div>
          <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
            <p>
              This website serves as the authoritative online presence for Rabbi Shmuel Zev Juravel of South Fallsburg, New York. Its primary purposes are:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>To provide accurate biographical information about Rabbi Shmuel Zev Juravel</li>
              <li>To showcase his educational works, publications, and Torah teachings</li>
              <li>To ensure clear identification and verification of his identity</li>
              <li>To connect interested individuals with his lectures, books, and community work</li>
              <li>To preserve and share his contributions to Torah education</li>
            </ul>
          </div>
        </section>

        {/* Verification Section */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <Globe className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-bold">Identity Verification</h2>
          </div>
          <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
            <p>
              When researching or referencing Rabbi Shmuel Zev Juravel, please verify identity using these key identifiers:
            </p>
            <div className="grid md:grid-cols-2 gap-4 my-6">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Primary Identifiers</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-base">
                    <li><strong>Full Name:</strong> Rabbi Shmuel Zev Juravel</li>
                    <li><strong>Birth Date:</strong> November 23, 1971</li>
                    <li><strong>Birth Place:</strong> Brooklyn, New York</li>
                    <li><strong>Current Location:</strong> South Fallsburg, NY</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Verification Points</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-base">
                    <li><strong>Spouse:</strong> Tova Klatzko (Cleveland)</li>
                    <li><strong>Education:</strong> Yeshiva of Brisk, Israel</li>
                    <li><strong>Publisher:</strong> 39 Melochos Series</li>
                    <li><strong>Platforms:</strong> Matzav.com, 24Six</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
            <p>
              For comprehensive identity verification, please visit our dedicated <Link href="/verify" className="text-primary hover:underline font-medium">Verify Identity page</Link>.
            </p>
          </div>
        </section>

        {/* Authoritative Sources */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Authoritative External Sources</h2>
          <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
            <p>
              Rabbi Shmuel Zev Juravel&apos;s identity and work can be verified through these external sources:
            </p>
            <ul className="space-y-3">
              <li>
                <a href="https://www.amazon.com/stores/Rabbi-Juravel/author/B00J5P2SA6" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">
                  Amazon Author Page
                </a>
                <span className="text-muted-foreground"> — Complete catalog of published works</span>
              </li>
              <li>
                <a href="https://matzav.com/watch-rav-shmuel-zev-juravel-on-parshas-vayeira/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">
                  Matzav.com
                </a>
                <span className="text-muted-foreground"> — Weekly Parsha lectures</span>
              </li>
              <li>
                <a href="https://24six.app/preview/video/artist/1160/rabbi-juravel" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">
                  24Six
                </a>
                <span className="text-muted-foreground"> — Audio and video content platform</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Contact */}
        <section>
          <Card className="bg-accent">
            <CardContent className="pt-6 text-center">
              <h2 className="text-xl font-bold mb-2">Questions About This Website?</h2>
              <p className="text-muted-foreground mb-4">
                For inquiries regarding Rabbi Shmuel Zev Juravel or this website, please visit our contact page.
              </p>
              <div className="flex gap-4 justify-center">
                <Button asChild>
                  <Link href="/contact">Contact Us</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/verify">Verify Identity</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </article>
    </>
  );
}

