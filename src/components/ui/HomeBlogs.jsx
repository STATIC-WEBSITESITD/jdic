import BlogCard from './BlogCard';
import { homeBlogsSection } from '../../data/home';
import { blogs } from '../../data/pages';

export default function HomeBlogs() {
  const { title, titleAccent, subtitle, limit } = homeBlogsSection;

  return (
    <section className="about pt-100 light-v blogs_area">
      <div className="container" data-aos="fade-up">
        <div className="col-lg-12">
          <div className="cstm_title">
            <h4 className="text-center mb-30">
              {title} <span style={{ color: 'var(--primary)' }}>{titleAccent}</span>
            </h4>
            <p className="text-center mb-0">{subtitle}</p>
          </div>
          <div className="about-info">
            <div className="row">
              {blogs.slice(0, limit).map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
