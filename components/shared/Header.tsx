import Navigation from "./Navigation";

function Header() {
  return (
    <header className="flex justify-between bg-white">
      <div className="text-xl font-bold">Events App</div>
      <Navigation />
    </header>
  );
}

export default Header;
