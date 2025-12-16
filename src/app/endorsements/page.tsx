import type { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Quote, Award, Star, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Endorsements",
  description: "Rabbi Shmuel Zev Juravel's educational works have been endorsed by leading Poskim and Roshei Yeshiva including Harav Elya Dov Wachtfogel, Harav Yaakov Forchheimer, Rabbi Dovid Ribiat, and more.",
  openGraph: {
    title: "Endorsements | Rabbi Shmuel Zev Juravel",
    description: "Haskomos and endorsements from leading Torah authorities for Rabbi Juravel's educational CDs and books.",
    type: "website",
    url: "https://shmuelzevjuravel.com/endorsements",
    images: [
      {
        url: "/og-image-home.jpg",
        width: 1200,
        height: 630,
        alt: "Endorsements - Rabbi Shmuel Zev Juravel",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Endorsements | Rabbi Shmuel Zev Juravel",
    description: "Haskomos from leading Poskim for Rabbi Juravel's Torah education materials.",
    images: ["/og-image-home.jpg"],
  },
  alternates: {
    canonical: "https://shmuelzevjuravel.com/endorsements",
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
      "name": "Endorsements",
      "item": "https://shmuelzevjuravel.com/endorsements"
    }
  ]
};

const reviewJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Endorsements for Rabbi Shmuel Zev Juravel",
  "description": "Collection of haskomos (endorsements) from leading Torah authorities for Rabbi Juravel's educational works",
  "url": "https://shmuelzevjuravel.com/endorsements",
  "about": { "@id": "https://shmuelzevjuravel.com/#rabbi-shmuel-zev-juravel" },
  "mentions": [
    { "@type": "Person", "name": "Harav Elya Dov Wachtfogel", "jobTitle": "Rosh Yeshiva, South Fallsburg" },
    { "@type": "Person", "name": "Harav Yaakov Forchheimer", "jobTitle": "Posek, Lakewood" },
    { "@type": "Person", "name": "Rabbi Dovid S. Ribiat", "jobTitle": "Mechaber Sefer Lamed Tes Melachos" },
    { "@type": "Person", "name": "Rabbi Zev Smith", "jobTitle": "Torah Educator" },
    { "@type": "Person", "name": "Rabbi Boruch Hirschfeld", "jobTitle": "Rosh Kollel Ateres Chaim Baruch, Cleveland" },
    { "@type": "Person", "name": "Rabbi Simcha Bunim Cohen", "jobTitle": "K'hal Ateres Yeshaya, Lakewood" },
    { "@type": "Person", "name": "Rabbi Eliezer Simcha Lieff", "jobTitle": "Yeshiva Gedola of South Monsey" },
    { "@type": "Person", "name": "Rabbi Elimelech Bluth", "jobTitle": "Rav of K'hal Ahavas Achim" },
    { "@type": "Person", "name": "Rabbi Avrohom HaLevi Schorr", "jobTitle": "Bais Medrash Nezer Gedalyahu" },
    { "@type": "Person", "name": "Rabbi Shmuel Blech", "jobTitle": "Congregation Anshei S'fard, Lakewood" }
  ]
};

const endorsements = [
  {
    name: "Harav Elya Dov Wachtfogel",
    title: "Rosh Yeshiva, South Fallsburg",
    quote: "It is difficult to fathom how R' Juravel has created such a wondrous work by weaving the complex halachos of basar vichalav and ta'aruvos into stories that even children can understand... the halachos and hashkafos that will be imbued into the children from these CDs will certainly remain with them for a lifetime.",
    context: "Kashrus Series Endorsement",
    featured: true
  },
  {
    name: "Harav Yaakov Forchheimer",
    title: "Posek, Lakewood, NJ",
    quote: "I have gone through the transcripts of these CDs and have found them to be totally accurate according to the halachah... I feel that these CDs from R' Juravel are a huge benefit to teach Jewish children the halachos of Kashrus and specifically the rules that pertain to them.",
    context: "Kashrus Series Endorsement",
    featured: true
  },
  {
    name: "Rabbi Dovid S. Ribiat",
    title: "Mechaber Sefer Lamed Tes Melachos, Monsey, NY",
    quote: "I am very aware of the extreme effort that was put in by R' Juravel to ensure that every detail of the halachos on these CDs is perfectly accurate... Even adults will benefit tremendously from this work.",
    context: "Kashrus Series Endorsement",
    featured: true
  },
  {
    name: "Rabbi Zev Smith",
    title: "Torah Educator",
    quote: "In a brilliant way R' Juravel has woven in great yesodos of halachah into wonderful stories.",
    context: "Kashrus Series Endorsement",
    featured: false
  },
  {
    name: "Rabbi Boruch Hirschfeld",
    title: "Rosh Kollel Ateres Chaim Baruch, Cleveland",
    quote: "With great ingenuity R' Juravel has taken the complex concepts of Hilchos Yoreh De'ah and through stories has brought them down to a child's level.",
    context: "Kashrus Series Endorsement",
    featured: false
  },
  {
    name: "Rabbi Simcha Bunim Cohen",
    title: "K'hal Ateres Yeshaya, Lakewood, NJ",
    quote: "I have reviewed the halachos and they are according to the Poskim, and they are correct according to halachah.",
    hebrewNote: "Original endorsement in Hebrew, dated Sunday, Parshas Mishpatim 5778",
    context: "Yom Tov Series Endorsement",
    featured: false
  },
  {
    name: "Rabbi Eliezer Simcha Lieff",
    title: "Yeshiva Gedola of South Monsey",
    quote: "All members of our Yeshiva can testify to his dedication to the holy Torah and his learning with great enjoyment... this will be of tremendous benefit to all of Israel wherever they may be.",
    context: "Yom Tov Series Endorsement",
    featured: false
  },
  {
    name: "Rabbi Elimelech Bluth",
    title: "Rav of K'hal Ahavas Achim & Rosh Kollel, Brooklyn, NY",
    quote: "I too join the opinion of the Roshei Yeshiva and distinguished Rabbonim that Rabbi Juravel should merit to continue his fruitful work of spreading Torah to the children of Israel in every place.",
    context: "Yom Tov Series Endorsement",
    featured: false
  },
  {
    name: "Rabbi Avrohom HaLevi Schorr",
    title: "Bais Medrash Nezer Gedalyahu, Brooklyn, NY",
    quote: "In brief words I come to encourage and bless the beautiful and precise work to awaken the children to knowledge of the mitzvos... May Hashem give you the strength to continue publicizing the honor of Heaven and the honor of the Torah.",
    context: "Yom Tov Series Endorsement",
    featured: false
  },
  {
    name: "Rabbi Shmuel Blech",
    title: "Congregation Anshei S'fard, Lakewood, NJ",
    quote: "It is a 'kovod' for me to pen words of endorsement for the new and ambitious project undertaken by Rav Juravel on behalf of all the children who have benefitted so much from his enormous talent in the past. Very young talmidim have become familiar with the lessons learned and they will remain with them as they grow in learning. The concept of applying these same techniques to teach the important halachos of Shabbos and Yom Tov adds a new dimension to expanding the valuable early Torahdika memories of our children.",
    context: "Yom Tov Series Endorsement",
    featured: true
  }
];

export default function Endorsements() {
  const featuredEndorsements = endorsements.filter(e => e.featured);
  const otherEndorsements = endorsements.filter(e => !e.featured);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewJsonLd) }}
      />

      <div className="bg-gradient-to-r from-primary to-primary-hover text-primary-foreground py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-2">Endorsements & Haskomos</h1>
          <p className="text-lg opacity-90">Torah authorities endorsing Rabbi Juravel&apos;s educational works</p>
        </div>
      </div>

      <article className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Introduction */}
        <Card className="mb-12 border-primary/30 bg-primary/5">
          <CardContent className="pt-6">
            <div className="flex items-center gap-3 mb-4">
              <Award className="w-8 h-8 text-primary" />
              <h2 className="text-2xl font-bold">Reviewed & Endorsed by Leading Poskim</h2>
            </div>
            <p className="text-lg text-muted-foreground">
              Rabbi Shmuel Zev Juravel&apos;s educational works have been meticulously reviewed and endorsed by leading Torah authorities. Each CD and book undergoes careful examination to ensure complete halachic accuracy before release. The following haskomos (endorsements) testify to the quality, accuracy, and importance of these educational materials.
            </p>
          </CardContent>
        </Card>

        {/* Featured Endorsements */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Star className="w-6 h-6 text-primary" />
            Featured Endorsements
          </h2>
          <div className="space-y-6">
            {featuredEndorsements.map((endorsement, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <Quote className="w-8 h-8 text-primary/40 flex-shrink-0 mt-1" />
                    <div>
                      <blockquote className="text-lg italic text-muted-foreground mb-4 leading-relaxed">
                        &ldquo;{endorsement.quote}&rdquo;
                      </blockquote>
                      <div className="flex items-center justify-between flex-wrap gap-2">
                        <div>
                          <p className="font-bold text-lg">{endorsement.name}</p>
                          <p className="text-muted-foreground">{endorsement.title}</p>
                        </div>
                        <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                          {endorsement.context}
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Additional Endorsements */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Additional Haskomos</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {otherEndorsements.map((endorsement, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <Quote className="w-6 h-6 text-primary/40 mb-3" />
                  <blockquote className="text-muted-foreground italic mb-4 leading-relaxed">
                    &ldquo;{endorsement.quote}&rdquo;
                  </blockquote>
                  {endorsement.hebrewNote && (
                    <p className="text-sm text-muted-foreground/70 mb-3 italic">
                      ({endorsement.hebrewNote})
                    </p>
                  )}
                  <div>
                    <p className="font-semibold">{endorsement.name}</p>
                    <p className="text-sm text-muted-foreground">{endorsement.title}</p>
                    <span className="inline-block bg-accent text-xs px-2 py-1 rounded mt-2">
                      {endorsement.context}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Verification Note */}
        <Card className="mb-8 bg-accent">
          <CardContent className="pt-6">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-lg mb-2">Halachic Accuracy Verified</h3>
                <p className="text-muted-foreground">
                  All of Rabbi Juravel&apos;s educational materials undergo thorough review by multiple Poskim before release. The endorsements above confirm that the halachos presented are accurate according to Jewish law. This meticulous process ensures that children (and adults) learning from these materials receive correct Torah education.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Series Covered */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Endorsed Series</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            <Card className="text-center p-4">
              <CardTitle className="text-lg mb-2">39 Melochos</CardTitle>
              <p className="text-sm text-muted-foreground">Hilchos Shabbos</p>
            </Card>
            <Card className="text-center p-4">
              <CardTitle className="text-lg mb-2">Yom Tov Series</CardTitle>
              <p className="text-sm text-muted-foreground">&ldquo;Lost in the Park&rdquo;</p>
            </Card>
            <Card className="text-center p-4">
              <CardTitle className="text-lg mb-2">Kashrus Series</CardTitle>
              <p className="text-sm text-muted-foreground">&ldquo;Kids in the Kitchen&rdquo;</p>
            </Card>
            <Card className="text-center p-4">
              <CardTitle className="text-lg mb-2">Comic Books</CardTitle>
              <p className="text-sm text-muted-foreground">&ldquo;Falsely Accused&rdquo;</p>
            </Card>
          </div>
        </section>

        {/* CTA */}
        <div className="text-center">
          <p className="text-muted-foreground mb-4">Explore Rabbi Juravel&apos;s complete catalog of endorsed educational materials.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button asChild>
              <Link href="/works">View Complete Works</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/projects">Featured Projects</Link>
            </Button>
            <Button asChild variant="outline">
              <a href="https://www.amazon.com/stores/Rabbi-Juravel/author/B00J5P2SA6" target="_blank" rel="noopener noreferrer">
                Amazon Store
              </a>
            </Button>
          </div>
        </div>
      </article>
    </>
  );
}

