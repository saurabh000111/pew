import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/products" },
  { name: "About", href: "/about" },
  { name: "FAQ", href: "/faq" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [location] = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container flex h-16 items-center justify-between">
        <Link href="/">
          <a className="flex items-center space-x-3">
            <img 
              src="/images/logo.png" 
              alt="Panday Engineering Works Logo" 
              className="h-10 w-10 object-contain"
            />
            <span className="font-bold text-lg text-primary">
              Panday Engineering Works
            </span>
          </a>
        </Link>
        
        <div className="hidden md:flex md:gap-x-6">
          {navigation.map((item) => (
            <Link key={item.name} href={item.href}>
              <a className={`text-sm font-medium transition-colors hover:text-primary ${location === item.href ? 'text-primary' : 'text-muted-foreground'}`}>
                {item.name}
              </a>
            </Link>
          ))}
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[240px] sm:w-[300px]">
            <div className="flex flex-col gap-4 py-4">
              {navigation.map((item) => (
                <Link key={item.name} href={item.href}>
                  <a
                    className={`text-sm font-medium transition-colors hover:text-primary ${location === item.href ? 'text-primary' : 'text-muted-foreground'}`}
                    onClick={() => setOpen(false)}
                  >
                    {item.name}
                  </a>
                </Link>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}
