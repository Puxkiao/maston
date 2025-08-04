import { useNavigate } from "react-router-dom";
import Footer from "../components/footer";
import Header from "../components/header";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="relative h-screen w-full overflow-x-hidden">
      <img
        src="/banner.jpg"
        alt="Hero Banner"
        className="w-full h-full object-cover"
      />
      <Header />
      <div className="absolute inset-0 flex flex-col items-start justify-center w-fit sm:w-2xl md:w-3xl lg:w-5xl xl:w-7xl text-white mx-auto space-y-6 px-0">
        <h2 className="text-4xl font-nunito">Hi!</h2>
        <h1 className="text-5xl font-bold font-nunito">
          Selamat Datang di Website Kami
        </h1>
        <p className="text-3xl text-[#febe00] font-semibold font-lora italic">
          Tempat pulang Sebelum pulang
        </p>
      </div>
      <div className="flex flex-col gap-16 py-24">
        {/* About Section */}
        <section className="flex">
          <div className="bg-[#204228] rounded-l-[50px] max-w-6xl p-10 flex items-center justify-between ml-auto flex-wrap gap-4 lg:pr-52">
            <div className="text-white flex-1">
              <h2 className="text-3xl font-bold mb-4 font-lora">ABOUT</h2>
              <p className="text-sm leading-relaxed mb-6 font-nunito">
                Maston Coffee didirikan pada tahun 2018 oleh Partondi C. Gulton
                sebagai bentuk komitmen dalam menghadirkan pengalaman ngopi yang
                hangat, autentik, dan penuh makna. Dengan konsep rumahan yang
                nyaman, Maston Coffee bukan hanya tempat menikmati kopi, tetapi
                juga ruang untuk pulang, berbagi cerita, dan membangun koneksi.
              </p>
              <div className="flex items-center justify-center">
                <button
                  className="bg-white text-[#204228] px-6 py-2 rounded-md w-xs text-center cursor-pointer hover:text-[#122516] transition-colors duration-300 font-nunito font-extrabold"
                  onClick={() => navigate("/about")}
                >
                  See More
                </button>
              </div>
            </div>
            <div>
              <img
                src="/maston-about.jpg"
                alt="Maston about"
                className="rounded-3xl max-w-lg"
              />
            </div>
          </div>
        </section>

        {/* Menu Section */}
        <section className="flex">
          <div className="bg-[#204228] rounded-r-[50px] max-w-6xl p-6 flex items-center justify-between mr-auto flex-wrap gap-4 lg:pl-[13.5rem]">
            <div className="flex gap-x-8">
              <div className="flex flex-col items-center justify-center gap-y-2">
                <div className="text-[#febe00] font-bold text-3xl font-lora">
                  FOOD
                </div>
                <div className="bg-white size-52 flex items-center justify-center rounded-xl">
                  <img
                    src="/food.png"
                    alt="Maston food"
                    className="rounded-3xl max-w-[80%]"
                  />
                </div>
              </div>
              <div className="flex flex-col items-center justify-center gap-y-2">
                <div className="text-[#febe00] font-bold text-3xl font-lora">
                  DRINK
                </div>
                <div className="bg-white size-52 flex items-center justify-center rounded-xl">
                  <img
                    src="/drink.png"
                    alt="Maston drink"
                    className="rounded-3xl max-w-[80%]"
                  />
                </div>
              </div>
            </div>
            <div className="text-white text-right px-4 max-w-xs">
              <h2 className="text-3xl font-bold mb-2 font-lora">Menu</h2>
              <p className="text-sm mb-4 font-nunito">
                Selain menawarkan Suasana yang homey, kita juga menyediakan
                makanan yang tidak kalah asik
              </p>
              <button
                className="bg-white text-[#204228] w-3xs font-extrabold px-6 py-2 rounded-md cursor-pointer hover:text-[#122516] transition-colors duration-300 font-nunito"
                onClick={() => navigate("/menu")}
              >
                See More
              </button>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default HomePage;
