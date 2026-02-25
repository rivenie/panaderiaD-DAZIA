window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  if (navbar) {
    if (window.scrollY > 100) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  }
});

// Inicializar cuando el DOM esté listo
// Inicializar cuando el DOM esté listo
document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM cargado, iniciando slider con fade...");

  const hero = document.querySelector(".hero");
  if (!hero) {
    console.error("No se encontró .hero");
    return;
  }

  // Array con imágenes
  const imagenes = [
    'url("img/portada.jpg")',
    'url("https://images.unsplash.com/photo-1555507036-ab1f4038808a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1926&q=80")',
    'url("https://images.unsplash.com/photo-1517433670267-08bbd4be890f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")',
  ];

  // Crear tres capas de fondo
  const fondo1 = document.createElement("div");
  const fondo2 = document.createElement("div");
  const fondo3 = document.createElement("div");

  fondo1.className = "hero-fondo";
  fondo2.className = "hero-fondo";
  fondo3.className = "hero-fondo";

  // Asignar imágenes iniciales
  fondo1.style.backgroundImage = imagenes[0];
  fondo2.style.backgroundImage = imagenes[1];
  fondo3.style.backgroundImage = imagenes[2];

  fondo1.style.opacity = "1";
  fondo2.style.opacity = "0";
  fondo3.style.opacity = "0";

  // Insertar en el hero
  hero.appendChild(fondo1);
  hero.appendChild(fondo2);
  hero.appendChild(fondo3);

  // Asegurar que el contenido del hero esté por encima
  const heroContent = document.querySelector(".hero-content");
  if (heroContent) {
    heroContent.style.position = "relative";
    heroContent.style.zIndex = "10";
  }

  let capaActiva = 1; // 1 = fondo1 visible, 2 = fondo2 visible, 3 = fondo3 visible

  // Función para cambiar con fade
  function cambiarImagen() {
    if (capaActiva === 1) {
      // fondo1 visible → fade a fondo2
      fondo2.style.opacity = "1";
      fondo1.style.opacity = "0";
      capaActiva = 2;
    } else if (capaActiva === 2) {
      // fondo2 visible → fade a fondo3
      fondo3.style.opacity = "1";
      fondo2.style.opacity = "0";
      capaActiva = 3;
    } else {
      // fondo3 visible → fade a fondo1
      fondo1.style.opacity = "1";
      fondo3.style.opacity = "0";
      capaActiva = 1;
    }
    console.log("Cambiando a capa", capaActiva);
  }

  // Cambiar cada 4 segundos
  setInterval(cambiarImagen, 4000);
});
