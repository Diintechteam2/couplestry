import { useState } from "react"
import { User, Search, Heart, ShoppingBag, Package, Menu, X, ChevronRight } from "lucide-react"

const menuItems = [
  "BRA",
  "PANTIES",
  "LOUNGEWEAR",
  "ATHLEISURE",
  "CO-ORD SETS",
  "SILKY BLISS",
  "WINTERWEAR",
  "PB LUXE",
  "SALE",
  "FIND YOUR SIZE",
]

const icons = [
  { label: "User", icon: <User size={20} /> },
  { label: "Search", icon: <Search size={20} /> },
  { label: "Wishlist", icon: <Heart size={20} /> },
  { label: "Cart", icon: <ShoppingBag size={20} /> },
]

const categoryItems = [
  { name: "Bra", image: "/Bra_icon.avif" },
  { name: "Panty", image: "/panty_icon.avif" },
  { name: "Athleisure", image: "/athleisure_icon.avif" },
  { name: "Loungewear", image: "/Loungewear_icon.avif" },
  { name: "Co-ord Sets", image: "/co-ordsets_icon.avif" },
  { name: "Winterwear", image: "/winterwear_icon.avif" },
  { name: "Sale", image: "/sale_icon.avif", special: true },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      {/* Top Bar (not fixed, always visible at top) */}
      <div className="w-full bg-[#FFC1CC] text-center flex justify-between items-center px-4 py-2 text-sm md:flex md:text-base md:py-2 md:px-4"
        style={{ display: menuOpen ? 'none' : undefined }}
      >
        <span className="flex-1 flex items-center justify-center text-[10px] md:text-sm leading-tight md:leading-normal md:font-bold">
          💟 Enjoy FREE shipping on all orders above ₹999! 💗 Shop now & save big!
        </span>
        <a href="#" className="text-black flex items-center gap-1 ml-2 whitespace-nowrap hidden md:flex">
          <Package size={16} />
          Track Order
        </a>
      </div>

      {/* Mobile Menu Drawer */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-20 flex">
          <div className="w-4/5 max-w-xs bg-white h-full flex flex-col">
            <div className="flex items-center justify-between px-4 py-4">
              <button onClick={() => setMenuOpen(false)} aria-label="Close menu">
                <X size={28} />
              </button>
            </div>
            <nav className="flex-1 overflow-y-auto">
              <ul className="divide-y divide-gray-200">
                {menuItems.map((item) => (
                  <li key={item} className="flex items-center justify-between px-6 py-3 text-[#F48FB1] font-medium text-base">
                    <span>{item}</span>
                    <ChevronRight size={20} />
                  </li>
                ))}
              </ul>
            </nav>
            <div className="border-t border-gray-200 px-6 py-4 flex items-center gap-2 text-gray-700">
              <User size={22} />
              <span className="text-base font-medium">LOGIN</span>
            </div>
          </div>
          <div className="flex-1" onClick={() => setMenuOpen(false)} />
        </div>
      )}

      {/* Sticky Navbar (sticks to top after scrolling) */}
      <nav className="w-full bg-white px-4 py-3 md:py-6 shadow-sm sticky top-0 z-40">
        <div className="relative flex items-center justify-between md:mt-3">
          {/* Hamburger for mobile */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setMenuOpen(true)} aria-label="Open menu">
              <Menu size={24} />
            </button>
          </div>
          {/* Logo - Center */}
          <div className="flex flex-col items-center flex-1 md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
            <span className="text-2xl md:text-5xl font-serif text-[#d6668c] font-bold tracking-tight">Couples Try</span>
          </div>
          {/* Icons - Right */}
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6">
            {/* User icon: only md+ */}
            <span className="cursor-pointer hidden md:inline-flex"><User size={20} /></span>
            {/* Search icon: always */}
            <span className="cursor-pointer"><Search size={20} /></span>
            {/* Heart icon: always */}
            <span className="cursor-pointer"><Heart size={20} /></span>
            {/* Cart icon: only md+ */}
            <span className="cursor-pointer hidden md:inline-flex"><ShoppingBag size={20} /></span>
          </div>
        </div>
        {/* Menu - Below Logo, only on md+ */}
        <div className="hidden md:flex justify-center mt-10">
          <ul className="flex flex-wrap justify-center gap-4 md:gap-6 text-xs md:text-sm font-medium text-black">
            {menuItems.map((item) => (
              <li key={item} className="cursor-pointer">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Product Categories Section */}
      <div className="w-full bg-[#FFC1CC] px-2 md:px-4 py-4 md:py-6">
        <div className="flex md:justify-center justify-start items-center gap-2 md:gap-6 overflow-x-auto scrollbar-hide">
          {categoryItems.map((category) => (
            <div key={category.name} className="flex flex-col items-center min-w-[22vw] max-w-[22vw] md:min-w-[100px] md:max-w-[120px] cursor-pointer">
              <div
                className={`w-14 h-14 md:w-24 md:h-24 rounded-lg overflow-hidden mb-1 md:mb-2 ${category.special ? "bg-[#FF6B6B]" : "bg-white"} shadow-sm`}
              >
                <img
                  src={category.image || "/placeholder.svg"}
                  alt={category.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-[10px] md:text-sm font-medium text-gray-800 text-center">{category.name}</span>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </>
  )
}
