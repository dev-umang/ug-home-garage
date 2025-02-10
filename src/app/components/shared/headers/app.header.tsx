import { FC } from "react";

const AppHeader: FC = () => (
  <header className="border-b border-slate-400/20">
    <div className="max-w-[95%] md:max-w-[60%] m-auto flex items-center justify-between min-h-12">
      <h1 className="font-bold text-2xl">LOGO</h1>
      <strong>JJ</strong>
    </div>
  </header>
);

export default AppHeader;
