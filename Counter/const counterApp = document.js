const counterApp = document.createElement('div');
counterApp.innerHTML = `
  <h1>Counter App</h1>
  <button id="increment">Increment</button>
  <button id="decrement">Decrement</button>
  <p id="count">Count: 0</p>
`;
incrementButton = counterApp.querySelector('#increment');
decrementButton = counterApp.querySelector('#decrement');
counterApp.style.textAlign = 'center';
counterApp.style.marginTop = '50px';
document.body.appendChild(counterApp);