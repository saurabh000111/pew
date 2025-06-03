import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  return (
    <div className="container py-12">
      <div className="max-w-2xl">
        <h1 className="text-4xl font-bold">About Us</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Leading manufacturer of textile machinery parts with decades of industry experience
        </p>
      </div>

      <div className="mt-12 grid gap-8 lg:grid-cols-2">
        <div>
          <h2 className="text-2xl font-semibold">Our Story</h2>
          <p className="mt-4 text-muted-foreground">
            Founded in 1995, we've been at the forefront of textile machinery innovation for over 25 years. Our commitment to quality and precision has made us a trusted partner for textile manufacturers worldwide.
          </p>
          <p className="mt-4 text-muted-foreground">
            We specialize in manufacturing high-precision parts for various textile machinery applications, from spinning to finishing equipment. Our state-of-the-art facility and expert team ensure the highest quality standards in every component we produce.
          </p>
        </div>
        <div className="aspect-video overflow-hidden rounded-lg">
          <img
            src="https://images.unsplash.com/photo-1496247749665-49cf5b1022e9"
            alt="Manufacturing Facility"
            className="h-full w-full object-cover"
          />
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-2xl font-semibold">Our Team</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardContent className="pt-6">
              <img
                src="https://images.unsplash.com/photo-1517048676732-d65bc937f952"
                alt="Team"
                className="aspect-video w-full rounded-lg object-cover"
              />
              <h3 className="mt-4 text-xl font-semibold">Expert Engineers</h3>
              <p className="mt-2 text-muted-foreground">
                Our team of skilled engineers ensures precision in every component we manufacture
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <img
                src="https://images.unsplash.com/photo-1573496130141-209d200cebd8"
                alt="Quality Control"
                className="aspect-video w-full rounded-lg object-cover"
              />
              <h3 className="mt-4 text-xl font-semibold">Quality Control</h3>
              <p className="mt-2 text-muted-foreground">
                Rigorous testing and quality control processes for reliable products
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <img
                src="https://images.unsplash.com/flagged/photo-1576485436509-a7d286952b65"
                alt="Support Team"
                className="aspect-video w-full rounded-lg object-cover"
              />
              <h3 className="mt-4 text-xl font-semibold">Customer Support</h3>
              <p className="mt-2 text-muted-foreground">
                Dedicated support team for all your technical needs
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
