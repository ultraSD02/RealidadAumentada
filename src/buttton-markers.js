document.addEventListener("DOMContentLoaded", () => {
    const buttonContainers = document.querySelectorAll('.button-container');
  
    buttonContainers.forEach(container => {
      const markerId = container.dataset.markerId;
      const marker = document.querySelector(`#${markerId}`);
      const infoButton = container.querySelector('.button');
  
      marker.addEventListener('markerFound', () => {
        container.style.display = 'block';
      });
  
      marker.addEventListener('markerLost', () => {
        container.style.display = 'none';
      });
  
      infoButton.addEventListener('click', () => {
        const infoUrl = infoButton.dataset.infoUrl;
        window.location.href = infoUrl;
      });
    });
  });
/*document.addEventListener("DOMContentLoaded", () => {
// MARKER A
const markerA = document.querySelector("#markerA");
const infoButtonMarkerA = document.getElementById("btn-markA");
const buttonMarkA = document.getElementById("button-mark");

markerA.addEventListener("markerFound", () => {
buttonMarkB.style.display = "none";
buttonMarkA.style.display = "block";
});

markerA.addEventListener("markerLost", () => {
buttonMarkA.style.display = "none";
});

infoButtonMarkerA.addEventListener("click", () => {
window.location.href = 'https://youtube.com/shorts/WE0LTe3HLsM?si=Yxbm0SkQKm7qyxxq'; // URL específica para el marcador A
});

// MARKER B
const markerB = document.querySelector("#markerB");
const infoButtonMarkerB = document.getElementById("btn-markB");
const buttonMarkB = document.getElementById("button-mark");

markerB.addEventListener("markerFound", () => {
buttonMarkA.style.display = "none";
buttonMarkB.style.display = "block";
});

markerB.addEventListener("markerLost", () => {
buttonMarkB.style.display = "none";
});

infoButtonMarkerB.addEventListener("click", () => {
window.location.href = 'https://larueca.pe/products/juego-de-platos-pinig-ceramica-awajun-3-piezas?pr_prod_strat=collection_fallback&pr_rec_id=d7d3ebef7&pr_rec_pid=8353105445163&pr_ref_pid=8353113473323&pr_seq=uniform'; // URL específica para el marcador A
});
});*/