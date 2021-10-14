import {IconList} from "../IconList";
import { CakeIcon, StarIcon } from "nexticons-react/solid";


const icons = [
    {id: 1, name: 'CakeIcon', icon: <CakeIcon/>},
    {id: 2, name: 'StarIcon', icon: <StarIcon/>},
]

export const SolidIcons = () => {
    return <IconList list={icons}/>
}
