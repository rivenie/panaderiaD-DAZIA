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
document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM cargado, iniciando slider de ofrecemos...");

  const hero = document.querySelector(".hero");
  if (!hero) {
    console.error("No se encontró .hero");
    return;
  }

  // Array con imágenes PARA OFRECEMOS (diferentes a nosotros)
  const imagenes = [
    'url("https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")',
    'url("https://images.unsplash.com/photo-1605807646983-377bc5a76493?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")',
    'url("https://images.unsplash.com/photo-1563805042-7684c019e1cb?q=80&w=1227&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
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

  let capaActiva = 1;

  function cambiarImagen() {
    if (capaActiva === 1) {
      fondo2.style.opacity = "1";
      fondo1.style.opacity = "0";
      capaActiva = 2;
    } else if (capaActiva === 2) {
      fondo3.style.opacity = "1";
      fondo2.style.opacity = "0";
      capaActiva = 3;
    } else {
      fondo1.style.opacity = "1";
      fondo3.style.opacity = "0";
      capaActiva = 1;
    }
  }

  setInterval(cambiarImagen, 4000);
});
