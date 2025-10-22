import { catalogue } from "./catalogue.js";
const createSubMenu = (value, li) => {
  li.addEventListener("click", () => {
    document.querySelectorAll(".submenu").forEach((sub) => sub.remove());
    console.log(value);
    const div = document.createElement("div");
    div.classList.add("submenu");
    li.append(div);
    // let subtab = [value.titre, value.artiste, value.album, value.annee];
    // subtab.forEach((value) => {
    //   const p = document.createElement("p");
    //   p.textContent = value;
    //   div.append(p);
    // });
    const subMenuValues = ["titre", "artiste", "album", "annee"];
    const icones = ["🎙️", "🪕", "🪗", "🪇"];
    // let n = 0;
    // while (n < subMenuValues.length) {
    //   const p = document.createElement("p");
    //   p.textContent = value[subMenuValues[n]];
    //   p.classList.add("inner-submenu");
    //   div.append(p);
    //   //   l'incrémentation est OBLIGATOIRE et appelée en fin
    //   //   d'instructions de boucles
    //   n++;

    // }
    for (let n = 0; n < subMenuValues.length; n++) {
      const p = document.createElement("p");
      p.textContent = value[subMenuValues[n]];
      p.classList.add("inner-submenu");
      div.append(p);
      const span = document.createElement ("span")
      span.textContent = icones[n];
      p.prepend(span);
    }
  });
};
const initMenuPlaylist = () => {
  console.log("initMenuPlaylist");
  const playlist = document.getElementById("playlist");
  const ul = document.createElement("ul");
  playlist.append(ul);
  // insérer dans ce ul autant de li qu'il y a de titre dans mon catalogue
  catalogue.forEach((value) => {
    console.log(value);
    const li = document.createElement("li");
    li.classList.add("entree-menu");
    li.textContent = value.titre;
    ul.append(li);
    createSubMenu(value, li);
    // fonction affichage/ masquage du sous menu
  });
  // let li = document.createElement("li")
};
export { initMenuPlaylist };
