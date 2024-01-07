function Header() {
  return (
    <header className="flex justify-between bg-white">
      <div className="text-xl font-bold">Events App</div>
      <nav>
        <ul className="flex gap-4">
          <li>Home</li>
          <li>Create Event</li>
          <li>My Profile</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
