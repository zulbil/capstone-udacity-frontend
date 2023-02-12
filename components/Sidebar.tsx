import {
    User,
    UserGroup
  } from "heroicons-react"
import SidebarRow from "./SidebarRow";
import { useSession } from "next-auth/react";

export default function Sidebar() {
    const session         =   useSession()
    const data            =   session?.data
    const user            =   data?.user

    return (
        <div className="p-2 mt-5 max-w-[600px] xl:min-w-[300px]">
            <SidebarRow src={user?.image} title={user?.name}/>
            <SidebarRow Icon={User} title="Friends" />
            <SidebarRow Icon={UserGroup} title="Groups" />
            {/* <SidebarRow Icon={ShoppingBag} title="Marketplace" />
            <SidebarRow Icon={DesktopComputer} title="Watch" />
            <SidebarRow Icon={Calendar} title="Events" />
            <SidebarRow Icon={Clock} title="Memories" />
            <SidebarRow Icon={ChevronDown} title="See More" /> */}
        </div>
    )
}
