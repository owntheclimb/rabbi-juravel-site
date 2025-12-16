import type { Metadata } from "next";
import Link from "next/link";
import IdentityNote from "@/components/IdentityNote";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, GraduationCap, Mic, Award, Users, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Rabbi Shmuel Zev Juravel | South Fallsburg, New York",
  description: "Official website of Rabbi Shmuel Zev Juravel, Torah educator and author in South Fallsburg, NY. Creator of 39 Melochos Halacha series, Shabbos comic book, and weekly Parsha lectures on Matzav.com and 24Six.",
  openGraph: {
    title: "Rabbi Shmuel Zev Juravel | South Fallsburg, New York",
    description: "Official website of Rabbi Shmuel Zev Juravel, Torah educator and author in South Fallsburg, NY. Creator of 39 Melochos Halacha series and weekly Parsha lectures.",
    type: "profile",
    url: "https://shmuelzevjuravel.com/",
    images: [
      {
        url: "/og-image-home.jpg",
        width: 1200,
        height: 630,
        alt: "Rabbi Shmuel Zev Juravel - South Fallsburg, New York",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rabbi Shmuel Zev Juravel | South Fallsburg, NY",
    description: "Rabbi Shmuel Zev Juravel of South Fallsburg, NY: Torah educator, author of 39 Melochos Halacha series, weekly Parsha lectures on Matzav.com. Verify identity & learn more.",
    images: ["/og-image-home.jpg"],
  },
  alternates: {
    canonical: "https://shmuelzevjuravel.com/",
  },
};

// ProfilePage schema for the homepage
const profilePageJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "@id": "https://shmuelzevjuravel.com/#profilepage",
  "mainEntity": { "@id": "https://shmuelzevjuravel.com/#rabbi-shmuel-zev-juravel" },
  "dateCreated": "2025-01-01",
  "dateModified": "2025-12-16",
  "name": "Rabbi Shmuel Zev Juravel - Official Profile",
  "description": "Official profile page for Rabbi Shmuel Zev Juravel of South Fallsburg, New York (born November 23, 1971 in Brooklyn, NY). Torah educator, author, and lecturer.",
  "url": "https://shmuelzevjuravel.com/",
  "isPartOf": { "@id": "https://shmuelzevjuravel.com/#website" },
  "about": { "@id": "https://shmuelzevjuravel.com/#rabbi-shmuel-zev-juravel" }
};

// Speakable schema for voice search optimization
const speakableJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "speakable": {
    "@type": "SpeakableSpecification",
    "cssSelector": [".identity-summary", "h1", ".bio-intro", ".quick-facts"]
  },
  "url": "https://shmuelzevjuravel.com/"
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableJsonLd) }}
      />

      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[600px] max-h-[900px] flex items-center overflow-hidden">
        {/* Hero Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/hero-home.jpg" 
            alt="Torah study room with open sacred texts and candlelight in South Fallsburg, New York - Rabbi Shmuel Zev Juravel Torah education" 
            className="w-full h-full object-cover"
            width={1920}
            height={1080}
          />
          {/* Gradient overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/60 to-black/40"></div>
        </div>
        
        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 text-white animate-in fade-in slide-in-from-bottom-4 duration-700 drop-shadow-lg">
              Rabbi Shmuel Zev Juravel
            </h1>
            <p className="text-2xl md:text-3xl lg:text-4xl mb-3 text-white/95 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100 drop-shadow-md">
              South Fallsburg, New York
            </p>
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200 drop-shadow-md">
              Rabbi, educator, and author dedicated to Torah learning and community education in the Catskills region. Known for the 39 Melochos series and weekly Parsha lectures featured on Matzav.com and 24Six.
            </p>
            <div className="flex flex-wrap gap-4 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
              <Button asChild size="lg" className="bg-primary hover:bg-primary-hover text-white shadow-xl hover:shadow-2xl transition-all hover:scale-105">
                <Link href="/biography">Read Biography</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-white/95 text-primary border-white hover:bg-white shadow-xl hover:shadow-2xl transition-all hover:scale-105">
                <Link href="/verify">Verify Identity</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Identity Note */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 relative z-10">
        <IdentityNote />
      </section>

      {/* Highlights Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Highlights</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <BookOpen className="w-6 h-6 text-primary" />
              </div>
              <CardTitle>Teachings</CardTitle>
              <CardDescription>
                Explore divrei Torah, essays, and written works on Halacha and Jewish thought
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild variant="outline" className="w-full">
                <Link href="/teachings">View Teachings</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <GraduationCap className="w-6 h-6 text-primary" />
              </div>
              <CardTitle>Projects</CardTitle>
              <CardDescription>
                The 39 Melochos Halacha series and Shabbos comic book for education
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild variant="outline" className="w-full">
                <Link href="/projects">Explore Projects</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Mic className="w-6 h-6 text-primary" />
              </div>
              <CardTitle>Weekly Lectures</CardTitle>
              <CardDescription>
                Parsha lectures available on Matzav.com and 24Six platforms
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild variant="outline" className="w-full">
                <Link href="/lectures">Listen to Lectures</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Quick Facts Section */}
      <section className="bg-accent py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center">Quick Facts</h2>
          
          {/* Identity Summary Box */}
          <div className="identity-summary bg-primary/10 border border-primary/20 rounded-lg p-6 mb-8 text-center">
            <p className="font-bold text-xl mb-2">
              Rabbi Shmuel Zev Juravel of South Fallsburg, New York
            </p>
            <p className="text-muted-foreground">Born November 23, 1971 in Brooklyn, NY</p>
          </div>
          
          {/* Quick Facts Grid */}
          <div className="quick-facts grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <div className="bg-background rounded-lg p-5 shadow-sm">
              <div className="flex items-center gap-3 mb-2">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="font-semibold">Location</span>
              </div>
              <p className="text-muted-foreground">South Fallsburg, New York (since 2005)</p>
              <p className="text-sm text-muted-foreground">Sullivan County, Catskills Region</p>
            </div>
            
            <div className="bg-background rounded-lg p-5 shadow-sm">
              <div className="flex items-center gap-3 mb-2">
                <GraduationCap className="w-5 h-5 text-primary" />
                <span className="font-semibold">Education</span>
              </div>
              <p className="text-muted-foreground">Yeshiva of Brisk, Israel (1994-2002)</p>
              <p className="text-sm text-muted-foreground">Under Rav Avrohom Yehoshua Soloveichik</p>
            </div>
            
            <div className="bg-background rounded-lg p-5 shadow-sm">
              <div className="flex items-center gap-3 mb-2">
                <Users className="w-5 h-5 text-primary" />
                <span className="font-semibold">Family</span>
              </div>
              <p className="text-muted-foreground">Married to Tova Klatzko (1993)</p>
              <p className="text-sm text-muted-foreground">Ten children, five married</p>
            </div>
            
            <div className="bg-background rounded-lg p-5 shadow-sm">
              <div className="flex items-center gap-3 mb-2">
                <BookOpen className="w-5 h-5 text-primary" />
                <span className="font-semibold">Publications</span>
              </div>
              <p className="text-muted-foreground">39 Melochos Halacha Series (2015)</p>
              <p className="text-sm text-muted-foreground">Shabbos Comic Book (2019)</p>
            </div>
            
            <div className="bg-background rounded-lg p-5 shadow-sm">
              <div className="flex items-center gap-3 mb-2">
                <Mic className="w-5 h-5 text-primary" />
                <span className="font-semibold">Lectures</span>
              </div>
              <p className="text-muted-foreground">Weekly Parsha on Matzav.com & 24Six</p>
              <p className="text-sm text-muted-foreground">Since 2025</p>
            </div>
            
            <div className="bg-background rounded-lg p-5 shadow-sm">
              <div className="flex items-center gap-3 mb-2">
                <Award className="w-5 h-5 text-primary" />
                <span className="font-semibold">Current Role</span>
              </div>
              <p className="text-muted-foreground">Rabbi (High School)</p>
              <p className="text-sm text-muted-foreground">Rebbe (Elementary School)</p>
            </div>
          </div>
          
          <div className="text-center">
            <Button asChild variant="outline">
              <Link href="/facts">View All Facts & Verification</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Bio Intro Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6 text-center">About Rabbi Juravel</h2>
          
          <div className="bio-intro space-y-6 text-lg leading-relaxed text-muted-foreground">
            <p>
              <strong>Rabbi Shmuel Zev Juravel</strong> of <strong>South Fallsburg, New York</strong> (born November 23, 1971 in Brooklyn, NY) is a Torah educator whose life has been dedicated to making complex Jewish concepts accessible to learners of all ages. From his earliest years, he aspired to follow in the footsteps of his father as a melamed (teacher), and this calling has defined his life&apos;s work.
            </p>
            <p>
              After intensive Torah study at Yeshiva Gedola of Detroit and eight years at the prestigious Yeshiva of Brisk in Israel under Rav Avrohom Yehoshua Soloveichik, Rabbi Juravel returned to the United States in 2005 and settled in South Fallsburg, New York. There, he serves as a Rabbi in the high school and as a Rebbe in the elementary school, where he maintains a close relationship with the Rosh Yeshiva, Horav Eli Dov Wachtfogel.
            </p>
            <p>
              Rabbi Juravel&apos;s innovative approach to Torah education—teaching Halachos through engaging stories and clear explanations—has transformed how children (and adults) learn fundamental Jewish concepts. His acclaimed <a href="https://www.amazon.com/stores/Rabbi-Juravel/author/B00J5P2SA6" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">39 Melochos Halacha series</a> and Shabbos comic books have been endorsed by leading Poskim and have become staples in Jewish homes worldwide.
            </p>
          </div>
          
          <div className="text-center mt-8">
            <Button asChild>
              <Link href="/biography">Read Full Biography</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Endorsements Preview */}
      <section className="bg-primary/5 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-2 text-center">Endorsed by Leading Rabbonim</h2>
          <p className="text-center text-muted-foreground mb-8">Rabbi Juravel&apos;s educational works have been reviewed and endorsed by prominent Torah authorities</p>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card className="bg-background">
              <CardContent className="pt-6">
                <blockquote className="text-muted-foreground italic mb-4">
                  &ldquo;It is difficult to fathom how R&apos; Juravel has created such a wondrous work by weaving the complex halachos of basar vichalav and ta&apos;aruvos into stories that even children can understand... the halachos and hashkafos that will be imbued into the children from these CDs will certainly remain with them for a lifetime.&rdquo;
                </blockquote>
                <p className="font-semibold">Harav Elya Dov Wachtfogel</p>
                <p className="text-sm text-muted-foreground">Rosh Yeshiva, South Fallsburg</p>
              </CardContent>
            </Card>
            
            <Card className="bg-background">
              <CardContent className="pt-6">
                <blockquote className="text-muted-foreground italic mb-4">
                  &ldquo;I have gone through the transcripts of these CDs and have found them to be totally accurate according to the halachah... I feel that these CDs from R&apos; Juravel are a huge benefit to teach Jewish children the halachos of Kashrus and specifically the rules that pertain to them.&rdquo;
                </blockquote>
                <p className="font-semibold">Harav Yaakov Forchheimer</p>
                <p className="text-sm text-muted-foreground">Posek, Lakewood, NJ</p>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center">
            <Button asChild variant="outline">
              <Link href="/endorsements">View All Endorsements</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
