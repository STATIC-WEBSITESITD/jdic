import { Navigate, useLocation } from 'react-router-dom';
import GridBanner from '../components/ui/GridBanner';
import { getBlog } from '../data/pages';

export default function BlogDetail() {
  const { pathname } = useLocation();
  const slug = pathname.replace(/^\//, '');
  const post = getBlog(slug);
  const Content = post?.Content;

  if (!post || !Content) return <Navigate to="/blogs" replace />;

  return (
    <>
      <GridBanner
        title={post.hero.title}
        subtitle={post.hero.subtitle}
        image={post.hero.image}
      />
      <Content />
    </>
  );
}
