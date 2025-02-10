import { FC, ReactNode } from "react";

type Props = {
  children?: ReactNode;
  className?: string;
  src?: string;
};

const Avatar: FC<Props> = (p) => (
  <div
    className={`h-9 w-9 inline-flex items-center justify-center rounded-sm bg-purple-600/40 overflow-hidden`}
  >
    {p.src && (
      <img className="h-full w-full block object-cover" src={p.src} alt="" />
    )}
  </div>
);

export default Avatar;
