import type { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Rabbi Shmuel Zev Juravel in South Fallsburg, NY. Reach out for questions, verification, or information about Torah teachings, lectures, and educational projects.",
  openGraph: {
    title: "Contact | Rabbi Shmuel Zev Juravel",
    description: "Contact Rabbi Shmuel Zev Juravel of South Fallsburg, New York.",
    type: "website",
    url: "https://shmuelzevjuravel.com/contact",
    images: [
      {
        url: "/og-image-contact.jpg",
        width: 1200,
        height: 630,
        alt: "Contact - Rabbi Shmuel Zev Juravel",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact | Rabbi Shmuel Zev Juravel",
    description: "Get in touch with Rabbi Shmuel Zev Juravel.",
    images: ["/og-image-contact.jpg"],
  },
  alternates: {
    canonical: "https://shmuelzevjuravel.com/contact",
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
      "name": "Contact",
      "item": "https://shmuelzevjuravel.com/contact"
    }
  ]
};

export default function Contact() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <div className="bg-gradient-to-r from-primary to-primary-hover text-primary-foreground py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-2">Contact</h1>
          <p className="text-lg opacity-90">Get in touch</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <CardTitle>Location</CardTitle>
              <CardDescription>Where we&apos;re based</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-foreground font-semibold mb-2">South Fallsburg, New York</p>
              <p className="text-muted-foreground">
                Sullivan County<br />
                Catskills Region<br />
                United States
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <CardTitle>Get in Touch</CardTitle>
              <CardDescription>We&apos;re here to help</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-6">
                For verification inquiries or community information about Rabbi Shmuel Zev Juravel of South Fallsburg, New York, please email:
              </p>
              
              <div className="bg-accent p-4 rounded-lg mb-6">
                <p className="text-lg font-semibold text-foreground">
                  <a href="mailto:verify@shmuelzevjuravel.com" className="text-primary hover:underline">
                    verify@shmuelzevjuravel.com
                  </a>
                </p>
              </div>
              
              <p className="text-sm text-muted-foreground">
                Responses are typically provided within 24-48 hours.
              </p>
            </CardContent>
          </Card>
        </div>

        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Before You Reach Out</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed mb-4">
              If you are trying to verify that you have reached the correct Rabbi Shmuel Zev Juravel, please visit the <Link href="/verify" className="text-primary hover:underline font-semibold">Verify Identity</Link> page first. It provides a comprehensive checklist of identifying information including location, education, family, and publications.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              For frequently asked questions, please check the <Link href="/faq" className="text-primary hover:underline font-semibold">FAQ page</Link>.
            </p>
          </CardContent>
        </Card>
      </div>
    </>
  );
}

