const categoryContainer = document.getElementById("category-container");
const categoryPlantContainer = document.getElementById(
  "category-plant-container"
);
const categoryDetailsModal = document.getElementById("category-details-modal");
const modalContainer = document.getElementById("modal-container");
const addToCart = document.getElementById("add-to-cart-container");
const loadingContainer = document.getElementById("loading-container");
let addCarts = [];

// const handleViewCategory = (e) =>{
//     const id = e.target.parentNode.id;
//     categoryDetailsModal.showModal();
// }

// categoryContainer.addEventListener('click', (e) =>{
//      if (e.target.innerText === "View Details") {
//     handleViewDetails(e);
//   }
// })
const hideLoading = () => {
  loadingContainer.innerHTML = "";
};

const loadCategory = () => {
  fetch("https://openapi.programming-hero.com/api/categories")
    .then((res) => res.json())
    .then((data) => {
      // console.log(data);
      const categories = data.categories;
      showCategory(categories);
    })
    .catch((err) => {
      console.log(err);
    });
};
const showCategory = (categories) => {
  categories.forEach((category) => {
    categoryContainer.innerHTML += `
          <li id="${category.id}" class="hover:bg-[#15803D] p-2 m-3 hover:text-white hover:rounded cursor-pointer">${category.category_name}</li>
        `;
  });
  categoryContainer.addEventListener("click", (e) => {
    // console.log(e.target.id);
    const allLi = document.querySelectorAll("li");
    allLi.forEach((li) => {
      li.classList.remove("bg-[#15803D]");
    });
    if (e.target.localName === "li") {
      e.target.classList.add("bg-[#15803D]");
      showLoading();
      loadCategoryNews(e.target.id);
    }
  });
};

const loadCategoryNews = (categoryId) => {
  fetch(`https://openapi.programming-hero.com/api/category/${categoryId}`)
    .then((res) => res.json())
    .then((data) => {
      hideLoading();
      // console.log(data);
      showByCategoryPlant(data.plants);
    })
    .catch((err) => {
      console.log(err);
    });
};

const showByCategoryPlant = (plants) => {
  categoryPlantContainer.innerHTML = "";
  plants.forEach((plant) => {
    // console.log(plant);
    categoryPlantContainer.innerHTML += `
        <div class="card bg-base-100 shadow-sm">
                  <figure class="aspect-square overflow-hidden">
                    <img
                      src="${plant.image}"
                      alt="Shoes"
                      class="p-3 object-cover w-full h-full rounded-lg"
                    />
                  </figure>
                  <div class="card-body cursor-pointer">
                    <h2 class="card-title" data-id="${plant.id}">${plant.name}</h2>
                    <p>
                      ${plant.description}
                    </p>
                    <div class="flex justify-between gap-4 items-center">
                      <button class="p-2 bg-[#DCFCE7] text-[#15803D] rounded-lg">
                        ${plant.category}
                      </button>
                      <div>
                        <p>৳${plant.price}</p>
                      </div>
                    </div>
                    <div id="${plant.id}" class="card-actions justify-end">
                      <button  class="p-2 btn-primary bg-[#15803D] btn-block text-white rounded-lg  ">
                        Add To Cart
                      </button>
                    </div>
                  </div>
                </div>
    `;
  });
};

const loadPlantDetails = (plantId) => {
  fetch(`https://openapi.programming-hero.com/api/plant/${plantId}`)
    .then((res) => res.json())
    .then((data) => {
      hideLoading();
      const plant = data.plants;
      showCategoryDetails(plant);
    })
    .catch((err) => {
      console.error("Error fetching plant details:", err);
    });
};

categoryPlantContainer.addEventListener("click", (e) => {
  if (e.target.innerText === "Add To Cart") {
    handleAddToCart(e);
  }
  if (e.target.matches("h2.card-title")) {
    const plantId = e.target.dataset.id;
    loadPlantDetails(plantId);
  }
});

const showAddToCarts = (addCarts) => {
  console.log(addCarts);
  addToCart.innerHTML = "";
  let totalPrice = 0;

  addCarts.forEach((addCart) => {
    addToCart.innerHTML += `
 <div class="bg-[#DCFCE7] m-2 p-3 flex justify-between">
                <div class="">
                  <h1>${addCart.title}</h1>
                  <p>${addCart.price} 1</p>
                </div>
                <button onclick="handleDeleteAddToCart('${addCart.id}')"><i  class="fa-solid fa-xmark"></i></button>
            </div>
    `;
    totalPrice += Number(addCart.price.replace("৳", ""));
  });
  document.getElementById("total-price").innerText = `৳ ${totalPrice}`;
};

const handleDeleteAddToCart = (addToCartId) => {
  // console.log(addToCartId);
  const filterAddToCart = addCarts.filter(
    (addCart) => addCart.id !== addToCartId
  );
  addCarts = filterAddToCart;
  showAddToCarts(addCarts);
};

const handleAddToCart = (e) => {
  const title = e.target.parentNode.parentNode.children[0].innerText;
  const price =
    e.target.parentNode.parentNode.children[2].children[1].innerText;
  //   console.log(price);
  const id = e.target.parentNode.id;
  addCarts.push({
    title: title,
    id: id,
    price: price,
  });
  showAddToCarts(addCarts);
};

// function to load default plant
const loadDefaultPlantCategory = () => {
  showLoading();
  categoryPlantContainer.innerHTML = "";
  fetch(`https://openapi.programming-hero.com/api/plants`)
    .then((res) => res.json())
    .then((data) => {
      hideLoading();
      showByCategoryPlant(data.plants);
    })
    .catch((err) => {
      console.log(err);
    });
};

const showCategoryDetails = (plant) => {
  categoryDetailsModal.showModal();
  modalContainer.innerHTML = `
  
  <div class="space-y-4">
    <h2 class="card-title" data-id="${plant.id}">${plant.name}</h2>
    <figure class="aspect-square overflow-hidden">
             <img
               src="${plant.image}"
               alt="Shoes"
               class="object-cover w-full h-full rounded-lg"
             />
    </figure>
    <h1 class=""><span class="font-semibold">Category: </span>
                 ${plant.category}
    </h1>
    <h1 class=""><span class="font-semibold">Price: </span>
                ৳${plant.price}
    </h1>
    <p class=""><span class="font-semibold">Price: </span>
                ${plant.description}
    </p>
    </div>
    `;
};

const showLoading = () => {
  loadingContainer.innerHTML = `
    <div class="flex justify-center items-center space-y-2">
          <span class="loading loading-ball loading-xs"></span>
          <span class="loading loading-ball loading-sm"></span>
          <span class="loading loading-ball loading-md"></span>
          <span class="loading loading-ball loading-lg"></span>
          <span class="loading loading-ball loading-xl"></span>
        </div>
  `;
};
window.onload = loadDefaultPlantCategory;
loadCategory();
