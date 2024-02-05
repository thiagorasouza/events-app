import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="container mx-auto flex flex-col py-2 min-h-screen">
      <Header />
      <main className="w-full md:w-5/6 md:mx-auto py-3">{children}</main>
      <Footer />
    </div>
  );
}
