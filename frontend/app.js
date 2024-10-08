const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "BOOTCUT",
    price: 1999,
    colors: [
      {
        color: "blue",
        img: "./img/ice.png",
      },
      {
        color: "lightblue",
        img: "./img/ice2.png",
      },
    ],
  },
  {
    id: 2,
    title: "SLIM FIT",
    price: 1149,
    colors: [
      {
        code: "lightgray",
        img: "./img/grey.png",
      },
      {
        code: "green",
        img: "./img/lightgrey.png",
      },
    ],
  },
  {
    id: 3,
    title: "ROYAL BLUE",
    price: 2100,
    colors: [
      {
        code: "lightgray",
        img: "./img/royalblue.png",
      },
      {
        code: "green",
        img: "./img/royalblue.png",
      },
    ],
  },
  {
    id: 4,
    title: "BROWN",
    price: 129,
    colors: [
      {
        code: "black",
        img: "./img/brown.png",
      },
      // {
      //   code: "lightgray",
      //   img: "./img/crater2.png",
    
      // },
    ],
  },
  {
    id: 5,
    title: "LOOSE FIT",
    price: 999,
    colors: [
      {
        code: "gray",
        img: "./img/black2.png",
      },
      {
        code: "black",
        img: "./img/black2.png",
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
    currentProductPrice.textContent = "$" + choosenProduct.price;
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
