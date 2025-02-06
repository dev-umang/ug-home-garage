import { FC, ReactNode } from "react";
import { useAtomValue } from "jotai";
import { atomWithStorage } from "jotai/utils";

type Props = {
  children: ReactNode;
};

export const AtomDarkMode = atomWithStorage("dark", false);

const ThemeConfig: FC<Props> = ({ children }) => {
  const darkMode = useAtomValue(AtomDarkMode);

  return (
    <div
      className={`${darkMode ? "dark" : "light"} dark:bg-slate-900 dark:text-slate-200 text-slate-900 bg-white min-h-screen`}
    >
      {children}
    </div>
  );
};

export default ThemeConfig;
