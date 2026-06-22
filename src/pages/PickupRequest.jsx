import GridBanner from '../components/ui/GridBanner';
import PickupRequestForm from '../components/ui/PickupRequestForm';

export default function PickupRequest() {
  return (
    <>
      <GridBanner
        title="Pickup Request"
        subtitle="Schedule a doorstep pickup and share your shipper and consignee details."
        image="/assets/img/pickup-packaging.webp"
      />
      <PickupRequestForm />
    </>
  );
}
