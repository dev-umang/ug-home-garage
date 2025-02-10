import { FC } from "react";
import { Input } from "@components/ui";

type Props = {
  open: boolean;
  setOpen?: (open: boolean) => void;
};

const AddServiceSheet: FC<Props> = (p) => {
  if (p.open)
    return (
      <div className="fixed top-0 bottom-0 left-0 right-0 z-10 flex items-end">
        <div
          onClick={() => p.setOpen?.(false)}
          className="bg-black/10 backdrop-blur-[1px] fixed z-20 top-0 bottom-0 left-0 right-0 cursor-crosshair"
        ></div>
        <div className="bg-white h-[90vh] w-full relative z-30 shadow-[0_-2px_34px_rgba(0,0,0,0.15)]">
          <div className="flex justify-center">
            <div className="w-24 h-1.5 bg-gray-600/60 my-2 rounded-lg"></div>
          </div>
          <div className="max-w-[100%] md:max-w-[60%] m-auto py-2">
            <Input type="text" placeholder="Enter input" />
          </div>
        </div>
      </div>
    );
  return null;
};

export default AddServiceSheet;
