import { FC, InputHTMLAttributes } from "react";

type Props = InputHTMLAttributes<HTMLInputElement>;

const Input: FC<Props> = (p) => (
  <div className="relative">
    <input
      {...p}
      className={`${p.className ?? ""} border border-slate-500/50 rounded-sm p-2 focus:ring-1 ring-sky-600 outline-0`}
    />
  </div>
);

export default Input;
