Swal.fire({
  text: "本網站為練習作品，非正式官方網站，資訊均非正式內容。若網站中有表單填寫，僅此示意，並無任何後台功能，不會對外蒐集個人資料，特此申明。",
  icon: "info",
});

// const productList = [
// ↓
let allProducts = [
  // ↑
  {
    type: "daisy",
    color: "orange",
    category: "gift",
    amount: "2599",
    img: "./images/FL.jpg",
    name: "Moonlight Serenade",
    title: "-月光小夜曲-",
    price: "NT$ 2,599",
  },
  {
    type: "cotton",
    color: "white",
    category: "indoor",
    amount: "2399",
    img: "./images/FL2.jpg",
    name: "Forest Whispers",
    title: "-森林密語-",
    price: "NT$ 2,399",
  },
  {
    type: "rose",
    color: "white",
    category: "wedding",
    amount: "2299",
    img: "./images/FL3.jpg",
    name: "Morning Dew",
    title: "-晨露-",
    price: "NT$ 2,299",
  },
  {
    type: "rose",
    color: "red",
    category: "gift",
    amount: "2799",
    img: "./images/FL4.jpg",
    name: "Golden Harvest",
    title: "-金色豐收-",
    price: "NT$ 2,799",
  },
  {
    type: "rose",
    color: "red",
    category: "wedding",
    amount: "2699",
    img: "./images/FL5.jpg",
    name: "Tropical Paradise",
    title: "-熱帶天堂-",
    price: "NT$ 2,699",
  },
  {
    type: "daisy",
    color: "white",
    category: "gift",
    amount: "1299",
    img: "./images/FL6_BG.jpg",
    name: "Spring Fling",
    title: "-春日之舞-",
    price: "NT$ 1,299",
  },
  {
    type: "rose",
    color: "white",
    category: "wedding",
    amount: "1599",
    img: "./images/FL7.jpg",
    name: "Dreams of Herbs",
    title: "-香草夢境-",
    price: "NT$ 1,599",
  },
  {
    type: "daisy",
    color: "white",
    category: "indoor",
    amount: "2399",
    img: "./images/FL8.jpg",
    name: "Rustic Romance",
    title: "-鄉村浪漫-",
    price: "NT$ 2,399",
  },
  {
    type: "rose",
    color: "red",
    category: "indoor",
    amount: "2299",
    img: "./images/FL9.jpg",
    name: "Pure Elegance",
    title: "-純淨優雅-",
    price: "NT$ 2,299",
  },
  {
    type: "daisy",
    color: "red",
    category: "gift",
    amount: "2699",
    img: "./images/FL10.jpg",
    name: "Relaxing and Joyful",
    title: "-心曠神怡-",
    price: "NT$ 2,699",
  },
  {
    type: "cotton",
    color: "orange",
    category: "wedding",
    amount: "2688",
    img: "./images/FL11.jpg",
    name: "Fairy Tale Ending",
    title: "-童話結局-",
    price: "NT$ 2,688",
  },
  {
    type: "daisy",
    color: "yellow",
    category: "gift",
    amount: "3499",
    img: "./images/FL12.jpg",
    name: "Forest Whispers",
    title: "-森林密語-",
    price: "NT$ 3,499",
  },
  {
    type: "rose",
    color: "red",
    category: "indoor",
    amount: "3299",
    img: "./images/FL13.jpg",
    name: "Rose Garden",
    title: "-玫瑰園-",
    price: "NT$ 3,299",
  },
  {
    type: "rose",
    color: "red",
    category: "gift",
    amount: "1299",
    img: "./images/FL14.jpg",
    name: "Butterfly Kisses",
    title: "-蝴蝶之吻-",
    price: "NT$ 1,299",
  },
  {
    type: "rose",
    color: "white",
    category: "indoor",
    amount: "2199",
    img: "./images/FL15.jpg",
    name: "Pure White Angels",
    title: "-純白天使-",
    price: "NT$ 2,199",
  },
  {
    type: "daisy",
    color: "red",
    category: "gift",
    amount: "2520",
    img: "./images/FL16.jpg",
    name: "Sweetheart Bouquet",
    title: "-甜心花束-",
    price: "NT$ 2,520",
  },
  {
    type: "rose",
    color: "red",
    category: "wedding",
    amount: "3699",
    img: "./images/FL17.jpg",
    name: "Sweet Serenity",
    title: "-甜蜜寧靜-",
    price: "NT$ 3,699",
  },
  {
    type: "rose",
    color: "yellow",
    category: "wedding",
    amount: "3299",
    img: "./images/FL18.jpg",
    name: "A Touch of Class",
    title: "-高雅品味-",
    price: "NT$ 3,299",
  },
  {
    type: "cotton",
    color: "red",
    category: "gift",
    amount: "2299",
    img: "./images/FL19.jpg",
    name: "Dancing Flowers of Youth",
    title: "-青春花舞-",
    price: "NT$ 2,299",
  },
  {
    type: "cotton",
    color: "yellow",
    category: "wedding",
    amount: "2899",
    img: "./images/FL20.jpg",
    name: "Flower of Happiness",
    title: "-幸福之花-",
    price: "NT$ 2,899",
  },
  {
    type: "rose",
    color: "red",
    category: "gift",
    amount: "1299",
    img: "./images/FL21.jpg",
    name: "Pink Perfection",
    title: "-粉紅完美-",
    price: "NT$ 1,299",
  },
  {
    type: "daisy",
    color: "white",
    category: "gift",
    amount: "1299",
    img: "./images/FL22.jpg",
    name: "Garden of Dreams",
    title: "-夢幻花園-",
    price: "NT$ 1,299",
  },
  {
    type: "rose",
    color: "orange",
    category: "wedding",
    amount: "2688",
    img: "./images/FL23.jpg",
    name: "Oath of the Rose",
    title: "-瑰麗誓約-",
    price: "NT$ 2,688",
  },
  {
    type: "rose",
    color: "red",
    category: "wedding",
    amount: "2599",
    img: "./images/FL24.jpg",
    name: "Vibrant Colors",
    title: "-萬紫千紅-",
    price: "NT$ 2,599",
  },
  {
    type: "rose",
    color: "white",
    category: "indoor",
    amount: "2799",
    img: "./images/FL25.jpg",
    name: "Garden Grace",
    title: "-花園恩典-",
    price: "NT$ 2,799",
  },
  {
    type: "rose",
    color: "yellow",
    category: "indoor",
    amount: "1999",
    img: "./images/FL26.jpg",
    name: "Golden Sunset",
    title: "-金色夕陽-",
    price: "NT$ 1,999",
  },
  {
    type: "daisy",
    color: "orange",
    category: "indoor",
    amount: "2199",
    img: "./images/FL27.jpg",
    name: "Ocean's Melody",
    title: "-海洋旋律-",
    price: "NT$ 2,199",
  },
  {
    type: "daisy",
    color: "orange",
    category: "indoor",
    amount: "2199",
    img: "./images/FL28.jpg",
    name: "Tranquil Reflections",
    title: "-寧靜映象-",
    price: "NT$ 2,199",
  },
  {
    type: "cotton",
    color: "orange",
    category: "indoor",
    amount: "1899",
    img: "./images/FL29.jpg",
    name: "Tranquil Zephyr",
    title: "-寧靜微風-",
    price: "NT$ 1,899",
  },
  {
    type: "daisy",
    color: "yellow",
    category: "indoor",
    amount: "2699",
    img: "./images/FL30.jpg",
    name: "Lemonade Dreams",
    title: "-檸檬之夢-",
    price: "NT$ 2,699",
  },
  {
    type: "rose",
    color: "orange",
    category: "indoor",
    amount: "1599",
    img: "./images/FL32.jpg",
    name: "wilight Bloom",
    title: "-暮色之花-",
    price: "NT$ 1,599",
  },
  {
    type: "rose",
    color: "red",
    category: "indoor",
    amount: "2399",
    img: "./images/FL33.jpg",
    name: "Rainbow Dreams",
    title: "-彩虹夢境-",
    price: "NT$ 2,399",
  },
  {
    type: "cotton",
    color: "white",
    category: "wedding",
    amount: "3199",
    img: "./images/FL34.jpg",
    name: "Whispering Winds",
    title: "-低語之風-",
    price: "NT$ 3,199",
  },
  {
    type: "cotton",
    color: "white",
    category: "gift",
    amount: "2399",
    img: "./images/FL35.jpg",
    name: "Tranquil Dawn",
    title: "-寧靜黎明-",
    price: "NT$ 2,399",
  },
  {
    type: "cotton",
    color: "yellow",
    category: "indoor",
    amount: "1999",
    img: "./images/FL36.jpg",
    name: "Sun-Kissed",
    title: "-陽光之吻-",
    price: "NT$ 1,999",
  },
  {
    type: "cotton",
    color: "red",
    category: "indoor",
    amount: "4199",
    img: "./images/FL37.jpg",
    name: "Secret Garden",
    title: "-秘密花園-",
    price: "NT$ 4,199",
  },
  {
    type: "daisy",
    color: "white",
    category: "wedding",
    amount: "4699",
    img: "./images/FL38.jpg",
    name: "Angel's Breath",
    title: "-天使之息-",
    price: "NT$ 4,699",
  },
  {
    type: "daisy",
    color: "orange",
    category: "wedding",
    amount: "4499",
    img: "./images/FL39.jpg",
    name: "Dreamy Dusk",
    title: "-夢幻黃昏-",
    price: "NT$ 4,499",
  },
  {
    type: "rose",
    color: "red",
    category: "wedding",
    amount: "4199",
    img: "./images/FL40.jpg",
    name: "Velvet Twilight",
    title: "-絲絨暮色-",
    price: "NT$ 4,199",
  },
  {
    type: "daisy",
    color: "white",
    category: "wedding",
    amount: "4299",
    img: "./images/FL41.jpg",
    name: "Whispering Willow",
    title: "-低語柳枝-",
    price: "NT$ 4,299",
  },
  {
    type: "daisy",
    color: "yellow",
    category: "wedding",
    amount: "3899",
    img: "./images/FL42.jpg",
    name: "Amber Whisper",
    title: "-琥珀低語-",
    price: "NT$ 3,899",
  },
  {
    type: "cotton",
    color: "red",
    category: "wedding",
    amount: "3299",
    img: "./images/FL43.jpg",
    name: "Sunshine Sparkle",
    title: "-陽光閃耀-",
    price: "NT$ 3,299",
  },
  {
    type: "daisy",
    color: "yellow",
    category: "wedding",
    amount: "3799",
    img: "./images/FL44.jpg",
    name: "Butterscotch Bliss",
    title: "-幸福奶油糖-",
    price: "NT$ 3,799",
  },
  {
    type: "cotton",
    color: "yellow",
    category: "gift",
    amount: "2699",
    img: "./images/FL45.jpg",
    name: "Spring Song",
    title: "-春之歌-",
    price: "NT$ 2,699",
  },
  {
    type: "cotton",
    color: "orange",
    category: "gift",
    amount: "3599",
    img: "./images/FL46.jpg",
    name: "Aurora Garden",
    title: "-極光花園-",
    price: "NT$ 3,599",
  },
  {
    type: "daisy",
    color: "yellow",
    category: "gift",
    amount: "2399",
    img: "./images/FL47.jpg",
    name: "Serenity Springs",
    title: "-寧靜之泉-",
    price: "NT$ 2,399",
  },
  {
    type: "rose",
    color: "yellow",
    category: "gift",
    amount: "1299",
    img: "./images/FL48.jpg",
    name: "Enchanted Twilight",
    title: "-迷人黃昏-",
    price: "NT$ 1,299",
  },
  {
    type: "rose",
    color: "orange",
    category: "gift",
    amount: "1599",
    img: "./images/FL49.jpg",
    name: "Golden Meadows",
    title: "-金色草原-",
    price: "NT$ 1,599",
  },
];
// 判定顯示商品
const itemsPerPage = 12;
let filterList = [];
let isFilter = false;

function displayItems(pageNumber) {
  const startIndex = (pageNumber - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage - 1;

  let items;
  if (isFilter) {
    items = filterList;
  } else {
    items = allProducts;
  }

  const displayedItems = items.slice(startIndex, endIndex + 1);
  renderProductList(displayedItems);
}

displayItems(1);

// 計算頁數
function calculateTotalPages(items) {
  const totalItems = items.length;
  const currentPage = Math.ceil(totalItems / itemsPerPage);

  let pages = [];
  for (let i = 0; i < currentPage; i++) {
    let html = `
        <li>
          <a href="#" onclick="displayItems(${i + 1})">
           ${i + 1}
          </a>
        </li>`;

    pages.push(html);
  }
  document.querySelector(".pagination ul").innerHTML = pages.join("");
}

// 動態商品顯示
calculateTotalPages(allProducts);
function renderProductList(items) {
  let productDom = [];
  for (let i = 0; i < items.length; i++) {
    const item = items[i];

    let html = `
        <article class="products" data-color="${item.color}" data-type="${item.type}" data-category="${item.category}" data-amount="${item.amount}">
            <figure>
              <a href="products.html"><img src="${item.img}" alt=""/></a>
            </figure>
            <p>${item.name}</p>
            <p>${item.title}</p>
            <p>${item.price}</p>
          </article>
        `;

    productDom.push(html);
  }
  document.querySelector("#products").innerHTML = productDom.join("");
}

// 麵包屑文字
const breadcrumb = document.querySelector(".breadcrumb-item a");
const weddingButton = document.querySelector(".icon-wedding");
const giftButton = document.querySelector(".icon-gift");
const indoorButton = document.querySelector(".icon-indoor");
weddingButton.addEventListener("click", function () {
  breadcrumb.innerText = "全部商品 / 婚禮花束";
});

giftButton.addEventListener("click", function () {
  breadcrumb.innerText = "全部商品 / 送禮花束";
});

indoorButton.addEventListener("click", function () {
  breadcrumb.innerText = "全部商品 / 居家裝飾";
});

const filterConditions = {};
const onlineShop = document.getElementById("onlineShop");
const links = onlineShop.querySelectorAll("a");
const products = document.querySelectorAll(".products");
let selectedCategory = null;
let selectedCategoryType = null;
let selectedCategoryColor = null;

links.forEach((link) => {
  link.addEventListener("click", function (event) {
    const category = link.getAttribute("data-category");
    selectedCategory = category;

    // 類別篩選
    filterList = allProducts.filter((product) => {
      return (
        product.category === selectedCategory &&
        (!selectedCategoryType || product.type === selectedCategoryType) &&
        (!selectedCategoryColor || product.color === selectedCategoryColor)
      );
    });

    isFilter = true;
    displayItems(1);
    calculateTotalPages(filterList);
  });
});

// 麵包屑
const searchButton = document.getElementById("searchButton");
searchButton.addEventListener("click", () => {
  let color;
  let flower;
  let breadcrumbText = "全部商品 / ";

  const selectedColor = document.querySelector('input[name="color"]:checked');
  const selectedFlower = document.querySelector('input[name="flower"]:checked');

  if (selectedColor) {
    color = selectedColor.value;
    breadcrumbText += getColorText(color);
    selectedCategoryColor = color; // 更新已選擇的顏色
  }

  if (selectedFlower) {
    flower = selectedFlower.value;
    breadcrumbText += getFlowerText(flower);
    selectedCategoryType = flower; // 更新已選擇的花種
  }

  // 更新麵包屑文字
  breadcrumb.innerText = breadcrumbText;

  // 篩選
  filterList = allProducts.filter((product) => {
    return (
      (!color || product.color === color) &&
      (!flower || product.type === flower) &&
      (!selectedCategory || product.category === selectedCategory) &&
      (!selectedCategoryType || product.type === selectedCategoryType) &&
      (!selectedCategoryColor || product.color === selectedCategoryColor)
    );
  });

  isFilter = true;
  displayItems(1);
  calculateTotalPages(filterList);
});

// 取得中文顏色名稱
function getColorText(color) {
  switch (color) {
    case "white":
      return "白色";
    case "red":
      return "紅色";
    case "yellow":
      return "黃色";
    case "orange":
      return "橘色";
    default:
      return "";
  }
}

// 取得中文花種名稱
function getFlowerText(flower) {
  switch (flower) {
    case "rose":
      return "玫瑰";
    case "daisy":
      return "雛菊";
    case "cotton":
      return "棉花";
    default:
      return "";
  }
}
// 篩選後收起側欄
document.getElementById("searchButton").addEventListener("click", function () {
  const offcanvasElement = document.getElementById("offcanvasLeft");
  const offcanvasInstance = bootstrap.Offcanvas.getInstance(offcanvasElement);
  offcanvasInstance.hide();
});

// 分類按鈕點擊樣式
// 定義改變背景圖片的函式
const changeBackground = (btn, imageUrl) => {
  btn.style.backgroundImage = `url(${imageUrl})`;
};

// 定義還原背景圖片的函式
const restoreBackground = (btn) => {
  btn.style.backgroundImage = "";
};
const buttons = document.querySelectorAll(".btn-background");

// 每個按鈕添加點擊事件監聽器
buttons.forEach((button) => {
  button.addEventListener("click", function () {
    // 將所有按鈕的背景圖片還原
    buttons.forEach((btn) => restoreBackground(btn));

    // 獲取按鈕的 data-category 屬性值
    const category = this.dataset.category;
    // 根據不同的類別設定不同的背景圖片
    switch (category) {
      case "wedding":
        changeBackground(this, "images/btn-wed_active.svg");
        break;
      case "gift":
        changeBackground(this, "images/btn-gift_active.svg");
        break;
      case "indoor":
        changeBackground(this, "images/btn-in_active.svg");
        break;
      default:
        break;
    }
  });
});

// 滑動
const lowerSlider = document.getElementById("lower");
const upperSlider = document.getElementById("upper");
const divOne = document.getElementById("one");
const divTwo = document.getElementById("two");

function formatNumber(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function updateDivValue(divId, value) {
  const div = document.getElementById(divId);
  div.textContent = formatNumber(value);
}

function updateDivValues() {
  updateDivValue("one", lowerSlider.value);
  updateDivValue("two", upperSlider.value);
}

// 初始設定數字顯示
updateDivValues();

// 滑桿變化事件監聽
lowerSlider.addEventListener("input", handleSliderChange);
upperSlider.addEventListener("input", handleSliderChange);

// 定義其他需要的變量
let useSliderFilter = false; // 確保正確初始化

// 更新商品顯示方式
function applyPriceFilter() {
  const minAmount = parseInt(lowerSlider.value);
  const maxAmount = parseInt(upperSlider.value);

  let filteredProducts;
  // 如果已經進行過其他篩選，且目前要使用滑桿篩選
  if (isFilter && useSliderFilter) {
    filteredProducts = allProducts.filter((product) => {
      const amount = parseInt(product.amount);

      // 確認商品符合選擇的類別、顏色和花種
      const isCategoryMatch =
        selectedCategory === null || product.category === selectedCategory;
      const isTypeMatch =
        selectedCategoryType === null || product.type === selectedCategoryType;
      const isColorMatch =
        selectedCategoryColor === null ||
        product.color === selectedCategoryColor;

      return (
        isCategoryMatch &&
        isTypeMatch &&
        isColorMatch &&
        amount >= minAmount &&
        amount <= maxAmount
      );
    });
  } else {
    // 直接對全部商品進行價格篩選
    filteredProducts = allProducts.filter((product) => {
      const amount = parseInt(product.amount);
      isFilter = true;
      return amount >= minAmount && amount <= maxAmount;
    });
  }

  // 更新顯示商品及分頁
  filterList = filteredProducts;
  displayItems(1);
  calculateTotalPages(filteredProducts);
}

// 在滑桿變化事件處理中設定 useSliderFilter 變量
function handleSliderChange() {
  const lowerVal = parseInt(lowerSlider.value);
  const upperVal = parseInt(upperSlider.value);
  useSliderFilter = true;

  // 篩選商品
  applyPriceFilter();
  updateDivValues();
}

// 價格高低排序
const highToLowButton = document.querySelector(".high-to-low");
const lowToHighButton = document.querySelector(".low-to-high");

highToLowButton.addEventListener("click", function () {
  sortProductsByAmount("high-to-low");
});

lowToHighButton.addEventListener("click", function () {
  sortProductsByAmount("low-to-high");
});

function sortProductsByAmount(sortType) {
  // 檢查是否有篩選條件，如果有就對篩選後的商品列表進行排序
  if (isFilter) {
    filterList.sort((a, b) => {
      const amountA = parseInt(a.amount);
      const amountB = parseInt(b.amount);
      if (sortType === "high-to-low") {
        return amountB - amountA;
      } else if (sortType === "low-to-high") {
        return amountA - amountB;
      }
    });
  } else {
    // 如果沒有篩選條件，則對全部商品進行排序
    allProducts.sort((a, b) => {
      const amountA = parseInt(a.amount);
      const amountB = parseInt(b.amount);
      if (sortType === "high-to-low") {
        return amountB - amountA;
      } else if (sortType === "low-to-high") {
        return amountA - amountB;
      }
    });
  }
  // 重新顯示商品
  displayItems(1);
}
