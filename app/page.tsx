import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { Services } from "@/components/Services";
import { Testimonials } from "@/components/Testimonials";
import { Professionals } from "@/components/Professionals";
import { Footer } from "@/components/Footer";

export default function Home() {
    return (
        <main className="min-h-screen bg-background-light">
            <Header />
            <Hero />
            <HowItWorks />
            <Services />
            <Testimonials />
            <Professionals />
            <Footer />
        </main>
    )
}
