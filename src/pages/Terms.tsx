import { Building2 } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2">
              <Building2 className="h-8 w-8 text-accent" />
              <span className="text-xl font-semibold text-foreground">Divergent Capital LLC</span>
            </Link>
            <Link to="/">
              <Button variant="ghost">Back to Home</Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-6 py-24 mt-16">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-2">Terms &amp; Conditions</h1>
        <div className="text-muted-foreground mb-8">
          <strong>Last updated:</strong> September 29, 2025
        </div>

        <div className="prose prose-slate max-w-none">
          <p className="text-lg mb-6 text-muted-foreground">
            These Terms of Service ("Terms") govern your access to and use of the website and services offered by <strong>Divergent Capital LLC</strong> ("we," "our," "us"). By accessing or using our website or services, you agree to these Terms.
          </p>

          <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">1. Services</h2>
          <p className="mb-6 text-muted-foreground">
            Divergent Capital LLC engages in activities including real estate, technology, and capital allocation. All information and services provided are for general informational and business purposes only.
          </p>

          <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">2. No Guarantees or Advice</h2>
          <p className="mb-6 text-muted-foreground">
            We do not guarantee financial results or provide legal, tax, or investment advice. You should consult your own professional advisors before making decisions based on any information obtained from us.
          </p>

          <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">3. User Responsibilities</h2>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground">
            <li>Provide accurate information when engaging with us.</li>
            <li>Use our website and services in compliance with applicable laws.</li>
            <li>Do not misuse, copy, or resell any content without permission.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">4. Communications</h2>
          <p className="mb-4 text-muted-foreground">
            By submitting information or inquiries, you agree that we may contact you with updates or opportunities.
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground">
            <li>Message &amp; data rates may apply.</li>
            <li>You may opt out of text or email messages at any time by following provided instructions.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">5. Intellectual Property</h2>
          <p className="mb-6 text-muted-foreground">
            All content, logos, and materials on our website are owned by Divergent Capital LLC or licensed to us. You may not reproduce, distribute, or create derivative works without prior written consent.
          </p>

          <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">6. Limitation of Liability</h2>
          <p className="mb-6 text-muted-foreground">
            Our services and website are provided "as is" without warranties of any kind. To the fullest extent permitted by law, Divergent Capital LLC shall not be liable for indirect, incidental, or consequential damages.
          </p>

          <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">7. Indemnification</h2>
          <p className="mb-6 text-muted-foreground">
            You agree to indemnify and hold harmless Divergent Capital LLC, its officers, and affiliates from any claims arising out of your use of our website or services.
          </p>

          <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">8. Governing Law</h2>
          <p className="mb-6 text-muted-foreground">
            These Terms shall be governed by the laws of the State of Georgia, without regard to its conflict-of-law rules. Any disputes shall be resolved exclusively in the state or federal courts located in Georgia.
          </p>

          <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">9. Changes to Terms</h2>
          <p className="mb-6 text-muted-foreground">
            We may update these Terms at any time by posting a revised version on our website. Continued use of the website or services constitutes acceptance of the updated Terms.
          </p>

          <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">10. Contact</h2>
          <p className="mb-4 text-muted-foreground">Questions about these Terms can be directed to:</p>
          <p className="mb-6 text-muted-foreground">
            <strong>Divergent Capital LLC</strong><br />
            Email: <a href="mailto:erick@divergentcapitalllc.com" className="text-accent hover:underline">erick@divergentcapitalllc.com</a><br />
            Phone: <a href="tel:+17708159063" className="text-accent hover:underline">770-815-9063</a>
          </p>

          <hr className="my-8 border-border" />
          <p className="text-sm text-muted-foreground">© 2025 Divergent Capital LLC. All rights reserved.</p>
        </div>
      </main>
    </div>
  );
};

export default Terms;
