const ToggleBtn = document.createElement('button');
ToggleBtn.innerText = 'Toggle Mode';
ToggleBtn.style.backgroundColor = 'black';
ToggleBtn.style.color = 'white';
ToggleBtn.style.border = 'none';
ToggleBtn.style.padding = '10px 20px';
ToggleBtn.style.borderRadius = '5px';
ToggleBtn.style.cursor = 'pointer';
ToggleBtn.style.position = 'fixed';
document.body.appendChild(ToggleBtn);

let isDarkMode = false;

ToggleBtn.onclick = function() {

    if (!isDarkMode) {   
document.body.style.backgroundColor = 'black';
        document.body.style.color = 'white';
        document.body.style.transition = 'background-color 0.5s, color 0.5s';
        ToggleBtn.innerText = 'Light Mode';
        isDarkMode = true;}
        else{
            document.body.style.backgroundColor = 'white';
            document.body.style.color = 'black';
            document.body.style.transition = 'background-color 0.5s, color 0.5s';
            ToggleBtn.innerText = 'Dark Mode';
            isDarkMode = false;
        }};