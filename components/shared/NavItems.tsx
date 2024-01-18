import Link from "next/link";

function NavItems() {
  return (
    <ul className="flex flex-col gap-2 md:flex-row md:gap-3">
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/events/create">Create Event</Link>
      </li>
      <li>My Profile</li>
    </ul>
  );
}

export default NavItems;
