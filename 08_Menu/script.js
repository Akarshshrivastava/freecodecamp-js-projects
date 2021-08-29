const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "https://github.com/john-smilga/javascript-basic-projects/blob/master/08-menu/setup/images/item-1.jpeg?raw=true",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "https://github.com/john-smilga/javascript-basic-projects/blob/master/08-menu/setup/images/item-2.jpeg?raw=true",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "https://github.com/john-smilga/javascript-basic-projects/blob/master/08-menu/setup/images/item-3.jpeg?raw=true",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "https://github.com/john-smilga/javascript-basic-projects/blob/master/08-menu/setup/images/item-4.jpeg?raw=true",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "https://github.com/john-smilga/javascript-basic-projects/blob/master/08-menu/setup/images/item-5.jpeg?raw=true",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "https://github.com/john-smilga/javascript-basic-projects/blob/master/08-menu/setup/images/item-6.jpeg?raw=true",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "https://github.com/john-smilga/javascript-basic-projects/blob/master/08-menu/setup/images/item-7.jpeg?raw=true",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "https://github.com/john-smilga/javascript-basic-projects/blob/master/08-menu/setup/images/item-8.jpeg?raw=true",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "https://github.com/john-smilga/javascript-basic-projects/blob/master/08-menu/setup/images/item-9.jpeg?raw=true",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];

const container = document.querySelector(".btn-container");
const sectionCenter = document.querySelector(".section-center");

window.addEventListener("DOMContentLoaded", function () {
  displayMenuItems(menu);
  displayMenuBtns();
});

// menuItems is array of objects
function displayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (item) {
    return `
        <article class="menu-item">
              <img
                src=${item.img}
                alt="img"
                class="photo"
              />
              <div class="item-info">
                <header>
                  <h4>${item.title}</h4>
                  <h4 class="price">$${item.price}</h4>
                </header>
                <p class="item-text">
                  ${item.desc}
                </p>
              </div>
            </article>
            `;
  });
  // displayMenu is an array with each element being HTML code
  // We are converting this array to string using join("") method and inserting in the innerHTML of sectionCenter
  displayMenu = displayMenu.join("");
  sectionCenter.innerHTML = displayMenu;
}
function displayMenuBtns() {
  const categories = menu.reduce(
    function (values, item) {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["all"]
  );
  categoryBtns = categories
    .map(function (category) {
      return `
                <button class="filter-btn" type="button" data-id=${category}>${category}</button>
                `;
    })
    .join("");
  container.innerHTML = categoryBtns;
  const filterBtns = container.querySelectorAll(".filter-btn");
  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      const category = e.currentTarget.dataset.id;
      const menuCategory = menu.filter(function (menuItem) {
        if (menuItem.category === category) {
          return menuItem;
        }
      });
      if (category === "all") {
        displayMenuItems(menu);
        // Basically display the original menu array
      } else {
        displayMenuItems(menuCategory);
      }
    });
  });
}
