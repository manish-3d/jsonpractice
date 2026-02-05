async function populate() {
  const requestURL =
    "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";

  const response = await fetch(requestURL);
  const superHeroes = await response.json();

  populateHeader(superHeroes);
  populateHeroes(superHeroes);
}

function populateHeader(obj) {
  const header = document.querySelector("header");

  const myH1 = document.createElement("h1");
  myH1.textContent = obj.squadName;

  const myPara = document.createElement("p");
  myPara.textContent = `Hometown: ${obj.homeTown} // Formed: ${obj.formed}`;

  header.appendChild(myH1);
  header.appendChild(myPara);
}

function populateHeroes(obj) {
  const section = document.querySelector("section");
  const heroes = obj.members;

  for (const hero of heroes) {
    const article = document.createElement("article");
    const h2 = document.createElement("h2");
    const p1 = document.createElement("p");
    const p2 = document.createElement("p");
    const p3 = document.createElement("p");
    const ul = document.createElement("ul");

    h2.textContent = hero.name;
    p1.textContent = `Secret identity: ${hero.secretIdentity}`;
    p2.textContent = `Age: ${hero.age}`;
    p3.textContent = "Superpowers:";

    for (const power of hero.powers) {
      const li = document.createElement("li");
      li.textContent = power;
      ul.appendChild(li);
    }

    article.append(h2, p1, p2, p3, ul);
    section.appendChild(article);
  }
}

populate();
