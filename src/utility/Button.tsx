import { BsArrowRight } from "react-icons/bs";
import Link from "next/link";

type Props = {
  text: string;
  variants: string;
  site: string;
};
export function Button({ text, variants, site }: Props) {
  return (
    <button type="button" className={variants}>
      <Link href={site}>
        <a>{text}</a>
      </Link>
    </button>
  );
}
type iconProps = {
  site: string;
  text: string;
};
export function Icon({ site, text }: iconProps) {
  return (
    <div className="link">
      <Link href={site}>
        <a>{text}</a>
      </Link>
      <BsArrowRight className={"icon"} />
    </div>
  );
}
