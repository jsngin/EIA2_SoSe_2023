var Boxes;
(function (Boxes) {
    window.addEventListener("load", hndlload);
    function hndlload(_event) {
        debugger;
        let n = 5;
        let color;
        let x = 0;
        let y = 0;
        for (let i = 0; i < n; i++) {
            y += (i == 2) ? 20 : 50;
            x = (x + 170) % 400;
            switch (i) {
                case 0:
                    color = "green";
                    break;
                case 1:
                case 4:
                    color = "violet";
                    break;
                case 3:
                    continue;
                default:
                    color = "orange";
            }
            for (let size of ["big", "medium", "small"]) {
                createBox(color, x, y, size);
                if (i == 4)
                    break;
            }
            console.log('tracetable: ', { 'n': n, 'i': i, 'color': color, 'x': x, 'y': y });
        }
    }
    function createBox(_color, _x, _y, _size) {
        let div = document.createElement("div");
        document.body.appendChild(div);
        div.classList.add(_size);
        div.style.backgroundColor = _color;
        div.style.left = _x + "px";
        div.style.top = _y + "px";
    }
    /*  */
})(Boxes || (Boxes = {}));
//# sourceMappingURL=traceTable.js.map