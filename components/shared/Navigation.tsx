import MobileNav from "./MobileNav";
import NavItems from "./NavItems";

function Navigation() {
  return (
    <nav>
      <div className="hidden md:block">
        <NavItems />
      </div>
      <div className="md:hidden">
        <MobileNav />
      </div>
    </nav>
  );
}

export default Navigation;
