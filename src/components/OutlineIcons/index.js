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
  CheckCircleSecondIcon,
  BagIcon,
  BarsIcon,
  CommutatorIcon,
  ComputersIcon,
  DownloadIcon,
  LibraIcon,
  MapIcon,
  ListIcon,
  PluginIcon,
  SpeedometerIcon,
} from "nexticons-react/outline";

const icons = [
  {
    name: "CheckCircleIcon",
    icon: <CheckCircleIcon className="next-icon" />,
  },
  {
    name: "CheckCircleSecondIcon",
    icon: <CheckCircleSecondIcon className="next-icon" />,
  },
  {
    name: "ClockFourIcon",
    icon: <ClockFourIcon className="next-icon" />,
  },
  {
    name: "ClockNineIcon",
    icon: <ClockNineIcon className="next-icon" />,
  },
  {
    name: "DollarCircleIcon",
    icon: <DollarCircleIcon className="next-icon" />,
  },
  {
    name: "PlusCircleIcon",
    icon: <PlusCircleIcon className="next-icon" />,
  },
  {
    name: "",
    icon: <div />,
  },
  {
    name: "",
    icon: <div />,
  },
  { name: "PlusIcon", icon: <PlusIcon className="next-icon" /> },
  { name: "RepeatIcon", icon: <RepeatIcon className="next-icon" /> },
  { name: "SwitchIcon", icon: <SwitchIcon className="next-icon" /> },
  { name: "ListIcon", icon: <ListIcon className="next-icon" /> },

  { name: "ChefIcon", icon: <ChefIcon className="next-icon" /> },

  { name: "CloudIcon", icon: <CloudIcon className="next-icon" /> },
  { name: "CoffeeIcon", icon: <CoffeeIcon className="next-icon" /> },
  { name: "DiscountIcon", icon: <DiscountIcon className="next-icon" /> },
  {
    name: "DishwasherIcon",
    icon: <DishwasherIcon className="next-icon" />,
  },

  { name: "HomeIcon", icon: <HomeIcon className="next-icon" /> },
  { name: "PhoneIcon", icon: <PhoneIcon className="next-icon" /> },

  { name: "RockIcon", icon: <RockIcon className="next-icon" /> },
  { name: "ScooterIcon", icon: <ScooterIcon className="next-icon" /> },
  { name: "SpecialIcon", icon: <SpecialIcon className="next-icon" /> },
  { name: "StarIcon", icon: <StarIcon className="next-icon" /> },
  { name: "WaiterIcon", icon: <WaiterIcon className="next-icon" /> },
  { name: "WarningIcon", icon: <WarningIcon className="next-icon" /> },

  { name: "BagIcon", icon: <BagIcon className="next-icon" /> },
  { name: "BarsIcon", icon: <BarsIcon className="next-icon" /> },
  {
    name: "CommutatorIcon",
    icon: <CommutatorIcon className="next-icon" />,
  },
  {
    name: "ComputersIcon",
    icon: <ComputersIcon className="next-icon" />,
  },
  {
    name: "DownloadIcon",
    icon: <DownloadIcon className="next-icon" />,
  },
  { name: "LibraIcon", icon: <LibraIcon className="next-icon" /> },
  { name: "MapIcon", icon: <MapIcon className="next-icon" /> },
  { name: "PluginIcon", icon: <PluginIcon className="next-icon" /> },
  {
    name: "SpeedometerIcon",
    icon: <SpeedometerIcon className="next-icon" />,
  },
  {
    name: "",
    icon: <div />,
  },
  {
    name: "",
    icon: <div />,
  },
  {
    name: "",
    icon: <div />,
  },
  {
    name: "",
    icon: <div />,
  },
];

export const OutlineIcons = () => {
  return <IconList list={icons} />;
};
