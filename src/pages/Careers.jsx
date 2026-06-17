import GridBanner from '../components/ui/GridBanner';
import CareersForm from '../components/ui/CareersForm';

export default function Careers() {
  return (
    <>
      <GridBanner
        title="Careers"
        subtitle="Join our growing team and help us connect the world through reliable logistics."
        image="/assets/img/contact.webp"
      />
      <CareersForm />
    </>
  );
}
