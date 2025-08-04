import Footer from "../components/footer";
import Header from "../components/header";

const contactList: { label: string; value: string; icon: string }[] = [
  {
    label: "Phone Number",
    value: "0878-6368-9058",
    icon: "/call.png",
  },
  {
    label: "Email Address",
    value: "coffeemaston@gmail.com",
    icon: "/email.png",
  },
  {
    label: "Location",
    value:
      "Jl. Rereng Barong No. 47, Sukaluyu, Kec. Cibeunying Kaler, Kota Bandung",
    icon: "/location.png",
  },
];

const ContactPage = () => {
  return (
    <div className="relative h-screen w-full overflow-x-hidden">
      <img
        src="/contact-banner.png"
        alt="Hero Banner"
        className="w-full h-full object-cover brightness-75"
      />
      <Header />
      <div className="absolute inset-0 flex flex-col items-center justify-center w-fit sm:w-2xl md:w-3xl lg:w-5xl xl:w-7xl text-white mx-auto space-y-6 px-4">
        <h2 className="text-5xl font-bold font-lora">Contact Information</h2>
        <h2 className="text-lg text-center max-w-xl font-nunito">
          Kami senang mendengar dari Anda! Untuk pertanyaan, pemesanan, kerja
          sama, atau saran, silakan hubungi kami melalui informasi berikut
        </h2>
      </div>
      <div className="p-16 bg-[#204228] flex flex-col gap-8 px-[12.5rem]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="flex flex-col gap-8">
            {contactList.map((contact) => (
              <div
                key={contact.label}
                className="bg-white shadow-lg hover:shadow-xl transition-all duration-200 rounded-lg overflow-hidden w-full h-full flex items-center gap-6 p-4"
              >
                <div className="flex size-16 p-4 bg-gray-100 rounded-full items-center justify-center">
                  <img
                    src={contact.icon}
                    alt={contact.label}
                    className="w-full rounded-xl object-cover"
                  />
                </div>
                <div className="flex flex-col font-nunito">
                  <span className="text-2xl font-bold">{contact.label}</span>
                  <span>{contact.value}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-white shadow-lg hover:shadow-xl transition-all duration-200 rounded-lg overflow-hidden w-full h-full flex flex-col gap-6 p-4">
            <h2 className="text-2xl font-bold font-nunito">Send Message</h2>
            <p className="font-nunito">
              Atau, kirimkan pesan Anda langsung melalui formulir di bawah ini.
              Tim kami akan merespons secepat mungkin.
            </p>
            <div className="flex gap-4 font-nunito">
              <div className="flex-1">
                <input
                  placeholder="Namamu"
                  className="border px-4 py-2.5 w-full"
                  required
                />
              </div>
              <div className="flex-1">
                <input
                  placeholder="Alamat Email"
                  className="border px-4 py-2.5 w-full"
                  required
                />
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-1">
                <input
                  placeholder="No HP"
                  className="border px-4 py-2.5 w-full"
                />
              </div>
              <div className="flex-1">
                <input
                  placeholder="Subjek"
                  className="border px-4 py-2.5 w-full"
                />
              </div>
            </div>
            <div className="flex gap-4">
              <textarea
                placeholder="Pesan"
                className="border px-4 py-2.5 w-full"
                rows={6}
                required
              />
            </div>
            <div>
              <button
                className="bg-[#e6b121] text-white py-2 px-8 text-xl font-semibold rounded-xl cursor-pointer font-nunito"
                onClick={() => alert("Terkirim!")}
              >
                Kirim Pesan
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <h2 className="text-3xl text-white font-extrabold font-nunito mb-4">
            Find Us on Google Maps
          </h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.9701023191396!2d107.6276264758274!3d-6.894179593104967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e7d1a4e41289%3A0x57472997d9338d23!2sCOFFEE%20MASTON!5e0!3m2!1sen!2sid!4v1753868707793!5m2!1sen!2sid"
            width="100%"
            height="450"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;
