import { Building2 } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const PrivacyPolicy = () => {
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
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-2">Privacy Policy</h1>
        <div className="text-muted-foreground mb-8">
          <strong>Last updated:</strong> September 29, 2025
        </div>

        <div className="prose prose-slate max-w-none">
          <p className="text-lg mb-6">
            <strong>Divergent Capital LLC</strong> ("we," "our," "us") values your privacy. This Privacy Policy explains how we collect, use, and protect information when you interact with our website, forms, and services.
          </p>

          <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Information We Collect</h2>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground">
            <li><strong>Contact information</strong> you provide (name, email, phone).</li>
            <li><strong>Business or investment inquiries</strong> you submit.</li>
            <li><strong>Technical data</strong> such as IP address, device type, browser type, and pages visited.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">How We Use Information</h2>
          <p className="mb-4 text-muted-foreground">We use information only for purposes related to our business operations, including:</p>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground">
            <li>Responding to inquiries and providing requested services.</li>
            <li>Communicating updates about our offerings, partnerships, or opportunities.</li>
            <li>Improving our website and technology platforms.</li>
            <li>Protecting against fraud and complying with applicable law.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Sharing of Information</h2>
          <p className="mb-6 text-muted-foreground">
            We <strong>do not sell or rent personal information</strong>. Information may be shared with trusted service providers (such as hosting, email, or analytics platforms) only to the extent necessary to operate our business and deliver services. All third parties are required to maintain confidentiality and security.
          </p>

          <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Security</h2>
          <p className="mb-6 text-muted-foreground">
            We implement commercially reasonable safeguards to protect information in our possession. However, no method of transmission or storage is completely secure, and we cannot guarantee absolute protection.
          </p>

          <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Data Retention</h2>
          <p className="mb-6 text-muted-foreground">
            We retain information only as long as needed for legitimate business purposes or as required by law.
          </p>

          <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Your Choices</h2>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground">
            <li>You may request access, correction, or deletion of your data at any time.</li>
            <li>You may opt out of communications by following unsubscribe instructions or contacting us directly.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Children</h2>
          <p className="mb-6 text-muted-foreground">
            Our services are intended for business and investment professionals. We do not knowingly collect personal information from children under 16.
          </p>

          <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Changes to This Policy</h2>
          <p className="mb-6 text-muted-foreground">
            We may revise this Privacy Policy periodically. The "Last updated" date above reflects the most current version.
          </p>

          <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Contact</h2>
          <p className="mb-4 text-muted-foreground">For questions or requests related to this Privacy Policy, please contact:</p>
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

export default PrivacyPolicy;
