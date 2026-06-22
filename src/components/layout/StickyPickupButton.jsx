import { Link } from 'react-router-dom';

export default function StickyPickupButton() {
  return (
    <Link to="/pickup-request" className="sticky-pickup-btn" aria-label="Pickup Request">
      <i className="fas fa-truck" aria-hidden="true" />
      <span>Pickup Request</span>
    </Link>
  );
}
