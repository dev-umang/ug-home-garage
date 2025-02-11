import { FC, InputHTMLAttributes } from "react";

type Props = InputHTMLAttributes<HTMLInputElement>;

const Input: FC<Props> = (p) => (
  <div className="relative inline-flex flex-col">
    <label className="text-xs font-sans font-medium text-slate-600/60 pl-2">Label</label>
    <input
      {...p}
      className={`${p.className ?? ""} border border-slate-500/50 rounded-sm  px-2 py-1 focus:ring-1 ring-sky-600 outline-0`}
    />
  </div>
);

export default Input;
