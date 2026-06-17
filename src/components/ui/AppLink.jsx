import { Link } from 'react-router-dom';

export default function AppLink({ href, children, className, ...props }) {
  const isExternal =
    href?.startsWith('http') ||
    href?.startsWith('mailto:') ||
    href?.startsWith('tel:');

  if (isExternal) {
    return (
      <a href={href} className={className} target="_blank" rel="noreferrer" {...props}>
        {children}
      </a>
    );
  }

  if (!href || href === '#') {
    return (
      <a
        href="javascript:void(0)"
        className={className}
        role="button"
        onClick={(e) => e.preventDefault()}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <Link to={href} className={className} {...props}>
      {children}
    </Link>
  );
}

export function NavItem({ to, children, external, className, onClick }) {
  if (external) {
    return (
      <a href={to} className={className} target="_blank" rel="noreferrer" onClick={onClick}>
        {children}
      </a>
    );
  }

  return (
    <Link to={to} className={className} onClick={onClick}>
      {children}
    </Link>
  );
}
