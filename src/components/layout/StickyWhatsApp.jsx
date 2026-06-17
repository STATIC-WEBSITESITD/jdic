const WHATSAPP_URL = 'https://wa.me/919586226000';

export default function StickyWhatsApp() {
  return (
    <a
      href={WHATSAPP_URL}
      className="sticky-whatsapp"
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
    >
      <i className="fab fa-whatsapp" aria-hidden="true" />
    </a>
  );
}
