// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png


document.querySelector('h1').style.textAlign = 'center';


const container = document.querySelector('#container');
container.style.textAlign = 'center';
container.classList.add('borders');


const baseURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'


for (let i = 1; i <= 500; i++) {
    const pokemon = document.createElement('div');
    pokemon.classList.add('pokemon');
    const label = document.createElement('span');
    label.innerText = `#${i}`;
    const newImg = document.createElement('img');
    newImg.src = `${baseURL}${i}.png`


    pokemon.appendChild(newImg);
    // pokemon.appendChild(label);
    container.appendChild(pokemon)
}
