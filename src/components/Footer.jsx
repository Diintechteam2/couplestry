import { Truck, CreditCard, Shirt, Package, Mail, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full bg-white mt-12">
      {/* Top Row: Features */}
      <div className="w-full flex flex-col md:flex-row justify-center items-center gap-8 md:gap-0 py-8 border-b border-gray-200 bg-[#fff]">
        <div className="flex-1 flex flex-col items-center">
          <Truck size={36} />
          <span className="mt-2 font-medium text-lg text-center">Free Shipping on orders above ₹999</span>
        </div>
        <div className="flex-1 flex flex-col items-center">
          <CreditCard size={36} />
          <span className="mt-2 font-medium text-lg text-center">100% Secure Payments</span>
        </div>
        <div className="flex-1 flex flex-col items-center">
          <Shirt size={36} />
          <span className="mt-2 font-medium text-lg text-center">New Trendy<br />Styles</span>
        </div>
        <div className="flex-1 flex flex-col items-center">
          <Package size={36} />
          <span className="mt-2 font-medium text-lg text-center">Hassle Free Returns<br />and Exchange</span>
        </div>
      </div>
      {/* Main Footer */}
      <div className="w-full bg-[#FFC1CC] pt-10 pb-20 md:pb-4 px-4 md:px-16 lg:px-32">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Community */}
          <div className="col-span-1 flex flex-col items-start">
          <div className="flex flex-col items-center flex-1">
            <span className="text-[10px] text-gray-500 font-normal tracking-wider mb-1 md:text-xs">GROVERSONS</span>
            <span className="text-2xl md:text-4xl font-serif text-[#F48FB1] font-bold tracking-tight">Couples Try</span>
            </div>
            <h3 className="text-xl font-cursive font-semibold mb-2">Join Our Community</h3>
            <p className="mb-3 text-base">Stay up to date with the new collections, products and exclusive offers</p>
            <form className="flex w-full max-w-xs">
              <input type="email" placeholder="E-mail" className="flex-1 border border-gray-700 rounded-l px-4 py-2 outline-none" />
              <button type="submit" className="bg-[#F48FB1] hover:bg-[#e62e6b] text-white font-semibold px-6 py-2 rounded-r">JOIN</button>
            </form>
          </div>
          {/* Shop Links */}
          <div className="col-span-1">
            <h4 className="text-xl font-cursive font-semibold mb-3">Shop</h4>
            <ul className="space-y-1 text-base">
              <li>Bra</li>
              <li>Panties</li>
              <li>Athleisure</li>
              <li>Loungewear</li>
              <li>Winterwear</li>
              <li>PB Luxe</li>
              <li>Sale</li>
            </ul>
          </div>
          {/* Quick Links */}
          <div className="col-span-1">
            <h4 className="text-xl font-cursive font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-1 text-base">
              <li>About Us</li>
              <li>Contact Us</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
              <li>FAQs</li>
            </ul>
          </div>
          {/* Contact */}
          <div className="col-span-1">
            <h4 className="text-xl font-cursive font-semibold mb-3">Contact</h4>
            <div className="flex items-center gap-2 mb-2">
              <Phone size={20} />
              <span>+91 8147540362</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={20} />
              <span>customercare@couplestry.com</span>
            </div>
          </div>
        </div>
        <hr className="my-8 border-gray-300" />
        <div className="text-center text-base text-gray-700 pb-2">
          © Copyright 2025 GROVERSONS Couples Try. All Right Reserved.
        </div>
      </div>
    </footer>
  )
} 