import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout';
import { BLOG_SLUGS } from './data/pages';
import { SERVICE_SLUGS } from './data/services';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Tracking from './pages/Tracking';
import Documents from './pages/Documents';
import Blogs from './pages/Blogs';
import ProhibitedGoods from './pages/ProhibitedGoods';
import ServicePage from './pages/ServicePage';
import BlogDetail from './pages/BlogDetail';
import PrivacyPolicy from './pages/PrivacyPolicy';
import RefundPolicy from './pages/RefundPolicy';
import ShippingPolicy from './pages/ShippingPolicy';
import TermsConditions from './pages/TermsConditions';
import Careers from './pages/Careers';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="tracking" element={<Tracking />} />
          <Route path="documents" element={<Documents />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="prohibited-goods" element={<ProhibitedGoods />} />
          {SERVICE_SLUGS.map((slug) => (
            <Route key={slug} path={slug} element={<ServicePage />} />
          ))}
          {BLOG_SLUGS.map((slug) => (
            <Route key={slug} path={slug} element={<BlogDetail />} />
          ))}
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="refund-policy" element={<RefundPolicy />} />
          <Route path="shipping-policy" element={<ShippingPolicy />} />
          <Route path="terms-conditions" element={<TermsConditions />} />
          <Route path="careers" element={<Careers />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
