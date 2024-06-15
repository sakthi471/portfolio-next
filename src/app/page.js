import AboutSections from "@/components/AboutSections";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import HeroSections from "@/components/HeroSections";
import ProjectSection from "@/components/ProjectSection";
import SkillsSections from "@/components/SkillsSections";
import SocilaLinks from "@/components/SocialLinks";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 gap-10">
        <HeroSections/>
        <SocilaLinks/>
        <AboutSections/>
        <SkillsSections/>
        <ProjectSection/>
        <ContactSection/>
        
      
        
    </main>
  );
}
