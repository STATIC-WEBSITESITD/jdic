import { Link } from 'react-router-dom';

export default function StickyPickupButton() {
  return (
    <Link to="/pickup-request" className="sticky-pickup-btn" aria-label="Pickup Request">
      <span>Pickup Request</span>
    </Link>
  );
}
