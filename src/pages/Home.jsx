import HomeHero from '../components/ui/HomeHero';
import MarqueeBar from '../components/ui/MarqueeBar';
import CustomerEnquiryForm from '../components/ui/CustomerEnquiryForm';
import HomeAbout from '../components/ui/HomeAbout';
import HowItWorks from '../components/ui/HowItWorks';
import WhoWeServe from '../components/ui/WhoWeServe';
import ServicesSlider from '../components/ui/ServicesSlider';
import Shippers from '../components/ui/Shippers';
import Testimonials from '../components/ui/Testimonials';
import HomeBlogs from '../components/ui/HomeBlogs';
import GlobalMapSection from '../components/ui/GlobalMapSection';
import ServiceAreas from '../components/ui/ServiceAreas';
import JoinTeamCTA from '../components/ui/JoinTeamCTA';

export default function Home() {
  return (
    <>
      <HomeHero />
      <MarqueeBar />
      <CustomerEnquiryForm />
      <HomeAbout />
      <HowItWorks />
      <WhoWeServe />
      <ServicesSlider />
      <Shippers />
      <Testimonials />
      <HomeBlogs />
      <GlobalMapSection />
      <ServiceAreas />
      <JoinTeamCTA />
    </>
  );
}
