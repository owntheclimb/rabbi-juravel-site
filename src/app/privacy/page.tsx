import type { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for the official website of Rabbi Shmuel Zev Juravel of South Fallsburg, New York. How we handle visitor information and protect your privacy.",
  robots: {
    index: false,
    follow: true,
  },
  openGraph: {
    title: "Privacy Policy | Rabbi Shmuel Zev Juravel",
    description: "Privacy policy for Rabbi Shmuel Zev Juravel's official website.",
    type: "website",
    url: "https://shmuelzevjuravel.com/privacy",
  },
  twitter: {
    card: "summary",
    title: "Privacy Policy | Rabbi Shmuel Zev Juravel",
    description: "Privacy policy for the official website.",
  },
  alternates: {
    canonical: "https://shmuelzevjuravel.com/privacy",
  },
};

export default function Privacy() {
  return (
    <>
      <div className="bg-gradient-to-r from-primary to-primary-hover text-primary-foreground py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-2">Privacy Policy</h1>
          <p className="text-lg opacity-90">How we handle visitor information</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Card>
          <CardContent className="pt-6 space-y-6">
            <section>
              <h2 className="text-2xl font-bold mb-3 text-primary">Information Collection</h2>
              <p className="text-muted-foreground leading-relaxed">
                This website is primarily informational and does not collect personal information from visitors unless explicitly provided through contact forms or other interactive features. We respect your privacy and are committed to protecting any information you choose to share with us.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3 text-primary">Use of Information</h2>
              <p className="text-muted-foreground leading-relaxed">
                Any information voluntarily provided will be used solely for the purpose for which it was submitted, such as responding to inquiries or verification requests. We do not sell, trade, or distribute personal information to third parties.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3 text-primary">Cookies and Tracking</h2>
              <p className="text-muted-foreground leading-relaxed">
                This website may use basic analytics to understand visitor traffic patterns and improve user experience. No personally identifiable information is collected through these analytics tools.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3 text-primary">Third-Party Links</h2>
              <p className="text-muted-foreground leading-relaxed">
                This website contains links to external platforms such as Matzav.com and 24Six where Rabbi Juravel&apos;s lectures are featured. These external sites have their own privacy policies, and we are not responsible for their content or practices.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3 text-primary">Data Security</h2>
              <p className="text-muted-foreground leading-relaxed">
                We take reasonable measures to protect any information collected through this website. However, no method of transmission over the internet is completely secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3 text-primary">Children&apos;s Privacy</h2>
              <p className="text-muted-foreground leading-relaxed">
                This website does not knowingly collect information from children under 13 years of age. If you are a parent or guardian and believe your child has provided information to us, please contact us so we can remove it.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3 text-primary">Changes to This Policy</h2>
              <p className="text-muted-foreground leading-relaxed">
                This privacy policy may be updated periodically to reflect changes in our practices or legal requirements. The date of the most recent update will be noted at the bottom of this page.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3 text-primary">Contact</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have questions about this privacy policy, please visit the <Link href="/contact" className="text-primary hover:underline font-semibold">Contact page</Link>.
              </p>
            </section>

            <div className="pt-6 border-t border-border">
              <p className="text-sm text-muted-foreground">
                Last updated: December 2025
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}

