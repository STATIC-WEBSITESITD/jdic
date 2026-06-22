import { blogArticles } from './blogArticles';
import { SERVICE_SLUGS, serviceContent } from './services';

export const BLOG_SLUGS = [
  'fast-courier-service',
  'express-courier-service',
  'documentation-support-courier-services',
  'courier-services-small-business',
  'pickup-packing-guidance-courier-delivery',
  'secure-courier-service-india',
  'future-courier-logistics-india',
  'import-export-rules-international-shipping',
  'reduce-international-shipping-costs',
  'amazon-fba-international-shipping',
];

const PAGE_TITLE_SUFFIX = '| JD International Courier';

const STATIC_PAGE_TITLES = {
  '/': 'JD International Courier Ahmedabad | International Courier & Cargo',
  '/about': `About Us ${PAGE_TITLE_SUFFIX}`,
  '/contact': `Contact Us ${PAGE_TITLE_SUFFIX}`,
  '/pickup-request': `Pickup Request ${PAGE_TITLE_SUFFIX}`,
  '/tracking': `Track Your Shipment ${PAGE_TITLE_SUFFIX}`,
  '/documents': `Documents ${PAGE_TITLE_SUFFIX}`,
  '/blogs': `Our Blogs ${PAGE_TITLE_SUFFIX}`,
  '/prohibited-goods': `Prohibited Goods ${PAGE_TITLE_SUFFIX}`,
  '/privacy-policy': `Privacy Policy ${PAGE_TITLE_SUFFIX}`,
  '/refund-policy': `Refund Policy ${PAGE_TITLE_SUFFIX}`,
  '/shipping-policy': `Shipping Policy ${PAGE_TITLE_SUFFIX}`,
  '/terms-conditions': `Terms & Conditions ${PAGE_TITLE_SUFFIX}`,
};

const SERVICE_META = {
  'international-courier': {
    hero: {
      title: 'International Courier',
      subtitle: 'Doorstep pickup, customs support, and fast worldwide delivery.',
      image: '/assets/img/international-courier.webp',
    },
  },
  'export-commercial': {
    navLabel: 'Export / Commercial Shipment',
    hero: {
      title: 'Export Commercial',
      subtitle: 'Commercial export shipments with documentation and customs support.',
      image: '/assets/img/export-commercial.webp',
    },
  },
  'amazon-fba': {
    navLabel: 'Amazon FBA Shipment',
    hero: {
      title: 'Amazon FBA',
      subtitle: 'FBA-ready pickup, labeling guidance, and fulfillment center delivery.',
      image: '/assets/img/amazon-fba.webp',
    },
  },
  'express-courier': {
    hero: {
      title: 'Express Courier',
      subtitle: 'Priority international shipping for urgent documents and parcels.',
      image: '/assets/img/express-courier.webp',
    },
  },
  'documentation-support': {
    hero: {
      title: 'Documentation Support',
      subtitle: 'Clear paperwork guidance to reduce delays and customs holds.',
      image: '/assets/img/documentation-support.webp',
    },
  },
  'pickup-packaging': {
    navLabel: 'Pickup & Packaging Guidance',
    hero: {
      title: 'Pickup & Packaging',
      subtitle: 'Doorstep pickup with practical packaging guidance for safer delivery.',
      image: '/assets/img/pickup-packaging.webp',
    },
  },
  'ground-courier': {
    hero: {
      title: 'Ground Courier',
      subtitle: 'Safe, cost-effective surface transport with door-to-door delivery across India.',
      image: '/assets/img/pickup-packaging.webp',
    },
  },
  'domestic-courier': {
    hero: {
      title: 'Domestic Courier',
      subtitle: 'Fast, reliable, and affordable parcel shipping across India.',
      image: '/assets/img/express-courier.webp',
    },
  },
  'inbound-logistics': {
    hero: {
      title: 'Inbound Logistics',
      subtitle: 'End-to-end import management with secure cargo handling and compliance support.',
      image: '/assets/img/export-commercial.webp',
    },
  },
  'worldwide-express': {
    hero: {
      title: 'Worldwide Express',
      subtitle: 'Priority international shipping with optimised routes and real-time tracking.',
      image: '/assets/img/international-courier.webp',
    },
  },
};

const BLOG_META = {
  'fast-courier-service': {
    title: 'Fast Courier Service for Quick & Reliable Deliveries',
    excerpt: 'Discover how fast courier services help businesses and individuals ensure quick, secure, and hassle-free deliveries across India and worldwide.',
    date: '12 May 2026',
    image: '/assets/img/fast-courier-service.webp',
    hero: {
      title: 'Fast Courier Service',
      subtitle: 'Speed, security, and transparency for documents, parcels, and business shipments.',
      image: '/assets/img/fast-courier-service.webp',
    },
  },
  'express-courier-service': {
    title: 'Express Courier Service for Urgent Shipments',
    excerpt: 'Learn how express courier services ensure faster delivery timelines, secure handling, and improved customer satisfaction for urgent shipments.',
    date: '12 May 2026',
    image: '/assets/img/express-courier-service.webp',
    hero: {
      title: 'Express Courier Service',
      subtitle: 'Faster transit for time-sensitive international shipments.',
      image: '/assets/img/express-courier-service.webp',
    },
  },
  'documentation-support-courier-services': {
    title: 'Documentation Support in Courier Services',
    excerpt: 'Understand why proper shipping documentation is essential for smooth courier operations, customs clearance, and hassle-free deliveries.',
    date: '12 May 2026',
    image: '/assets/img/documentation-support-courier-services.webp',
    hero: {
      title: 'Documentation Support Courier Services',
      subtitle: 'Expert guidance for shipping paperwork and customs compliance.',
      image: '/assets/img/documentation-support-courier-services.webp',
    },
  },
  'courier-services-small-business': {
    title: 'How Courier Services Help Small Businesses Grow',
    excerpt: 'Explore how reliable logistics and courier services help small businesses improve delivery speed, customer trust, and business growth.',
    date: '12 May 2026',
    image: '/assets/img/courier-services-small-business.webp',
    hero: {
      title: 'Courier Services Small Business',
      subtitle: 'Practical courier solutions for growing businesses.',
      image: '/assets/img/courier-services-small-business.webp',
    },
  },
  'pickup-packing-guidance-courier-delivery': {
    title: 'Pickup & Packing Guidance for Safe Delivery',
    pageTitle: 'Pickup Packing Guidance',
    excerpt: 'Learn the importance of proper pickup and packing guidance to ensure safe courier delivery and reduce shipment damage risks.',
    date: '12 May 2026',
    image: '/assets/img/pickup-packing-guidance-courier-delivery.webp',
    hero: {
      title: 'Pickup Packing Guidance Courier Delivery',
      subtitle: 'Professional pickup and packing guidance for safer deliveries.',
      image: '/assets/img/pickup-packing-guidance-courier-delivery.webp',
    },
  },
  'secure-courier-service-india': {
    title: 'Secure Courier Service in India for Safe Deliveries',
    excerpt: 'Discover how secure courier services ensure safe handling, real-time tracking, and reliable deliveries for businesses and individuals.',
    date: '12 May 2026',
    image: '/assets/img/secure-courier-service-india.webp',
    hero: {
      title: 'Secure Courier Service India',
      subtitle: 'Secure handling and dependable delivery across India.',
      image: '/assets/img/secure-courier-service-india.webp',
    },
  },
  'future-courier-logistics-india': {
    title: 'Future of The Courier & Logistics Industry in India',
    excerpt: "Explore emerging trends, automation, eCommerce growth, and technology shaping the future of India's courier industry.",
    date: '12 May 2026',
    image: '/assets/img/future-courier-logistics-india.webp',
    hero: {
      title: 'Future Courier Logistics India',
      subtitle: 'Trends shaping the next phase of courier and logistics.',
      image: '/assets/img/future-courier-logistics-india.webp',
    },
  },
  'import-export-rules-international-shipping': {
    title: 'Import Export Rules Every Shipper Must Know',
    pageTitle: 'Import Export Rules',
    excerpt: 'Understand key import-export rules, customs regulations, documentation, and compliance required for international shipping.',
    date: '12 May 2026',
    image: '/assets/img/import-export-rules-international-shipping.webp',
    hero: {
      title: 'Import Export Rules International Shipping',
      subtitle: 'Compliance essentials for cross-border shipping.',
      image: '/assets/img/import-export-rules-international-shipping.webp',
    },
  },
  'reduce-international-shipping-costs': {
    title: 'How to Reduce International Shipping Costs',
    excerpt: 'Discover practical strategies to reduce international shipping costs while improving delivery efficiency and customer satisfaction.',
    date: '12 May 2026',
    image: '/assets/img/reduce-international-shipping-costs.webp',
    hero: {
      title: 'Reduce International Shipping Costs',
      subtitle: 'Smart ways to lower international shipping expenses.',
      image: '/assets/img/reduce-international-shipping-costs.webp',
    },
  },
  'amazon-fba-international-shipping': {
    title: 'Amazon FBA International Shipping Guide',
    excerpt: 'Complete guide for sellers on Amazon FBA international shipping, courier services, customs clearance, and packaging compliance.',
    date: '12 May 2026',
    image: '/assets/img/amazon-fba-international-shipping.webp',
    hero: {
      title: 'Amazon FBA International Shipping',
      subtitle: 'Complete courier and logistics solutions for global Amazon sellers.',
      image: '/assets/img/amazon-fba-international-shipping.webp',
    },
  },
};

export const blogs = BLOG_SLUGS.map((slug) => ({
  slug,
  path: `/${slug}`,
  ...BLOG_META[slug],
}));

export function getService(slug) {
  const meta = SERVICE_META[slug];
  const Content = serviceContent[slug];
  if (!meta || !Content) return null;
  return { slug, ...meta, Content };
}

export function getBlog(slug) {
  const meta = BLOG_META[slug];
  const Content = blogArticles[slug];
  if (!meta || !Content) return null;
  return { slug, path: `/${slug}`, ...meta, Content };
}

function pageTitleForService(slug) {
  const meta = SERVICE_META[slug];
  const title = meta.pageTitle ?? meta.hero.title;
  return `${title} ${PAGE_TITLE_SUFFIX}`;
}

function pageTitleForBlog(slug) {
  const meta = BLOG_META[slug];
  const title = meta.pageTitle ?? meta.hero.title;
  return `${title} ${PAGE_TITLE_SUFFIX}`;
}

export const servicesLinks = SERVICE_SLUGS.map((slug) => ({
  label: SERVICE_META[slug].navLabel ?? SERVICE_META[slug].hero.title,
  path: `/${slug}`,
}));

export const pageTitles = {
  ...STATIC_PAGE_TITLES,
  ...Object.fromEntries(SERVICE_SLUGS.map((slug) => [`/${slug}`, pageTitleForService(slug)])),
  ...Object.fromEntries(BLOG_SLUGS.map((slug) => [`/${slug}`, pageTitleForBlog(slug)])),
};

export { SERVICE_SLUGS };
