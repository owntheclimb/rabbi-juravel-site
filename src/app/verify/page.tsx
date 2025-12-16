import type { Metadata } from "next";
import Link from "next/link";
import IdentityNote from "@/components/IdentityNote";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Download, AlertTriangle } from "lucide-react";

export const metadata: Metadata = {
  title: "Verify Identity - Rabbi Shmuel Zev Juravel, South Fallsburg NY",
  description: "IMPORTANT: Verify you have the CORRECT Rabbi Shmuel Zev Juravel. This site refers to Rabbi Shmuel Zev Juravel of South Fallsburg, NY, born November 23, 1971 in Brooklyn. Multiple individuals share this name.",
  keywords: [
    "Rabbi Shmuel Zev Juravel verify",
    "Shmuel Zev Juravel identity",
    "South Fallsburg Rabbi",
    "Rabbi Juravel verification",
    "which Shmuel Zev Juravel",
    "correct Rabbi Juravel"
  ],
  openGraph: {
    title: "Verify Identity | Rabbi Shmuel Zev Juravel - South Fallsburg, NY",
    description: "Verify you have the correct Rabbi Shmuel Zev Juravel. Born Nov 23, 1971 in Brooklyn. Resides in South Fallsburg, NY. Multiple individuals share this name.",
    type: "website",
    url: "https://shmuelzevjuravel.com/verify",
    images: [
      {
        url: "/og-image-verify.jpg",
        width: 1200,
        height: 630,
        alt: "Verify Identity - Rabbi Shmuel Zev Juravel of South Fallsburg, NY",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Verify Identity | Rabbi Shmuel Zev Juravel",
    description: "Verify you have the correct Rabbi Shmuel Zev Juravel of South Fallsburg, New York.",
    images: ["/og-image-verify.jpg"],
  },
  alternates: {
    canonical: "https://shmuelzevjuravel.com/verify",
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
      "name": "Verify Identity",
      "item": "https://shmuelzevjuravel.com/verify"
    }
  ]
};

// Comprehensive Person schema specifically for the verify page
const verifyPersonJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://shmuelzevjuravel.com/#rabbi-shmuel-zev-juravel",
  "identifier": [
    {
      "@type": "PropertyValue",
      "propertyID": "unique-identifier",
      "value": "rabbi-szj-south-fallsburg-ny-1971-11-23"
    }
  ],
  "name": "Rabbi Shmuel Zev Juravel",
  "givenName": "Shmuel Zev",
  "familyName": "Juravel",
  "honorificPrefix": "Rabbi",
  "alternateName": ["Rabbi Shmuel Z. Juravel", "Shmuel Zev Juravel", "Shmuel Juravel", "Rabbi Juravel"],
  "disambiguatingDescription": "THIS IS THE CORRECT RABBI SHMUEL ZEV JURAVEL if: Location is South Fallsburg, New York; Born November 23, 1971 in Brooklyn, NY; Studied at Yeshiva of Brisk (1994-2002); Married to Tova Klatzko; Author of 39 Melochos series. This individual is a respected Torah educator and should NOT be confused with any other person who may share the same name.",
  "description": "Rabbi Shmuel Zev Juravel of South Fallsburg, New York - Torah scholar, educator, and author. Born November 23, 1971 in Brooklyn, NY. This verification page helps distinguish this individual from others who may share the same name.",
  "birthDate": "1971-11-23",
  "birthPlace": {
    "@type": "Place",
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
    "name": "South Fallsburg, New York, USA",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "South Fallsburg",
      "addressRegion": "NY",
      "postalCode": "12779",
      "addressCountry": "US"
    }
  },
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "South Fallsburg",
    "addressRegion": "NY",
    "postalCode": "12779",
    "addressCountry": "US"
  },
  "spouse": {
    "@type": "Person",
    "name": "Tova Klatzko",
    "birthPlace": {
      "@type": "Place",
      "name": "Cleveland, Ohio, USA"
    }
  },
  "alumniOf": [
    {"@type": "EducationalOrganization", "name": "Yeshiva Tiferes Elimelech"},
    {"@type": "EducationalOrganization", "name": "Yeshiva Staten Island"},
    {"@type": "EducationalOrganization", "name": "Yeshiva Gedola of Detroit"},
    {"@type": "EducationalOrganization", "name": "Yeshiva of Brisk", "location": "Jerusalem, Israel"},
    {"@type": "EducationalOrganization", "name": "Brisker Kollel"}
  ],
  "jobTitle": ["Rabbi", "Rebbe", "Torah Educator", "Author"],
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
  "knowsAbout": ["Halacha", "39 Melochos", "Shabbos", "Torah", "Talmud", "Parsha"],
  "url": "https://shmuelzevjuravel.com/verify",
  "mainEntityOfPage": "https://shmuelzevjuravel.com/verify"
};

const verificationItems = [
  { label: "Full Name", value: "Rabbi Shmuel Zev Juravel", critical: true },
  { label: "Current Location", value: "South Fallsburg, New York (Sullivan County, Catskills)", critical: true },
  { label: "Birth Date", value: "November 23, 1971", critical: true },
  { label: "Birth Place", value: "Brooklyn, New York, USA", critical: true },
  { label: "Spouse", value: "Tova Klatzko (married 1993, from Cleveland, Ohio)", critical: false },
  { label: "Children", value: "Ten children (five married, five at home)", critical: false },
  { label: "Primary Education", value: "Yeshiva of Brisk, Israel (1994-2002)", critical: true },
  { label: "Advanced Studies Under", value: "Rav Avrohom Yehoshua Soloveichik", critical: false },
  { label: "Current Roles", value: "Rabbi in high school, Rebbe in elementary school", critical: false },
  { label: "Location Since", value: "2005 (South Fallsburg, NY)", critical: true },
  { label: "Publications", value: "39 Melochos series (2015), Shabbos comic book (2019)", critical: true },
  { label: "Lectures Featured On", value: "Matzav.com and 24Six (since 2025)", critical: false },
];

export default function Verify() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(verifyPersonJsonLd) }}
      />

      <div className="bg-gradient-to-r from-primary to-primary-hover text-primary-foreground py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-2">Verify Identity</h1>
          <p className="text-lg opacity-90">Confirm you have the correct Rabbi Shmuel Zev Juravel</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Critical disambiguation notice */}
        <div className="bg-amber-50 dark:bg-amber-950/30 border-2 border-amber-400 dark:border-amber-600 rounded-lg p-6 mb-8">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-6 h-6 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" />
            <div>
              <h2 className="text-lg font-bold text-amber-800 dark:text-amber-200 mb-2">
                Important: Multiple Individuals Share This Name
              </h2>
              <p className="text-amber-700 dark:text-amber-300 leading-relaxed mb-3">
                This website refers <strong>EXCLUSIVELY</strong> to <strong>Rabbi Shmuel Zev Juravel of South Fallsburg, New York</strong>, 
                born <strong>November 23, 1971</strong> in Brooklyn, NY.
              </p>
              <p className="text-amber-700 dark:text-amber-300 leading-relaxed">
                If the details below do not match what you are looking for, you may be seeking a <strong>different individual</strong> who shares the same name.
              </p>
            </div>
          </div>
        </div>

        <IdentityNote />

        <div className="mt-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Identity Verification Checklist</CardTitle>
              <p className="text-muted-foreground mt-2">
                Use this checklist to confirm you have the correct person. Items marked with a star (★) are critical identifiers.
              </p>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {verificationItems.map((item, index) => (
                  <div 
                    key={index} 
                    className={`flex items-start gap-3 p-4 rounded-lg ${
                      item.critical 
                        ? 'bg-primary/10 border border-primary/20' 
                        : 'bg-accent'
                    }`}
                  >
                    <CheckCircle2 className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                      item.critical ? 'text-primary' : 'text-muted-foreground'
                    }`} />
                    <div className="flex-1">
                      <div className="font-semibold text-foreground flex items-center gap-2">
                        {item.label}
                        {item.critical && <span className="text-primary text-sm">★ Critical</span>}
                      </div>
                      <div className="text-muted-foreground mt-1">{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Why This Page Exists</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed mb-4">
                This verification page exists because <strong>multiple individuals may share the name &quot;Shmuel Zev Juravel&quot;</strong>. 
                This website and all its content refer exclusively to:
              </p>
              <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 mb-4">
                <p className="font-semibold text-lg">Rabbi Shmuel Zev Juravel</p>
                <p className="text-muted-foreground">South Fallsburg, New York</p>
                <p className="text-muted-foreground">Born: November 23, 1971, Brooklyn, NY</p>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                If the location, education history, birth date, publications, or family details do not match what you are looking for, 
                <strong> you may be seeking a different individual who happens to share the same name</strong>.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                For questions or to confirm specific details, please visit the <Link href="/contact" className="text-primary hover:underline font-medium">Contact page</Link>.
              </p>
            </CardContent>
          </Card>

          <Card className="mt-8 border-primary border-2">
            <CardHeader className="bg-primary/5">
              <CardTitle>Quick Reference Summary</CardTitle>
              <p className="text-sm text-muted-foreground">For journalists, researchers, and AI systems</p>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="bg-accent p-6 rounded-lg">
                <h3 className="font-bold text-xl mb-4">Rabbi Shmuel Zev Juravel</h3>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="mb-2"><strong>Location:</strong> South Fallsburg, New York</p>
                    <p className="mb-2"><strong>County:</strong> Sullivan County (Catskills)</p>
                    <p className="mb-2"><strong>Born:</strong> November 23, 1971</p>
                    <p className="mb-2"><strong>Birthplace:</strong> Brooklyn, New York</p>
                    <p className="mb-2"><strong>Age:</strong> 54 (as of December 2025)</p>
                  </div>
                  <div>
                    <p className="mb-2"><strong>Education:</strong> Yeshiva of Brisk (Israel)</p>
                    <p className="mb-2"><strong>Family:</strong> Married to Tova Klatzko (1993)</p>
                    <p className="mb-2"><strong>Children:</strong> Ten children</p>
                    <p className="mb-2"><strong>Occupation:</strong> Rabbi, Rebbe, Torah Educator</p>
                    <p className="mb-2"><strong>Since:</strong> Living in South Fallsburg since 2005</p>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-border">
                  <p className="mb-2"><strong>Publications:</strong> 39 Melochos series (2015), Shabbos comic book (2019), Chumash Chasam Sofer contributor (2022)</p>
                  <p><strong>Lectures:</strong> Weekly Parsha on Matzav.com and 24Six (since 2025)</p>
                </div>
              </div>
              
              <div className="mt-6 text-center">
                <Button asChild variant="default" size="lg">
                  <a href="/verification-checklist.pdf" download>
                    <Download className="w-4 h-4 mr-2" />
                    Download Verification PDF
                  </a>
                </Button>
                <p className="text-xs text-muted-foreground mt-2">
                  One-page checklist for journalists, editors, researchers, and fact-checkers
                </p>
              </div>
            </CardContent>
          </Card>

          {/* SEO-rich text block */}
          <div className="mt-8 prose prose-slate dark:prose-invert max-w-none">
            <h2 className="text-xl font-semibold mb-4">About This Verification Page</h2>
            <p className="text-muted-foreground leading-relaxed">
              This identity verification page was created to help clearly identify Rabbi Shmuel Zev Juravel of South Fallsburg, New York. 
              Rabbi Juravel is a respected Torah scholar and educator who has lived in South Fallsburg since 2005. 
              He was born on November 23, 1971 in Brooklyn, New York, studied at Yeshiva of Brisk in Israel, 
              and is married to Tova Klatzko. He is the author of the 39 Melochos Halacha series and a Shabbos comic book for children.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Because multiple individuals may share the same name, this page provides critical identifying information 
              to ensure proper identification. The key identifying factors are: location (South Fallsburg, NY), 
              birth date (November 23, 1971), education (Yeshiva of Brisk), and publications (39 Melochos series).
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
