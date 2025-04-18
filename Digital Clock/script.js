const pGraph = document.createElement('div')
pGraph.style.position = 'fixed'
pGraph.style.top = '0px'
pGraph.style.left = '0px'
document.body.appendChild(pGraph);
const ClockBtn = document.createElement('button');
ClockBtn.onclick = function updateClock(){
    const date = new Date();
    const hours =String( date.getHours()).padStart(2, '0');
    const minutes=String( date.getMinutes()).padStart(2, '0') ;
     const Seconds= String( date.getSeconds()).padStart(2, '0');
    pGraph.textContent = ` ${hours}:${minutes}:${Seconds}`;
};
setInterval(updateClock, 1000);
updateClock();
ClockBtn.style.right = '0px'
ClockBtn.textContent = 'Press for date';
ClockBtn.style.position = 'fixed';
document.body.appendChild(ClockBtn);
