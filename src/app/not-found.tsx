import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home, MapPin, Search } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex-1 flex items-center justify-center py-16 px-4">
      <div className="max-w-2xl w-full text-center">
        <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
        <p className="text-muted-foreground mb-8 text-lg">
          The page you are looking for does not exist or has been moved.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Button asChild size="lg">
            <Link href="/">
              <Home className="w-4 h-4 mr-2" />
              Return to Home
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/verify">
              <MapPin className="w-4 h-4 mr-2" />
              Verify Identity
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/sitemap">
              <Search className="w-4 h-4 mr-2" />
              View Sitemap
            </Link>
          </Button>
        </div>

        <p className="text-sm text-muted-foreground">
          Looking for information about <strong>Rabbi Shmuel Zev Juravel of South Fallsburg, New York</strong>?<br />
          Start at the <Link href="/" className="text-primary hover:underline">homepage</Link> or use the <Link href="/sitemap" className="text-primary hover:underline">sitemap</Link>.
        </p>
      </div>
    </div>
  );
}

