var id = sessionStorage.getItem("id");
var Loading = document.getElementById("loading");
Loading.innerText = "Loading...";
var value = fetch(`https://fakestoreapi.com/products/${id}`)
  .then((val) => val.json())
  .then((val) => {
    Loading.innerText = "";

    // console.log(val);

    document.getElementById("para1").innerText = val.title;
    document.getElementById("img").src = val.image;
    document.getElementById("para3").innerText = val.price;
    document.getElementById("para4").innerText = val.category;
    document.getElementById("para5").innerText = val.rating.rate;
    document.getElementById("para6").innerText = val.rating.count;
    document.getElementById("description").innerText = val.description;
  });

var btnn = document.getElementById("btn");
btnn.onclick = () => {
  // vals.id
  window.location.href = "index.html";
};
var btnnn = document.getElementById("btnn");
btnnn.onclick = () => {
  var s = confirm("Confirm Your Order");
  if (s == true) {
    alert("Your Order Placed Successfully");
  } else {
    alert("Your Order is Cancelled");
  }
};
