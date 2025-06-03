import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    company: "Vardhman Group",
    companyType: "Textile Manufacturing",
    testimonial: "Panday Engineering Works has been our trusted partner for over 5 years. Their precision-engineered components have significantly improved our production efficiency and reduced downtime. The quality of their ring travellers and spindle components is exceptional.",
    contactPerson: "Mr. Rajesh Kumar",
    designation: "Production Manager",
    rating: 5,
    location: "Punjab, India"
  },
  {
    company: "Sutlej Textiles and Industries Limited",
    companyType: "Integrated Textile Company",
    testimonial: "We have been consistently impressed with the reliability and performance of Panday Engineering Works' products. Their ceramic machine parts have enhanced our yarn quality, and their technical support team is always responsive to our needs.",
    contactPerson: "Ms. Priya Sharma",
    designation: "Quality Assurance Head",
    rating: 5,
    location: "Rajasthan, India"
  },
  {
    company: "Trident Group",
    companyType: "Home Textiles & Paper",
    testimonial: "The industrial spinning equipment supplied by Panday Engineering Works has exceeded our expectations. Their commitment to quality and timely delivery has made them our preferred supplier for machinery components.",
    contactPerson: "Mr. Amit Singh",
    designation: "Plant Head",
    rating: 5,
    location: "Punjab, India"
  },
  {
    company: "Welspun India Limited",
    companyType: "Home Textiles",
    testimonial: "Panday Engineering Works' precision parts have helped us maintain consistent quality in our production lines. Their technical expertise and after-sales service are commendable. We highly recommend their products to other textile manufacturers.",
    contactPerson: "Dr. Kavita Patel",
    designation: "Technical Director",
    rating: 5,
    location: "Gujarat, India"
  }
];

export default function Testimonials() {
  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Leading textile companies across India trust us for high-quality machinery components 
            and exceptional service. Here's what our valued clients say about us.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.company}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
                ease: "easeOut"
              }}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
            >
              <Card className="h-full bg-white/70 backdrop-blur-sm border border-slate-200/50 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-2 bg-primary/10 rounded-full">
                      <Quote className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg text-foreground mb-1">
                        {testimonial.company}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        {testimonial.companyType}
                      </p>
                      <div className="flex items-center gap-1 mb-3">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <blockquote className="text-muted-foreground mb-4 italic leading-relaxed">
                    "{testimonial.testimonial}"
                  </blockquote>
                  
                  <div className="border-t border-slate-200/50 pt-4">
                    <div className="flex justify-between items-end">
                      <div>
                        <p className="font-semibold text-foreground">
                          {testimonial.contactPerson}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {testimonial.designation}
                        </p>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        {testimonial.location}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p className="text-muted-foreground mb-6">
            Join hundreds of satisfied customers who trust us with their textile machinery needs
          </p>
          <motion.a
            href="/contact"
            className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            Start Your Partnership Today
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}