import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/products">
                  <a className="text-sm text-muted-foreground hover:text-primary">Products</a>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <a className="text-sm text-muted-foreground hover:text-primary">About Us</a>
                </Link>
              </li>
              <li>
                <Link href="/faq">
                  <a className="text-sm text-muted-foreground hover:text-primary">FAQ</a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a className="text-sm text-muted-foreground hover:text-primary">Contact</a>
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Contact Info</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>123 Manufacturing Way</li>
              <li>Industrial District</li>
              <li>Phone: (555) 123-4567</li>
              <li>Email: info@textiletech.com</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">About Us</h3>
            <p className="mt-4 text-sm text-muted-foreground">
              Leading manufacturer of textile machinery parts with over 25 years of experience in the industry.
            </p>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Panday Engineering Works. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
