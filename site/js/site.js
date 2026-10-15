const navbar = document.querySelector(".navbar");
const pageHasDarkNavbar = document.body.classList.contains("page-with-navbar");
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".right-nav");

const updateNavbarBackground = () => {
  if (navbar) {
    navbar.style.backgroundColor =
      pageHasDarkNavbar ||
      navbar.classList.contains("is-open") ||
      window.scrollY > window.innerHeight / 7
        ? "rgba(0, 0, 0, 0.9)"
        : "rgba(0, 0, 0, 0)";
  }
};

if (navbar) {
  window.addEventListener("scroll", updateNavbarBackground);
}

if (navbar && navToggle && navLinks) {
  const setNavigationOpen = (isOpen) => {
    navbar.classList.toggle("is-open", isOpen);
    document.body.classList.toggle("navigation-open", isOpen);
    navToggle.setAttribute("aria-expanded", String(isOpen));
    navToggle.setAttribute(
      "aria-label",
      isOpen ? "Close navigation menu" : "Open navigation menu",
    );
    updateNavbarBackground();
  };

  navToggle.addEventListener("click", () => {
    setNavigationOpen(navToggle.getAttribute("aria-expanded") !== "true");
  });
  navLinks.addEventListener("click", () => setNavigationOpen(false));
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      setNavigationOpen(false);
    }
  });
}

const mapContainer = document.getElementById("map");

if (mapContainer) {
  const accessToken =
    "pk.eyJ1IjoiZGFua28xOTkwIiwiYSI6ImNrOTVldjAzdjAzMHkzbnFmazdkbndvZ3EifQ.F36m2pawghNPpjpIoVLDcQ";

  fetch(
    `https://api.mapbox.com/geocoding/v5/mapbox.places/4622&Van&Nuys.json?access_token=${accessToken}`,
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Mapbox geocoding failed with status ${response.status}.`);
      }
      return response.json();
    })
    .then((data) => {
      const center = data.features?.[0]?.center;
      if (!center) {
        throw new Error("Mapbox geocoding returned no coordinates.");
      }

      window.mapboxgl.accessToken = accessToken;
      const map = new window.mapboxgl.Map({
        container: mapContainer,
        style: "mapbox://styles/mapbox/streets-v9",
        center,
        zoom: 14,
      });

      new window.mapboxgl.Marker().setLngLat(center).addTo(map);
    })
    .catch((error) => {
      console.error("Unable to load the Rose Spa map.", error);
    });
}
