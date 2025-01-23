var OK = "";
const Reusable = (vals) => {
  var parentt = document.createElement("div");
  parentt.className = "parent1";
  var imagee = document.createElement("img");
  imagee.src = vals.image;
  imagee.className = "img";
  parentt.appendChild(imagee);

  var titlee = document.createElement("p");
  titlee.className = "parah";
  titlee.innerText = "TITLE : " + vals.title;
  // b.innerText = `TITLE ${vals.title}`
  parentt.appendChild(titlee);

  var pricee = document.createElement("p");
  pricee.className = "parah";
  pricee.innerText = "PRICE : " + vals.price;

  parentt.appendChild(pricee);

  var categoryy = document.createElement("p");
  categoryy.className = "parah";
  categoryy.innerText = "CATEGORY :" + vals.category;

  parentt.appendChild(categoryy);

  var ratecount = document.createElement("p");
  ratecount.className = "parah";
  ratecount.innerText =
    "RATING : " + vals.rating.rate + "  COUNT : " + vals.rating.count;
  // parentt.appendChild(ratecount);

  var btnn = document.createElement("button");

  btnn.innerText = "VIEW PRODUCT";
  btnn.className = "btn";
  btnn.onclick = () => {
    sessionStorage.setItem("id", vals.id);

    window.location.href = "indexx.html";
  };

  console.log(vals);

  parentt.appendChild(btnn);
  var totalparent = document.getElementById("hi");
  totalparent.appendChild(parentt);
  fun = () => {
    totalparent.innerHTML = "";
  };
};
var Loading = document.getElementById("loading");
Loading.innerText = "Loading...";
var value = fetch("https://fakestoreapi.com/products")
  .then((val) => val.json())
  .then((val) => {
    // console.log(val);

    OK = val;
    Loading.innerText = "";
    val.map((vals) => {
      Reusable(vals);
      // var searchbutton=document.getElementById("btttn")
      window.addEventListener("keydown", (enter) => {
        if (enter.key == "Enter") {
          whenclick();

          // console.log("hii");
          // document.getElementById("btttn").focus()
        }
      });
      whenclick = () => {
        fun();
        var inputvalue = document.getElementById("inputt").value;
        var total = OK.filter((val) => {
          if (
            val.title.includes(inputvalue) ||
            val.category.includes(inputvalue) ||
            val.description.includes(inputvalue)
          ) {
            Reusable(val);

            return val;
          }
        });

        // console.log(total);
        if (total.length == 0) {
          var dt = document.getElementById("h1");
          dt.innerText = "No Data Found!!";
        }
      };
    });
  });


