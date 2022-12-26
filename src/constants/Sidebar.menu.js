import { RiDashboardFill , RiPriceTag2Fill , RiSettings5Fill } from 'react-icons/ri';
import { MdInsertComment, MdLocalOffer  , MdCategory} from 'react-icons/md';
import { SiScrollreveal } from 'react-icons/si';
import { BsPeopleFill } from "react-icons/bs";
import { FaIdeal } from "react-icons/fa";

export const SidebarContants = [
  {
    link: '/',
    key: '',
    title: 'Dashboard',
    permissionKey: '',
    tag: null,
    notification: 12,
    IconColor: 'blue',
    icon: <RiDashboardFill />,
    child: [],
  },
  {
    link: '',
    key: 'offer',
    title: 'Offer',
    tag: 'New',
    permissionKey: '',
    IconColor: '#2E72B9',
    notification: null,
    icon: <MdLocalOffer />,
    child: [],
  },
  {
    link: '',
    key: 'comment',
    title: 'Comment',
    tag: 'Comment',
    permissionKey: '',
    IconColor: 'pink',
    notification: null,
    icon: <MdInsertComment />,
    child: [],
  },
  {
    link: '/users',
    key: 'users',
    title: 'Users',
    tag: 'Offer',
    permissionKey: '',
    IconColor: 'blue',
    notification: null,
    icon: <BsPeopleFill />,
    child: [],
  },

  {
    link: '',
    key: 'Deals',
    title: 'Deals',
    tag: 'Offer',
    permissionKey: '',
    IconColor: '#F2994A',
    notification: null,
    icon: <FaIdeal />,
    child: [],
  },
  {
    link: '/dashboard-revenue',
    key: 'Revenue',
    title: 'Revenue',
    permissionKey: '',
    tag: null,
    notification: 12,
    IconColor: 'green',
    icon: <SiScrollreveal />,
  }

]

export const AgentRemainSideConstant = [
  {
    link: null,
    key: 'Categories',
    title: 'Categories',
    permissionKey: '',
    tag: null,
    notification: 12,
    IconColor: 'green',
    icon: <MdCategory />,
  }
  ,
  {
    link: null,
    key: 'Tags',
    title: 'Tags',
    permissionKey: '',
    tag: null,
    notification: 12,
    IconColor: '#FF6633',
    icon: <RiPriceTag2Fill />,
  },
  {
    link: '/support',
    key: 'Setting',
    title: 'support',
    permissionKey: '',
    tag: null,
    notification: 2,
    IconColor: '#FFCB33',
    icon: <RiSettings5Fill />,
  }
  ,
  {
    link: null,
    key: 'Tags',
    title: 'Comments',
    permissionKey: '',
    tag: null,
    notification: 12,
    IconColor: '#2EE6CA',
    icon: <SiScrollreveal />,
  },
  {
    link: null,
    key: 'Setting',
    title: 'Setting',
    permissionKey: '',
    tag: null,
    notification: 2,
    IconColor: '#FFCB33',
    icon: <RiSettings5Fill />,
  }

]


