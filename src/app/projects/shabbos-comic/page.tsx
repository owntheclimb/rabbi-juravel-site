import type { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Shabbos Comic Book",
  description: "Shabbos comic book for children by Rabbi Shmuel Zev Juravel (2019). Engaging visual storytelling teaches kids about Shabbos observance from South Fallsburg, NY educator.",
  openGraph: {
    title: "Shabbos Comic Book | Rabbi Shmuel Zev Juravel",
    description: "Educational comic book teaching children about Shabbos through visual storytelling.",
    type: "article",
    url: "https://shmuelzevjuravel.com/projects/shabbos-comic",
    images: [
      {
        url: "/og-image-shabbos-comic.jpg",
        width: 1200,
        height: 630,
        alt: "Shabbos Comic - Rabbi Shmuel Zev Juravel",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shabbos Comic Book | Rabbi Shmuel Zev Juravel",
    description: "Educational comic book for children about Shabbos.",
    images: ["/og-image-shabbos-comic.jpg"],
  },
  alternates: {
    canonical: "https://shmuelzevjuravel.com/projects/shabbos-comic",
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
      "name": "Shabbos Comic Book",
      "item": "https://shmuelzevjuravel.com/projects/shabbos-comic"
    }
  ]
};

export default function ProjectShabbosComic() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <div className="bg-gradient-to-r from-primary to-primary-hover text-primary-foreground py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-2">Shabbos Comic Book</h1>
          <p className="text-lg opacity-90">Published 2019</p>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Card>
          <CardContent className="pt-6">
            <p className="text-lg leading-relaxed mb-6">
              Published in 2019, the <strong>Shabbos Comic Book</strong> represents Rabbi Shmuel Zev Juravel&apos;s innovative approach to children&apos;s Jewish education. Recognizing that young learners engage most effectively with visual and narrative content, Rabbi Juravel created this comic book to make Shabbos observance both understandable and exciting for children.
            </p>

            <h2 className="text-2xl font-bold mb-4 text-primary">Educational Innovation</h2>
            <p className="text-lg leading-relaxed mb-6">
              The comic book format allows children to learn about Shabbos through relatable characters and engaging storylines. Rather than presenting Halacha as abstract rules, the comic book brings the beauty and meaning of Shabbos to life through visual storytelling that resonates with young readers.
            </p>

            <h2 className="text-2xl font-bold mb-4 text-primary">Target Audience</h2>
            <p className="text-lg leading-relaxed mb-6">
              The Shabbos comic book is designed for:
            </p>
            <ul className="list-disc list-inside space-y-2 text-lg ml-4 mb-6">
              <li>Elementary school-aged children learning about Shabbos</li>
              <li>Parents seeking age-appropriate educational materials for home use</li>
              <li>Jewish day schools and supplementary educational programs</li>
              <li>Young readers who enjoy visual learning formats</li>
            </ul>

            <h2 className="text-2xl font-bold mb-4 text-primary">Content and Themes</h2>
            <p className="text-lg leading-relaxed mb-6">
              The comic book covers essential aspects of Shabbos observance in a child-friendly manner, presenting concepts like preparation for Shabbos, prohibited activities, and the special atmosphere of the holy day. Through colorful illustrations and engaging narratives, children gain both knowledge and appreciation for this central aspect of Jewish life.
            </p>

            <h2 className="text-2xl font-bold mb-4 text-primary">Educational Philosophy</h2>
            <p className="text-lg leading-relaxed mb-6">
              Rabbi Juravel&apos;s approach combines his deep Halachic knowledge with an understanding of how children learn best. The comic book maintains accuracy and reverence for Torah law while making the material accessible and enjoyable. This balance reflects his dual expertise as both a scholar and an experienced educator who works daily with young students in South Fallsburg.
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

