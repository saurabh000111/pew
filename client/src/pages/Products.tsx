import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const products = [
  {
    name: "Ring Traveller Components",
    description: "Precision-engineered ring travellers available in various sizes including 5.80 and 6.80 specifications. Essential for yarn guidance and tension control in spinning machinery.",
    variants: "Available sizes: 5.80mm and 6.80mm diameter",
    imageUrl: "/images/IMG-20250207-WA0021.jpg"
  },
  {
    name: "Spindle Components",
    description: "High-quality spindle assemblies and parts designed for optimal performance in textile spinning machinery. Features durable construction and precise engineering.",
    variants: "Multiple configurations available",
    imageUrl: "/images/IMG-20250207-WA0018.jpg"
  },
  {
    name: "Ceramic Machine Parts",
    description: "Premium ceramic components engineered for textile machinery applications. Featuring superior wear resistance and smooth surface finish for consistent yarn quality.",
    variants: "Custom specifications available",
    imageUrl: "/images/IMG-20250207-WA0017.jpg"
  },
  {
    name: "Industrial Spinning Equipment",
    description: "Complete range of industrial spinning machine components and assemblies. Built for reliability and performance in high-demand manufacturing environments.",
    variants: "Available for various machine specifications",
    imageUrl: "/images/IMG-20250207-WA0016.jpg"
  }
];

const featuredImages = [
  { url: "/images/IMG-20250207-WA0013.jpg", alt: "Textile machinery component closeup" },
  { url: "/images/IMG-20250207-WA0022.jpg", alt: "Ring traveller assembly" },
  { url: "/images/IMG-20250207-WA0023.jpg", alt: "Spindle component" },
  { url: "/images/IMG-20250207-WA0024.jpg", alt: "Ceramic machinery part" },
  { url: "/images/IMG-20250207-WA0025.jpg", alt: "Industrial textile equipment" }
];

export default function Products() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? featuredImages.length - 1 : prevIndex - 1
    );
  };
  
  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === featuredImages.length - 1 ? 0 : prevIndex + 1
    );
  };

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
            Textile Machinery Components
          </motion.h1>
          <motion.p 
            className="mt-4 text-lg text-muted-foreground"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Discover our comprehensive range of high-precision textile machinery parts and components, 
            engineered to meet the demanding requirements of modern textile manufacturing.
          </motion.p>
        </div>

        {/* Featured Image Carousel */}
        <motion.div
          className="mt-12 relative overflow-hidden rounded-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="aspect-[21/9] md:aspect-[21/7] w-full overflow-hidden rounded-lg bg-gradient-to-br from-orange-100 to-amber-100 border border-orange-200">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentIndex}
                src={featuredImages[currentIndex].url}
                alt={featuredImages[currentIndex].alt}
                className="h-full w-full object-cover"
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              />
            </AnimatePresence>
            
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-orange-900/60"></div>
            
            <Button 
              variant="outline" 
              size="icon" 
              className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-background/80 hover:bg-background/90"
              onClick={handlePrevious}
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            
            <Button 
              variant="outline" 
              size="icon" 
              className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-background/80 hover:bg-background/90"
              onClick={handleNext}
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
            
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
              {featuredImages.map((_, index) => (
                <button
                  key={index}
                  className={`h-2 w-2 rounded-full ${
                    currentIndex === index ? "bg-white" : "bg-white/50"
                  }`}
                  onClick={() => setCurrentIndex(index)}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Product Categories Carousel */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h2 className="text-2xl font-semibold mb-6">Our Product Categories</h2>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {products.map((product, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.1 * index + 0.7,
                      ease: "easeOut"
                    }}
                    whileHover={{ 
                      scale: 1.03,
                      transition: { duration: 0.2 }
                    }}
                  >
                    <Card className="overflow-hidden h-full">
                      <motion.div 
                        className="aspect-video w-full overflow-hidden"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                      >
                        <img
                          src={product.imageUrl}
                          alt={product.name}
                          className="h-full w-full object-cover"
                          loading="lazy"
                        />
                      </motion.div>
                      <CardHeader className="p-4">
                        <CardTitle className="text-xl">{product.name}</CardTitle>
                      </CardHeader>
                      <CardContent className="p-4 pt-0">
                        <p className="text-muted-foreground text-sm mb-4">{product.description}</p>
                        <p className="text-sm font-medium text-primary">{product.variants}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0 bg-background/80 hover:bg-background/90" />
            <CarouselNext className="right-0 bg-background/80 hover:bg-background/90" />
          </Carousel>
        </motion.div>

        {/* Product Grid (for larger screens) */}
        <motion.div 
          className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-2 hidden md:grid"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
        >
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1 + 1,
                ease: "easeOut"
              }}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
            >
              <Card className="overflow-hidden">
                <motion.div 
                  className="aspect-video w-full overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </motion.div>
                <CardHeader>
                  <CardTitle className="text-2xl">{product.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{product.description}</p>
                  <p className="text-sm font-medium text-primary">{product.variants}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}