let result = document.getElementById('resultado');
const quantities = document.querySelectorAll('#datos ul li');

document.getElementById('convertir').addEventListener('click', function () {
  showData(newData);
});
document.getElementById('limpiar').addEventListener('click', cleanData);

let data = [];
let newData = [];

quantities.forEach((element) => {
  data.push(element.innerText);
});

const conversion = data.forEach((element) => {
  let regex = /(\d\S)/g;

  let number = element.match(regex).join('');
  number = number.replace(',', '.');
  console.log(number);

  let data = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(number);

  newData.push(data);
});

const showData = (e) => {
  result.innerHTML = '';
  for (var i = 0; i < 4; i++) {
    result.innerHTML += `
      <ul>
        <li>${e[i]}</li>
      </ul>
    `;
  }
};

function cleanData() {
  result.innerHTML = '';
}
