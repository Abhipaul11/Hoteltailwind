import { LuBedDouble } from "react-icons/lu";
import { MdFastfood } from "react-icons/md";
import { IoBonfireOutline } from "react-icons/io5";
import { FaCanadianMapleLeaf } from "react-icons/fa";
import { PiVideoConferenceLight } from "react-icons/pi";

export const amenitiesList = [
    {
        cardimage: '/images/room.jpg',
        cardpara: 'Cozy Rooms',
        cardtext: 'Relax in our comfortable rooms and scenic views',
        icon: LuBedDouble
    },
    {
        cardimage: '/images/breakfast.jpg',
        cardpara: 'Complimentary Breakfast',
        cardtext: 'Start your day with a delicious complimentary breakfast',
        icon: MdFastfood
    },
    {
        cardimage: '/images/bonfire.jpg',
        cardpara: 'Evening Bonfire',
        cardtext: 'Enjoy a warm evening around a bonfire, under the starry skies.',
        icon: IoBonfireOutline
    },
    {
        cardimage: '/images/naturewalk.jpg',
        cardpara: 'Nature Walks',
        cardtext: 'Explore surroundings with nature walks in Jhandi',
        icon: FaCanadianMapleLeaf
    },
    {
        cardimage: '/images/service.png',
        cardpara: '24/7 Service',
        cardtext: 'We are here to assist you anytime during your stay.',
        icon: PiVideoConferenceLight
    }
];
