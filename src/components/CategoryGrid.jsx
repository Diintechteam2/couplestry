import { useEffect, useRef, useState } from "react"
import { API_BASE_URL } from "../config"
import axios from "axios"

const categories = [
  {
    name: "Bras",
    image: "/cat-bra.webp",
    bg: "/catagoryimage-1.webp",
  },
  {
    name: "Panties",
    image: "/cat-panty.webp",
    bg: "/catagoryimage-2.webp",
  },
  {
    name: "Loungewear",
    image: "/cat-lounge.webp",
    bg: "/catagoryimage-3.webp",
  },
  {
    name: "Athleisure",
    image: "/cat-athleisure.webp",
    bg: "/catagoryimage-4.webp",
  },
  {
    name: "Winterwear",
    image: "/cat-winter.webp",
    bg: "/catagoryimage-5.webp",
  },
]



export default function CategoryGrid() {
  // Swiper state for mobile
  const [active, setActive] = useState(0)
  const scrollRef = useRef(null)
  const isInitialLoad = useRef(true)
  const userInteracted = useRef(false)
  const [dresses, setDresses] = useState([])

  const fetchDresses = async () => {
    const response = await axios.get(`${API_BASE_URL}/clients/CLI6781413BO1/dress/get`)
    console.log(response.data.dresses)
    if(response.data.success){
      setDresses(response.data.dresses)
    }
  }
  useEffect(()=>{
    fetchDresses()
  },[])

  // Only scroll to active card when user clicks dots (not on initial load)
  useEffect(() => {
    if (!userInteracted.current) return
    
    if (scrollRef.current && window.innerWidth < 768) {
      const card = scrollRef.current.children[active]
      if (card) card.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" })
    }
  }, [active])

  // Update active dot based on scroll position (but not on initial load)
  function handleScroll() {
    if (isInitialLoad.current) return
    
    if (!scrollRef.current) return
    const container = scrollRef.current
    const children = Array.from(container.children)
    const containerRect = container.getBoundingClientRect()
    let minDiff = Infinity
    let closest = 0
    children.forEach((child, i) => {
      const rect = child.getBoundingClientRect()
      // Center of card relative to container center
      const diff = Math.abs((rect.left + rect.right) / 2 - (containerRect.left + containerRect.right) / 2)
      if (diff < minDiff) {
        minDiff = diff
        closest = i
      }
    })
    setActive(closest)
  }

  // Mark initial load as complete after a short delay
  useEffect(() => {
    const timer = setTimeout(() => {
      isInitialLoad.current = false
    }, 100)
    return () => clearTimeout(timer)
  }, [])

  // Handle dot click
  const handleDotClick = (index) => {
    userInteracted.current = true
    setActive(index)
  }

  return (
    <section className="w-full py-8 px-2 md:px-8 lg:px-24 flex flex-col items-center">
      <h2 className="text-2xl md:text-3xl font-cursive font-semibold mb-6 text-center">Shop By Category</h2>
      {/* Mobile Swiper */}
      <div className="w-full md:hidden">
        <div
          className="flex gap-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory"
          ref={scrollRef}
          onScroll={handleScroll}
        >
          {dresses.map((cat, i) => (
            <div
              key={cat._id}
              className={`relative rounded-xl overflow-hidden shadow-md min-w-[80vw] max-w-[80vw] h-[240px] flex flex-col justify-end snap-center transition-all duration-500 ${i === active ? 'scale-100' : 'scale-95 opacity-80'}`}
            >
              <img src={cat.imageUrl} alt="bg" className="absolute inset-0 w-full h-full object-fill z-0" draggable="false" />
              <span className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 text-white text-lg font-cursive font-semibold text-center drop-shadow-lg w-max px-2">
                {cat.type}
              </span>
            </div>
          ))}
        </div>
        {/* Dots */}
        <div className="flex justify-center gap-2 mt-3">
          {categories.map((_, i) => (
            <button
              key={i}
              onClick={() => handleDotClick(i)}
              className={`w-2.5 h-2.5 rounded-full border-2 ${i === active ? 'bg-pink-400 border-pink-400' : 'bg-transparent border-pink-200'}`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
      {/* Desktop/Tablet Grid */}
      <div className="hidden md:grid w-full max-w-full mx-auto gap-6 grid-cols-3 grid-rows-2">
        {/* Top row: 2 cards, each col-span-3 sm:col-span-1, one big, one small */}
        {/* <div className="col-span-2 row-span-1 flex flex-col">
          <div className="relative rounded-xl overflow-hidden shadow-md flex-1 min-h-[400px]">
            <img src={dresses[0].imageUrl} alt="bg" className="absolute inset-0 w-full h-full object-fill z-0" draggable="false" />
            <span className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 text-white text-2xl font-cursive font-semibold text-center drop-shadow-lg w-max px-2">
              {dresses[0].type}
            </span>
          </div>
        </div> */}
        {/* <div className="col-span-1 row-span-1 flex flex-col">
          <div className="relative rounded-xl overflow-hidden shadow-md flex-1 min-h-[400px]">
            <img src={dresses[1].ima} alt="bg" className="absolute inset-0 w-full h-full object-fill z-0" draggable="false" />
            <span className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 text-white text-2xl font-cursive font-semibold text-center drop-shadow-lg w-max px-2">
              {dresses[1].type}
            </span>
          </div>
        </div> */}
        {/* Bottom row: 3 cards */}
        {dresses.map((cat) => (
          <div key={cat._id} className="col-span-1 row-span-1 flex flex-col">
            <div className="relative rounded-xl overflow-hidden shadow-md flex-1 min-h-[400px]">
              <img src={cat.imageUrl} alt="bg" className="absolute inset-0 w-full h-full object-fill z-0" draggable="false" />
              <span className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 text-white text-xl font-cursive font-semibold text-center drop-shadow-lg w-max px-2">
                {cat.type}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
} 