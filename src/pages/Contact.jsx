import GridBanner from '../components/ui/GridBanner';
import ContactInfo from '../components/ui/ContactInfo';
import ContactForm from '../components/ui/ContactForm';

export default function Contact() {
  return (
    <>
      <GridBanner
        title="Contact Us"
        subtitle="Get a quote, schedule a pickup, or ask anything about your shipment."
        image="/assets/img/contact.webp"
      />
      <ContactForm />
      <ContactInfo />
    </>
  );
}
