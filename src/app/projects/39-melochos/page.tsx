import type { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Disc, BookOpen, CheckCircle, Star, Quote, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "39 Melochos Series",
  description: "39 Melochos Halacha series on CD by Rabbi Shmuel Zev Juravel (2015). Comprehensive instruction on Shabbos laws from South Fallsburg, NY Torah educator. Endorsed by Harav Elya Dov Wachtfogel and other leading Poskim.",
  openGraph: {
    title: "39 Melochos Series | Rabbi Shmuel Zev Juravel",
    description: "Comprehensive Halacha series covering the 39 categories of creative work prohibited on Shabbos. Endorsed by leading Poskim.",
    type: "article",
    url: "https://shmuelzevjuravel.com/projects/39-melochos",
    images: [
      {
        url: "/og-image-39-melochos.jpg",
        width: 1200,
        height: 630,
        alt: "39 Melochos - Rabbi Shmuel Zev Juravel",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "39 Melochos Halacha Series | Rabbi Shmuel Zev Juravel",
    description: "39 Melochos Halacha series (2015) by Rabbi Shmuel Zev Juravel: Comprehensive Shabbos law CD course from South Fallsburg Torah educator.",
    images: ["/og-image-39-melochos.jpg"],
  },
  alternates: {
    canonical: "https://shmuelzevjuravel.com/projects/39-melochos",
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
      "name": "39 Melochos Series",
      "item": "https://shmuelzevjuravel.com/projects/39-melochos"
    }
  ]
};

const creativeWorkJsonLd = {
  "@context": "https://schema.org",
  "@type": "CreativeWorkSeries",
  "@id": "https://shmuelzevjuravel.com/projects/39-melochos#series",
  "name": "39 Melochos Halacha Series",
  "alternateName": ["39 Melachos", "Thirty-Nine Melochos", "Story-Tyme 39 Melachos"],
  "description": "Comprehensive Halacha series covering the 39 categories of creative work prohibited on Shabbos. Created by Rabbi Shmuel Zev Juravel of South Fallsburg, New York. Endorsed by Harav Elya Dov Wachtfogel, Harav Yaakov Forchheimer, and other leading Poskim.",
  "author": { "@id": "https://shmuelzevjuravel.com/#rabbi-shmuel-zev-juravel" },
  "creator": { "@id": "https://shmuelzevjuravel.com/#rabbi-shmuel-zev-juravel" },
  "publisher": { "@type": "Organization", "name": "Israel Bookshop Publications" },
  "datePublished": "2015",
  "inLanguage": ["en", "yi"],
  "about": [
    { "@type": "Thing", "name": "39 Melochos" },
    { "@type": "Thing", "name": "Shabbos Laws" },
    { "@type": "Thing", "name": "Halacha" },
    { "@type": "Thing", "name": "Jewish Law" }
  ],
  "genre": ["Religious Education", "Jewish Law", "Halacha", "Children's Education"],
  "audience": {
    "@type": "Audience",
    "audienceType": "Torah learners, Jewish educators, and families"
  },
  "identifier": [
    { "@type": "PropertyValue", "propertyID": "ASIN", "value": "B0BN2CRTFX" }
  ],
  "review": [
    {
      "@type": "Review",
      "author": { "@type": "Person", "name": "Harav Elya Dov Wachtfogel", "jobTitle": "Rosh Yeshiva, South Fallsburg" },
      "reviewBody": "The halachos and hashkafos that will be imbued into the children from these CDs will certainly remain with them for a lifetime."
    },
    {
      "@type": "Review", 
      "author": { "@type": "Person", "name": "Rabbi Dovid S. Ribiat", "jobTitle": "Mechaber Sefer Lamed Tes Melachos" },
      "reviewBody": "Even adults will benefit tremendously from this work."
    }
  ],
  "sameAs": [
    "https://www.amazon.com/39-Melachos-Rabbi-Juravel-Shipwrecked/dp/B0BN2CRTFX",
    "https://www.amazon.com/stores/Rabbi-Juravel/author/B00J5P2SA6"
  ],
  "url": "https://shmuelzevjuravel.com/projects/39-melochos",
  "mainEntityOfPage": "https://shmuelzevjuravel.com/projects/39-melochos"
};

const webPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://shmuelzevjuravel.com/projects/39-melochos#webpage",
  "url": "https://shmuelzevjuravel.com/projects/39-melochos",
  "name": "39 Melochos Halacha Series by Rabbi Shmuel Zev Juravel",
  "description": "39 Melochos Halacha series on CD by Rabbi Shmuel Zev Juravel of South Fallsburg, NY (2015). Comprehensive instruction on Shabbos laws.",
  "isPartOf": { "@id": "https://shmuelzevjuravel.com/#website" },
  "about": { "@id": "https://shmuelzevjuravel.com/projects/39-melochos#series" },
  "mainEntity": { "@id": "https://shmuelzevjuravel.com/projects/39-melochos#series" }
};

const melochos = [
  { category: "Field Work (Siddura D'Pas)", items: ["Choreish (Plowing)", "Zore'a (Sowing)", "Kotzair (Reaping)", "Me'ameir (Gathering)", "Dosh (Threshing)", "Zoreh (Winnowing)", "Boreir (Selecting)", "Tochein (Grinding)", "Merakeid (Sifting)", "Losh (Kneading)", "Ofeh/Bishul (Baking/Cooking)"] },
  { category: "Making Clothing", items: ["Gozez (Shearing)", "Melabein (Bleaching)", "Menapetz (Combing)", "Tzove'a (Dyeing)", "Toveh (Spinning)", "Meisach (Stretching threads)", "Oseh Shtei Batei Nirin (Making loops)", "Oreig (Weaving)", "Potzei'a (Separating threads)", "Kosheir (Tying)", "Matir (Untying)", "Tofeir (Sewing)", "Kore'a (Tearing)"] },
  { category: "Leather Work", items: ["Tzod (Trapping)", "Shocheit (Slaughtering)", "Mafshit (Skinning)", "Me'abeid (Tanning)", "Memacheik (Smoothing)", "Mesarteit (Scoring)", "Mechateich (Cutting to size)"] },
  { category: "Construction & Writing", items: ["Kotev (Writing)", "Mocheik (Erasing)", "Boneh (Building)", "Soiser (Demolishing)"] },
  { category: "Finishing & Fire", items: ["Makeh B'patish (Finishing)", "Mav'ir (Kindling fire)", "Mechabeh (Extinguishing)", "Hotza'ah (Carrying)"] }
];

export default function Project39Melochos() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(creativeWorkJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
      />

      <div className="bg-gradient-to-r from-primary to-primary-hover text-primary-foreground py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-2">39 Melochos Halacha Series</h1>
          <p className="text-lg opacity-90">By Rabbi Shmuel Zev Juravel • Released 2015</p>
          <div className="flex gap-2 mt-4">
            <span className="bg-white/20 px-3 py-1 rounded-full text-sm">CD Series</span>
            <span className="bg-white/20 px-3 py-1 rounded-full text-sm">Endorsed by Poskim</span>
          </div>
        </div>
      </div>

      <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Overview Card */}
        <Card className="mb-8 border-primary/30 bg-primary/5">
          <CardContent className="pt-6">
            <div className="flex items-center gap-3 mb-4">
              <Disc className="w-8 h-8 text-primary" />
              <h2 className="text-2xl font-bold">A Breakthrough in Torah Education</h2>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              The <strong>39 Melochos Halacha Series</strong> represents Rabbi Shmuel Zev Juravel&apos;s groundbreaking approach to teaching the complex laws of Shabbos. By weaving intricate Halachos into captivating stories, this series has enabled thousands of children—and adults—to learn and remember the 39 categories of creative work prohibited on Shabbos.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              As one reviewer noted: <em>&ldquo;Most frum young adults today can trace many of their yedios in Hilchos Shabbos to Rabbi Juravel in some way or other.&rdquo;</em>
            </p>
          </CardContent>
        </Card>

        {/* Key Features */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Series Highlights</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-2">
                  <CheckCircle className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Halachically Accurate</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Every detail reviewed and endorsed by leading Poskim including Harav Yaakov Forchheimer, Rabbi Dovid Ribiat, and more.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-2">
                  <BookOpen className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Story-Based Learning</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Complex concepts transformed into engaging narratives that children and adults remember for years.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-2">
                  <Star className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Comprehensive Coverage</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  All 39 melochos covered with practical scenarios, common questions, and real-life applications.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Featured Endorsements */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Star className="w-6 h-6 text-primary" />
            Haskomos from Leading Poskim
          </h2>
          <div className="space-y-6">
            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="pt-6">
                <Quote className="w-8 h-8 text-primary/30 mb-3" />
                <blockquote className="text-lg italic text-muted-foreground mb-4 leading-relaxed">
                  &ldquo;It is difficult to fathom how R&apos; Juravel has created such a wondrous work by weaving the complex halachos... into stories that even children can understand. The halachos and hashkafos that will be imbued into the children from these CDs will certainly remain with them for a lifetime.&rdquo;
                </blockquote>
                <p className="font-bold">Harav Elya Dov Wachtfogel</p>
                <p className="text-sm text-muted-foreground">Rosh Yeshiva, South Fallsburg</p>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="pt-6">
                  <Quote className="w-6 h-6 text-primary/30 mb-2" />
                  <blockquote className="text-muted-foreground italic mb-3">
                    &ldquo;Even adults will benefit tremendously from this work... I am very aware of the extreme effort put in to ensure every detail is perfectly accurate.&rdquo;
                  </blockquote>
                  <p className="font-semibold">Rabbi Dovid S. Ribiat</p>
                  <p className="text-sm text-muted-foreground">Mechaber Sefer Lamed Tes Melachos, Monsey, NY</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <Quote className="w-6 h-6 text-primary/30 mb-2" />
                  <blockquote className="text-muted-foreground italic mb-3">
                    &ldquo;This ambitious undertaking will bezras Hashem achieve the same extraordinary success as all the previous works... valuable early Torahdika memories of our children.&rdquo;
                  </blockquote>
                  <p className="font-semibold">Rabbi Shmuel Blech</p>
                  <p className="text-sm text-muted-foreground">Congregation Anshei S&apos;fard, Lakewood, NJ</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* The 39 Melochos List */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-primary" />
            The 39 Melochos Covered
          </h2>
          <p className="text-muted-foreground mb-6">
            Each melacha is presented through engaging stories with practical applications children can relate to.
          </p>
          <div className="space-y-6">
            {melochos.map((category, index) => (
              <Card key={index}>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg bg-primary/10 inline-block px-3 py-1 rounded">{category.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.items.map((melacha, idx) => (
                      <span key={idx} className="bg-accent px-3 py-1 rounded text-sm">{melacha}</span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Companion Works */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Related Works in the Series</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>&ldquo;Falsely Accused&rdquo; Comic Book</CardTitle>
                <CardDescription>Visual companion to the 39 Melochos series</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  An exciting comic book that teaches the 39 Melochos through a fast-paced story. Each melacha is notated in the margins with expanded explanations after the story.
                </p>
                <p className="text-sm text-muted-foreground">
                  <strong>Example:</strong> The main character refuses to bend his glasses on Shabbos because it would be Makeh B&apos;patish—an easy-to-remember application of an often misunderstood melacha.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Yom Tov Series</CardTitle>
                <CardDescription>&ldquo;Lost in the Park&rdquo; - 3 CD Set</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Companion series teaching the important distinctions between Shabbos and Yom Tov laws, using the same proven story-based methodology.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Purchase Info */}
        <Card className="bg-accent">
          <CardContent className="pt-6">
            <h2 className="text-xl font-bold mb-4 text-center">Get the 39 Melochos Series</h2>
            <p className="text-muted-foreground text-center mb-6">
              Available on Amazon, Jewish bookstores worldwide, and Israel Book Shop Publications
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <Button asChild>
                <a href="https://www.amazon.com/39-Melachos-Rabbi-Juravel-Shipwrecked/dp/B0BN2CRTFX" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <ExternalLink className="w-4 h-4" />
                  Buy on Amazon
                </a>
              </Button>
              <Button asChild variant="outline">
                <Link href="/works">View Complete Catalog</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/endorsements">All Endorsements</Link>
              </Button>
            </div>
            <div className="text-center mt-6 text-sm text-muted-foreground">
              <p><strong>Publisher:</strong> Israel Bookshop Publications</p>
              <p><strong>Contact:</strong> 732-901-4422 | www.israelbookshoppublications.com</p>
            </div>
          </CardContent>
        </Card>

        {/* Author Attribution */}
        <div className="mt-8 text-center">
          <p className="text-muted-foreground">
            Created by <strong>Rabbi Shmuel Zev Juravel</strong> of South Fallsburg, New York
          </p>
        </div>
      </article>
    </>
  );
}
