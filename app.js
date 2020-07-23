var input = document.getElementById('inputVal');

function addItem() {
          // create text  Node
          var li = document.createElement('li')
          var liValue = document.createTextNode(input.value)
          li.appendChild(liValue)
          
          // create delete button
          var delBtn = document.createElement('button')
          var btnName = document.createTextNode('Delete Item')
          delBtn.appendChild(btnName)
          delBtn.setAttribute('id', 'delBtn')
          delBtn.setAttribute('onClick', 'delItem(this)')
          li.appendChild(delBtn)

          // create edit button
          var editBtn = document.createElement('button')
          var btnName = document.createTextNode('Edit Item')
          editBtn.appendChild(btnName)
          editBtn.setAttribute('id', 'edtBtn')
          editBtn.setAttribute('onClick', 'editItem(this)')
          li.appendChild(editBtn)

          // append child to list
          var ol = document.getElementById('ol')
          ol.appendChild(li)
          // console.log(li)
          input.value = ''
}

function delItem(a){
          a.parentNode.remove()
}

function editItem(a){
          var val = a.parentNode.firstChild
          var newVal = prompt('Enter Updated value', val.nodeValue)
          val.nodeValue = newVal
}

function delAllItem(){
    var ol = document.getElementById('ol')
          ol.innerHTML = ''
}