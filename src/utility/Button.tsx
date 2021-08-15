import Link from 'next/link';
export function Button({ text, className, site }) {
  return (
    <button type="button" className={className}>
      <Link href={site}>
        <a>{text}</a>
      </Link>
    </button>
  );
}

export function Icon({ site, text }) {
  return (
    <div className="link">
      <Link href={site}>
        <a>{text}</a>
      </Link>
    </div>
  );
}
