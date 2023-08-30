import { TbBeach, TbMountain, TbPool } from 'react-icons/tb'
import {
    GiBoatFishing,
    GiCastle,
    GiCaveEntrance,
    GiIsland,
} from 'react-icons/gi'
import { FaSkiing, FaCity} from 'react-icons/fa'
import { MdOutlineVilla } from 'react-icons/md'

const categories = [
    {
        label: 'Tropical',
        icon: GiIsland,
    },
    {
        label: 'Iconic Cities',
        icon: FaCity,
    },
    {
        label: 'Beach',
        icon: TbBeach,
    },
    {
        label: 'Countryside',
        icon: TbMountain,
    },
    {
        label: 'Castles',
        icon: GiCastle,
    },
    {
        label: 'Lake',
        icon: GiBoatFishing,
    },
    {
        label: 'Caves',
        icon: GiCaveEntrance,
    },
    {
        label: 'Modern',
        icon: MdOutlineVilla,
    },
    {
        label: 'Pools',
        icon: TbPool,
    },
    {
        label: 'Skiing',
        icon: FaSkiing,
    },
]

export default categories;