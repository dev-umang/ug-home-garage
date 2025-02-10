import { Plus } from "lucide-react";
import { ButtonHTMLAttributes, FC, ReactNode } from "react";
import { Link } from "react-router-dom";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  icon?: ReactNode;
  href?: string;
};

const FloatingButton: FC<Props> = (p) => {
  const Button = (
    <button
      {...p}
      className={`h-12 w-12 flex items-center justify-center bg-sky-600 hover:bg-sky-700 text-white font-bold rounded-full shadow shadow-slate-700/50 cursor-pointer ${p.className ?? ""}`}
    >
      {p.icon ? p.icon : <Plus strokeWidth={3} />}
    </button>
  );
  return (
    <div className="fixed bottom-18 right-4">
      {p.href ? <Link to={p.href}>{Button}</Link> : Button}
    </div>
  );
};

export default FloatingButton;
