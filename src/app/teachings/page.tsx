import type { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Lightbulb, Heart, Users, Quote, Disc, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Teachings",
  description: "Torah teachings, educational philosophy, and insights from Rabbi Shmuel Zev Juravel of South Fallsburg, NY. Learn about his innovative approach to teaching Halacha through stories.",
  openGraph: {
    title: "Teachings | Rabbi Shmuel Zev Juravel",
    description: "Torah teachings and educational philosophy by Rabbi Shmuel Zev Juravel. His innovative method makes complex Halachos accessible to children and adults.",
    type: "website",
    url: "https://shmuelzevjuravel.com/teachings",
    images: [
      {
        url: "/hero-teachings.jpg",
        width: 1200,
        height: 630,
        alt: "Rabbi Shmuel Zev Juravel teaching Torah in the study hall",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Teachings | Rabbi Shmuel Zev Juravel",
    description: "Torah teachings and educational philosophy by Rabbi Shmuel Zev Juravel.",
    images: ["/hero-teachings.jpg"],
  },
  alternates: {
    canonical: "https://shmuelzevjuravel.com/teachings",
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
      "name": "Teachings",
      "item": "https://shmuelzevjuravel.com/teachings"
    }
  ]
};

const collectionJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "Torah Teachings by Rabbi Shmuel Zev Juravel",
  "description": "Educational philosophy and teaching methodology of Rabbi Shmuel Zev Juravel of South Fallsburg, New York. His innovative approach makes complex Halachos accessible through engaging stories.",
  "url": "https://shmuelzevjuravel.com/teachings",
  "author": { "@id": "https://shmuelzevjuravel.com/#rabbi-shmuel-zev-juravel" },
  "about": ["Torah Education", "Halacha", "Jewish Education", "Children's Torah Learning"]
};

export default function Teachings() {
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

      <div className="relative h-[350px] sm:h-[400px] md:h-[450px] overflow-hidden">
        <img 
          src="/hero-teachings.jpg" 
          alt="Rabbi Shmuel Zev Juravel teaching Torah in the study hall"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/40" aria-hidden="true"></div>
        <div className="absolute bottom-0 left-0 z-10 max-w-4xl px-4 sm:px-6 lg:px-8 pb-12">
          <h1 className="text-4xl font-bold mb-3 text-white">Teaching Philosophy</h1>
          <p className="text-xl text-white/90">How Rabbi Juravel transforms Torah education</p>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Teaching Philosophy Overview */}
        <Card className="mb-8 border-primary/30 bg-primary/5">
          <CardContent className="pt-6">
            <div className="flex items-center gap-3 mb-4">
              <Lightbulb className="w-8 h-8 text-primary" />
              <h2 className="text-2xl font-bold">The Vision Behind the Teaching</h2>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Rabbi Shmuel Zev Juravel of South Fallsburg, New York, noticed a troubling pattern: many adults who were ehrliche Yidden (sincere, observant Jews) lacked basic knowledge in Hilchos Shabbos and other fundamental Torah concepts. He strongly believed that <strong>had they been taught these things in an easy and applicable manner when they were children, they would have had a much easier time learning and keeping Halachos as adults</strong>.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              This observation became the driving force behind his life&apos;s work: making complex Halachos accessible and memorable through engaging stories and clear explanations.
            </p>
          </CardContent>
        </Card>

        {/* Teaching Method */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-primary" />
            The Teaching Method
          </h2>
          
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Stories as Teaching Tools</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Rabbi Juravel&apos;s genius lies in his ability to take complex ideas and transform them through entertaining stories into deep-rooted lessons that will remain with children (and their parents) for years to come. As one parent noted: <em>&ldquo;My children sit together for hours at a time listening to the CDs and drinking in the Torah.&rdquo;</em>
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Practical Application</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  A key feature of Rabbi Juravel&apos;s approach is making Halachos immediately applicable. For example, in the &ldquo;Falsely Accused&rdquo; comic book, a character is commanded by a police officer to bend his glasses back into shape on Shabbos, but he refuses because it would be Makeh B&apos;patish. This scenario provides children with an easy-to-remember application of an often misunderstood Melacha.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  <strong>It is a known fact that Halachos learned through a story or parable are easier to remember.</strong> That, along with the excitement of engaging storytelling, creates long-lasting effects on the listener&apos;s knowledge of Hilchos Shabbos.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Halachic Accuracy</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Every project begins with contacting various rabbonim to find out their most commonly asked questions or misconceptions. From there, Rabbi Juravel crafts stories to address these topics. <strong>No CD on Halacha is released without first getting haskomos (endorsements) on the entire content from numerous rabbonim.</strong> The dedication to accuracy means listeners can trust that what they&apos;re learning is correct according to Halacha.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Quote Section */}
        <Card className="mb-12 bg-primary/5 border-primary/20">
          <CardContent className="pt-6">
            <Quote className="w-10 h-10 text-primary/30 mb-4" />
            <blockquote className="text-xl italic text-muted-foreground mb-4 leading-relaxed">
              &ldquo;Whatever messages I hope to give over, I try to give myself. When Rav Dovid Lebowitz was giving a mussar shmuess in yeshiva, he used to say, &apos;I&apos;m talking to myself. If anyone wants to listen, they can.&apos; I feel the same way. I&apos;m talking to myself, and my listeners and I are growing together.&rdquo;
            </blockquote>
            <p className="font-semibold">— Rabbi Shmuel Zev Juravel</p>
          </CardContent>
        </Card>

        {/* Subjects Covered */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Disc className="w-6 h-6 text-primary" />
            Subjects Covered in Teachings
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  Hilchos Shabbos
                </CardTitle>
                <CardDescription>The 39 Melachos Series</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Comprehensive coverage of all 39 categories of creative work prohibited on Shabbos, taught through engaging stories that make complex laws memorable.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  Hilchos Yom Tov
                </CardTitle>
                <CardDescription>&ldquo;Lost in the Park&rdquo; Series</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Teaching the distinctions between Shabbos and Yom Tov, what is permitted on holidays, and the reasoning behind these laws.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  Hilchos Kashrus
                </CardTitle>
                <CardDescription>&ldquo;Kids in the Kitchen&rdquo; Series</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Covering basar b&apos;chalav (meat and milk), ta&apos;aruvos (mixtures), bittul b&apos;rov, bishul b&apos;shishim, nat bar nat, libun kal v&apos;chamur, and practical kitchen scenarios.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  Parshiyos HaShavua
                </CardTitle>
                <CardDescription>Complete Torah Cycle</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Stories covering every single Parsha in the Torah, bringing the weekly portion to life and making it relatable to children.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  Middos
                </CardTitle>
                <CardDescription>Character Development</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Ahavas Yisrael, Ahavas Chaveirim, Kibbud Av Va&apos;eim, Tzedakah, Tefillah, Simcha, Shmiras Halashon, and more.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  Yamim Tovim
                </CardTitle>
                <CardDescription>All Jewish Holidays</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Rosh Hashanah, Yom Kippur, Succos, Chanukah, Purim, Pesach, Shavuos, Tisha B&apos;Av, and more—each holiday explored through stories.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Impact Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Heart className="w-6 h-6 text-primary" />
            Impact on Torah Education
          </h2>
          
          <Card>
            <CardContent className="pt-6">
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                It&apos;s no secret that Rabbi Juravel&apos;s CDs have had a tremendous effect on our youth and their Torah knowledge over the past few decades. <strong>Most frum young adults today can say that they can trace many of their yedios (knowledge) in Hilchos Shabbos or the Parshiyos Hashavua to Rabbi Juravel in some way or other.</strong>
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                His many CDs and books over the years have had a tremendous impact on children&apos;s understanding of the fundamentals of Yiddishkeit. This is largely due to the warmth that he instills into every story and Halacha, but more importantly, his ability to clearly explain complex Halachos in a manner that any child can understand and learn from.
              </p>
              <div className="bg-accent rounded-lg p-4 mt-6">
                <p className="text-muted-foreground italic">
                  A yungerman recently called, exclaiming, <strong>&ldquo;I just heard the CD and learned more Yoreh Deah in one hour than in the last fifteen years!&rdquo;</strong>
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* For Adults Too */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Users className="w-6 h-6 text-primary" />
            Not Just for Children
          </h2>
          
          <Card>
            <CardContent className="pt-6">
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                While designed primarily for children, Rabbi Juravel has a large adult audience as well. Many parents listen with their children, and numerous adults enjoy relaxing with Rabbi Juravel&apos;s CDs. The Kashrus series in particular has caught the attention of more adults than previous releases.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Adults ask: <em>&ldquo;Why should only the kinderlach know when we say bittul b&apos;rov and bishul b&apos;shishim? What nat bar nat means? What is libun kal v&apos;chamur?&rdquo;</em> Even adults will benefit tremendously from these works, as noted in the haskomos from leading Poskim.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Upcoming Projects */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Current & Upcoming Projects</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-primary/30">
              <CardHeader>
                <CardTitle>Weekly Parsha Lectures</CardTitle>
                <CardDescription>Since 2025 • Ongoing</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  Featured on Matzav.com and 24Six, bringing weekly Torah insights to a broader audience.
                </p>
                <Button asChild size="sm" variant="outline">
                  <Link href="/lectures">Watch Lectures</Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Hilchos Lashon Harah</CardTitle>
                <CardDescription>In Development</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  A new series going through Sefer Chofetz Chaim and elucidating each Halacha in story form.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Hilchos Brachos</CardTitle>
                <CardDescription>In Development</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Teaching the laws of blessings through the same innovative story-based approach.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Simchas HaChaim</CardTitle>
                <CardDescription>Adult-Level Content</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Content on joy in life, developed for adult listeners. &ldquo;There are so many problems in the world nowadays – we need to hang on to simcha.&rdquo;
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA */}
        <div className="text-center">
          <p className="text-muted-foreground mb-4">
            Explore Rabbi Juravel&apos;s complete catalog of Torah educational materials.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button asChild>
              <Link href="/works">View Complete Works</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/lectures">Watch Lectures</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/endorsements">Read Endorsements</Link>
            </Button>
          </div>
        </div>
      </article>
    </>
  );
}
