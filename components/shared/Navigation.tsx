import { UserButton } from "@clerk/nextjs";
import MobileNav from "./MobileNav";
import NavItems from "./NavItems";

function Navigation() {
  return (
    <nav className="flex items-center gap-5">
      <div className="hidden md:block">
        <NavItems />
      </div>
      <UserButton afterSignOutUrl="/" />
      <div className="md:hidden">
        <MobileNav />
      </div>
    </nav>
  );
}

export default Navigation;
