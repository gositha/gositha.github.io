 // Copyright Gositha R 2020. All Rights Reserved.
 // You may use this javascript for your personal use, but it cannot be sold.
 
 function loadPage() {
 document.head.innerHTML = document.head.innerHTML + '<link href="/content/images/icon.jpg" rel="icon" />';
 document.head.innerHTML = document.head.innerHTML + '<link href="/content/themes/404.css" rel="stylesheet" />';
  var path = window.location.pathname;
var page = path.split("/").pop();
  if (page == "index.html") {
   page = "Home";
  }
  else {
   page = page.sub(1, page.length - 5);
  }
  document.title = page + " | gositha.github.io";
 }
loadPage();
