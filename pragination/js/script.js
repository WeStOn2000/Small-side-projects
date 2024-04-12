// ELEMENT SELECTORS
const authorContainer = document.querySelector("#authorContainer");
const paginationList = document.querySelector("#paginationList");

// console.log(authors);
const authorsPerPage = 3;

/* This function will handle calculating how many buttons are
needed and dynamically add them to the page */

function handlePagination(array) {
  const NOB = Math.ceil(array.length / authorsPerPage);
  for(let i = 1; i <= NOB; i++ ){
    const html =`
    <li>
    <button>${i}</button>
    </li>
    `;
    paginationList.insertAdjacentHTML('beforeend',html);
  }
paginationList.querySelector('button').classList.add('active');
}

/* This function will handle calculating how many and which
authors to show on the current page and dynamically add them */

function showPage(array, page) {
 const norm = (page * authorsPerPage) - authorsPerPage;
  const nor = (page * authorsPerPage) - 1;
authorContainer.innerHTML='';  
  
  for(let i = 0; i <= array.length; i++){
    if(i >= norm && i <= nor) {
 const html =`
 <div class="author-card">
 <div class="card-header">
   <img src="${array[i].image}" alt="photo of ${array[i].name}"/>
 </div>
 <div class="card-content">
   <h2 class="title">James Kirby</h2>
   <p>
     ${array[i].text}
   </p>
 </div>
</div> 
 `;
    authorContainer.insertAdjacentHTML("beforeend",html);

    }
  }
}

/* This event listener will handle calling our function
above to change the page & add the `active` class  */

paginationList.addEventListener("click", (e) => {
  const abtn = paginationList.querySelector('.active');
  const btnc = e.target.closest('button');
  if(btnc){
  abtn.classList.remove('active');
  btnc.classList.add('active');
  showPage(authors, btnc.innerHTML);
  }
 
});

/* These function calls are needed to initialize the page */

handlePagination(authors);
showPage(authors, 1);
