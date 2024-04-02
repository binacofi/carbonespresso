import Link from "next/link";

export default function Home() {
  return (
  <main id="home" className="w-full flex justify-center">
    <div className="flex flex-col justify-center text-center py-20 px-10 sm:px-20 w-full bg-white/80 backdrop-blur-sm max-w-4xl text-footer gap-4 shadow">
      <h1 className="text-3xl font-bold text-gray-700">Propuesta para tienda online</h1>
      <h2 className="text-xl font-normal text-button">Carbonespresso</h2>
      <div className="mt-5">
        <p>Somos El Tercer Café, diseñamos y desarrollamos software orientado a la web y queremos ofrecerte una nueva tienda virtual. Hemos visto el potencial de su marca y hemos preparado esta demo. </p>
        <p className="mt-5">Anímate a ser uno de nuestros primeros clientes ¡Tenemos un precio especial para tí!</p>
      </div>
      <Link href="/tienda" className="w-full flex justify-center ">
        <div className="w-full flex h-80 hover:shadow-lg transition-all duration-200 rounded mt-5 items-center justify-center" id="demo-view">
          <span className="text-gray-600 text-xl font-bold bg-white/70">Ir a la demo</span> 
        </div>
      </Link>
      <p className="mt-5 text-gray-600 font-light text-sm">Construído por <a href="#" className="text-sky-400 underline font-medium italic">El tercer café</a>{` <eltercercafe@gmail.com>`}</p>
      <div className="flex flex-col gap-2 text-sm text-gray-600">
        <span className="font-bold">Whatsapp</span>
        <span><a className="underline text-sky-400 font-normal" href="https://wa.me/58424544188" target="_blank">+58424544188</a></span>
        <span><a className="underline text-sky-400 font-normal" href="https://wa.me/573152268206" target="_blank">+573152268206</a></span>
        <p className="mt-3"><span className="font-bold">Instagram: </span>@eltercercafeweb</p>
      </div>
      <div className="mt-10 flex flex-col gap-4 md:flex-row items-center justify-center text-white">
        <a className="hidden bg-green-500 hover:bg-whatsapp p-2 rounded-sm w-full font-normal text-sm max-w-48 hover:shadow-lg transition-all duartion-100" href="" target="_blank">Contáctanos</a> 
      </div>
    </div>
  </main>
  );
}
