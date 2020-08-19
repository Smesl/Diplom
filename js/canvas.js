         
const c = document.getElementById("myCanvas");
const ctx = c.getContext('2d');

const canvasFunc = () => {
        gradient = ctx.createLinearGradient(180, 300, 300, 0);
        gradient.addColorStop(0, '#ff8f5a');
        gradient.addColorStop(1, '#ff2f96');
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.moveTo(70, 630);
}


if (window.innerWidth > 1670) {
        c.width = 855;               
}
if (window.innerWidth < 1670) {
        c.width = 800;               
}


        if (window.innerWidth > 760) {
                canvasFunc()
                ctx.bezierCurveTo(-110, 305, 930, -590, 930, 630);
                ctx.fill();                 
        }
        if (window.innerWidth < 761 && window.innerWidth > 560) {
                c.width = 800;
                canvasFunc()
                ctx.bezierCurveTo(-110, 355, 930, -430, 930, 630);
                ctx.fill();
        }
        if (window.innerWidth < 561 && window.innerWidth > 450) {
                c.width = 600;
                c.height = 630;

                canvasFunc()
                ctx.bezierCurveTo(-110, 335, 930, -500, 930, 1500);
                ctx.fill();
        }
        if (window.innerWidth < 451 && window.innerWidth > 350) {
                c.width = 541;
                c.height = 530;

                canvasFunc()
                ctx.bezierCurveTo(60, 295, 700, -450, 900, 1500);
                ctx.fill();
        }
        if (window.innerWidth < 351) {
                c.width = 531;
                c.height = 530;

                canvasFunc()
                ctx.bezierCurveTo(200, 325, 700, -430, 900, 1560);
                ctx.fill();
        }
                

                