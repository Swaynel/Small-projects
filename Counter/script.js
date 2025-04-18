const counterApp = document.createElement('div');
counterApp.innerHTML = `
  <h1>Counter App</h1>
  <button id="increment">Increment</button>
  <button id="decrement">Decrement</button>
  <p id="count">Count: 0</p>
`;
let count = 0;
function increment() {
  count++;
    document.getElementById('count').innerText = `Count: ${count}`;

}
function decrement(){
    count--;
    document.getElementById('count').innerText = `Count: ${count}`;

}
counterApp.style.textAlign = 'center';
counterApp.style.marginTop = '50px';
document.body.appendChild(counterApp);
document.getElementById('increment').onclick = increment;
document.getElementById('decrement').onclick = decrement;