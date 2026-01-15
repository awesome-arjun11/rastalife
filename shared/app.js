/* ============================
   Global State
============================ */
let map;
let currentDay = 0;
let markers = [];
let isChangingDay = false;

let dayData = [];
let mapConfig = {};

/* ============================
   Map Init
============================ */
function initMap() {
  map = L.map("map", {
    zoomControl: false,
    attributionControl: false,
    scrollWheelZoom: false
  })

    L.tileLayer(mapConfig.tileLayer, {
    attribution:
      '&copy; OpenStreetMap contributors &copy; CARTO'
  }).addTo(map);

  // Auto-fit map using dayData
  if (dayData.length > 0) {
    const bounds = computeBoundsFromDayData(dayData);

    if (bounds.isValid()) {
      map.fitBounds(bounds, {
        padding: [50, 50],
        maxZoom: 12 // prevents zooming too far in
      });
      return;
    }
  }

    // Fallback (if dayData missing)
    map.setView(
        mapConfig.initialCenter,
        mapConfig.initialZoom
    );
}

/* ============================
   UI Update
============================ */
function updateUIForDay(dayIndex) {
  const day = dayData[dayIndex];

  document.getElementById("dayTitle").textContent = day.title;
  document.getElementById("daySubtitle").textContent = day.subtitle;

  // Timeline
  const timeline = document.getElementById("timeline");
  timeline.innerHTML = "";

  day.timeline.forEach((event, index) => {
    const item = document.createElement("div");
    item.className = "timeline-item";
    item.innerHTML = `
      <div class="timeline-marker"></div>
      <div class="timeline-time">${event.time}</div>
      <div class="timeline-title">${event.title}</div>
      <div class="timeline-description">${event.description}</div>
    `;

    item.addEventListener("click", () => {
      document
        .querySelectorAll(".timeline-item.selected")
        .forEach(el => el.classList.remove("selected"));

      item.classList.add("selected");
      map.flyTo(event.coords, 16);

      setTimeout(() => {
        if (markers[index]) markers[index].openPopup();
      }, 700);
    });

    timeline.appendChild(item);
  });

  // Info cards
  document.getElementById("budgetInfo").textContent = day.budget || "—";
  document.getElementById("accommodationInfo").textContent =
    day.accommodation || "—";
  document.getElementById("highlightsInfo").textContent =
    day.highlights || "—";

  // Clear markers
  markers.forEach(m => map.removeLayer(m));
  markers = [];

  // Add markers
  day.timeline.forEach(event => {
    const marker = L.marker(event.coords, {
      icon: L.divIcon({
        className: "pushpin-icon",
        html: "📍",
        iconSize: [30, 30],
        iconAnchor: [15, 30]
      })
    }).addTo(map);

    marker.bindPopup(
      `<b>${event.title}</b><br>${event.description}`
    );

    markers.push(marker);
  });

  // Fit bounds
  if (markers.length) {
    const pane = document.getElementById("timelinePane");
    const leftPadding = pane.classList.contains("is-hidden")
      ? 50
      : 440;

    map.flyToBounds(
      L.featureGroup(markers).getBounds(),
      {
        paddingTopLeft: [leftPadding, 50],
        paddingBottomRight: [50, 50]
      }
    );
  }

  // Nav buttons
  document.getElementById("prevBtn").disabled = dayIndex === 0;
  document.getElementById("nextBtn").disabled =
    dayIndex === dayData.length - 1;

  document.querySelector(".timeline-content").scrollTop = 0;
}

/* ============================
   Navigation
============================ */
function changeDay(direction) {
  if (isChangingDay) return;

  const next = currentDay + direction;
  if (next < 0 || next >= dayData.length) return;

  isChangingDay = true;
  currentDay = next;
  updateUIForDay(currentDay);

  setTimeout(() => (isChangingDay = false), 600);
}

/* ============================
   Compute and set initial
=============================== */
function computeBoundsFromDayData(dayData) {
  const bounds = L.latLngBounds([]);

  dayData.forEach(day => {
    // Day center (optional but useful)
    if (day.center) {
      bounds.extend(day.center);
    }

    // Timeline points
    day.timeline.forEach(event => {
      if (event.coords) {
        bounds.extend(event.coords);
      }
    });
  });

  return bounds;
}


/* ============================
   Bootstrap
============================ */
document.addEventListener("DOMContentLoaded", () => {
  if (!window.TRIP_CONFIG) {
    alert("trip.config.js not found");
    return;
  }

  // Load config
  dayData = window.TRIP_CONFIG.dayData;
  mapConfig = window.TRIP_CONFIG.map;

  // Page title
  document.title = window.TRIP_CONFIG.title;

  initMap();
  updateUIForDay(currentDay);

  // Pane toggle
  document
    .getElementById("togglePaneBtn")
    .addEventListener("click", () => {
      const pane = document.getElementById("timelinePane");
      pane.classList.toggle("is-hidden");
      setTimeout(() => map.invalidateSize(), 500);
    });

  // Scroll navigation
  window.addEventListener(
    "wheel",
    e => {
      if (e.target.closest(".timeline-pane")) return;
      e.preventDefault();
      changeDay(e.deltaY > 0 ? 1 : -1);
    },
    { passive: false }
  );

  // Buttons
  document
    .getElementById("prevBtn")
    .addEventListener("click", () => changeDay(-1));

  document
    .getElementById("nextBtn")
    .addEventListener("click", () => changeDay(1));

  // Keyboard
  document.addEventListener("keydown", e => {
    if (["ArrowLeft", "ArrowUp"].includes(e.key)) changeDay(-1);
    if (["ArrowRight", "ArrowDown"].includes(e.key)) changeDay(1);
  });
});
