import React from "react";
import Footer from "../components/footer";
import Header from "../components/header";

const MenuPage = () => {
  const bestSellerFood = [
    {
      title: "Donat Mini",
      desc: "Dengan ukuran mungil yang pas di genggaman, setiap gigitan menyuguhkan rasa yang nikmat dan tekstur empuk yang bikin ketagihan.",
      image: "/donat-mini.jpg",
    },
    {
      title: "Singkong Pedas",
      desc: "Camilan tradisional yang naik kelas! Potongan singkong pilihan digoreng hingga renyah di luar, lembut di dalam, lalu disiram bumbu pedas khas yang kaya rempah.",
      image: "/singkong-pedas.jpg",
    },
    {
      title: "French Fries",
      desc: "Disajikan hangat dengan taburan bumbu spesial yang gurihnya pas di lidah.",
      image: "/french-fries.jpg",
    },
  ];

  const bestSellerDrink = [
    {
      title: "Red Velvet",
      desc: "Perpaduan sempurna antara rasa khas red velvet yang lembut dengan sentuhan creamy dari susu segar.",
      image: "/red-velvet.jpg",
    },
    {
      title: "Kopsu Pada Umumnya",
      desc: "Perpaduan antara kopi dan susu yang membuat rasa kopi memiliki rasa yang creamy.",
      image: "/kopsu-pada-umumnya.jpg",
    },
    {
      title: "Cappucino",
      desc: "Kopi susu dengan lebih banyak foam dan diberikan taburan kakao membuat rasa menjadi lebih menenangkan.",
      image: "/cappucino.jpg",
    },
  ];

  const renderCard = (
    item: (typeof bestSellerDrink)[0] | (typeof bestSellerFood)[0]
  ) => (
    <div className="bg-white shadow-lg hover:shadow-xl transition-all duration-200 rounded-xl overflow-hidden max-w-xs w-full h-full">
      <div className="p-4">
        <img
          src={item.image}
          alt={item.title}
          className="w-full rounded-xl h-64 object-cover object-top"
        />
      </div>
      <div className="px-4 pb-4">
        <h3 className="text-[#e6b121] font-bold text-xl mb-1 font-nunito">
          {item.title}
        </h3>
        <p className="text-sm text-gray-700 font-nunito">{item.desc}</p>
      </div>
    </div>
  );

  return (
    <div className="relative h-screen w-full overflow-x-hidden">
      <img
        src="/menu-banner.JPG"
        alt="Hero Banner"
        className="w-full h-full object-cover brightness-75"
      />
      <Header />
      <div className="absolute inset-0 flex flex-col items-center justify-center w-fit sm:w-2xl md:w-3xl lg:w-5xl xl:w-7xl text-white mx-auto space-y-6 px-4">
        <h2 className="text-6xl font-bold font-lora">Menu</h2>
        <h2 className="text-4xl font-nunito italic">Menu Terlaris Disini</h2>
      </div>
      <section className="py-16 px-4 max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-green-900 mb-6 font-lora italic">
          Best Seller Food
        </h2>
        <div className="grid md:grid-cols-3 gap-4 items-center justify-center mb-16">
          {bestSellerFood.map((item, idx) => (
            <React.Fragment key={idx}>{renderCard(item)}</React.Fragment>
          ))}
        </div>

        <h2 className="text-4xl font-bold text-green-900 mb-6 font-lora italic">
          Best Seller Drink
        </h2>
        <div className="grid md:grid-cols-3 gap-4 items-center justify-center">
          {bestSellerDrink.map((item, idx) => (
            <React.Fragment key={idx}>{renderCard(item)}</React.Fragment>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default MenuPage;
