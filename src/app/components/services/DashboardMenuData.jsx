import { HomeIcon, IntegrationsIcon, PricingIcon, SettingsIcon, StarIcon, TemplateIcon, UserIcon } from "@/icons/Icons";

export const dashboardMenu = [
  {
    title: "Dashboard",
    icon:<HomeIcon/>,
    submenu: [
      { title: "All pages" },
      { title: "Reports" },
      { title: "Products" },
      { title: "Tasks" },
    ],
  },
  { title: "Features"  ,  icon:<StarIcon/> },
  { title: "Users"  ,  icon:<UserIcon/>},
  { title: "Pricing"  ,  icon:<PricingIcon/>,submenu: [
      { title: "All pages" },
      { title: "Reports" },
      { title: "Products" },
      { title: "Tasks" },
    ],},
  { title: "Integrations"  ,  icon:<IntegrationsIcon/>},
  { title: "Settings"  ,  icon:<SettingsIcon/>},
  { title: "Template pages"  ,  icon:<TemplateIcon/>},
];
