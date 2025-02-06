import React, { ClassAttributes, FC, HTMLAttributes, ReactNode } from "react";

type Props = HTMLAttributes<HTMLDivElement> & {
  header?: ReactNode;
  headerClass?: ClassAttributes<HTMLDivElement>;
};

const Card: FC<Props> = (p) => (
  <div
    {...p}
    className={`${p.className ?? ""} border bg-slate-100/50 border-slate-400/30 rounded-xs ${p.onClick ? "hover:border-sky-600 cursor-pointer transition-all" : ""}`}
  >
    {p.header && (
      <div className={`${p.headerClass} border-b border-slate-400/30 rounded-ss-xs rounded-se-xs overflow-hidden`}>
        {p.header}
      </div>
    )}
    {p.children}
  </div>
);

export default Card;
