import icons from "./OutlineIcons";
import { IconList } from "../IconList";

export const OutlineIcons = ({ searchStr }) => {
  return <IconList searchStr={searchStr} list={icons} />;
};
