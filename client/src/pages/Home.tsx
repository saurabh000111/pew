import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { ArrowRight, Settings, Wrench, Users } from "lucide-react";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section 
        className="relative flex min-h-[600px] items-center justify-center bg-gradient-to-r from-slate-900 to-slate-700 text-white"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundBlendMode: "overlay"
        }}
      >
        <div className="absolute inset-0 bg-slate-900/50"></div>
        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
              Leading Innovation in Textile Machinery
            </h1>
            <p className="mt-6 text-xl text-slate-100">
              Precision-engineered machinery parts and expert services for the modern textile industry
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" variant="secondary" className="bg-white text-slate-900 hover:bg-slate-100">
                <Link href="/products">
                  View Products
                </Link>
              </Button>
              <Button asChild size="lg" className="bg-slate-800 text-white hover:bg-slate-700">
                <Link href="/contact">
                  Contact Us
                </Link>
              </Button>
              <Button 
                asChild 
                size="lg" 
                className="bg-gradient-to-r from-amber-500 to-yellow-500 text-slate-900 font-bold hover:from-amber-400 hover:to-yellow-400 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 animate-pulse"
              >
                <Link href="/contact">
                  Get Quote
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-3">
            <Card>
              <CardContent className="pt-6">
                <Settings className="h-12 w-12 text-primary" />
                <h3 className="mt-4 text-xl font-semibold">Precision Parts</h3>
                <p className="mt-2 text-muted-foreground">
                  High-quality machinery components manufactured to exact specifications
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <Wrench className="h-12 w-12 text-primary" />
                <h3 className="mt-4 text-xl font-semibold">Expert Service</h3>
                <p className="mt-2 text-muted-foreground">
                  Professional installation and maintenance support
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <Users className="h-12 w-12 text-primary" />
                <h3 className="mt-4 text-xl font-semibold">Dedicated Support</h3>
                <p className="mt-2 text-muted-foreground">
                  24/7 customer service and technical assistance
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-slate-100 to-blue-100 py-16">
        <div className="container text-center">
          <h2 className="text-3xl font-bold text-slate-900">Ready to Upgrade Your Machinery?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            Contact us today to discuss your textile machinery needs and discover how we can help optimize your production
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button asChild className="bg-primary text-white hover:bg-primary/90">
              <Link href="/contact">
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button 
              asChild 
              className="bg-gradient-to-r from-amber-500 to-yellow-500 text-slate-900 font-bold hover:from-amber-400 hover:to-yellow-400 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <Link href="/contact">
                Get Quote Now
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}