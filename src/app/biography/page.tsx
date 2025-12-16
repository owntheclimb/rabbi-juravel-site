import type { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Quote, GraduationCap, Heart, Briefcase, BookOpen, Users, Award } from "lucide-react";

export const metadata: Metadata = {
  title: "Biography",
  description: "Complete biography of Rabbi Shmuel Zev Juravel of South Fallsburg, NY. Born November 23, 1971 in Brooklyn. Studied at Yeshiva of Brisk under Rav Avrohom Yehoshua Soloveichik. Author of 39 Melochos series, master storyteller, Torah educator.",
  openGraph: {
    title: "Biography | Rabbi Shmuel Zev Juravel",
    description: "Complete biography of Rabbi Shmuel Zev Juravel - education, family, and community service in South Fallsburg, New York. Born 1971 in Brooklyn.",
    type: "profile",
    url: "https://shmuelzevjuravel.com/biography",
    images: [
      {
        url: "/og-image-biography.jpg",
        width: 1200,
        height: 630,
        alt: "Biography - Rabbi Shmuel Zev Juravel",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Biography | Rabbi Shmuel Zev Juravel",
    description: "Rabbi Shmuel Zev Juravel: Brooklyn-born Torah scholar, Yeshiva of Brisk alumnus, South Fallsburg educator. Read full biography, timeline, and family details.",
    images: ["/og-image-biography.jpg"],
  },
  alternates: {
    canonical: "https://shmuelzevjuravel.com/biography",
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
      "name": "Biography",
      "item": "https://shmuelzevjuravel.com/biography"
    }
  ]
};

const webPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://shmuelzevjuravel.com/biography#webpage",
  "url": "https://shmuelzevjuravel.com/biography",
  "name": "Biography - Rabbi Shmuel Zev Juravel of South Fallsburg, NY",
  "description": "Complete biography of Rabbi Shmuel Zev Juravel, born November 23, 1971 in Brooklyn, NY. Torah educator in South Fallsburg, New York since 2005. Master storyteller with nearly 100 CDs.",
  "isPartOf": { "@id": "https://shmuelzevjuravel.com/#website" },
  "about": { "@id": "https://shmuelzevjuravel.com/#rabbi-shmuel-zev-juravel" },
  "mainEntity": { "@id": "https://shmuelzevjuravel.com/#rabbi-shmuel-zev-juravel" },
  "datePublished": "2025-01-01",
  "dateModified": "2025-12-16"
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "@id": "https://shmuelzevjuravel.com/biography#article",
  "headline": "Biography of Rabbi Shmuel Zev Juravel - South Fallsburg, New York",
  "description": "Complete biography of Rabbi Shmuel Zev Juravel of South Fallsburg, NY (born November 23, 1971 in Brooklyn). Education at Yeshiva of Brisk, family, publications, and community service.",
  "author": { "@id": "https://shmuelzevjuravel.com/#rabbi-shmuel-zev-juravel" },
  "about": { "@id": "https://shmuelzevjuravel.com/#rabbi-shmuel-zev-juravel" },
  "mainEntityOfPage": { "@id": "https://shmuelzevjuravel.com/biography#webpage" },
  "datePublished": "2025-01-01",
  "dateModified": "2025-12-16",
  "publisher": {
    "@type": "Organization",
    "name": "Rabbi Shmuel Zev Juravel Official Website",
    "url": "https://shmuelzevjuravel.com"
  },
  "wordCount": 2000
};

export default function Biography() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      <div className="bg-gradient-to-r from-primary to-primary-hover text-primary-foreground py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-2">Biography of Rabbi Shmuel Zev Juravel</h1>
          <p className="text-lg opacity-90">South Fallsburg, New York</p>
          <p className="text-sm opacity-75 mt-1">Born November 23, 1971 in Brooklyn, NY</p>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Identity Summary */}
        <Card className="mb-8 border-primary/30 bg-primary/5">
          <CardContent className="pt-6 text-center">
            <h2 className="text-2xl font-bold mb-2">Rabbi Shmuel Zev Juravel</h2>
            <p className="text-lg text-muted-foreground">Torah Educator • Author • Master Storyteller</p>
            <p className="text-muted-foreground mt-2">South Fallsburg, New York | Born November 23, 1971, Brooklyn, NY</p>
          </CardContent>
        </Card>

        {/* Early Life & Calling */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <GraduationCap className="w-6 h-6 text-primary" />
              Early Life and Education
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-lg leading-relaxed text-muted-foreground">
            <p>
              <strong>Rabbi Shmuel Zev Juravel</strong> was born on <strong>November 23, 1971, in Brooklyn, New York</strong>. From his earliest years, he was drawn to Torah education, expressing at a young age that he wanted to be &ldquo;a melamed like my father.&rdquo; This aspiration would define the trajectory of his entire life.
            </p>
            <p>
              As a child, his favorite day of the week was Shabbos. &ldquo;There was a kids&apos; minyan in our shul,&rdquo; he recalls, &ldquo;and we used to sing the tunes with such joy. During krias haTorah we went into a story room, where we listened to stories and had candy and soda. I loved it.&rdquo; These early experiences planted the seeds for his future work in making Torah accessible and joyful for children.
            </p>
            <p>
              His formative years were spent in Torah learning, beginning his elementary education at <strong>Yeshiva Tiferes Elimelech</strong> from 1977 to 1984. He continued his studies at <strong>Yeshiva Staten Island</strong> for high school between 1985 and 1988, building a strong foundation in Torah knowledge and Jewish scholarship.
            </p>
            <p>
              At age 17, Rabbi Juravel became a camp counselor in a sleepaway camp—his first taste of working with children. This experience confirmed his calling and set him on the path to becoming one of the most beloved Torah educators of his generation.
            </p>
          </CardContent>
        </Card>

        {/* Yeshiva Education */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="w-6 h-6 text-primary" />
              Advanced Torah Study
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-lg leading-relaxed text-muted-foreground">
            <p>
              From 1989 to 1992, Rabbi Juravel attended the Bais Medrish at <strong>Yeshiva Gedola of Detroit</strong>, where he deepened his Talmudic studies and developed his analytical skills under distinguished Rabbinic guidance.
            </p>
            <p>
              At age 23, he got married and started learning in kollel, where he remained for twelve years until becoming a rebbe. In 1994, Rabbi Juravel embarked on an intensive period of Torah study in Israel, joining the prestigious <strong>Yeshiva of Brisk</strong> under the leadership of <strong>Rav Avrohom Yehoshua Soloveichik</strong>. He remained there for eight years until 2002, immersing himself in the rigorous Brisker method of Talmudic analysis and Halachic reasoning.
            </p>
            <p>
              From 1995 to 2004, Rabbi Juravel also studied under the world-renowned Maggid Shiur, <strong>Horav Michel Zilber</strong>, further enriching his Torah scholarship and deepening his understanding of Talmudic methodology.
            </p>
            <p>
              Following his years at Brisk, Rabbi Juravel continued his advanced learning at the <strong>Brisker Kollel</strong> from 2002 to 2005, further refining his mastery of Jewish law and sacred texts. This extended period in Israel solidified his expertise in Halacha and positioned him as a respected Torah scholar.
            </p>
          </CardContent>
        </Card>

        {/* Quote from Interview */}
        <Card className="mb-8 bg-primary/5 border-primary/20">
          <CardContent className="pt-6">
            <Quote className="w-10 h-10 text-primary/30 mb-4" />
            <blockquote className="text-xl italic text-muted-foreground mb-4 leading-relaxed">
              &ldquo;At age 5, I was a happy-go-lucky kid. I even enjoyed going to school. At one point someone asked me what I want to be when I grow up, and I said, &apos;I want to be a melamed like my father.&apos;&rdquo;
            </blockquote>
            <p className="font-semibold">— Rabbi Shmuel Zev Juravel</p>
          </CardContent>
        </Card>

        {/* Family Life */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Heart className="w-6 h-6 text-primary" />
              Family Life
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-lg leading-relaxed text-muted-foreground">
            <p>
              In <strong>1993</strong>, Rabbi Juravel married <strong>Tova Klatzko of Cleveland</strong>. Together, they have built a beautiful Torah home with <strong>ten children</strong>. Five of their children are married:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Yaakov Yehoshua married Chana, daughter of Rabbi Aryeh Sherwinter of Lakewood Commons, New Jersey</li>
              <li>Yitzchok married Sara, daughter of Rabbi Meir Bloch, Dayan of Bais Din Meah Shearim</li>
              <li>Ahuva married Ari Zupnik, son of Rabbi Shlomo Zupnik of Bais Hatalmud, Bensonhurst, New York</li>
              <li>Shevy married Menashe Rotkin, son of Rabbi Shmuel Rotkin A&quot;H of Lakewood Yeshiva</li>
              <li>Gavriel married Shira, daughter of Rabbi Avrohom Bressler, Magid Shiur at Woodlake Yeshiva</li>
            </ul>
            <p>
              Five children remain at home, where Rabbi Juravel and his wife continue to raise them with Torah values and dedication to Jewish education.
            </p>
          </CardContent>
        </Card>

        {/* Teaching Career */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Briefcase className="w-6 h-6 text-primary" />
              Teaching Career and Community Service
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-lg leading-relaxed text-muted-foreground">
            <p>
              Upon returning to the United States in 2005, Rabbi Juravel settled in <strong>South Fallsburg, New York</strong>, in Sullivan County within the scenic Catskills region. He currently serves as a <strong>Rabbi in the high school</strong> and as a <strong>Rebbe in the elementary school</strong>, where he maintains a close relationship with the Rosh Yeshiva, <strong>Horav Eli Dov Wachtfogel</strong>.
            </p>
            <p>
              His career as a storyteller began when he was a first-grade rebbe. Faced with rowdy lunchtime supervision—which his predecessor had warned him would be &ldquo;the worst time of the day&rdquo;—Rabbi Juravel devised an innovative solution. During class, he would record himself telling stories to the children, then play the tapes during lunch. &ldquo;It worked like a charm,&rdquo; he recalls. &ldquo;The kids stayed quiet as they chewed, and the stories about the parshah and Yamim Tovim slowly penetrated.&rdquo;
            </p>
            <p>
              Word spread, and soon mothers were asking for the tapes. Other rebbes said they were &ldquo;something special.&rdquo; The recordings weren&apos;t available commercially until about twenty years ago, when Rabbi Juravel&apos;s son-in-law, <strong>Mendel Feinzeig</strong>, became the family businessman, packaging the stories and selling them so children around the US could listen too.
            </p>
            <p>
              Though now retired from classroom teaching for over ten years, Rabbi Juravel hasn&apos;t lost his touch. &ldquo;When he tells a story for young children, the time period and the concepts come to life,&rdquo; observers note.
            </p>
          </CardContent>
        </Card>

        {/* Publications */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Award className="w-6 h-6 text-primary" />
              Publications and Educational Works
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-lg leading-relaxed text-muted-foreground">
            <p>
              Rabbi Juravel is dedicated to making Torah learning accessible and engaging. With <strong>nearly 100 educational CDs</strong> available today, he is one of the most beloved storytellers of the Jewish world. His works include:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Complete Parsha Series</strong> — CDs for every parsha in the Torah</li>
              <li><strong>39 Melochos Halacha Series</strong> (2015) — Comprehensive instruction on Shabbos laws</li>
              <li><strong>Hilchos Yom Tov</strong> — &ldquo;Lost in the Park&rdquo; 3 CD Set</li>
              <li><strong>Hilchos Kashrus</strong> — &ldquo;Kids in the Kitchen&rdquo; 3 CD Set</li>
              <li><strong>&ldquo;Falsely Accused&rdquo;</strong> Shabbos comic book (2019)</li>
              <li><strong>Chumash Chasam Sofer on Sefer Shemos</strong> (2022)</li>
              <li><strong>Over 10 story books</strong> for children</li>
              <li><strong>Middos series</strong> on Ahavas Yisrael, Kibbud Av Va&apos;eim, Tzedakah, and more</li>
            </ul>
            <p>
              Each new CD requires many hours of work. &ldquo;I have to research the material, write it up, review it, go over it, my son-in-law goes over it,&rdquo; Rabbi Juravel explains. &ldquo;Sometimes a CD will come out a whole year after we start working on it.&rdquo; All Halacha recordings are reviewed and endorsed by multiple Poskim before release.
            </p>
          </CardContent>
        </Card>

        {/* Impact */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="w-6 h-6 text-primary" />
              Impact and Legacy
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-lg leading-relaxed text-muted-foreground">
            <p>
              <strong>Most frum young adults today can trace many of their yedios in Hilchos Shabbos or the Parshiyos Hashavua to Rabbi Juravel in some way or other.</strong> His many CDs and books over the years have had a tremendous impact on children&apos;s understanding of the fundamentals of Yiddishkeit.
            </p>
            <p>
              &ldquo;You can&apos;t even imagine how many heartfelt phone calls, letters, and in-person visits he has gotten over the years,&rdquo; his family shares. &ldquo;People are always saying that it changed their children&apos;s lives as well as their own. They tell him all the time how their children sit together for hours at a time listening to the CDs and drinking in the Torah.&rdquo;
            </p>
            <p>
              The impact extends beyond children. Adults frequently benefit from his works as well. One yungerman recently called, exclaiming, &ldquo;I just heard the CD and learned more Yoreh Deah in one hour than in the last fifteen years!&rdquo;
            </p>
          </CardContent>
        </Card>

        {/* Philosophy Quote */}
        <Card className="mb-8 bg-primary/5 border-primary/20">
          <CardContent className="pt-6">
            <Quote className="w-10 h-10 text-primary/30 mb-4" />
            <blockquote className="text-xl italic text-muted-foreground mb-4 leading-relaxed">
              &ldquo;Whatever messages I hope to give over, I try to give myself. When Rav Dovid Lebowitz was giving a mussar shmuess in yeshiva, he used to say, &apos;I&apos;m talking to myself. If anyone wants to listen, they can.&apos; I feel the same way. I&apos;m talking to myself, and my listeners and I are growing together.&rdquo;
            </blockquote>
            <p className="font-semibold">— Rabbi Shmuel Zev Juravel</p>
          </CardContent>
        </Card>

        {/* Current Work */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Current Projects</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-lg leading-relaxed text-muted-foreground">
            <p>
              Beginning in <strong>2025</strong>, Rabbi Juravel expanded his reach by giving <strong>weekly Parsha lectures</strong>, which are featured on <a href="https://matzav.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Matzav.com</a> and <a href="https://24six.app/preview/video/artist/1160/rabbi-juravel" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">24Six</a>, bringing Torah insights to a broader audience.
            </p>
            <p>
              He continues to work on new projects, including a Hilchos Lashon Harah series going through Sefer Chofetz Chaim, a Hilchos Brachos series, and adult-level content on Simchas HaChaim. &ldquo;There are so many problems in the world nowadays,&rdquo; he notes, &ldquo;we need to hang on to simcha.&rdquo;
            </p>
            <p>
              Shmuel Zev and Tova reside in South Fallsburg, New York, where they remain active, dedicated members of their community.
            </p>
          </CardContent>
        </Card>

        {/* CTAs */}
        <div className="text-center">
          <p className="text-muted-foreground mb-4">Explore more about Rabbi Juravel&apos;s life and works.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button asChild>
              <Link href="/timeline">View Timeline</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/works">Complete Works</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/facts">Quick Facts</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/verify">Verify Identity</Link>
            </Button>
          </div>
        </div>
      </article>
    </>
  );
}
