console.log(window.innerWidth);
if (window.innerWidth <= '320' || window.innerWidth <= '375' || window.innerWidth <= '414') {
  document.querySelector(".icon").style.display = 'block';
}else {
  document.querySelector(".icon").style.display = 'none';
}
function toggleAside() {
  const menuBTN = document.querySelector(".menu");
  if (menuBTN.style.display === "none") {
    return menuBTN.style.display = "block"
  } else {
    return menuBTN.style.display = "none"
  }
}