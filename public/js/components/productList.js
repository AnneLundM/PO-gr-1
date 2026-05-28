import { fetchProducts } from "../fetch/fetchProducts.js";

const products = await fetchProducts();
console.log(products);

const productList = document.getElementById("product-list-id");

const introProducts = document.getElementById("intro-products-id");

introProducts.innerHTML = `<div class="text-center">
        <h2 class="text-5xl font-semibold pb-5"> Vores produkter </h2>
        <h3 class="text-5xl font-light pb-5"> Vi har udvalgt de bedste produkter </h3>
        <p class="text-2xl pb-7"> Her finder du et udvalg af friske mejeriprodukter og kvalitetskød fra Gowala farms - direkte fra gården til dit bord. </p>
    </div>
`;

const productListTmpl = (product) => {
  /* Discount */
  const hasDiscount = product.discount > 0;
  const finalPrice = hasDiscount
    ? product.price - product.discount
    : product.price;

  return `
    
  <div class="h-130 w-100 shadow-lg rounded-lg flex justify-center bg-white">
    <div class="h-[96%] w-[96%] bg-[#EFF4F8] flex flex-col items-center justify-center gap-4 relative">

        <!-- Discount tag (viser kun hvis discount > 0) -->
    ${
      hasDiscount
        ? `
      <div class="absolute top-2 right-2 bg-[#5E9A13] text-white font-bold px-3 py-1 rounded-4xl text-sm z-10">
        -${product.discount}%
      </div>
    `
        : ""
    }
        <img src="${product.image}" alt="${product.title}">
        <h4 class="text-xl font-bold">${product.title}</h4>
        
        

        <!-- 2. Price block -->
        <div class="flex items-center gap-3">
          ${
            hasDiscount
              ? `
            <!-- Новая цена -->
            <p class="text-3xl font-bold text-red-600">${finalPrice},-</p>
            <!-- Старая зачеркнутая цена -->
            <p class="text-xl font-medium text-gray-400 line-through">${product.price},-</p>
          `
              : `
            <!-- Обычная цена, если скидки нет -->
            <p class="text-3xl font-bold text-[#5E9A13]">${product.price},-</p>
          `
          }
        </div>
        
        <button class="bg-[#5E9A13] text-white py-4 px-10 rounded-4xl hover:bg-[#4a7c0f]">
         <i class="fa-solid fa-basket-shopping"></i>
         <span class="ps-2 text-lg">Tilføj til kurv</span>
        </button>
    </div>
</div>
    `;
};

export const ProductList = () => {
  if (productList) {
    products.data.forEach((element) => {
      productList.insertAdjacentHTML("beforeend", productListTmpl(element));
    });

    productList.insertAdjacentHTML(
      "beforeend",
      `<div class="w-full flex justify-center mt-8 col-span-full">
        <button class="bg-[#5E9A13] text-white py-4 px-10 rounded-4xl hover:bg-[#4a7c0f] text-lg font-semibold">
          Se alle produkter
        </button>
      </div>`,
    );
  }
};
