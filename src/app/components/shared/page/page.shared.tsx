import { FC, ReactNode } from "react";

type Props = {
  title: string;
  actions?: ReactNode[];
  children?: ReactNode;
};

const Page: FC<Props> = (p) => (
  <div>
    <div className="flex justify-between items-end bg-white">
      <h3 className="text-lg font-semibold">{p.title}</h3>
      <div>Actions</div>
    </div>
    {p.children}
  </div>
);

export default Page;
