var btn=document.querySelector('#b')
var cells=document.querySelectorAll('td')
function clear(){
  for(cell of cells){
      cell.textContent=""
  }
}
btn.addEventListener('click',clear)

function writeContent(){
    if(this.textContent==""){
        this.textContent="X"
    }
     else if(this.textContent=="X"){
        this.textContent="0"
    }
    else{
        this.textContent=''
    }
}

for(cell of cells){
    cell.addEventListener('click',writeContent)
}