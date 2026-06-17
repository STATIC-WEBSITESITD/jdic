import BlogCard from '../components/ui/BlogCard';
import GridBanner from '../components/ui/GridBanner';
import { blogs } from '../data/pages';

export default function Blogs() {
  return (
    <>
      <GridBanner
        title="Our Blogs"
        subtitle="Stay updated with the latest news, tips, and insights from JD International Courier."
        image="/assets/img/blogs.webp"
      />
      <section className="about pt-100 pb-100 blogs_area light-v">
          <div className="container" data-aos="fade-up">
              <div className="col-lg-12">
                  <div className="cstm_title">
              <h4 className="text-center mb-30">
                Our <span style={{ color: 'var(--primary)' }}>Blogs</span>
              </h4>
              <p className="text-center mb-0">
                Stay updated with the latest news, tips, and insights from JD International Courier.
              </p>
                  </div>
                  <div className="about-info">
                      <div className="row">
                {blogs.map((post) => (
                  <BlogCard key={post.slug} post={post} />
                ))}
                      </div>
                  </div>
              </div>
          </div>
      </section>
    </>
  );
}
