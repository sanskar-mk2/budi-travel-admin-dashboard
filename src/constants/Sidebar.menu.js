import { RiDashboardFill } from 'react-icons/ri';
import { BsFillPeopleFill } from 'react-icons/bs';
import { MdInsertComment } from 'react-icons/md';
import { MdOutlineLocalOffer } from "react-icons/md";
import {SiScrollreveal} from 'react-icons/si';
export const SidebarContants = [
  {
    link: '/dashboard',
    key: '',
    title: 'Dashboard',
    permissionKey: '',
    tag: null,
    notification: 12,
    IconColor: 'blue',
    icon: <RiDashboardFill />,
    child: [{
      link: '/dashboard-revenue',
      key: 'Dashboard Revenue',
      title: 'Dashboard Revenue',
      permissionKey: '',
      tag: null,
      notification: 12,
      IconColor: 'yellow',
      icon: <SiScrollreveal />,
    }],
  },
  {
    link: '/customer',
    key: '',
    title: 'Offer',
    permissionKey: '',
    tag: 'New',
    notification: null,
    IconColor: 'red;',
    icon: <MdOutlineLocalOffer />,
    child: [],
  },
  {
    link: '',
    key: '',
    title: 'Notification',
    tag: 'Offer',
    permissionKey: '',
    IconColor: 'pink',
    notification: null,
    icon: <MdInsertComment />,
    child: [],
  },
  {
    link: '',
    key: '',
    title: 'Notification',
    tag: 'Offer',
    permissionKey: '',
    IconColor: 'pink',
    notification: null,
    icon: <MdInsertComment />,
    child: [],
  },
  {
    link: '',
    key: '',
    title: 'Notification',
    tag: 'Offer',
    permissionKey: '',
    IconColor: 'pink',
    notification: null,
    icon: <MdInsertComment />,
    child: [],
  },

]



export const AgentUser = [
  {
    link: null,
    key: '',
    title: 'Agent',
    permissionKey: '',
    tag: null,
    notification: 12,
    IconColor: 'blue',
    icon: <RiDashboardFill />,
    child: [
      {
        img: 'https://i.pinimg.com/474x/4b/71/f8/4b71f8137985eaa992d17a315997791e.jpg',
        isLive: 'Live',
        name: 'Thomas Edison',
        link: '/thomas-edison/98'
      },
      {
        img: 'https://i.pinimg.com/474x/4b/71/f8/4b71f8137985eaa992d17a315997791e.jpg',
        isLive: 'Live',
        name: 'Ashu Erishon',
        link: '/thomas-edison/98'
      }
    ],
  }

]