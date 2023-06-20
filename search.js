// GET ELEMENT FROM DOM
const btnFilter = document.querySelector(".button_filter");
galeri = document.querySelectorAll('.gambar');

btnFilter.addEventListener("click", (event) =>{
  if(event.target.classList.contains("filter-item")){
    btnFilter.querySelector(".active").classList.remove("active")
    event.target.classList.add("active");
    const filterImg = event.target.getAttribute("data-filter");
    galeri.forEach((item) => {
      if(item.classList.contains(filterImg) || filterImg === 'all') {
        item.classList.remove("hide");
        item.classList.add("show");
      }
      else {
        item.classList.remove("show");
        item.classList.add("hide");
      }
    });
  }             
}); 


const search_fitur = () => {
  const search_box = document.getElementById('inputBar').value.toUpperCase();
  const galerryItem = document.getElementById("list-item")
  const item = document.querySelectorAll(".gambar")
  const name = galerryItem.getElementsByTagName("p")

  for( var i=0; i<name.length; i++){
      let match = item[i].getElementsByClassName("card_title")[0];
      if(match){
          let teksValue = match.textContent || match.innerHTML
          if(teksValue.toUpperCase().indexOf(search_box) > -1){
              item[i].style.display = "";
          } else {
              item[i].style.display = "none";
          }
      }
  }
}
