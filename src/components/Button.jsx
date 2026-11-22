import { Link } from 'react-router-dom';
import './Button.css';

export default function Button({ children, to, href, variant = 'primary', onClick, className = '' }) {
  const cls = `btn btn--${variant} ${className}`;
  if (to) return <Link to={to} className={cls}>{children}</Link>;
  if (href) return <a href={href} className={cls} target="_blank" rel="noopener noreferrer">{children}</a>;
  return <button className={cls} onClick={onClick}>{children}</button>;
}
