import type { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Sitemap",
  description: "Sitemap for the official website of Rabbi Shmuel Zev Juravel of South Fallsburg, New York. Browse all pages and sections of the site.",
  robots: {
    index: false,
    follow: true,
  },
  openGraph: {
    title: "Sitemap | Rabbi Shmuel Zev Juravel",
    description: "Site navigation for Rabbi Shmuel Zev Juravel's official website.",
    type: "website",
    url: "https://shmuelzevjuravel.com/sitemap",
  },
  twitter: {
    card: "summary",
    title: "Sitemap | Rabbi Shmuel Zev Juravel",
    description: "Site navigation for Rabbi Shmuel Zev Juravel's official website.",
  },
  alternates: {
    canonical: "https://shmuelzevjuravel.com/sitemap",
  },
};

const siteStructure = [
  {
    title: "Main Pages",
    links: [
      { to: "/", label: "Home" },
      { to: "/biography", label: "Biography" },
      { to: "/timeline", label: "Timeline" },
      { to: "/verify", label: "Verify Identity" },
    ]
  },
  {
    title: "Content",
    links: [
      { to: "/teachings", label: "Teachings" },
      { to: "/lectures", label: "Weekly Lectures" },
    ]
  },
  {
    title: "Projects",
    links: [
      { to: "/projects", label: "Projects Overview" },
      { to: "/projects/39-melochos", label: "39 Melochos Series" },
      { to: "/projects/shabbos-comic", label: "Shabbos Comic Book" },
    ]
  },
  {
    title: "Help & Information",
    links: [
      { to: "/faq", label: "Frequently Asked Questions" },
      { to: "/contact", label: "Contact" },
      { to: "/privacy", label: "Privacy Policy" },
      { to: "/sitemap", label: "Sitemap (This Page)" },
    ]
  }
];

export default function SitemapPage() {
  return (
    <>
      <div className="bg-gradient-to-r from-primary to-primary-hover text-primary-foreground py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-2">Sitemap</h1>
          <p className="text-lg opacity-90">Navigate all pages of this website</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 gap-6">
          {siteStructure.map((section, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="text-xl">{section.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link
                        href={link.to}
                        className="text-primary hover:underline hover:text-primary-hover transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mt-8">
          <CardHeader>
            <CardTitle>XML Sitemap</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed mb-4">
              For search engines and automated tools, an XML sitemap is available at:
            </p>
            <code className="bg-accent px-3 py-2 rounded text-sm block">
              https://shmuelzevjuravel.com/sitemap.xml
            </code>
            <p className="text-sm text-muted-foreground mt-4">
              The XML sitemap helps search engines efficiently crawl and index all pages of this website.
            </p>
          </CardContent>
        </Card>
      </div>
    </>
  );
}

