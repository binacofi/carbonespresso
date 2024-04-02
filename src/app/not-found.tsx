import Footer from "./components/footer";
import Navbar from "./components/navbar";
import WhatsappButton from "./components/whatsapp";

export default function NotFound() {
  return(
    <div>
    <Navbar/>
    <div className="w-full flex flex-col h-screen gap-5 justify-center items-center p-10 ">
    <h1 className="text-5xl text-footer font-bold">Error 404</h1>
    <h2 className="text-xl">Esta página no existe o no ha sido desarrollada</h2>
    </div>
    <WhatsappButton/>
    <Footer/>
    </div>  
  )
}
