import CustomBtn from './CustomBtn';

export default function BlogCard({ post }) {
  return (
    <div className="col-md-6 col-lg-4">
      <div className="blog-item">
        <div className="box-image mb-30">
          <img src={post.image} alt={post.title} />
        </div>
        <h5 className="mb-30">
          <em>{post.date}</em>
        </h5>
        <h4 className="mb-30">
          <small>{post.title}</small>
        </h4>
        <p className="p-intro p-intro-small">{post.excerpt}</p>
        <CustomBtn href={`/${post.slug}`} />
      </div>
    </div>
  );
}
