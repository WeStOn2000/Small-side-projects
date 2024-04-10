
const savage = document.querySelector('.savage');
selectbtn = savage.querySelector('.select-btns');
search = savage.querySelector('input');
options = savage.querySelector('.options');
let language =[ "Python",
"JavaScript",
"Java",
"C++",
"C#",
"Swift",
"Go",
"Ruby",
"PHP",
"Perl",
"Rust",
"HTML",
"CSS",
"SQL",
"Objective-C",
"Kotlin",
"TypeScript",
"Scala",
"Assembly",
"Shell"];
 function addLanguages(){
    language.forEach(languages =>{
        let li =`<li onclick="updateName(this)">${languages}</li>`;
        options.insertAdjacentHTML('beforeend',li);
    });

 }
 addLanguages();
 function updateName(selectLi){
    savage.classList.remove('active');
    selectbtn.firstElementChild.innerText = selectLi.innerText;
 }
 search.addEventListener('keyup',()=>{
    let arr = [];
    let searchinp = search.value;
    arr = language.filter(data =>{
  return data.toLowerCase().startsWith(searchinp);
    }).map(data =>`<li  onclick="updateName(this)">${data}</li>`).join('');
  options.innerHTML = arr ? arr: `<p>SORRY LANGUAGE NOT FOUND!!</p>`;
});
 selectbtn.addEventListener('click',() =>{
    savage.classList.toggle('active');
});
