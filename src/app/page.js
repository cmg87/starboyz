"use client"; // Ensures client-side rendering for react-scroll-parallax



export default function Home() {
  return (
      <div className="relative">
        <section
          className="bg-center flex items-center justify-center h-screen"
          style={{
            backgroundImage: `url('/background.webp')`, 
          }}
        >
          <a href="https://www.smfbthebrand.com/shop/starboy-kevin-marino-official-merch/G7JXOAA2TFHSGVHYBNCVC5BH">
          <button className="bg-black text-white py-4 px-8 text-lg font-bold transition-all shadow-lg hover:shadow-[0_0_20px_5px_red]">
            Shop Merch
          </button>
          </a>
        </section>  
      </div>
    
  );
}
