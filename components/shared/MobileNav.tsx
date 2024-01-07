import Image from "next/image";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import NavItems from "./NavItems";

function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger>
        <Image
          src="/icons/menu.svg"
          alt="Mobile menu trigger"
          width={24}
          height={24}
        />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader className="mb-3">
          <SheetTitle>Events App</SheetTitle>
        </SheetHeader>
        <NavItems />
      </SheetContent>
    </Sheet>
  );
}

export default MobileNav;
