(()=>{"use strict";const e={name:"Bruce Banner",alias:"Incredible Hulk",suit:"Short jeans",power:"superhuman strength"},t=document.createElement("ul");console.log(e);for(let n in e){let l=document.createElement("li");l.textContent=n+" - "+e[n],t.appendChild(l)}document.querySelector("body").appendChild(t)})();