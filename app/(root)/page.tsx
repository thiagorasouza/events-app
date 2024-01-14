import Collection from "@/components/home/Collection";
import Hero from "@/components/home/Hero";
import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
export default function Home() {
  return (
    <div className="container mx-auto flex flex-col px-3 py-2 bg-slate-200 min-h-screen">
      <Header />
      <main className="md:w-5/6 mx-auto">
        <Hero />
        <Collection />
      </main>
      <Footer />
    </div>
  );
}
