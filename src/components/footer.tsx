const Footer = () => {
  const social = [
    {
      src: "/instagram.png",
      alt: "Instagram",
      url: "https://www.instagram.com/coffeemaston?igsh=OXF2YjJzNHI0M2xz",
    },
    {
      src: "/facebook.png",
      alt: "Facebook",
      url: "https://www.facebook.com/share/1DFDDcki1c/",
    },
    {
      src: "/tiktok.png",
      alt: "TikTok",
      url: "https://www.tiktok.com/@coffeemaston?_t=ZS-8yOwfFRjwAO&_r=1",
    },
  ];

  return (
    <footer className="bg-[#14321D] w-full px-6 md:px-20 py-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center lg:items-end h-full gap-6">
        {/* Left: Logo + Text */}
        <div className="flex flex-col items-start text-white max-w-sm">
          <img src="/logo.png" alt="Maston Logo" className="h-12 mb-2" />
          <p className="text-xs leading-relaxed font-nunito">
            Maston Coffee <br />
            didirikan pada 2018 oleh Pirtondi C. Gultom, usaha ini <br />
            menawarkan menu makanan dan minuman yang beragam
          </p>
        </div>

        {/* Middle: Copyright */}
        <div className="text-white font-semibold text-sm text-center whitespace-nowrap font-nunito">
          © 2025 Manage By Benediktus Jonathan Sianipar
        </div>

        {/* Right: Follow Us */}
        <div className="flex flex-col items-center md:items-end text-white gap-2">
          <span className="text-xl font-bold font-nunito">Follow Us</span>
          <div className="flex gap-3">
            {social.map((s) => (
              <img
                key={s.src}
                src={s.src}
                alt={s.alt}
                className="h-10 cursor-pointer"
                onClick={() => {
                  window.open(s.url, "_blank");
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
