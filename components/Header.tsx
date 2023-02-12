import Image from "next/image";
import { useSession, signOut } from "next-auth/react";

function Header() {
  const { data }  = useSession()
  const  user     = data?.user

  return (
    <div className="sticky top-0 z-50 bg-white flex items-center p-2 lg:px-5 shadow-md">
      <div className="left-header flex items-center">
        <Image
          src="https://links.papareact.com/5me" 
          width={40} 
          height={40} 
          alt="Next Facebook"
        />
        <div className="flex ml-2 items-center p-2">
          <p>Facebook Clone</p>
        </div>
      </div>

      <div className="center-header flex flex-grow justify-center">
        <div className="flex space-x-6 md:space-x-2">
        </div>
      </div>

      <div className="flex items-center sm:space-x-2 justify-end">
        <Image
            src={user?.image || ''}
            className="rounded-full cursor-pointer"
            width={40} 
            height={40} 
            alt="profile picture"
          />
        <p className="whitespace-nowrap font-semibold pr-3 hidden">{user?.name}</p>
        <p 
          className="cursor-pointer font-semibold ml-2"
          onClick={() => signOut() }
        >Sign out</p>
      </div>
    </div>
  )
}

export default Header