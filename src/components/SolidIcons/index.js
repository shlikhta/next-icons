import { IconList } from "../IconList";
import {
  BagIcon,
  CakeIcon,
  CalendarIcon,
  CheckCircleSecondIcon,
  CheckCircleIcon,
  ChefIcon,
  ChevronRightIcon,
  ClockFourIcon,
  ClockNineIcon,
  CloudIcon,
  CoffeeIcon,
  DiscountIcon,
  DishwasherIcon,
  DollarCircleIcon,
  HomeIcon,
  ListIcon,
  NoteIcon,
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
  PersonCircleIcon,
} from "nexticons-react/solid";

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
    name: "PersonCircleIcon",
    icon: <PersonCircleIcon className="next-icon" />,
  },
  {
    name: "ChevronRightIcon",
    icon: <ChevronRightIcon className="next-icon" />,
  },
  { name: "PlusIcon", icon: <PlusIcon className="next-icon" /> },
  { name: "RepeatIcon", icon: <RepeatIcon className="next-icon" /> },
  { name: "SwitchIcon", icon: <SwitchIcon className="next-icon" /> },
  { name: "ListIcon", icon: <ListIcon className="next-icon" /> },
  { name: "ChefIcon", icon: <ChefIcon className="next-icon" /> },
  { name: "CloudIcon", icon: <CloudIcon className="next-icon" /> },
  { name: "CoffeeIcon", icon: <CoffeeIcon className="next-icon" /> },
  {
    name: "DiscountIcon",
    icon: <DiscountIcon className="next-icon" />,
  },
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
  { name: "CakeIcon", icon: <CakeIcon className="next-icon" /> },

  { name: "CalendarIcon", icon: <CalendarIcon className="next-icon" /> },
  { name: "NoteIcon", icon: <NoteIcon className="next-icon" /> },
  {
    name: "",
    icon: <div />,
  },
  // {  name: "", icon: < className="next-icon" /> },
];

export const SolidIcons = () => {
  return <IconList list={icons} />;
};
