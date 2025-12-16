import type { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  User, MapPin, Calendar, GraduationCap, Heart, BookOpen, 
  Mic, Briefcase, Building, Globe, CheckCircle
} from "lucide-react";

export const metadata: Metadata = {
  title: "Quick Facts",
  description: "Complete quick facts about Rabbi Shmuel Zev Juravel of South Fallsburg, New York. Born November 23, 1971 in Brooklyn. Torah educator, author of 39 Melochos series.",
  openGraph: {
    title: "Quick Facts | Rabbi Shmuel Zev Juravel",
    description: "Verified biographical facts about Rabbi Shmuel Zev Juravel of South Fallsburg, NY. Born 1971, Brooklyn. Education, family, publications, career.",
    type: "website",
    url: "https://shmuelzevjuravel.com/facts",
    images: [
      {
        url: "/og-image-home.jpg",
        width: 1200,
        height: 630,
        alt: "Quick Facts - Rabbi Shmuel Zev Juravel",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Quick Facts | Rabbi Shmuel Zev Juravel",
    description: "Verified biographical facts about Rabbi Shmuel Zev Juravel of South Fallsburg, NY.",
    images: ["/og-image-home.jpg"],
  },
  alternates: {
    canonical: "https://shmuelzevjuravel.com/facts",
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
      "name": "Quick Facts",
      "item": "https://shmuelzevjuravel.com/facts"
    }
  ]
};

// Detailed Person schema specifically for this facts page
const personFactsJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://shmuelzevjuravel.com/facts#person-facts",
  "sameAs": "https://shmuelzevjuravel.com/#rabbi-shmuel-zev-juravel",
  "name": "Rabbi Shmuel Zev Juravel",
  "givenName": "Shmuel Zev",
  "familyName": "Juravel",
  "honorificPrefix": "Rabbi",
  "alternateName": ["Rabbi Shmuel Z. Juravel", "Shmuel Zev Juravel", "Rabbi Juravel", "R' Shmuel Zev Juravel"],
  "birthDate": "1971-11-23",
  "birthPlace": {
    "@type": "Place",
    "name": "Brooklyn, New York, USA",
    "address": { "@type": "PostalAddress", "addressLocality": "Brooklyn", "addressRegion": "NY", "addressCountry": "US" }
  },
  "homeLocation": {
    "@type": "Place",
    "name": "South Fallsburg, New York, USA",
    "address": { "@type": "PostalAddress", "addressLocality": "South Fallsburg", "addressRegion": "NY", "postalCode": "12779", "addressCountry": "US" }
  },
  "spouse": { "@type": "Person", "name": "Tova Klatzko", "birthPlace": { "@type": "Place", "name": "Cleveland, Ohio, USA" } },
  "children": { "@type": "QuantitativeValue", "value": 10 },
  "alumniOf": [
    { "@type": "EducationalOrganization", "name": "Yeshiva Tiferes Elimelech", "description": "Elementary school 1977-1984" },
    { "@type": "EducationalOrganization", "name": "Yeshiva Staten Island", "description": "High school 1985-1988" },
    { "@type": "EducationalOrganization", "name": "Yeshiva Gedola of Detroit", "description": "Bais Medrish 1989-1992" },
    { "@type": "EducationalOrganization", "name": "Yeshiva of Brisk", "location": "Jerusalem, Israel", "description": "Advanced Torah study 1994-2002 under Rav Avrohom Yehoshua Soloveichik" },
    { "@type": "EducationalOrganization", "name": "Brisker Kollel", "description": "Kollel study 2002-2005" }
  ],
  "jobTitle": ["Rabbi", "Rebbe", "Torah Educator", "Author"],
  "worksFor": { "@type": "EducationalOrganization", "name": "South Fallsburg Educational Institutions", "address": { "@type": "PostalAddress", "addressLocality": "South Fallsburg", "addressRegion": "NY" } },
  "knowsAbout": ["Halacha", "Jewish Law", "39 Melochos", "Shabbos Laws", "Torah", "Talmud", "Parsha", "Kashrus", "Yom Tov"],
  "url": "https://shmuelzevjuravel.com/facts"
};

export default function Facts() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personFactsJsonLd) }}
      />

      <div className="bg-gradient-to-r from-primary to-primary-hover text-primary-foreground py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-2">Quick Facts</h1>
          <p className="text-lg opacity-90">Verified information about Rabbi Shmuel Zev Juravel</p>
        </div>
      </div>

      <article className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Identity Summary */}
        <Card className="mb-8 border-primary/30 bg-primary/5">
          <CardContent className="pt-6 text-center">
            <h2 className="text-2xl font-bold mb-4">Rabbi Shmuel Zev Juravel</h2>
            <p className="text-xl text-muted-foreground mb-2">South Fallsburg, New York</p>
            <p className="text-muted-foreground">Born November 23, 1971 in Brooklyn, NY</p>
            <div className="flex justify-center gap-2 mt-4">
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">Torah Educator</span>
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">Author</span>
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">Lecturer</span>
            </div>
          </CardContent>
        </Card>

        {/* Facts Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {/* Personal Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="w-5 h-5 text-primary" />
                Personal Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between border-b pb-2">
                <span className="text-muted-foreground">Full Name</span>
                <span className="font-medium">Rabbi Shmuel Zev Juravel</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span className="text-muted-foreground">Also Known As</span>
                <span className="font-medium">Rabbi Juravel, R&apos; Shmuel Zev</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span className="text-muted-foreground">Birth Date</span>
                <span className="font-medium">November 23, 1971</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span className="text-muted-foreground">Birth Place</span>
                <span className="font-medium">Brooklyn, New York</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Nationality</span>
                <span className="font-medium">American</span>
              </div>
            </CardContent>
          </Card>

          {/* Location */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-primary" />
                Location
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between border-b pb-2">
                <span className="text-muted-foreground">Current Residence</span>
                <span className="font-medium">South Fallsburg, NY</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span className="text-muted-foreground">County</span>
                <span className="font-medium">Sullivan County</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span className="text-muted-foreground">Region</span>
                <span className="font-medium">Catskills, New York</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span className="text-muted-foreground">ZIP Code</span>
                <span className="font-medium">12779</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Residing Since</span>
                <span className="font-medium">2005</span>
              </div>
            </CardContent>
          </Card>

          {/* Family */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Heart className="w-5 h-5 text-primary" />
                Family
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between border-b pb-2">
                <span className="text-muted-foreground">Spouse</span>
                <span className="font-medium">Tova Klatzko</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span className="text-muted-foreground">Spouse&apos;s Origin</span>
                <span className="font-medium">Cleveland, Ohio</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span className="text-muted-foreground">Married</span>
                <span className="font-medium">1993</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span className="text-muted-foreground">Children</span>
                <span className="font-medium">Ten</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Married Children</span>
                <span className="font-medium">Five</span>
              </div>
            </CardContent>
          </Card>

          {/* Career */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-primary" />
                Current Roles
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between border-b pb-2">
                <span className="text-muted-foreground">Primary Role</span>
                <span className="font-medium">Rabbi (High School)</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span className="text-muted-foreground">Secondary Role</span>
                <span className="font-medium">Rebbe (Elementary School)</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span className="text-muted-foreground">Location</span>
                <span className="font-medium">South Fallsburg, NY</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span className="text-muted-foreground">Colleague</span>
                <span className="font-medium">Horav Eli Dov Wachtfogel</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Teaching Since</span>
                <span className="font-medium">2005</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Education Timeline */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-primary" />
              Education Timeline
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex gap-4 items-start">
                <div className="bg-primary/10 text-primary px-3 py-1 rounded text-sm font-medium min-w-[100px] text-center">1977-1984</div>
                <div>
                  <p className="font-medium">Yeshiva Tiferes Elimelech</p>
                  <p className="text-sm text-muted-foreground">Elementary school education</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="bg-primary/10 text-primary px-3 py-1 rounded text-sm font-medium min-w-[100px] text-center">1985-1988</div>
                <div>
                  <p className="font-medium">Yeshiva Staten Island</p>
                  <p className="text-sm text-muted-foreground">High school education</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="bg-primary/10 text-primary px-3 py-1 rounded text-sm font-medium min-w-[100px] text-center">1989-1992</div>
                <div>
                  <p className="font-medium">Yeshiva Gedola of Detroit</p>
                  <p className="text-sm text-muted-foreground">Bais Medrish studies</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="bg-primary/10 text-primary px-3 py-1 rounded text-sm font-medium min-w-[100px] text-center">1994-2002</div>
                <div>
                  <p className="font-medium">Yeshiva of Brisk, Israel</p>
                  <p className="text-sm text-muted-foreground">Advanced Torah study under Rav Avrohom Yehoshua Soloveichik</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="bg-primary/10 text-primary px-3 py-1 rounded text-sm font-medium min-w-[100px] text-center">1995-2004</div>
                <div>
                  <p className="font-medium">Under Horav Michel Zilber</p>
                  <p className="text-sm text-muted-foreground">Maggid Shiur instruction</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="bg-primary/10 text-primary px-3 py-1 rounded text-sm font-medium min-w-[100px] text-center">2002-2005</div>
                <div>
                  <p className="font-medium">Brisker Kollel</p>
                  <p className="text-sm text-muted-foreground">Advanced Kollel study</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Publications & Lectures */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-primary" />
                Publications
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="border-b pb-3">
                <p className="font-medium">39 Melochos Halacha Series</p>
                <p className="text-sm text-muted-foreground">Released 2015 • CD/Audio format</p>
              </div>
              <div className="border-b pb-3">
                <p className="font-medium">Hilchos Yom Tov Series</p>
                <p className="text-sm text-muted-foreground">&ldquo;Lost in the Park&rdquo; • 3 CD Set</p>
              </div>
              <div className="border-b pb-3">
                <p className="font-medium">Hilchos Kashrus Series</p>
                <p className="text-sm text-muted-foreground">&ldquo;Kids in the Kitchen&rdquo; • 3 CD Set</p>
              </div>
              <div className="border-b pb-3">
                <p className="font-medium">Shabbos Comic Book</p>
                <p className="text-sm text-muted-foreground">&ldquo;Falsely Accused&rdquo; • Released 2019</p>
              </div>
              <div>
                <p className="font-medium">Chumash Chasam Sofer</p>
                <p className="text-sm text-muted-foreground">Sefer Shemos • Released 2022</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mic className="w-5 h-5 text-primary" />
                Lectures & Media
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="border-b pb-3">
                <p className="font-medium">Weekly Parsha Lectures</p>
                <p className="text-sm text-muted-foreground">Since 2025 • Ongoing</p>
              </div>
              <div className="border-b pb-3">
                <p className="font-medium">Matzav.com</p>
                <p className="text-sm text-muted-foreground">Featured lecturer • Video content</p>
              </div>
              <div className="border-b pb-3">
                <p className="font-medium">24Six</p>
                <p className="text-sm text-muted-foreground">Audio/Video platform</p>
              </div>
              <div className="border-b pb-3">
                <p className="font-medium">Story-Tyme Series</p>
                <p className="text-sm text-muted-foreground">Nearly 100 CDs • All Parshiyos</p>
              </div>
              <div>
                <p className="font-medium">Available Languages</p>
                <p className="text-sm text-muted-foreground">English and Yiddish</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* External Links */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Globe className="w-5 h-5 text-primary" />
              Verified External Sources
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              <a href="https://www.amazon.com/stores/Rabbi-Juravel/author/B00J5P2SA6" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 p-3 rounded-lg bg-accent hover:bg-accent/80 transition-colors">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <div>
                  <p className="font-medium">Amazon Author Page</p>
                  <p className="text-sm text-muted-foreground">Complete catalog of books and CDs</p>
                </div>
              </a>
              <a href="https://matzav.com/watch-rav-shmuel-zev-juravel-on-parshas-vayeira/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 p-3 rounded-lg bg-accent hover:bg-accent/80 transition-colors">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <div>
                  <p className="font-medium">Matzav.com</p>
                  <p className="text-sm text-muted-foreground">Weekly Parsha lectures</p>
                </div>
              </a>
              <a href="https://24six.app/preview/video/artist/1160/rabbi-juravel" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 p-3 rounded-lg bg-accent hover:bg-accent/80 transition-colors">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <div>
                  <p className="font-medium">24Six</p>
                  <p className="text-sm text-muted-foreground">Audio and video content</p>
                </div>
              </a>
              <Link href="/verify" className="flex items-center gap-2 p-3 rounded-lg bg-accent hover:bg-accent/80 transition-colors">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <div>
                  <p className="font-medium">Identity Verification</p>
                  <p className="text-sm text-muted-foreground">Full verification checklist</p>
                </div>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* CTA */}
        <div className="text-center">
          <p className="text-muted-foreground mb-4">For complete biographical information, visit the full biography.</p>
          <div className="flex gap-4 justify-center">
            <Button asChild>
              <Link href="/biography">Read Full Biography</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/works">View Complete Works</Link>
            </Button>
          </div>
        </div>
      </article>
    </>
  );
}

