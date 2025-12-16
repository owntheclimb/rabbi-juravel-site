import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Timeline",
  description: "Life timeline of Rabbi Shmuel Zev Juravel from 1971-present: Brooklyn birth, Yeshiva of Brisk studies, South Fallsburg community service, 39 Melochos series, and weekly Parsha lectures.",
  openGraph: {
    title: "Timeline | Rabbi Shmuel Zev Juravel",
    description: "Complete timeline of Rabbi Shmuel Zev Juravel's life, education, and achievements.",
    type: "website",
    url: "https://shmuelzevjuravel.com/timeline",
    images: [
      {
        url: "/og-image-timeline.jpg",
        width: 1200,
        height: 630,
        alt: "Timeline - Rabbi Shmuel Zev Juravel",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Timeline | Rabbi Shmuel Zev Juravel",
    description: "Life timeline from 1971-present.",
    images: ["/og-image-timeline.jpg"],
  },
  alternates: {
    canonical: "https://shmuelzevjuravel.com/timeline",
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
      "name": "Timeline",
      "item": "https://shmuelzevjuravel.com/timeline"
    }
  ]
};

const timelineEvents = [
  { year: "1971", event: "Born on November 23 in Brooklyn, New York" },
  { year: "1977-1984", event: "Elementary education at Yeshiva Tiferes Elimelech" },
  { year: "1985-1988", event: "High school at Yeshiva Staten Island" },
  { year: "1989-1992", event: "Bais Medrish learning at Yeshiva Gedola of Detroit" },
  { year: "1993", event: "Married Tova Klatzko of Cleveland" },
  { year: "1994-2002", event: "Advanced learning at Yeshiva of Brisk under Rav Avrohom Yehoshua Soloveichik in Israel" },
  { year: "1995-2004", event: "Studied under the world-renowned Maggid Shiur, Horav Michel Zilber" },
  { year: "2002-2005", event: "Continued Torah study at Brisker Kollel" },
  { year: "2005", event: "Relocated to the United States and settled in Fallsburg, New York" },
  { year: "2005-Present", event: "Serves as Rabbi in high school and Rebbe in elementary school in South Fallsburg" },
  { year: "2015", event: "Released 39 Melochos Halacha series on CD" },
  { year: "2019", event: "Published Shabbos comic book for children" },
  { year: "2022", event: "Published Chumash Chasam Sofer on Sefer Shemos" },
  { year: "2025", event: "Began giving weekly Parsha lectures on Matzav.com and 24Six" },
];

export default function Timeline() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <div className="bg-gradient-to-r from-primary to-primary-hover text-primary-foreground py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-2">Life Timeline</h1>
          <p className="text-lg opacity-90">Key moments and milestones</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border md:left-1/2" />

          {/* Timeline events */}
          <div className="space-y-12">
            {timelineEvents.map((item, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
                id={`year-${item.year.replace(/[^0-9]/g, "")}`}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 w-4 h-4 bg-primary rounded-full border-4 border-background md:left-1/2 md:-ml-2 z-10" />

                {/* Content card */}
                <div className={`ml-16 md:ml-0 ${index % 2 === 0 ? "md:pr-8 md:text-right" : "md:pl-8"} md:w-1/2`}>
                  <div className="bg-card border border-border rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                    <div className="text-primary font-bold text-lg mb-2">{item.year}</div>
                    <p className="text-foreground leading-relaxed">{item.event}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

