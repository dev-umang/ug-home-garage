import { ChevronLeft } from "lucide-react";
import { FC } from "react";
import { Link } from "react-router-dom";
import { Avatar } from "@components/ui";
import { useVehicle } from "@modules/vehicle";

const VehicleHeader: FC = () => {
  const { vehicle } = useVehicle();

  return (
    <header className="border-b border-slate-400/20">
      <div className="max-w-[95%] md:max-w-[60%] m-auto flex items-center justify-between min-h-12">
        <div className="flex items-center gap-1">
          <Link
            to={"/home"}
            className="hover:bg-slate-400/20 cursor-pointer transition-all flex items-center justify-center rounded-sm"
          >
            <ChevronLeft size={24} />
            <Avatar src={vehicle?.image} />
          </Link>
          <div className="flex flex-col justify-center">
            <div className="font-bold text-lg/5 flex items-center gap-1">
              {vehicle?.nickName} 
              {/* <ChevronsUpDown strokeWidth={2.5} size={16} /> */}
            </div>
            <span className="text-xs text-slate-600">
              {vehicle?.brand?.name} {vehicle?.model}
            </span>
          </div>
        </div>
        <strong>JJ</strong>
      </div>
    </header>
  );
};

export default VehicleHeader;
