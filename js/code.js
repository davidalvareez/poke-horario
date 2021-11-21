function getListRandom() {
    buttonOpacity();
    galleryRandom(0, 10, null, null);
}

function buttonOpacity() {
    if (document.getElementById("pokeball").style.opacity == "1") {
        document.getElementById("pokeball").style.opacity = "0.5";
    } else {
        document.getElementById("pokeball").style.opacity = "1";
    }
}

function galleryRandom(min, max, images, listRnd) {
    images = document.getElementsByTagName("img");
    listRnd = getListRandom(10, 1, 10);
    for (let i = min; i < max; i++) {
        images[i].setAttribute("src", "./img/IMG_" + listRnd[i] + ".PNG");
        console.log(images[i]);
    }
    return images;
}