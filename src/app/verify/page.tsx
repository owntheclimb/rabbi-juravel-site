import type { Metadata } from "next";
import Link from "next/link";
import IdentityNote from "@/components/IdentityNote";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Download } from "lucide-react";

export const metadata: Metadata = {
  title: "Verify Identity",
  description: "Confirm you have the correct Rabbi Shmuel Zev Juravel of South Fallsburg, NY. Downloadable verification checklist with birth date, education, publications, and current roles.",
  openGraph: {
    title: "Verify Identity | Rabbi Shmuel Zev Juravel",
    description: "Identity verification for Rabbi Shmuel Zev Juravel of South Fallsburg, New York with checklist and timeline.",
    type: "website",
    url: "https://shmuelzevjuravel.com/verify",
    images: [
      {
        url: "/og-image-verify.jpg",
        width: 1200,
        height: 630,
        alt: "Verify Identity - Rabbi Shmuel Zev Juravel",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Verify Identity | Rabbi Shmuel Zev Juravel",
    description: "Identity verification for Rabbi Shmuel Zev Juravel of South Fallsburg, New York.",
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

const verificationItems = [
  { label: "Name matches exactly", value: "Rabbi Shmuel Zev Juravel" },
  { label: "Location shown", value: "South Fallsburg, New York" },
  { label: "Birth date confirmed", value: "November 23, 1971" },
  { label: "Birth place", value: "Brooklyn, New York" },
  { label: "Spouse", value: "Tova Klatzko (married 1993)" },
  { label: "Education includes", value: "Yeshiva Gedola of Detroit, Yeshiva of Brisk" },
  { label: "Current roles", value: "Rabbi in high school, Rebbe in elementary school" },
  { label: "Publications", value: "39 Melochos series (2015), Shabbos comic book (2019)" },
  { label: "Lectures featured on", value: "Matzav.com and 24Six" },
  { label: "Community", value: "Fallsburg, Sullivan County, Catskills region" },
];

export default function Verify() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <div className="bg-gradient-to-r from-primary to-primary-hover text-primary-foreground py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-2">Verify Identity</h1>
          <p className="text-lg opacity-90">Confirm you have the correct Rabbi Shmuel Zev Juravel</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <IdentityNote />

        <div className="mt-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Identity Verification Checklist</CardTitle>
              <p className="text-muted-foreground mt-2">
                Use this checklist to confirm that the information on this site matches the individual you are seeking. Individuals with the same name may exist in other cities.
              </p>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {verificationItems.map((item, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-accent rounded-lg">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-foreground">{item.label}</div>
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
                This verification page helps visitors confirm they have found the correct Rabbi Shmuel Zev Juravel. Multiple individuals may share the same name in different locations. This site refers exclusively to <strong>Rabbi Shmuel Zev Juravel of South Fallsburg, New York</strong>.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                If the location, education history, publications, or family details do not match what you are looking for, you may be seeking a different individual.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                For questions or to confirm specific details, please visit the <Link href="/contact" className="text-primary hover:underline">Contact page</Link>.
              </p>
            </CardContent>
          </Card>

          <Card className="mt-8 border-primary">
            <CardHeader>
              <CardTitle>Quick Reference Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-accent p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-3">Rabbi Shmuel Zev Juravel</h3>
                <div className="space-y-2 text-sm">
                  <p><strong>Location:</strong> South Fallsburg, New York (Sullivan County, Catskills)</p>
                  <p><strong>Born:</strong> November 23, 1971 in Brooklyn, New York</p>
                  <p><strong>Education:</strong> Yeshiva Gedola of Detroit, Yeshiva of Brisk (Israel)</p>
                  <p><strong>Family:</strong> Married to Tova Klatzko, ten children</p>
                  <p><strong>Current Role:</strong> Rabbi (high school) and Rebbe (elementary school)</p>
                  <p><strong>Publications:</strong> 39 Melochos series, Shabbos comic book</p>
                  <p><strong>Lectures:</strong> Weekly Parsha on Matzav.com and 24Six</p>
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
                  One-page checklist for journalists, editors, and researchers
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}

