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
  { id: 1, name: "ChefIcon", icon: <ChefIcon /> },
  { id: 2, name: "CheckCircleIcon", icon: <CheckCircleIcon /> },
  { id: 3, name: "ClockFourIcon", icon: <ClockFourIcon /> },
  { id: 4, name: "ClockNineIcon", icon: <ClockNineIcon /> },
  { id: 5, name: "CloudIcon", icon: <CloudIcon /> },
  { id: 6, name: "CoffeeIcon", icon: <CoffeeIcon /> },
  { id: 7, name: "DiscountIcon", icon: <DiscountIcon /> },
  { id: 8, name: "DishwasherIcon", icon: <DishwasherIcon /> },
  { id: 9, name: "DollarCircleIcon", icon: <DollarCircleIcon /> },
  { id: 10, name: "HomeIcon", icon: <HomeIcon /> },
  { id: 11, name: "PhoneIcon", icon: <PhoneIcon /> },
  { id: 12, name: "PlusCircleIcon", icon: <PlusCircleIcon /> },
  { id: 13, name: "PlusIcon", icon: <PlusIcon /> },
  { id: 14, name: "RepeatIcon", icon: <RepeatIcon /> },
  { id: 15, name: "RockIcon", icon: <RockIcon /> },
  { id: 16, name: "ScooterIcon", icon: <ScooterIcon /> },
  { id: 17, name: "SpecialIcon", icon: <SpecialIcon /> },
  { id: 18, name: "StarIcon", icon: <StarIcon /> },
  { id: 19, name: "SwitchIcon", icon: <SwitchIcon /> },
  { id: 20, name: "WaiterIcon", icon: <WaiterIcon /> },
  { id: 21, name: "WarningIcon", icon: <WarningIcon /> },
];

export const OutlineIcons = () => {
  return <IconList list={icons} />;
};
