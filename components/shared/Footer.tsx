function Footer() {
  return (
    <footer className="mt-auto flex flex-col text-center md:flex-row md:justify-between gap-2 ">
      <p>&#169; Events App {new Date().getFullYear()}.</p>
      <p>This project is under development by Thiago Souza.</p>
    </footer>
  );
}

export default Footer;
