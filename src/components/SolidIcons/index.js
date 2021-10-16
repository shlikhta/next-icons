import { IconList } from "../IconList";
import { CakeIcon, StarIcon } from "nexticons-react/solid";

const icons = [
  { id: 1, name: "CakeIcon", icon: <CakeIcon className="next-icon" /> },
  { id: 2, name: "StarIcon", icon: <StarIcon className="next-icon" /> },
];

export const SolidIcons = () => {
  return <IconList list={icons} />;
};
