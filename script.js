let images = [
    "cpu.png",
    "disk.png",
    "netstat.png"
];

let index = 0;
let interval = null;

const img = document.getElementById("slideshow-img");

img.src = images[0];

function startSlideshow() {
    if (interval !== null) {
        return;
    }

    interval = setInterval(() => {
        index++;
        if (index >= images.length) {
            index = 0;
        }
        img.src = images[index];
    }, 3000);
}