import type { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Biography",
  description: "Complete biography of Rabbi Shmuel Zev Juravel of South Fallsburg, NY. Born 1971 in Brooklyn, studied at Yeshiva of Brisk, author of 39 Melochos series, Torah educator in the Catskills.",
  openGraph: {
    title: "Biography | Rabbi Shmuel Zev Juravel",
    description: "Complete biography of Rabbi Shmuel Zev Juravel - education, family, and community service in South Fallsburg, New York.",
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

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Rabbi Shmuel Zev Juravel",
  "alternateName": ["Rabbi Shmuel Z. Juravel", "Shmuel Zev Juravel", "Rabbi Juravel"],
  "disambiguatingDescription": "Orthodox Jewish Rabbi and Torah educator in South Fallsburg, New York, known for the 39 Melochos series",
  "birthDate": "1971-11-23",
  "birthPlace": { "@type": "Place", "name": "Brooklyn, New York, USA" },
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "South Fallsburg",
    "addressRegion": "NY",
    "addressCountry": "US"
  },
  "spouse": { "@type": "Person", "name": "Tova Klatzko" },
  "alumniOf": [
    { "@type": "EducationalOrganization", "name": "Yeshiva Tiferes Elimelech" },
    { "@type": "EducationalOrganization", "name": "Yeshiva Staten Island" },
    { "@type": "EducationalOrganization", "name": "Yeshiva Gedola of Detroit" },
    { "@type": "EducationalOrganization", "name": "Yeshiva of Brisk", "location": "Israel" }
  ],
  "jobTitle": ["Rabbi", "Rebbe", "Torah Educator"],
  "knowsAbout": ["Halacha", "Jewish Law", "39 Melochos", "Shabbos", "Talmud", "Chumash Chasam Sofer"],
  "url": "https://shmuelzevjuravel.com/biography"
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />

      <div className="bg-gradient-to-r from-primary to-primary-hover text-primary-foreground py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-2">Biography</h1>
          <p className="text-lg opacity-90">Rabbi Shmuel Zev Juravel of South Fallsburg, New York</p>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Card className="mb-8">
          <CardContent className="pt-6">
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-primary">Early Life and Education</h2>
              <p className="text-lg leading-relaxed mb-4">
                Rabbi Shmuel Zev Juravel was born on November 23, 1971, in Brooklyn, New York. His formative years were spent in Torah learning, beginning his elementary education at Yeshiva Tiferes Elimelech from 1977 to 1984. He continued his studies at Yeshiva Staten Island for high school between 1985 and 1988, building a strong foundation in Torah knowledge and Jewish scholarship.
              </p>
              <p className="text-lg leading-relaxed">
                From 1989 to 1992, Rabbi Juravel attended the Bais Medrish at Yeshiva Gedola of Detroit, where he deepened his Talmudic studies and developed his analytical skills under distinguished Rabbinic guidance.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-primary">Advanced Learning in Israel</h2>
              <p className="text-lg leading-relaxed mb-4">
                In 1994, Rabbi Juravel embarked on an intensive period of Torah study in Israel, joining the prestigious Yeshiva of Brisk under the leadership of Rav Avrohom Yehoshua Soloveichik. He remained there for eight years until 2002, immersing himself in the rigorous Brisker method of Talmudic analysis and Halachic reasoning.
              </p>
              <p className="text-lg leading-relaxed mb-4">
                From 1995 to 2004, Rabbi Juravel also studied under the world-renowned Maggid Shiur, Horav Michel Zilber, further enriching his Torah scholarship and deepening his understanding of Talmudic methodology.
              </p>
              <p className="text-lg leading-relaxed">
                Following his years at Brisk, Rabbi Juravel continued his advanced learning at the Brisker Kollel from 2002 to 2005, further refining his mastery of Jewish law and sacred texts. This extended period in Israel solidified his expertise in Halacha and positioned him as a respected Torah scholar.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-primary">Family Life</h2>
              <p className="text-lg leading-relaxed mb-4">
                In 1993, Rabbi Juravel married Tova Klatzko of Cleveland. Together, they have built a beautiful Torah home with ten children. Five of their children are married:
              </p>
              <ul className="list-disc list-inside space-y-2 text-lg ml-4 mb-4">
                <li>Yaakov Yehoshua married Chana, daughter of Rabbi Aryeh Sherwinter of Lakewood Commons, New Jersey</li>
                <li>Yitzchok married Sara, daughter of Rabbi Meir Bloch, Dayan of Bais Din Meah Shearim</li>
                <li>Ahuva married Ari Zupnik, son of Rabbi Shlomo Zupnik of Bais Hatalmud, Bensonhurst, New York</li>
                <li>Shevy married Menashe Rotkin, son of Rabbi Shmuel Rotkin A&quot;H of Lakewood Yeshiva</li>
                <li>Gavriel married Shira, daughter of Rabbi Avrohom Bressler, Magid Shiur at Woodlake Yeshiva</li>
              </ul>
              <p className="text-lg leading-relaxed">
                Five children remain at home, where Rabbi Juravel and his wife continue to raise them with Torah values and dedication to Jewish education.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-primary">Community Service and Publications</h2>
              <p className="text-lg leading-relaxed mb-4">
                Upon returning to the United States in 2005, Rabbi Juravel settled in Fallsburg, New York, in Sullivan County within the scenic Catskills region. He currently serves as a Rabbi in the high school and as a Rebbe in the elementary school, where he maintains a close relationship with the Rosh Yeshiva, Horav Eli Dov Wachtfogel.
              </p>
              <p className="text-lg leading-relaxed mb-4">
                Rabbi Juravel is dedicated to making Torah learning accessible and engaging. In 2015, he released the 39 Melochos Halacha series on CD, providing clear instruction on the intricate laws of Shabbos. In 2019, he published a Shabbos comic book designed to educate children in an engaging format.
              </p>
              <p className="text-lg leading-relaxed mb-4">
                In 2022, Rabbi Juravel published the Chumash Chasam Sofer on Sefer Shemos, making the profound Torah insights of the Chasam Sofer accessible to a wider audience. He has manuscripts prepared for the remaining Chumashim, with plans for future publication.
              </p>
              <p className="text-lg leading-relaxed">
                Beginning in 2025, Rabbi Juravel expanded his reach by giving weekly Parsha lectures, which are featured on Matzav.com and 24Six, bringing Torah insights to a broader audience. Shmuel Zev and Tova reside in Fallsburg and remain active, dedicated members of their community.
              </p>
            </section>
          </CardContent>
        </Card>
      </article>
    </>
  );
}

