import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs"
import Image from "next/image"
import Link from "next/link"
import { Button } from "../ui/button"
import NavItems from "./NavItems"
import MobileNav from "./MobileNav"


const Header = () => {
  return (
    <header className="relative w-full bg-black/[0.9] z-10">
      <div className="flex items-center gap-9 justify-around">
        <Link href="/" className="">
          <Image src="/assets/images/Logo.svg" width={110} height={20}
            alt="Logo"
            className="rounded-full p-2" />
        </Link>

        
        <nav className="md:flex-between hidden w-full max-w-xs">
          <NavItems />
          
        </nav>
        

        <div className="flex w-30 items-center">
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