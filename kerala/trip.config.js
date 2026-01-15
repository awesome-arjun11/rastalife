window.TRIP_CONFIG = {
 /* ============================
     Basic Trip Info
  ============================ */
  tripId: "kerala",

  title: "Kerala 9-Day Journey",
  subtitle: "Backwaters, beaches & hillscapes",

  /* ============================
     Map Configuration
  ============================ */
  map: {
    initialCenter: [9.9312, 76.2673],
    initialZoom: 9,

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
                title: "Day 1",
                subtitle: "Kochi - Arrival & Fort Kochi Evening",
                center: [9.9312, 76.2673], budget: "₹3,600", accommodation: "Walton's Homestay, Fort Kochi", highlights: "Chinese fishing nets, St. Francis Church, Kerala cuisine",
                timeline: [
                    { time: "19:00 - 20:00", title: "Arrival at Kochi", description: "Arrive at Kochi Airport; take taxi or KSRTC bus to Fort Kochi", coords: [10.156675, 76.391727] },
                    { time: "20:00 - 21:00", title: "Check-in", description: "Check-in at hotel/hostel near Fort Kochi", coords: [9.968346, 76.245216] },
                    { time: "21:00 - 23:00", title: "Dinner & Stroll", description: "Walk along Burgher Street to see Chinese fishing nets and St. Francis Church. Dine at Kashi Art Café", coords: [9.965582, 76.240344] }
                ]
            },
            {
                title: "Day 2",
                subtitle: "Athirappilly Waterfalls Day Trip",
                center: [10.2851, 76.5703], budget: "₹5,500", accommodation: "Same Fort Kochi hotel", highlights: "Athirappilly Falls (80ft), Vazhachal Falls, rainforest",
                timeline: [
                    { time: "07:00 - 09:00", title: "Departure to Athirappilly", description: "Breakfast at Kashi or local stall. Board KSRTC bus to Athirappilly Falls (~2h) or take cab.", coords: [9.9312, 76.2673] },
                    { time: "10:00 - 13:00", title: "Athirappilly Falls", description: "Explore Kerala's largest waterfall (80ft high), nature walks & local lunch", coords: [10.2851, 76.5703] },
                    { time: "13:00 - 15:00", title: "Vazhachal Falls", description: "Continue to Vazhachal Falls (~10km away); spend ~1 hour", coords: [10.325, 76.59] },
                    { time: "17:00 - 19:00", title: "Return to Kochi", description: "Return to Fort Kochi, rest and refresh", coords: [9.9312, 76.2673] }
                ]
            },
            {
                title: "Day 3",
                subtitle: "Kochi - Workday & Local Sightseeing",
                center: [9.9312, 76.2673], budget: "₹3,500", accommodation: "Same Fort Kochi hotel", highlights: "Mattancherry Palace, Jewish Synagogue, Marine Drive",
                timeline: [
                    { time: "10:00 - 13:00", title: "Work Session", description: "Work remotely at Kashi Art Café or Loafers Corner with good Wi-Fi", coords: [9.967006, 76.243112] },
                    { time: "14:00 - 17:00", title: "Sightseeing", description: "Visit Mattancherry Dutch Palace & Jewish Synagogue", coords: [9.958446, 76.259350] },
                    { time: "17:30 - 19:00", title: "Continue Work", description: "Second work block at Ernakulam malls (Mocha Café)", coords: [9.9804, 76.299] },
                    { time: "21:00 - 22:00", title: "Marine Drive", description: "Evening stroll along Marine Drive promenade", coords: [9.983475, 76.274474] }
                ]
            },
            {
                title: "Day 4",
                subtitle: "Kochi to Alappuzha - Backwater Houseboat",
                center: [9.4981, 76.3388], budget: "₹9,800", accommodation: "Overnight houseboat (Vembanad Lake)", highlights: "Vembanad Lake, backwater cruise, sunset canoe ride",
                timeline: [
                    { time: "09:00 - 10:30", title: "Travel to Alleppey", description: "KSRTC bus from Kochi to Alleppey (~1.5h)", coords: [9.9312, 76.2673] },
                    { time: "10:30 - 12:00", title: "Explore Alleppey", description: "Visit Alappuzha Beach and canal area", coords: [9.4981, 76.3388] },
                    { time: "12:00 - 14:00", title: "Houseboat Check-in", description: "Board 3-bedroom houseboat departing around 3pm", coords: [9.52, 76.35] }
                ]
            },
            {
                title: "Day 5",
                subtitle: "Alappuzha to Jatayu Earth Center",
                center: [8.9642, 76.6936], budget: "₹3,600", accommodation: "Homestay in Kottarakkara", highlights: "Jatayu Rock sculpture, cable car ride, adventure park",
                timeline: [
                    { time: "07:00 - 08:00", title: "Disembark Houseboat", description: "Breakfast aboard houseboat; disembark", coords: [9.4981, 76.3388] },
                    { time: "08:00 - 11:00", title: "Travel to Kottarakkara", description: "KSRTC bus to Chadayamangalam (~3h)", coords: [9.005991, 76.782322] },
                    { time: "13:00 - 16:00", title: "Jatayu Earth Center", description: "Visit world's largest bird sculpture, cable car ride, explore caves", coords: [8.861669, 76.866483] },
                    { time: "16:00 - 18:00", title: "Travel to Varkala", description: "Travel to Varkala (~1h), check-in at cliff hotel", coords: [8.740456, 76.716366] }
                ]
            },
            {
                title: "Day 6",
                subtitle: "Jatayu Center to Varkala Cliffs",
                center: [8.7379, 76.7160], budget: "₹4,300", accommodation: "Cliff-top hotel in Varkala", highlights: "Red laterite cliffs, Black Beach, cliff cafés",
                timeline: [
                    { time: "09:00 - 10:00", title: "Breakfast", description: "Breakfast at Coffee Temple or Clafouti with Wi-Fi", coords: [8.7379, 76.7160] },
                    { time: "10:00 - 13:00", title: "Explore Varkala", description: "Explore Black Beach (Papanasam) & Red Cliff walk", coords: [8.733, 76.709] },
                    { time: "13:00 - 14:00", title: "Lunch", description: "Lunch at Trattorias (wood-fired pizza with sea view)", coords: [8.7370, 76.711] },
                    { time: "17:00 - 19:00", title: "Sunset at Cliffs", description: "Sunset drinks & snacks at Cafe del Mar", coords: [8.7379, 76.7160] }
                ]
            },
            {
                title: "Day 7",
                subtitle: "Varkala - Workday & Beach",
                center: [8.7379, 76.7160], budget: "₹3,500", accommodation: "Same cliff hotel", highlights: "Work-friendly cafés, cliff walks, beach relaxation",
                timeline: [
                    { time: "10:00 - 13:00", title: "Work Session", description: "Work at Cafe Sarwaa or Trip is Life (quiet & less crowded)", coords: [8.7379, 76.7160] },
                    { time: "13:00 - 14:00", title: "Lunch", description: "Lunch at same café or Coffee Temple", coords: [8.7370, 76.711] },
                    { time: "14:00 - 17:00", title: "Work/Explore", description: "Second work session or cliff walk", coords: [8.7379, 76.7160] },
                    { time: "17:00 - 18:00", title: "Tea Break", description: "Tea/coffee break at Cafe del Mar", coords: [8.7379, 76.7160] }
                ]
            },
            {
                title: "Day 8",
                subtitle: "Varkala to Trivandrum City",
                center: [8.5241, 76.9366], budget: "₹4,600", accommodation: "Hotel in Trivandrum", highlights: "Padmanabhaswamy Temple, Napier Museum, East Fort Market",
                timeline: [
                    { time: "09:00 - 10:30", title: "Travel to Trivandrum", description: "Morning cliff walk, then bus to Trivandrum (~1.5h)", coords: [8.7379, 76.7160] },
                    { time: "11:00 - 13:00", title: "City Tour", description: "Visit Padmanabhaswamy Temple exterior, Napier Museum & Kuthiramalika Palace", coords: [8.483, 76.943] },
                    { time: "14:00 - 16:00", title: "East Fort Market", description: "Stroll East Fort Market; sample local snacks", coords: [8.487, 76.948] },
                    { time: "18:00 - 21:00", title: "Dinner", description: "Dinner at Villa Maya or Ayyappan Veg", coords: [8.512, 76.924] }
                ]
            },
            {
                title: "Day 9",
                subtitle: "Trivandrum Temples & Departure",
                center: [8.5241, 76.9366], budget: "₹4,700", accommodation: "Same hotel or airport hotel", highlights: "Padmanabhaswamy Temple, Aazhimala Shiva Temple, 18m Shiva statue",
                timeline: [
                    { time: "06:00 - 07:30", title: "Temple Visit", description: "Early darshan at Padmanabhaswamy Temple (strict dress code)", coords: [8.483, 76.943] },
                    { time: "09:00 - 10:00", title: "Travel to Aazhimala", description: "Travel to Aazhimala Siva Temple (~20km north)", coords: [8.3644, 76.9847] },
                    { time: "10:00 - 12:00", title: "Aazhimala Temple", description: "Explore temple & coastal 18m Shiva statue (tallest in Kerala)", coords: [8.3644, 76.9847] },
                    { time: "13:00 - 16:00", title: "Last-minute Shopping", description: "Shopping at MG Road or Chalai Market", coords: [8.487, 76.948] },
                    { time: "18:00 - 21:00", title: "Farewell Dinner", description: "Farewell seafood dinner at Gods Own Country Kitchen", coords: [8.5241, 76.9366] }
                ]
            }
        ]
}