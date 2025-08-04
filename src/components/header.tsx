import { useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const links = [
    {
      url: "/",
      label: "Home",
      icon: "/home.png",
    },
    {
      url: "/about",
      label: "About",
      icon: "/about.png",
    },
    {
      url: "/menu",
      label: "Menu",
      icon: "/menu.png",
    },
    {
      url: "/contact",
      label: "Contact",
      icon: "/contact.png",
    },
  ];

  const location = useLocation();
  const navigate = useNavigate();

  return (
    <header className="absolute top-8 left-1/2 transform -translate-x-1/2 z-10 w-full sm:w-2xl md:w-3xl lg:w-5xl xl:w-7xl">
      <div className="bg-green-900 text-white px-6 py-3 rounded-2xl flex items-center gap-6 shadow-lg w-full">
        <div className="flex justify-between items-center w-full gap-4 flex-wrap">
          <img
            src="/logo.png"
            alt="Logo"
            className="h-10 cursor-pointer"
            onClick={() => navigate("/")}
          />
          <nav className="flex items-center space-x-2 md:space-x-8">
            {links.map((link) => (
              <a
                key={link.url}
                href={link.url}
                className={`flex items-center gap-2 font-nunito ${
                  location.pathname === link.url
                    ? "text-[#dbac2e] font-semibold"
                    : ""
                }`}
              >
                <div className="size-6">
                  <img
                    src={link.icon}
                    alt={link.label}
                    className="w-full object-cover"
                  />
                </div>
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
