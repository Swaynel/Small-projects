const ColorPicker = document.createElement("input");
ColorPicker.style.top = "30px";
ColorPicker.style.right = "10px";
ColorPicker.id = "colorPicker";
ColorPicker.oninput = function () {
    document.body.style.backgroundColor = ColorPicker.value;
    document.body.style.transition = "background-color 0.3s ease-in-out";
};
ColorPicker.type = "color";
ColorPicker.value = "#000000"; // Default color
ColorPicker.style.position = "fixed";
document.body.appendChild(ColorPicker);
const LabelColor = document.createElement("label");
LabelColor.setAttribute("for", "colorPicker");
document.body.appendChild(LabelColor);
LabelColor.textContent = "Pick a background color: ";
LabelColor.style.position = "absolute";
LabelColor.style.top = "10px";
LabelColor.style.right = "10px";
