//ToolTip
const ToolTip = document.createElement('button');
ToolTip.style.position = "relative";
ToolTip.style.cursor = "pointer";
ToolTip.textContent = 'Hover me!';
document.body.appendChild(ToolTip);
//tooltip
const tooltip = document.createElement('div');
tooltip.textContent = "I'm a tooltip!";
tooltip.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.2)";
tooltip.style.display = "none";
tooltip.style.border = '1px solid #ccc';
tooltip.style.whiteSpace = 'nowrap';
tooltip.style.position = "absolute";
tooltip.style.background = "#fff";
tooltip.style.border = "1px solid #000";
tooltip.style.padding = "5px";
tooltip.style.zIndex = "1000";
tooltip.style.left = '0';
tooltip.style.top = '100%';
ToolTip.appendChild(tooltip);
//ToolTip on mouse hover
ToolTip.onmouseover = function () {
    tooltip.style.display = "block";
};
//ToolTip on mouse out
ToolTip.onmouseout = function () {
    tooltip.style.display = "none";
};

