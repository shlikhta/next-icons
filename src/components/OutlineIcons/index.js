import { IconList } from "../IconList";
import {
  ChefIcon,
  CheckCircleIcon,
  ClockFourIcon,
  ClockNineIcon,
  CloudIcon,
  CoffeeIcon,
  DiscountIcon,
  DishwasherIcon,
  DollarCircleIcon,
  HomeIcon,
  PhoneIcon,
  PlusCircleIcon,
  PlusIcon,
  RepeatIcon,
  RockIcon,
  ScooterIcon,
  SpecialIcon,
  StarIcon,
  SwitchIcon,
  WaiterIcon,
  WarningIcon,
} from "nexticons-react/outline";

const icons = [
  { id: 1, name: "ChefIcon", icon: <ChefIcon className="next-icon" /> },
  {
    id: 2,
    name: "CheckCircleIcon",
    icon: <CheckCircleIcon className="next-icon" />,
  },
  {
    id: 3,
    name: "ClockFourIcon",
    icon: <ClockFourIcon className="next-icon" />,
  },
  {
    id: 4,
    name: "ClockNineIcon",
    icon: <ClockNineIcon className="next-icon" />,
  },
  { id: 5, name: "CloudIcon", icon: <CloudIcon className="next-icon" /> },
  { id: 6, name: "CoffeeIcon", icon: <CoffeeIcon className="next-icon" /> },
  { id: 7, name: "DiscountIcon", icon: <DiscountIcon className="next-icon" /> },
  {
    id: 8,
    name: "DishwasherIcon",
    icon: <DishwasherIcon className="next-icon" />,
  },
  {
    id: 9,
    name: "DollarCircleIcon",
    icon: <DollarCircleIcon className="next-icon" />,
  },
  { id: 10, name: "HomeIcon", icon: <HomeIcon className="next-icon" /> },
  { id: 11, name: "PhoneIcon", icon: <PhoneIcon className="next-icon" /> },
  {
    id: 12,
    name: "PlusCircleIcon",
    icon: <PlusCircleIcon className="next-icon" />,
  },
  { id: 13, name: "PlusIcon", icon: <PlusIcon className="next-icon" /> },
  { id: 14, name: "RepeatIcon", icon: <RepeatIcon className="next-icon" /> },
  { id: 15, name: "RockIcon", icon: <RockIcon className="next-icon" /> },
  { id: 16, name: "ScooterIcon", icon: <ScooterIcon className="next-icon" /> },
  { id: 17, name: "SpecialIcon", icon: <SpecialIcon className="next-icon" /> },
  { id: 18, name: "StarIcon", icon: <StarIcon className="next-icon" /> },
  { id: 19, name: "SwitchIcon", icon: <SwitchIcon className="next-icon" /> },
  { id: 20, name: "WaiterIcon", icon: <WaiterIcon className="next-icon" /> },
  { id: 21, name: "WarningIcon", icon: <WarningIcon className="next-icon" /> },
];

export const OutlineIcons = () => {
  return <IconList list={icons} />;
};
