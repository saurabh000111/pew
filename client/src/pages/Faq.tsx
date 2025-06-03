import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "What types of textile machinery components do you manufacture?",
    answer:
      "We manufacture a comprehensive range of textile machinery components including ring travellers, spindle components, ceramic machine parts, and industrial spinning equipment. Our products are available in various sizes and configurations to meet different machinery specifications."
  },
  {
    question: "Do you offer custom manufacturing services?",
    answer:
      "Yes, we provide custom manufacturing services tailored to specific requirements. Our engineering team can work with you to design and produce components that meet your exact specifications, ensuring optimal performance for your machinery."
  },
  {
    question: "What is the minimum order quantity for your products?",
    answer:
      "Minimum order quantities vary depending on the product type and specifications. For standard components, we typically maintain lower MOQs, while custom-manufactured parts may require larger minimum orders. Please contact our sales team for specific information regarding your needs."
  },
  {
    question: "What quality standards do your products meet?",
    answer:
      "All our products are manufactured according to strict international quality standards. We implement rigorous quality control procedures throughout our production process and conduct comprehensive testing before shipping. Our manufacturing facility is ISO 9001:2015 certified."
  },
  {
    question: "Do you provide installation and maintenance services?",
    answer:
      "Yes, we offer professional installation and maintenance services for all our products. Our team of experienced technicians can assist with installation, commissioning, and regular maintenance to ensure optimal performance and longevity of your machinery components."
  },
  {
    question: "What is the warranty period for your products?",
    answer:
      "We provide a standard 12-month warranty for all our manufactured components against defects in materials and workmanship under normal use conditions. Extended warranty options are available for select product categories. Please refer to our warranty policy for detailed information."
  },
  {
    question: "How long does shipping and delivery typically take?",
    answer:
      "Shipping times vary depending on your location and the specific products ordered. Standard components are typically shipped within 1-2 weeks, while custom orders may require 3-4 weeks for manufacturing before shipping. International shipments usually take 1-3 weeks for delivery after dispatch."
  },
  {
    question: "Do you offer technical support for your products?",
    answer:
      "Yes, we provide comprehensive technical support for all our products. Our team of engineers and technical specialists is available to assist with any issues or questions you may have regarding installation, operation, maintenance, or troubleshooting."
  }
];

export default function Faq() {
  return (
    <div className="container py-12">
      <AnimatePresence>
        <div className="max-w-3xl">
          <motion.h1 
            className="text-4xl font-bold tracking-tight"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Frequently Asked Questions
          </motion.h1>
          <motion.p 
            className="mt-4 text-lg text-muted-foreground"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Find answers to common questions about our products, services, and business operations. 
            If you can't find what you're looking for, please contact our support team.
          </motion.p>
        </div>

        <motion.div 
          className="mt-12 max-w-4xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.3 + index * 0.1,
                  ease: "easeOut"
                }}
              >
                <AccordionItem value={`item-${index}`}>
                  <AccordionTrigger className="text-left font-medium">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>

        <motion.div
          className="mt-16 max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <h2 className="text-2xl font-semibold">Still have questions?</h2>
          <p className="mt-4 text-muted-foreground">
            If you couldn't find the answer to your question, please feel free to contact our customer 
            support team. We're here to help you with any inquiries regarding our products and services.
          </p>
          <motion.div
            className="mt-6"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <a 
              href="/contact" 
              className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
            >
              Contact Support
            </a>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}