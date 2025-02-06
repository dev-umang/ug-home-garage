import {
  Dock,
  LayoutDashboard,
  ListCheck,
  Package2,
  Wrench,
} from "lucide-react";
import { FC } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { CommonType } from "@common/types";

const menu: CommonType[] = [
  { key: "showcase", label: "Showcase", icon: <LayoutDashboard /> },
  { key: "services", label: "Services", icon: <Wrench /> },
  { key: "parts", label: "Parts", icon: <Package2 /> },
  { key: "docs", label: "Docs", icon: <Dock /> },
  { key: "checklist", label: "Checklist", icon: <ListCheck /> },
];

const BottomNav: FC = () => {
  const { garageId, vehicleId } = useParams();
  const path = useLocation().pathname;

  return (
    <div className="flex justify-center fixed left-0 right-0 bottom-0 border-t border-t-slate-400">
      <div className="grid grid-cols-5">
        {menu.map((m) => {
          if (!m.key) return null;

          const active = path.endsWith(m.key);
          return (
            <Link to={`/vehicle/${garageId}/${vehicleId}/${m.key}`} key={m.key}>
              <button
                className={` focus:text-sky-600  ${active ? "text-sky-600 scale-100" : "text-slate-400 hover:text-slate-800"} p-2 inline-flex items-center justify-center flex-col min-w-20 scale-90 transition-all cursor-pointer`}
              >
                <div className="">{m.icon}</div>
                <span className="text-xs">{m.label}</span>
              </button>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default BottomNav;
