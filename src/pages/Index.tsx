import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/home/Hero";
import { StatsStrip } from "@/components/home/StatsStrip";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { ReviewsCarousel } from "@/components/home/ReviewsCarousel";
import { FinalCTA } from "@/components/home/FinalCTA";
import { Gallery } from "@/components/sections/Gallery";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { BookingModal } from "@/components/BookingModal";

const Index = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero onBookClick={() => setIsBookingOpen(true)} />
        <StatsStrip />
        <WhyChooseUs />
        <ServicesPreview onBookClick={() => setIsBookingOpen(true)} />
        <ReviewsCarousel />
        <About onBookClick={() => setIsBookingOpen(true)} />
        <Gallery />
        <Contact onBookClick={() => setIsBookingOpen(true)} />
        <FinalCTA onBookClick={() => setIsBookingOpen(true)} />
      </main>
      <Footer />
      <BookingModal open={isBookingOpen} onOpenChange={setIsBookingOpen} />
    </div>
  );
};

export default Index;
