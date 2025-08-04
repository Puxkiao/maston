import Footer from "../components/footer";
import Header from "../components/header";

const AboutPage = () => {
  return (
    <div className="relative h-screen w-full overflow-x-hidden">
      <img
        src="/about-banner.JPG"
        alt="Hero Banner"
        className="w-full h-full object-cover brightness-50"
      />
      <Header />
      <div className="absolute inset-0 flex flex-col items-center justify-center w-fit sm:w-2xl md:w-3xl lg:w-5xl xl:w-7xl text-white mx-auto space-y-6 px-4">
        <h2 className="text-6xl font-bold font-lora uppercase">
          Coffee Maston
        </h2>
        <h2 className="text-4xl text-[#febe00] font-nunito italic">
          Homy & Cozy
        </h2>
      </div>
      <div className="flex flex-col gap-16 py-12">
        <section className="w-full space-y-16">
          {/* ABOUT SECTION */}
          <div className="grid md:grid-cols-2 gap-8 items-start px-12 lg:px-[12.5rem]">
            <div>
              <h2 className="text-3xl font-bold text-green-900 mb-4 font-lora">
                About
              </h2>
              <p className="text-sm text-black leading-relaxed font-nunito">
                Maston Coffee didirikan pada tahun 2018 oleh Pirtondi C. Gulton
                sebagai bentuk komitmen dalam menghadirkan pengalaman ngopi yang
                hangat, autentik, dan penuh makna. Dengan konsep rumahan yang
                nyaman, Maston Coffee bukan hanya tempat menikmati kopi, tetapi
                juga ruang untuk pulang, berbagi cerita, dan membangun koneksi.
              </p>
            </div>
            <img
              src="/maston-about.jpg"
              alt="Maston Sign"
              className="rounded-2xl w-full h-auto object-cover"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-start px-12 lg:px-[12.5rem]">
            <img
              src="/banner.jpg"
              alt="Maston Interior"
              className="rounded-2xl w-full h-auto object-cover"
            />
            <p className="text-sm text-black leading-relaxed font-nunito">
              Maston Coffee beroperasi setiap hari dengan jam buka yang
              fleksibel dan disesuaikan dengan kebutuhan pelanggan. Pada hari
              biasa, kedai buka – pilihan ideal untuk sarapan pagi, waktu
              produktif siang hari, hingga bersantai di malam hari.
            </p>
          </div>

          {/* OWNER SECTION */}
          <div className="pr-12 lg:pr-[12.5rem]">
            <div className="bg-green-900 text-white p-6 rounded-r-3xl flex flex-wrap gap-8 items-center pl-[12.5rem]">
              <div className="flex flex-col justify-center">
                <h2 className="text-4xl font-bold text-white font-lora">
                  Owner
                </h2>
                <img
                  src="/owner.png"
                  alt="Owner"
                  className="rounded-2xl max-w-[160px] w-full object-cover object-top"
                />
              </div>
              <div className="flex-1">
                <p className="text-sm font-nunito">
                  <span className="font-bold">
                    Partondi C. Gulton – Owner Maston Coffee
                  </span>
                  <br />
                  Adalah pendiri sekaligus pemilik dari Maston Coffee, sebuah
                  coffee shop rumahan yang lahir dari visi sederhana namun
                  bermakna: menciptakan tempat ngopi yang membuat orang merasa
                  seperti di rumah sendiri. Berdiri sejak tahun 2018 di Bandung,
                  Maston Coffee telah berkembang menjadi salah satu tempat
                  favorit bagi mahasiswa dan warga lokal yang mencari suasana
                  hangat, harga terjangkau, dan cita rasa kopi yang khas.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;
