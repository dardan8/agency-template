import ClientsSlider from "./components/clients-slider";
import Footer from "./components/footer";
import Header from "./components/header";
import Features from "./components/features";
import Accordion from "./components/accordion/accordion";

export default function Home() {
  return (
    <main className='flex flex-col items-center justify-between w-full'>
      <Header />
      <div className='w-[50%] py-10'>
        <ClientsSlider />
      </div>
      <div className='bg-gray-100 w-full px-[20%]'>
        <Features />
      </div>
      <div className='w-[50%] py-10'>
        <Accordion />
      </div>
      <Footer />
    </main>
  );
}
