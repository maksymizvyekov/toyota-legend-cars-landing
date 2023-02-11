const sections = document.querySelectorAll(".main-content-section");
const menuItems = document.querySelectorAll(".navigation-head-item");

for(let i = 0;i<menuItems.length;i++){
    menuItems[i].addEventListener("click", () => {
        changeCar(i);
    })
    console.log(i);
}

function changeCar(number){
    console.log(number);

    for(let i = 0; i < menuItems.length;i++){
        menuItems[i].classList.remove("choosed-car");
        sections[i].classList.remove("hiden");
    }
    for(let i = 0; i < sections.length; i++){
        if(i!=number)
            sections[i].classList.add("hiden");
    }
    menuItems[number].classList.add("choosed-car");
}