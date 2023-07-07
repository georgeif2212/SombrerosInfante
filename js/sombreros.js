import { sombreros } from "./database.js";
const idProductos = document.querySelector("#productos");
document.addEventListener("DOMContentLoaded", () => {
  // Tu código aquí
  idProductos.innerHTML = "";
  sombreros.forEach((el) => {
    if (el.precio <= 250) {
      const article = document.createElement("article");
      article.classList.add("box-shadow");
      article.innerHTML = `
      <a href="">
        <div class="grid-container-productos_producto">
          <img class="grid-container-productos_img" src="${el.url}" alt="" />
          <div>
            <p class="color-1 size-medium_m pt-2">${el.categorias[0]}</p>
            <p class="pt-1 color-2 size-medium_s">${el.color}</p>
            <p class="products_price color-1 size-small_l"><b>$ ${el.precio}</b></p>
            <p class="color-offer size-medium_s">Envío gratis</p>
          </div>
        </div>
      </a>`;
      idProductos.appendChild(article);
    }
  });
});

const allProducts = document.querySelector("#all-products");
document.addEventListener("DOMContentLoaded", () => {
  // Tu código aquí
  allProducts.innerHTML = "";
  sombreros.forEach((el) => {
    const article = document.createElement("article");
    article.classList.add("producto","box-product");
    article.innerHTML = `
      <img class="producto-img mb-2" src="${el.url}" alt="" />
      <div class="producto-info">
        <p class="color-1 size-medium_m producto-info_title">${el.categorias[0]}</p>
        <p class="color-1 size-medium_s producto-info_category">
        ${el.categorias[1]}
        </p>
        <div class="producto-info-button">
          <button type="button" class="button">
            <span class="button__text">Add Item</span>
            <span class="button__icon"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke-linejoin="round"
                stroke-linecap="round"
                stroke="currentColor"
                height="24"
                fill="none"
                class="svg"
              >
                <line y2="19" y1="5" x2="12" x1="12"></line>
                <line y2="12" y1="12" x2="19" x1="5"></line></svg
            ></span>
          </button>
          <p class="producto-info-button_precio color-3"><b>$ ${el.precio}</b></p>
        </div>
      </div>
    `;
    allProducts.appendChild(article);
  });
});