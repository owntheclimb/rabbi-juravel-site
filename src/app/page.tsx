import type { Metadata } from "next";
import Link from "next/link";
import IdentityNote from "@/components/IdentityNote";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, GraduationCap, Mic } from "lucide-react";

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

export default function Home() {
  return (
    <>
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

      {/* Quick Bio Section */}
      <section className="bg-accent py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6 text-center">About Rabbi Juravel</h2>
          <p className="text-lg leading-relaxed text-muted-foreground mb-6">
            Born in Brooklyn, New York on November 23, 1971, Rabbi Shmuel Zev Juravel studied at Yeshiva Gedola of Detroit and spent many years learning at Yeshiva of Brisk under Rav Avrohom Yehoshua Soloveichik in Israel. After returning to the United States in 2005, he settled in Fallsburg, New York, where he serves as a Rabbi in the high school and Rebbe in the elementary school.
          </p>
          <p className="text-lg leading-relaxed text-muted-foreground mb-8">
            Rabbi Juravel is married to Tova Klatzko of Cleveland and together they have ten children. He is the author of the acclaimed 39 Melochos Halacha series and a Shabbos comic book, and currently gives weekly Parsha lectures featured on Matzav.com and 24Six.
          </p>
          <div className="text-center">
            <Button asChild>
              <Link href="/biography">Read Full Biography</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
