

const a = document.getElementsByTagName("body")[0];

const div = document.createElement("div");
div.style = "width: 340px; padding-left: 100px; background-color: red; margin-left: 500px;";


const color1 = prompt("Svetoforni birinchi rangini ingiliztilida kiriting");
const color2 = prompt("Svetoforni ikkinchi rangni ingiliztilida kiriting");
const color3 = prompt("Svetoforni uchinchi rangni ingiliztilida kiriting");


const jk = document.createElement("div");
jk.style = `width: 200px; height: 200px; background-color: ${color1}; border-radius: 50%;`;
div.appendChild(jk);


const jg = document.createElement("div");
jg.style = `width: 200px; height: 200px; background-color: ${color2}; border-radius: 50%;`;
div.appendChild(jg);


const jn = document.createElement("div");
jn.style = `width: 200px; height: 200px; background-color: ${color3}; border-radius: 50%;`;
div.appendChild(jn);


a.appendChild(div);
