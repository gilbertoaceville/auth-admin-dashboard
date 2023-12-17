import {
  MdDashboard,
  MdSupervisedUserCircle,
  MdShoppingBag,
  MdAttachMoney,
  MdWork,
  MdAnalytics,
  MdPeople,
  MdOutlineSettings,
  MdHelpCenter,
} from "react-icons/md";

export const sideBarItems = [
  {
    title: "Pages",
    list: [
      {
        name: "Dashboard",
        href: "/dashboard",
        icon: <MdDashboard />,
      },
      {
        name: "Users",
        href: "/dashboard/users",
        icon: <MdSupervisedUserCircle />,
      },
      {
        name: "Products",
        href: "/dashboard/products",
        icon: <MdShoppingBag />,
      },
      {
        name: "Transactions",
        href: "/dashboard/transactions",
        icon: <MdAttachMoney />,
      },
    ],
  },
  {
    title: "Analytics",
    list: [
      {
        name: "Revenue",
        href: "/dashboard/revenue",
        icon: <MdWork />,
      },
      {
        name: "Reports",
        href: "/dashboard/reports",
        icon: <MdAnalytics />,
      },
      {
        name: "Teams",
        href: "/dashboard/teams",
        icon: <MdPeople />,
      },
    ],
  },
  {
    title: "User",
    list: [
      {
        name: "Settings",
        href: "/dashboard/settings",
        icon: <MdOutlineSettings />,
      },
      {
        name: "Help",
        href: "/dashboard/help",
        icon: <MdHelpCenter />,
      },
    ],
  },
];
