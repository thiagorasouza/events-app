import Navigation from "./Navigation";

function Header() {
  return (
    <header className="flex justify-between bg-white px-3">
      <div className="text-2xl font-bold">Events App</div>
      <Navigation />
    </header>
  );
}

export default Header;
