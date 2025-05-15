import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PersonIcon from '@mui/icons-material/Person';
import WorkIcon from '@mui/icons-material/Work';
import ContactsIcon from '@mui/icons-material/Contacts';
import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';
import SideImg from "../assets/sidebar.jpg";
import Link from 'next/link';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

// Menu items.
const items = [
  {
    title: "Home",
    url: "/",
    icon: HomeIcon,
  },
  {
    title: "About",
    url: "/about",
    icon: PersonIcon ,
  },
  {
    title: "Skills",
    url: "/progers",
    icon: SettingsIcon ,
  },
  {
    title: "work",
    url: "/work",
    icon: WorkIcon,
  },
  {
    title: "contact",
    url: "/contact",
    icon: ContactsIcon,
  },
]

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
                <div className="imgInfo  flex justify-center items-center flex-col gap-4 ">
                        <img src={SideImg.src} alt="kareem" className="rounded-full w-24 h-24 my-2
                        border-4 border-gray-300" />
                        <h2 className="capitalize text-2xl">Kareem ashraf</h2>
                        <div className="social">
                                <ul className="items flex justify-center items-center gap-4">
                                    <li className="item">
                                        <a href="https://www.facebook.com/profile.php?id=100072562880983&locale=ar_AR">
                                            <FacebookIcon/>
                                        </a>
                                    </li>
                                    <li className="item">
                                        <a href="https://github.com/KareemAshraf33925">
                                            <GitHubIcon/>
                                        </a>
                                    </li>
                                    <li className="item">
                                        <a href="www.linkedin.com/in/kareem-ashraf-238a3930a">
                                            <LinkedInIcon/>
                                        </a>
                                    </li>
                                </ul>
                        </div>
                </div>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url} >
                      <item.icon />
                      <span className="text-xl">{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
