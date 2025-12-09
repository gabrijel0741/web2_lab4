let slikeDivElem = document.querySelector(".slike-div");

document.querySelector(".ucitaj-btn").addEventListener("click", function () {
    slikeDivElem.innerHTML = "";
    let brojSlika = 144;

    for (let i = 1; i <= brojSlika; i++) {
        let img = document.createElement("img");
        if(i <= 9){
            img.src = `images/image_part_00${i}.jpg`;
        }
        else if(i <= 99){
            img.src = `images/image_part_0${i}.jpg`;
        }
        else{
            img.src = `images/image_part_${i}.jpg`;
        }
        img.alt = `Slika broj ${i}`;
        slikeDivElem.appendChild(img);
    }
});

document.querySelector(".ocisti-btn").addEventListener("click", function () {
    slikeDivElem.innerHTML = "";
});
