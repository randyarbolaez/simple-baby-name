fetch(
  'https://raw.githubusercontent.com/dominictarr/random-name/master/names.json'
)
  .then(res => res.json())
  .then(res => {
    let randomName = res[Math.floor(Math.random() * res.length)];
    document.getElementById('name').innerHTML = `You should name your baby

      <b> ${randomName} </b>`;
    console.log(randomName);
  });
