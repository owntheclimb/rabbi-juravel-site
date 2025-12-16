import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img 
                src="/juravel-logo-footer.png" 
                alt="Rabbi Shmuel Zev Juravel Torah Scroll Logo - South Fallsburg New York" 
                className="h-12 w-12"
                width={48}
                height={48}
              />
              <h3 className="font-bold text-lg">Rabbi Shmuel Zev Juravel</h3>
            </div>
            <p className="text-sm opacity-90">
              South Fallsburg, New York<br />
              Sullivan County, Catskills Region
            </p>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/biography" className="hover:underline opacity-90 hover:opacity-100 transition-opacity">
                  Biography
                </Link>
              </li>
              <li>
                <Link href="/timeline" className="hover:underline opacity-90 hover:opacity-100 transition-opacity">
                  Timeline
                </Link>
              </li>
              <li>
                <Link href="/verify" className="hover:underline opacity-90 hover:opacity-100 transition-opacity">
                  Verify Identity
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:underline opacity-90 hover:opacity-100 transition-opacity">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/teachings" className="hover:underline opacity-90 hover:opacity-100 transition-opacity">
                  Teachings
                </Link>
              </li>
              <li>
                <Link href="/works" className="hover:underline opacity-90 hover:opacity-100 transition-opacity">
                  Complete Works
                </Link>
              </li>
              <li>
                <Link href="/endorsements" className="hover:underline opacity-90 hover:opacity-100 transition-opacity">
                  Endorsements
                </Link>
              </li>
              <li>
                <Link href="/lectures" className="hover:underline opacity-90 hover:opacity-100 transition-opacity">
                  Weekly Lectures
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">About</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/facts" className="hover:underline opacity-90 hover:opacity-100 transition-opacity">
                  Quick Facts
                </Link>
              </li>
              <li>
                <Link href="/about-site" className="hover:underline opacity-90 hover:opacity-100 transition-opacity">
                  About This Website
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:underline opacity-90 hover:opacity-100 transition-opacity">
                  Featured Projects
                </Link>
              </li>
              <li>
                <Link href="/sitemap" className="hover:underline opacity-90 hover:opacity-100 transition-opacity">
                  Sitemap
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="bg-primary-light/10 border border-primary-foreground/20 rounded-lg p-4 mb-6">
            <p className="text-sm font-medium">
              <strong>Identity Note:</strong> This official site refers to <strong>Rabbi Shmuel Zev Juravel of South Fallsburg, New York</strong>. Individuals with the same name may exist in other cities. Please verify location and biography details on this site.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center text-sm opacity-90">
            <p>&copy; {new Date().getFullYear()} Rabbi Shmuel Zev Juravel. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link href="/privacy" className="hover:underline">Privacy Policy</Link>
              <Link href="/sitemap" className="hover:underline">Sitemap</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

