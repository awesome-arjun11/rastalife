window.TRIP_CONFIG = {
 /* ============================
     Basic Trip Info
  ============================ */
  tripId: "Vizag",

  title: "Vizag 3-Day Journey",
  subtitle: "backpacking-style, calm/nature-first plan",

  /* ============================
     Map Configuration
  ============================ */
  map: {
    //initialCenter: [9.9312, 76.2673],
    //initialZoom: 9,

    tileLayer:
      "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
  },

  /* ============================
     UI / Theme (optional, future)
  ============================ */
  theme: {
    accentColor: "#00f2ea",
    markerIcon: "📍"
  },

  dayData: [
  {
    "title": "Day 0",
    "subtitle": "Overnight Transit: Hyderabad → Visakhapatnam",
    "center": [17.3850, 78.4867],
    "budget": "₹2,000",
    "accommodation": "Overnight Train (Sleeper / 3A)",
    "timeline": [
      {
        "time": "17:00 - 18:30",
        "title": "Office Wrap-up & Reach Station",
        "description": "Finish office, grab a quick dinner/packed food, reach Hyderabad Deccan / Secunderabad station early to avoid rush.",
        "coords": [17.3850, 78.4867]
      },
      {
        "time": "18:30 - 06:00",
        "title": "Overnight Train to Vizag",
        "description": "Board overnight train. Try to sleep early. Carry earplugs + light blanket.",
        "coords": [17.3850, 78.4867]
      }
    ]
  },
  {
    "title": "Day 1",
    "subtitle": "Vizag Arrival + Remote Work + Quiet Beach Evening",
    "center": [17.6868, 83.2185],
    "budget": "₹4,500",
    "accommodation": "Zostel Vizag (Private Room) / Budget Homestay near RK Beach",
    "timeline": [
      {
        "time": "06:00 - 08:00",
        "title": "Arrival & Freshen Up",
        "description": "Arrive in Vizag. Early check-in if available or freshen up at station cloakroom / café.",
        "coords": [17.7210, 83.3016]
      },
      {
        "time": "08:00 - 09:30",
        "title": "Breakfast & Setup",
        "description": "Simple South Indian breakfast. Set up workspace; test Wi-Fi and power backup.",
        "coords": [17.6868, 83.2185]
      },
      {
        "time": "10:00 - 18:30",
        "title": "Remote Work Day",
        "description": "Dedicated work block. Take short walks during breaks; keep day intentionally light.",
        "coords": [17.6868, 83.2185]
      },
      {
        "time": "18:45 - 20:30",
        "title": "Yarada Beach Sunset Walk",
        "description": "Less crowded than RK Beach. Barefoot walk, sunset views, calm sea breeze.",
        "coords": [17.6506, 83.2666]
      },
      {
        "time": "20:30 - 22:00",
        "title": "Dinner & Wind Down",
        "description": "Simple dinner near stay. Early night to prep for hill travel next day.",
        "coords": [17.6868, 83.2185]
      }
    ]
  },
  {
    "title": "Day 2",
    "subtitle": "Scenic Train Journey: Vizag → Araku Valley",
    "center": [18.3273, 82.8773],
    "budget": "₹4,800",
    "accommodation": "Budget Homestay / Haritha Valley Resort (Dorm / Private)",
    "timeline": [
      {
        "time": "06:00 - 07:00",
        "title": "Early Morning Start",
        "description": "Check-out, light breakfast, head to Vizag station.",
        "coords": [17.7210, 83.3016]
      },
      {
        "time": "07:00 - 11:00",
        "title": "Scenic Train to Araku",
        "description": "One of India’s most scenic rail routes: tunnels, valleys, forests. Sit near windows.",
        "coords": [18.3273, 82.8773]
      },
      {
        "time": "11:30 - 13:00",
        "title": "Check-in & Lunch",
        "description": "Drop bags, local Andhra meals or tribal-style thali.",
        "coords": [18.3273, 82.8773]
      },
      {
        "time": "14:00 - 17:30",
        "title": "Coffee Plantations & Waterfalls",
        "description": "Slow walk through coffee estates. Visit Chaparai or nearby streams if not crowded.",
        "coords": [18.3186, 82.8807]
      },
      {
        "time": "18:30 - 21:00",
        "title": "Quiet Hill Evening",
        "description": "Cold weather, chai, conversations. Avoid loud tourist spots.",
        "coords": [18.3273, 82.8773]
      }
    ]
  },
  {
    "title": "Day 3",
    "subtitle": "Borra Caves + Lambasingi (Mist & Camping Vibes)",
    "center": [17.9826, 82.9992],
    "budget": "₹5,200",
    "accommodation": "Haritha Lambasingi / Tented Cottages",
    "timeline": [
      {
        "time": "06:30 - 08:00",
        "title": "Morning in Araku",
        "description": "Early breakfast, pack bags. Cold, misty mornings are best here.",
        "coords": [18.3273, 82.8773]
      },
      {
        "time": "08:30 - 10:30",
        "title": "Borra Caves Exploration",
        "description": "Go early to avoid crowds. Limestone formations, cool interiors.",
        "coords": [18.2811, 83.0375]
      },
      {
        "time": "11:00 - 16:30",
        "title": "Travel to Lambasingi",
        "description": "Bus/shared jeep via Narsipatnam Road. Last stretch usually by taxi/shared jeep.",
        "coords": [17.9826, 82.9992]
      },
      {
        "time": "17:00 - 19:00",
        "title": "Fog Walks & Viewpoints",
        "description": "Short walks, low visibility mist, absolute silence. Jacket recommended.",
        "coords": [17.9826, 82.9992]
      },
      {
        "time": "19:30 - 22:00",
        "title": "Bonfire & Early Sleep",
        "description": "If available, sit by bonfire. Nights are cold; sleep early.",
        "coords": [17.9826, 82.9992]
      }
    ]
  },
  {
    "title": "Day 4",
    "subtitle": "Lambasingi Sunrise → Vizag → Overnight Return",
    "center": [17.6868, 83.2185],
    "budget": "₹4,700",
    "accommodation": "Overnight Train",
    "timeline": [
      {
        "time": "05:30 - 07:00",
        "title": "Sunrise & Morning Fog",
        "description": "Best time in Lambasingi. Silent viewpoints, thick mist, photos.",
        "coords": [17.9826, 82.9992]
      },
      {
        "time": "08:00 - 14:00",
        "title": "Return to Vizag",
        "description": "Breakfast, descend from hills via shared jeep/bus to Vizag.",
        "coords": [17.6868, 83.2185]
      },
      {
        "time": "16:00 - 18:30",
        "title": "Final Beach Walk & Dinner",
        "description": "Yarada / RK Beach walk, last coffee, simple dinner near station.",
        "coords": [17.6868, 83.2185]
      },
      {
        "time": "19:30 - 06:30",
        "title": "Overnight Train to Hyderabad",
        "description": "Board Duronto / overnight express. Sleep early.",
        "coords": [17.7210, 83.3016]
      }
    ]
  },
  {
    "title": "Day 5",
    "subtitle": "Arrival in Hyderabad",
    "center": [17.3850, 78.4867],
    "budget": "₹300",
    "accommodation": "—",
    "timeline": [
      {
        "time": "06:30 - 08:00",
        "title": "Reach Home",
        "description": "Arrive Secunderabad early morning. Metro/cab home. Trip ends.",
        "coords": [17.3850, 78.4867]
      }
    ]
  }
]

}