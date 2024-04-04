const textarea = document.getElementById('textarea');
const charCount = document.getElementById('charCount');
const submit = document.getElementById('submit-btn');
const warning = document.getElementById('warning');
const display = document.getElementById('display');
const maxlength = parseInt(textarea.getAttribute('maxlength'));
textarea.addEventListener('input', () =>{
    const currentLength = textarea.value.length;
    const remaining = maxlength - currentLength;
    charCount.textContent = `Characters remaining: ${remaining}`;
    if(remaining < 0){
     charCount.style.color= 'red';
    }else{
        charCount.style.color ='black';
    }

     const limit = Math.floor(maxlength * 0.1);
     if(remaining <= limit){
       warning.textContent=`warning: You have reached ${Math.round( (currentLength / maxlength) * 100 ) }% of the max character
       count.`;
       warning.style.color = 'red';
}else{
  warning.style.color='';
}    
});
submit.addEventListener('click', () =>{
    const content = textarea.value;
    display.textContent = ` Content from textarea: ${content}`
});
textarea.parentNode.insertBefore(charCount, textarea.nextSibling);
textarea.parentNode.insertBefore(warning, textarea.nextSibling);
textarea.parentNode.insertBefore(display, textarea.nextSibling);