import { SignedOut, UserButton } from "@clerk/nextjs"
import Image from "next/image"
import Link from "next/link"
import { Button } from "../ui/button"
import NavItems from "./NavItems"
import MobileNav from "./MobileNav"


const Header = () => {
  return (
    <header className="relative w-full text-black z-10">
      <div className="flex items-center gap-9 justify-between px-2">
        <Link href="/" className="">
          <Image src="/assets/images/Logo.svg" width={110} height={20}
            alt="Logo"
            className="rounded-full p-2" />
        </Link>
        <nav className="md:flex-between hidden w-full max-w-xs">
          <NavItems />
        </nav>
        

        <div className="flex w-30 items-center px-2">
          <UserButton afterSignOutUrl="/" />  
          <SignedOut>
            <Button asChild className="rounded-sm" size="sm">
              <Link href="/sign-in">
                Login
              </Link>
            </Button>
          </SignedOut>
          <MobileNav />
        </div>
      </div>
    </header>
  )
}

export default Header