const box = document.getElementById("box")
let t = 2;
function table_box() {
    let s = " "; //empty string
    for (let i = 1; i <= 10; i++) {
        if (t >= 11) {
            break;
        }
        s += ` ${t * i} `
        var font_size = (t * 2.5) + 20;
    }
    box.innerHTML += `<span style="margin-right: 10px; font-size: ${font_size}px; color: ${set_color()}">${s}</span>`
    box.innerHTML += `<br></br>`
    t++;
}

function set_color() {
    let colors = ['orange', 'brown', 'red', 'green', 'blue', 'purple'];
    let a = Math.floor(Math.random() * colors.length);
    return colors[a];
}

setInterval(function () {
    table_box()
}, 5000)


