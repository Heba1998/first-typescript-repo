import { digimonURL } from '../lib';

type DigimonsType = {
  name: string;
  img: string;
};

export default async function updateOutput() {
  const Digimons = await getdigimons();
  const html = layoutdigimons(Digimons);

  if (output && html) {
    output.innerHTML = html;
  }
}

function layoutdigimons(digimons: DigimonsType[]) {
  let d =0;
  const items = digimons.map(({name, img }) => {
    d++;
    const productHtml = `
    <div class="card" style="width: 18rem; padding: 20px;">
    <img src="${img}" class="card-img-top"/>
    <div class="card-body">
    <h5 class="card-title">#${d}</h5>
    <h3 class="card-text">${name}</h3>
    <button onclick="myFunction()" >${name}</button>
  </div>
  </div>
    `;
    const cardHtml = `
    <li>
        <div class="card">
            <div class="card-content">
                <div class="content">
                ${productHtml}
                </div>
            </div>
        </div>
    </li>
    `;
    return cardHtml;
  });
  let productsHtml = `<ul>${items.join('')}</ul>`;
  return productsHtml;
}

async function getdigimons(): Promise<DigimonsType[]> {
  const response: Response = await fetch(digimonURL);
  const digimons: DigimonsType[] = await response.json();
  return digimons;
}


