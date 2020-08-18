var parent = document.getElementById("display");
const data = [
  {
    key: 1,
    type: "chocolate",
    name: "cadbury",
    price: "100",
    image: "./images/chocolate3.jpg",
  },
  {
    key: 2,
    type: "chocolate",
    name: "kitkat",
    price: "150",
    image: "./images/chocolate2.jpg",
  },
  {
    key: 3,
    type: "chocolate",
    name: "munch",
    price: "200",
    image: "./images/chocolate3.jpg",
  },
  {
    key: 4,
    type: "chocolate",
    name: "dairy milk",
    price: "70",
    image: "./images/chocolate4.jpg",
  },
  {
    key: 5,
    type: "ice cream",
    name: "choc bar",
    price: "70",
    image: "./images/icecream1.jpg",
  },
  {
    key: 6,
    type: "ice cream",
    name: "orange",
    price: "50",
    image: "./images/icecream2.jpg",
  },
  {
    key: 7,
    type: "ice cream",
    name: "cola",
    price: "80",
    image: "./images/icecream3.jpg",
  },
  {
    key: 8,
    type: "ice cream",
    name: "butter scotch",
    price: "70",
    image: "./images/icecream4.jpg",
  },
  {
    key: 9,
    type: "cake",
    name: "chocolate",
    price: "450",
    image: "./images/cake1.jpg",
  },
  {
    key: 10,
    type: "cake",
    name: "white cream",
    price: "600",
    image: "./images/cake2.jpg",
  },
  {
    key: 11,
    type: "cake",
    name: "vanilla",
    price: "400",
    image: "./images/cake3.jpg",
  },
  {
    key: 12,
    type: "burger",
    name: "veg burger",
    price: "60",
    image: "./images/burger1.jpg",
  },
  {
    key: 13,
    type: "burger",
    name: "cheese burger",
    price: "80",
    image: "./images/burger2.jpg",
  },
  {
    key: 14,
    type: "burger",
    name: "grilled burger",
    price: "90",
    image: "./images/burger3.jpg",
  },
];
$(document).ready(function () {
  console.log("hello");
  display();
});

function display() {
  parent.innerHTML = " ";
  let content = " ";
  data.map((item) => {
    content =
      content +
      `
        <div class="col-xs-4">
        <div class="thumbnail">
        <img src=${item.image} />
        <div class="caption">
        <h1>${item.name}</h1>
        <p>Price is Rs.${item.price}</p>

        </div>
        </div>

        </div>
        `;
  });
  parent.innerHTML = content;
}

function displayContent(id) {
  parent.innerHTML = " ";
  let content = " ";
  let data1 = data.filter((a) => a.type === id);
  data1.map((item) => {
    content =
      content +
      `
        <div class="col-xs-4">
        <div class="thumbnail">
        <img src=${item.image} />
        <div class="caption">
        <h1>${item.name}</h1>
        <p>Price is Rs.${item.price}</p>

        </div>
        </div>

        </div>
        `;
  });
  parent.innerHTML = content;
}

function search() {
  let s = document.getElementById("search").value;
  parent.innerHTML = " ";
  let content = " ";
  console.log(s.length);
  let len = s.length;
  let data1 = data.filter((a) => a.name.substr(0, len) === s);
  data1.map((item) => {
    content =
      content +
      `
        <div class="col-xs-4">
        <div class="thumbnail">
        <img src=${item.image} />
        <div class="caption">
        <h1>${item.name}</h1>
        <p>Price is Rs.${item.price}</p>

        </div>
        </div>

        </div>
        `;
  });
  parent.innerHTML = content;
}
