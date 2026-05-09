import Link from 'next/link';
import { Facebook, Instagram, Youtube, Twitter, Linkedin } from 'lucide-react';

const socialLinks = [
  { icon: Facebook,  href: '#', label: 'Facebook'  },
  { icon: Twitter,   href: '#', label: 'X (Twitter)' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Youtube,   href: '#', label: 'YouTube'   },
  { icon: Linkedin,  href: '#', label: 'LinkedIn'  },
];

const footerLinks = [
  { label: 'Privacy Statement', href: '#' },
  { label: 'Cookie Policy',     href: '#' },
  { label: 'Contact',           href: '#' },
];

export function Footer() {
  return (
    <footer className="bg-brand-800 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12">
        {/* Top row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Brand */}
          <Link href="/" className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-sm">
            <span className="font-display text-2xl">
              <span className="font-light">Clean</span>
              <span className="font-semibold">Marines</span>
            </span>
          </Link>

          {/* Socials */}
          <div>
            <p className="text-sm font-medium text-white/70 mb-3">Follow us on</p>
            <div className="flex items-center gap-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="text-white/80 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-sm p-1"
                >
                  <Icon className="h-6 w-6" strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 border-t border-white/20" />

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1 text-sm text-white/70">
            <p>Call us: +800-299-1991</p>
            <p>Non-Profit Limited by Guarantee Registered Number: 122897</p>
          </div>
          <nav className="flex flex-wrap gap-4" aria-label="Footer links">
            {footerLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm text-white/70 hover:text-white transition-colors underline-offset-4 hover:underline"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center">
          <p className="text-sm text-white/60">
            © {new Date().getFullYear()} Clean Marines. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
