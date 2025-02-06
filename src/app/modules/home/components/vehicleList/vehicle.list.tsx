import { CarFront, Wrench } from "lucide-react";
import { FC } from "react";
import { Link } from "react-router-dom";
import { Garage } from "@common/types";
import { Card } from "@components/ui";
import { Vehicle } from "@modules/vehicle";

type Props = {
  vehicle?: Vehicle[];
  garage?: Garage;
};

const VehicleList: FC<Props> = ({ vehicle, garage }) => (
  <div className="flex gap-4 flex-nowrap overflow-auto">
    {vehicle?.map((v) => (
      <Link to={`/vehicle/${garage?.id}/${v.id}/showcase`} key={v.id}>
        <Card
          header={
            <div className="h-48 relative">
              <div className="h-8 w-8 absolute left-1.5 bottom-1.5 opacity-80 shadow-2xl shadow-black">
                <img
                  className="h-full w-full object-cover"
                  src={v.brand.logo}
                  alt=""
                />
              </div>
              {v.image && (
                <img
                  src={v.image}
                  className="h-full w-full block object-cover"
                  alt=""
                  height={48}
                />
              )}
              <div className="absolute right-0 bottom-2 bg-black text-orange-300 px-2 rounded-s-2xl font-semibold shadow-2xl">
                &#8377; {v.onRoadPrice?.toLocaleString("hi")}
              </div>
            </div>
          }
          className="w-2xs"
        >
          <div className="min-h-16 px-2 py-1">
            <div className="text-lg font-semibold">{v.nickName}</div>
            <span className="text-slate-500 flex items-center gap-1 text-sm">
              <CarFront size={15} /> {v.brand.name} {v.model}
            </span>
            <div className="text-slate-500 flex items-center gap-1 text-sm">
              <Wrench size={15} /> 5500 Kms or in 96 Days
            </div>
          </div>
        </Card>
      </Link>
    ))}
  </div>
);

export default VehicleList;
