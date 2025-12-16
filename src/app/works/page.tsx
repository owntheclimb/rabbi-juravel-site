import type { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Disc, Book, Mic, Calendar, Globe, Star } from "lucide-react";

export const metadata: Metadata = {
  title: "Complete Works",
  description: "Complete catalog of Rabbi Shmuel Zev Juravel's educational works: Story-Tyme CDs covering all Parshiyos, 39 Melochos, Hilchos Yom Tov, Kashrus, middos, and more. Nearly 100 CDs available.",
  openGraph: {
    title: "Complete Works | Rabbi Shmuel Zev Juravel",
    description: "Full catalog of Story-Tyme CDs, books, and educational materials by Rabbi Juravel. Parsha series, Halacha series, middos, and more.",
    type: "website",
    url: "https://shmuelzevjuravel.com/works",
    images: [
      {
        url: "/og-image-home.jpg",
        width: 1200,
        height: 630,
        alt: "Complete Works - Rabbi Shmuel Zev Juravel",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Complete Works | Rabbi Shmuel Zev Juravel",
    description: "Nearly 100 CDs and books by Rabbi Juravel covering Torah education for children.",
    images: ["/og-image-home.jpg"],
  },
  alternates: {
    canonical: "https://shmuelzevjuravel.com/works",
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
      "name": "Complete Works",
      "item": "https://shmuelzevjuravel.com/works"
    }
  ]
};

const collectionJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "Complete Works of Rabbi Shmuel Zev Juravel",
  "description": "Comprehensive catalog of nearly 100 educational CDs and books by Rabbi Shmuel Zev Juravel, including Parsha series, Halacha series, and middos stories.",
  "url": "https://shmuelzevjuravel.com/works",
  "author": { "@id": "https://shmuelzevjuravel.com/#rabbi-shmuel-zev-juravel" },
  "about": { "@id": "https://shmuelzevjuravel.com/#rabbi-shmuel-zev-juravel" },
  "numberOfItems": 100,
  "hasPart": [
    { "@type": "CreativeWorkSeries", "name": "Chumash Series - Bereishis" },
    { "@type": "CreativeWorkSeries", "name": "Chumash Series - Shemos" },
    { "@type": "CreativeWorkSeries", "name": "Chumash Series - Vayikra" },
    { "@type": "CreativeWorkSeries", "name": "Chumash Series - Bamidbar" },
    { "@type": "CreativeWorkSeries", "name": "Chumash Series - Devarim" },
    { "@type": "CreativeWorkSeries", "name": "Holiday Series" },
    { "@type": "CreativeWorkSeries", "name": "39 Melochos of Shabbos" },
    { "@type": "CreativeWorkSeries", "name": "Hilchos Yom Tov" },
    { "@type": "CreativeWorkSeries", "name": "Hilchos Kashrus" },
    { "@type": "CreativeWorkSeries", "name": "Middos Series" }
  ]
};

const chumashSeries = {
  bereishis: ["Bereishis", "Noach", "Lech Lecha", "Vayeira", "Chayei Sarah", "Toldos", "Vayeitzei", "Vayishlach", "Vayeishev", "Miketz", "Vayigash", "Vayechi"],
  shemos: ["Shemos", "Va'eira", "Bo", "Beshalach", "Yisro", "Mishpatim", "Terumah", "Tetzaveh", "Ki Sisa", "Vayakheil-Pekudei"],
  vayikra: ["Vayikra", "Tzav", "Shemini", "Tazria-Metzorah", "Acharei Mos", "Kedoshim", "Emor", "Behar", "Bechukosai"],
  bamidbar: ["Bamidbar", "Nasso", "Behaaloscha", "Shelach", "Korach", "Chukas", "Balak", "Pinchas", "Matos", "Masei"],
  devarim: ["Devarim", "Va'eschanan", "Eikev", "Re'eh (Vol 1 & 2)", "Shoftim (Vol 1 & 2)", "Ki Seitzei (Vol 1 & 2)", "Ki Savo (Vol 1 & 2)", "Nitzavim (Vol 1 & 2) & Vayeilech", "Haazinu Vzos Haberachah"]
};

const holidaySeries = [
  "Rosh Hashanah / Yom Kippur",
  "Succos Stories",
  "The Story of Chanukah",
  "More Chanukah Stories",
  "The Story of Purim (2 CDs)",
  "Purim Stories (2 CDs)",
  "Pesach Stories",
  "The Story of Yetzias Mitzrayim",
  "The Story of Lag B'Omer",
  "Shavuos (3 CD Set)",
  "The Story of Rus",
  "Tisha B'av - The Story of Bayis Rishon",
  "Tisha B'av - The Story of Bayis Sheini"
];

const halachaSeries = [
  { name: "The 39 Melachos of Shabbos", description: "Comprehensive coverage of all 39 categories of creative work prohibited on Shabbos", featured: true },
  { name: "Lost in the Park (Melachos of Yom Tov)", description: "3 CD Set teaching the complex halachos that differentiate Shabbos from Yom Tov", featured: true },
  { name: "Kids in the Kitchen (Hilchos Kashrus)", description: "3 CD Set covering basar b'chalav, ta'aruvos, and practical kashrus questions", featured: true },
  { name: "Shabbos Stories (Vol 1 & 2)", description: "Stories highlighting the beauty and laws of Shabbos observance", featured: false }
];

const middosSeries = [
  "Ahavas Yisrael - Mevater",
  "Ahavas Chaveirim",
  "Ahavas HaTorah (Vol 1 & 2)",
  "Dan L'kaf Zchus",
  "Kiddush Hashem",
  "Limud Hatorah",
  "Stories of Kibbud Av Va'eim",
  "Stories of Shalom",
  "Stories of Tzedakah",
  "Stories of Tefillah",
  "Stories of Kedushah",
  "Stories of Simcha",
  "Stories of Golus",
  "Shmiras Halashon"
];

const otherSeries = [
  "Dovid Hamelech",
  "Eliyahu Hanavi / Elisha Hanavi",
  "A Story with Rabbi Juravel: Shabbos",
  "A Story with Rabbi Juravel: Ahavas Yisrael",
  "A Story with Rabbi Juravel: Shalom & Simcha"
];

const journeySeries = [
  "Lost on the Train",
  "Adventures in the Sky",
  "The Great Escape",
  "Underwater Voyage",
  "The Case of the Greedy Gorillas"
];

const books = [
  { name: "Falsely Accused", description: "Comic book teaching 39 Melachos through an exciting story", type: "Comic Book" },
  { name: "39 Melachos Comic Series", description: "Multiple volumes teaching Shabbos laws through visual storytelling", type: "Comic Books" },
  { name: "Chumash Chasam Sofer - Sefer Shemos", description: "Making the Chasam Sofer's Torah insights accessible (2022)", type: "Sefer" },
  { name: "Story Books Collection", description: "Over ten story books for children on various Torah topics", type: "Books" }
];

export default function Works() {
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

      <div className="bg-gradient-to-r from-primary to-primary-hover text-primary-foreground py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-2">Complete Works</h1>
          <p className="text-lg opacity-90">Nearly 100 CDs and books by Rabbi Shmuel Zev Juravel</p>
        </div>
      </div>

      <article className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Overview */}
        <Card className="mb-12 border-primary/30 bg-primary/5">
          <CardContent className="pt-6">
            <div className="flex items-center gap-3 mb-4">
              <Disc className="w-8 h-8 text-primary" />
              <h2 className="text-2xl font-bold">Story-Tyme with Rabbi Juravel</h2>
            </div>
            <p className="text-lg text-muted-foreground mb-4">
              Rabbi Shmuel Zev Juravel has produced nearly <strong>100 educational CDs</strong> and numerous books, making complex Torah concepts accessible to children through engaging stories. His innovative approach—teaching Halachos through narratives—has transformed Torah education and has been endorsed by leading Poskim worldwide.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-background rounded-lg px-4 py-2">
                <p className="text-2xl font-bold text-primary">~100</p>
                <p className="text-sm text-muted-foreground">CDs Released</p>
              </div>
              <div className="bg-background rounded-lg px-4 py-2">
                <p className="text-2xl font-bold text-primary">54</p>
                <p className="text-sm text-muted-foreground">Parsha CDs</p>
              </div>
              <div className="bg-background rounded-lg px-4 py-2">
                <p className="text-2xl font-bold text-primary">10+</p>
                <p className="text-sm text-muted-foreground">Books</p>
              </div>
              <div className="bg-background rounded-lg px-4 py-2">
                <p className="text-2xl font-bold text-primary">2</p>
                <p className="text-sm text-muted-foreground">Languages</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Halacha Series - Featured */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Star className="w-6 h-6 text-primary" />
            Halacha Series (Endorsed by Leading Poskim)
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {halachaSeries.filter(h => h.featured).map((series, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow border-primary/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Disc className="w-5 h-5 text-primary" />
                    {series.name}
                  </CardTitle>
                  <CardDescription>{series.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Reviewed & Endorsed</span>
                </CardContent>
              </Card>
            ))}
            {halachaSeries.filter(h => !h.featured).map((series, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{series.name}</CardTitle>
                  <CardDescription>{series.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>

        {/* Chumash Series */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-primary" />
            Complete Chumash Series
          </h2>
          <p className="text-muted-foreground mb-6">
            Rabbi Juravel has recorded CDs for every single Parsha in the Torah, bringing the weekly portion to life through captivating stories.
          </p>
          
          <div className="space-y-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg bg-primary/10 inline-block px-3 py-1 rounded">Sefer Bereishis</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {chumashSeries.bereishis.map((parsha, index) => (
                    <span key={index} className="bg-accent px-3 py-1 rounded text-sm">{parsha}</span>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg bg-primary/10 inline-block px-3 py-1 rounded">Sefer Shemos</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {chumashSeries.shemos.map((parsha, index) => (
                    <span key={index} className="bg-accent px-3 py-1 rounded text-sm">{parsha}</span>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg bg-primary/10 inline-block px-3 py-1 rounded">Sefer Vayikra</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {chumashSeries.vayikra.map((parsha, index) => (
                    <span key={index} className="bg-accent px-3 py-1 rounded text-sm">{parsha}</span>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg bg-primary/10 inline-block px-3 py-1 rounded">Sefer Bamidbar</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {chumashSeries.bamidbar.map((parsha, index) => (
                    <span key={index} className="bg-accent px-3 py-1 rounded text-sm">{parsha}</span>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg bg-primary/10 inline-block px-3 py-1 rounded">Sefer Devarim</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {chumashSeries.devarim.map((parsha, index) => (
                    <span key={index} className="bg-accent px-3 py-1 rounded text-sm">{parsha}</span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Holiday Series */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Calendar className="w-6 h-6 text-primary" />
            Holiday Series
          </h2>
          <Card>
            <CardContent className="pt-6">
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
                {holidaySeries.map((holiday, index) => (
                  <div key={index} className="bg-accent px-4 py-2 rounded text-sm">
                    {holiday}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Middos Series */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Mic className="w-6 h-6 text-primary" />
            Middos & Character Development Series
          </h2>
          <Card>
            <CardContent className="pt-6">
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
                {middosSeries.map((series, index) => (
                  <div key={index} className="bg-accent px-4 py-2 rounded text-sm">
                    {series}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Journey Series */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">A Journey with Rabbi Juravel Series</h2>
          <Card>
            <CardContent className="pt-6">
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
                {journeySeries.map((title, index) => (
                  <div key={index} className="bg-accent px-4 py-2 rounded text-sm flex items-center gap-2">
                    <span className="bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold">{index + 1}</span>
                    {title}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Other Series */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Additional Series</h2>
          <Card>
            <CardContent className="pt-6">
              <div className="grid sm:grid-cols-2 gap-3">
                {otherSeries.map((series, index) => (
                  <div key={index} className="bg-accent px-4 py-2 rounded text-sm">
                    {series}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Books */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Book className="w-6 h-6 text-primary" />
            Books & Publications
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {books.map((book, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{book.name}</CardTitle>
                    <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded">{book.type}</span>
                  </div>
                  <CardDescription>{book.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>

        {/* Languages & Availability */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Globe className="w-6 h-6 text-primary" />
            Availability
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Languages Available</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    English (all titles)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    Yiddish (selected titles)
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Where to Purchase</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <a href="https://www.amazon.com/stores/Rabbi-Juravel/author/B00J5P2SA6" target="_blank" rel="noopener noreferrer" className="block text-primary hover:underline">
                  → Amazon (Rabbi Juravel Author Page)
                </a>
                <p className="text-muted-foreground">→ Jewish bookstores worldwide</p>
                <p className="text-muted-foreground">→ Israel Book Shop Publications</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Contact for Orders */}
        <Card className="bg-accent">
          <CardContent className="pt-6 text-center">
            <h2 className="text-xl font-bold mb-2">Order Information</h2>
            <p className="text-muted-foreground mb-4">
              For bulk orders or special requests, contact directly.
            </p>
            <div className="flex flex-wrap gap-4 justify-center text-sm text-muted-foreground mb-6">
              <span>USA: 732-901-4422</span>
              <span>UK: 44-161-773-6106</span>
              <span>Israel: 02-500-2507</span>
            </div>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button asChild>
                <a href="https://www.amazon.com/stores/Rabbi-Juravel/author/B00J5P2SA6" target="_blank" rel="noopener noreferrer">
                  Shop on Amazon
                </a>
              </Button>
              <Button asChild variant="outline">
                <Link href="/endorsements">View Endorsements</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </article>
    </>
  );
}

