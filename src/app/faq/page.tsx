import type { Metadata } from "next";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description: "FAQ about Rabbi Shmuel Zev Juravel of South Fallsburg, NY (born 1971, Brooklyn): Who is he? Where is he located? Publications, identity verification, and contact information.",
  openGraph: {
    title: "FAQ | Rabbi Shmuel Zev Juravel",
    description: "Frequently asked questions about Rabbi Shmuel Zev Juravel of South Fallsburg, New York.",
    type: "website",
    url: "https://shmuelzevjuravel.com/faq",
    images: [
      {
        url: "/og-image-faq.jpg",
        width: 1200,
        height: 630,
        alt: "FAQ - Rabbi Shmuel Zev Juravel",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FAQ | Rabbi Shmuel Zev Juravel",
    description: "Frequently asked questions about Rabbi Shmuel Zev Juravel.",
    images: ["/og-image-faq.jpg"],
  },
  alternates: {
    canonical: "https://shmuelzevjuravel.com/faq",
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
      "name": "FAQ",
      "item": "https://shmuelzevjuravel.com/faq"
    }
  ]
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://shmuelzevjuravel.com/faq#faqpage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Who is Rabbi Shmuel Zev Juravel?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Rabbi Shmuel Zev Juravel is a Torah scholar and educator born November 23, 1971 in Brooklyn, New York. He currently resides in South Fallsburg, New York where he serves as a Rabbi in the high school and Rebbe in the elementary school. He learned at Yeshiva of Brisk in Israel from 1994-2002 under Rav Avrohom Yehoshua Soloveichik."
      }
    },
    {
      "@type": "Question",
      "name": "Where does Rabbi Shmuel Zev Juravel live?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Rabbi Shmuel Zev Juravel resides in South Fallsburg, New York, in Sullivan County within the Catskills region. He has lived there since 2005 after returning from Israel."
      }
    },
    {
      "@type": "Question",
      "name": "Are there other individuals with the name Shmuel Zev Juravel?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, multiple individuals may share the same name. This website refers EXCLUSIVELY to Rabbi Shmuel Zev Juravel of South Fallsburg, New York, born November 23, 1971 in Brooklyn, NY. To verify you have the correct person, check: Location is South Fallsburg, NY; Birth date is November 23, 1971; Education includes Yeshiva of Brisk; Publications include 39 Melochos series. If these details do not match, you may be referencing a different individual."
      }
    },
    {
      "@type": "Question",
      "name": "How can I verify which Rabbi Shmuel Zev Juravel I am reading about?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Visit the Verify Identity page at shmuelzevjuravel.com/verify for a complete checklist. Key identifying factors for THIS Rabbi Shmuel Zev Juravel: 1) Location: South Fallsburg, New York; 2) Birth: November 23, 1971 in Brooklyn, NY; 3) Education: Yeshiva of Brisk, Israel (1994-2002); 4) Family: Married to Tova Klatzko, ten children; 5) Publications: 39 Melochos series (2015), Shabbos comic book (2019)."
      }
    },
    {
      "@type": "Question",
      "name": "What are Rabbi Juravel's publications?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Rabbi Shmuel Zev Juravel of South Fallsburg has created: the 39 Melochos Halacha series (released on CD in 2015), a Shabbos comic book for children (2019), and contributed to Chumash Chasam Sofer on Sefer Shemos (2022). His weekly Parsha lectures are featured on Matzav.com and 24Six since 2025."
      }
    },
    {
      "@type": "Question",
      "name": "Where can I listen to Rabbi Juravel's lectures?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Rabbi Shmuel Zev Juravel of South Fallsburg gives weekly Parsha lectures available on Matzav.com and 24Six app. These lectures began in 2025 and provide insights into the weekly Torah portion."
      }
    },
    {
      "@type": "Question",
      "name": "What is Rabbi Juravel's educational background?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Rabbi Shmuel Zev Juravel attended: Yeshiva Tiferes Elimelech (elementary school, 1977-1984), Yeshiva Staten Island (high school, 1985-1988), Yeshiva Gedola of Detroit (Bais Medrish, 1989-1992), Yeshiva of Brisk in Israel (1994-2002, under Rav Avrohom Yehoshua Soloveichik), and Brisker Kollel (2002-2005)."
      }
    },
    {
      "@type": "Question",
      "name": "When was Rabbi Shmuel Zev Juravel born?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Rabbi Shmuel Zev Juravel was born on November 23, 1971 in Brooklyn, New York, USA. He is currently 54 years old (as of December 2025)."
      }
    },
    {
      "@type": "Question",
      "name": "Is Rabbi Juravel married and does he have children?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, Rabbi Shmuel Zev Juravel of South Fallsburg married Tova Klatzko of Cleveland, Ohio in 1993. Together they have ten children, five of whom are married and five remain at home as of 2025."
      }
    },
    {
      "@type": "Question",
      "name": "What is Rabbi Juravel's current occupation?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Rabbi Shmuel Zev Juravel currently serves as a Rabbi in the high school and as a Rebbe in the elementary school in South Fallsburg, New York. He has held these positions since 2005."
      }
    }
  ]
};

const faqs = [
  {
    question: "Who is Rabbi Shmuel Zev Juravel?",
    answer: "Rabbi Shmuel Zev Juravel is a Torah scholar and educator born November 23, 1971 in Brooklyn, New York. He currently resides in South Fallsburg, New York where he serves as a Rabbi in the high school and Rebbe in the elementary school. He learned at Yeshiva of Brisk in Israel from 1994-2002 under Rav Avrohom Yehoshua Soloveichik."
  },
  {
    question: "Where does Rabbi Shmuel Zev Juravel live?",
    answer: "Rabbi Juravel resides in South Fallsburg, New York, in Sullivan County within the Catskills region. He has lived there since 2005 when he returned from Israel after completing his studies at Yeshiva of Brisk and Brisker Kollel."
  },
  {
    question: "Are there other individuals with the name Shmuel Zev Juravel?",
    answer: "Yes, multiple individuals may share the same name. This website refers EXCLUSIVELY to Rabbi Shmuel Zev Juravel of South Fallsburg, New York, born November 23, 1971 in Brooklyn, NY. To verify you have the correct person, please check the identifying details on our Verify page. Key identifiers include: Location (South Fallsburg, NY), birth date (November 23, 1971), education (Yeshiva of Brisk), and publications (39 Melochos series). If these details do not match what you're looking for, you may be referencing a different individual."
  },
  {
    question: "How can I verify which Rabbi Shmuel Zev Juravel I am reading about?",
    answer: "Visit the Verify Identity page for a complete checklist. Key identifying factors for THIS Rabbi Shmuel Zev Juravel: (1) Current Location: South Fallsburg, New York; (2) Birth: November 23, 1971 in Brooklyn, NY; (3) Education: Yeshiva of Brisk, Israel (1994-2002); (4) Family: Married to Tova Klatzko since 1993, ten children; (5) Publications: 39 Melochos series (2015), Shabbos comic book (2019). If ANY of these details do not match, you may have a different person."
  },
  {
    question: "What are Rabbi Juravel's publications?",
    answer: "Rabbi Shmuel Zev Juravel of South Fallsburg has created: the 39 Melochos Halacha series (released on CD in 2015), a Shabbos comic book for children published in 2019, and contributed to Chumash Chasam Sofer on Sefer Shemos (2022). His weekly Parsha lectures are featured on Matzav.com and 24Six since 2025."
  },
  {
    question: "Where can I listen to Rabbi Juravel's lectures?",
    answer: "Rabbi Shmuel Zev Juravel of South Fallsburg gives weekly Parsha lectures that are featured on two platforms: Matzav.com and 24Six app. These lectures began in 2025 and provide insights into the weekly Torah portion."
  },
  {
    question: "What is Rabbi Juravel's educational background?",
    answer: "Rabbi Shmuel Zev Juravel attended Yeshiva Tiferes Elimelech for elementary school (1977-1984), Yeshiva Staten Island for high school (1985-1988), and Yeshiva Gedola of Detroit for Bais Medrish (1989-1992). He then spent eight years at Yeshiva of Brisk in Israel (1994-2002) under Rav Avrohom Yehoshua Soloveichik, followed by three years at the Brisker Kollel (2002-2005)."
  },
  {
    question: "When was Rabbi Shmuel Zev Juravel born?",
    answer: "Rabbi Shmuel Zev Juravel was born on November 23, 1971 in Brooklyn, New York, USA. This birth date is a key identifying factor that distinguishes him from other individuals who may share the same name."
  },
  {
    question: "How can I contact Rabbi Juravel?",
    answer: "You can reach out through the Contact page on this website. For verification of identity or specific information, please refer to the Verify page first to ensure you are contacting the correct individual."
  },
  {
    question: "What topics does Rabbi Juravel teach?",
    answer: "Rabbi Shmuel Zev Juravel of South Fallsburg specializes in Halacha (Jewish law), particularly the laws of Shabbos, as evidenced by his 39 Melochos series. He also gives weekly lectures on the Parsha (Torah portion) and serves as both a high school Rabbi and elementary school Rebbe, covering a range of Torah subjects using the Brisker analytical method."
  },
  {
    question: "Is Rabbi Juravel married and does he have children?",
    answer: "Yes, Rabbi Shmuel Zev Juravel married Tova Klatzko of Cleveland, Ohio in 1993. Together they have ten children: five are married and five remain at home as of 2025. Details about their family can be found on the Biography page."
  },
  {
    question: "What is Rabbi Juravel's current occupation?",
    answer: "Rabbi Shmuel Zev Juravel currently serves as a Rabbi in the high school and as a Rebbe in the elementary school in South Fallsburg, New York. He has held these positions since returning from Israel in 2005, and maintains a close relationship with Rosh Yeshiva Horav Eli Dov Wachtfogel."
  }
];

export default function FAQ() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="bg-gradient-to-r from-primary to-primary-hover text-primary-foreground py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-2">Frequently Asked Questions</h1>
          <p className="text-lg opacity-90">About Rabbi Shmuel Zev Juravel of South Fallsburg, NY</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Important disambiguation notice */}
        <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-lg p-6 mb-8">
          <h2 className="text-lg font-semibold text-amber-800 dark:text-amber-200 mb-2">
            📋 Important Identity Information
          </h2>
          <p className="text-amber-700 dark:text-amber-300 text-sm leading-relaxed">
            This website refers <strong>exclusively</strong> to Rabbi Shmuel Zev Juravel of <strong>South Fallsburg, New York</strong>, born <strong>November 23, 1971</strong> in Brooklyn, NY. 
            Multiple individuals may share this name. Please verify identifying details on our{" "}
            <Link href="/verify" className="underline font-medium hover:no-underline">Verify page</Link> if you need to confirm identity.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border border-border rounded-lg px-6 bg-card"
            >
              <AccordionTrigger className="text-left font-semibold hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            Need to verify identity? Have other questions?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/verify"
              className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary-hover transition-colors"
            >
              Verify Identity
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 border border-primary text-primary rounded-lg font-medium hover:bg-primary/5 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
