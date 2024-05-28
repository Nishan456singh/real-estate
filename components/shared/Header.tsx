import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs"
import Image from "next/image"
import Link from "next/link"
import { Button } from "../ui/button"
import NavItems from "./NavItems"
import MobileNav from "./MobileNav"


const Header = () => {
  return (
    <header className="relative w-full  bg-gray-50 z-10">
      <div className="flex items-center justify-around">
        <Link href="/" className="">
          <Image src="/assets/images/Logo.svg" width={130} height={24}
            alt="Logo"
            className="rounded-full bg-black/[0.9]" />
        </Link>

        
        <nav className="md:flex-between hidden w-full max-w-xs">
          <NavItems />
          
        </nav>
        

        <div className="flex w-30 items-center">
          <UserButton afterSignOutUrl="/" />

          <SignedOut>
            <Button asChild className="rounded-full" size="lg">
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