//function toggleDropdown() {
//    var dropdownContent = document.querySelector('.dropdown-content');
//    dropdownContent.style.display = (dropdownContent.style.display === 'block') ? 'none' : 'block';




//Multiple options dropdown
//https://codepen.io/gatoledo1/pen/QWmpWjK

const optionMenu = document.querySelector(".select-menu"),
  selectBtn = optionMenu.querySelector(".select-btn"),
  options = optionMenu.querySelectorAll(".option"),
  sBtn_text = optionMenu.querySelector(".sBtn-text");

selectBtn.addEventListener("click", () =>
  optionMenu.classList.toggle("active")
);

const optionMenu1 = document.querySelector(".select-menu1"),
  selectBtn1 = optionMenu1.querySelector(".select-btn1"),
  options1 = optionMenu1.querySelectorAll(".option"),
  sBtn_text1 = optionMenu1.querySelector(".sBtn-text1");

options.forEach((option) => {
  option.addEventListener("click", () => {
    let selectedOption = option.querySelector(".option-text").innerText;
    sBtn_text.innerText = selectedOption;

    optionMenu.classList.remove("active");
  });
});

options1.forEach((option) => {
    option.addEventListener("click", () => {
      let selectedOption = option.querySelector(".option-text").innerText;
      sBtn_text1.innerText = selectedOption;
  
      optionMenu1.classList.remove("active");
    });
  });



