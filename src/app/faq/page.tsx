import type { Metadata } from "next";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description: "FAQ about Rabbi Shmuel Zev Juravel of South Fallsburg, NY: Who is he? Where is he located? Publications, identity verification, and contact information.",
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

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Who is Rabbi Shmuel Zev Juravel?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Rabbi Shmuel Zev Juravel is a Torah scholar and educator based in South Fallsburg, New York. He learned at Yeshiva of Brisk in Israel and currently serves as a Rabbi in the high school and Rebbe in the elementary school."
      }
    },
    {
      "@type": "Question",
      "name": "Where is Rabbi Juravel located?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Rabbi Juravel resides in South Fallsburg, New York, in Sullivan County within the Catskills region."
      }
    },
    {
      "@type": "Question",
      "name": "Are there other individuals with the same name?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Individuals with the same name may exist in other cities. This website refers exclusively to Rabbi Shmuel Zev Juravel of South Fallsburg, New York. Please visit the Verify page to confirm identity details."
      }
    }
  ]
};

const faqs = [
  {
    question: "Who is Rabbi Shmuel Zev Juravel?",
    answer: "Rabbi Shmuel Zev Juravel is a Torah scholar and educator based in South Fallsburg, New York. He was born in Brooklyn on November 23, 1971, and studied at Yeshiva Gedola of Detroit before spending many years learning at Yeshiva of Brisk in Israel. He currently serves as a Rabbi in the high school and Rebbe in the elementary school in South Fallsburg."
  },
  {
    question: "Where is Rabbi Juravel located?",
    answer: "Rabbi Juravel resides in South Fallsburg, New York, in Sullivan County within the Catskills region. He has lived there since 2005 when he returned from Israel."
  },
  {
    question: "Are there other individuals with the same name?",
    answer: "Individuals with the same name may exist in other cities. This website refers exclusively to Rabbi Shmuel Zev Juravel of South Fallsburg, New York. If you need to verify the identity, please visit the Verify page which provides a detailed checklist of identifying information including location, education, family, and publications."
  },
  {
    question: "What are Rabbi Juravel's publications?",
    answer: "Rabbi Juravel has created two major educational projects: the 39 Melochos Halacha series released on CD in 2015, and a Shabbos comic book published in 2019. Both projects aim to make Torah learning accessible and engaging for different audiences."
  },
  {
    question: "Where can I listen to Rabbi Juravel's lectures?",
    answer: "Rabbi Juravel gives weekly Parsha lectures that are featured on two platforms: Matzav.com and 24Six. These lectures began in 2025 and provide insights into the weekly Torah portion."
  },
  {
    question: "What is Rabbi Juravel's educational background?",
    answer: "Rabbi Juravel attended Yeshiva Tiferes Elimelech for elementary school, Yeshiva Staten Island for high school, and Yeshiva Gedola of Detroit for Bais Medrish. He then spent eight years at Yeshiva of Brisk in Israel (1994-2002) under Rav Avrohom Yehoshua Soloveichik, followed by three years at the Brisker Kollel (2002-2005)."
  },
  {
    question: "How can I contact Rabbi Juravel?",
    answer: "You can reach out through the Contact page on this website. For verification of identity or specific information, please refer to the Verify page first."
  },
  {
    question: "What topics does Rabbi Juravel teach?",
    answer: "Rabbi Juravel specializes in Halacha (Jewish law), particularly the laws of Shabbos, as evidenced by his 39 Melochos series. He also gives weekly lectures on the Parsha (Torah portion) and serves as both a high school Rabbi and elementary school Rebbe, covering a range of Torah subjects."
  },
  {
    question: "Is Rabbi Juravel married and does he have children?",
    answer: "Yes, Rabbi Juravel married Tova Klatzko of Cleveland in 1993. Together they have ten children: five are married and five remain at home. Details about their married children and their families can be found on the Biography page."
  }
];

export default function FAQ() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="bg-gradient-to-r from-primary to-primary-hover text-primary-foreground py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-2">Frequently Asked Questions</h1>
          <p className="text-lg opacity-90">Common questions and helpful answers</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
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
      </div>
    </>
  );
}

