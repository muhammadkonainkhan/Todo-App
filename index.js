
var list = document.getElementById('list')

function addTodo(){
    var to_doItem = document.getElementById('todo-item')

    var li = document.createElement('li')
    var liText = document.createTextNode(to_doItem.value)
    li.appendChild(liText)
    
    
    var delbtn = document.createElement('button')
    var delText = document.createTextNode('Delete')
    delbtn.setAttribute("class","btn")
    delbtn.setAttribute("onclick","deleteItem(this)")
    delbtn.appendChild(delText)



    var editbtn = document.createElement('button')
    var editText = document.createTextNode('Edit')
    editbtn.setAttribute("class","btn")
    editbtn.appendChild(editText)
    editbtn.setAttribute("onclick","editItem(this)")

   
    li.appendChild(delbtn)
    li.appendChild(editbtn)

    list.appendChild(li)
    to_doItem.value = ""
    


}

function deleteItem(e){
    e.parentNode.remove()
   
}


function editItem(e){
    var edValue = prompt("Enter Value" , )
    var val = e.parentNode.firstChild.nodeValue;
     e.parentNode.firstChild.nodeValue = edValue
}



function deleteAll(){
    list.innerHTML = ""
}