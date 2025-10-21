import { catalogue } from "./catalogue.js";
const createSubMenu = (value,li) => {
    li.addEventListener("click",()=>{
        
        console.log(value);
        const div = document.createElement("div");
        div.classList.add("submenu");
        li.append(div);
        const p = document.createElement ("p")
        p.textContent = value.titre + value.artiste + value.album + value.annee
        div.append(p)
    })
}
const initMenuPlaylist = () => {
    console.log('initMenuPlaylist');
    const playlist = document.getElementById("playlist");
    const ul = document.createElement("ul");
    playlist.append(ul)
    // insérer dans ce ul autant de li qu'il y a de titre dans mon catalogue
    catalogue.forEach((value) => {
        console.log(value);
        const li = document.createElement("li");
        li.classList.add("entree-menu")
        li.textContent = value.titre;
        ul.append(li);
        createSubMenu(value,li);
        // fonction affichage/ masquage du sous menu
    });
    // let li = document.createElement("li") 
}
export { initMenuPlaylist }