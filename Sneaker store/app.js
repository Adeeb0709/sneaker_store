const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "Air Force",
    price: 129,
    colors: [
      {
        code: "black",
        img: "./img/product/air.png",
      },
      {
        code: "maroon",
        img: "./img/product/air.png",
      },
    ],
  },
  {
    id: 2,
    title: "Air Jordan",
    price: 149,
    colors: [
      {
        code: "pink",
        img: "./img/product/jordan.png",
      },
      {
        code: "cyan",
        img: "./img/product/jordan2.png",
      },
    ],
  },
  {
    id: 3,
    title: "Blazer",
    price: 119,
    colors: [
      {
        code: "red",
        img: "./img/product/blazer.png",
      },
      {
        code: "magenta",
        img: "./img/product/blazer2.png",
      },
    ],
  },
  {
    id: 4,
    title: "Crater",
    price: 139,
    colors: [
      {
        code: "lightgray",
        img: "./img/product/crater.png",
      },
      {
        code: "blue",
        img: "./img/product/crater2.png",
      },
    ],
  },
  {
    id: 5,
    title: "Hippie",
    price: 109,
    colors: [
      {
        code: "orange",
        img: "./img/product/hippie.png",
      },
      {
        code: "cyan",
        img: "./img/product/hippie2.png",
      },
    ],
  },
  {
    id: 6,
    title: "Max",
    price: 199,
    colors: [
      {
        code: "black",
        img: "./img/product/max.png",
      },
      {
        code: "blue",
        img: "./img/product/max2.png",
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "RM" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    //assing new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});


const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});