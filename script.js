document.body.addEventListener("mousemove", (event) => {
    let x_coords = event.x;
    let y_coords = event.y;
});

function move() {
    document.getElementById("box").prop('top',0).animate({
        top: 0
    }, {
        duration: 4000,
        easing: 'ease-out',
        step: this.style.top = y_coords
    });
};
