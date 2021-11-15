import icons from "./SolidIcons";
import { IconList } from "../IconList";

export const SolidIcons = ({ searchStr }) => {
  return <IconList searchStr={searchStr} list={icons} />;
};
