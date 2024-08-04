count = 0;
function addTask() {
  count++;
  let nameid = 'list' + count;
  let labelid = 'label' + count;
  let inputVal = document.getElementById("input").value;
  let container = document.getElementById("container");
  let listcontainer = document.createElement('div');
  
  listcontainer.classList.add('list-container');
  container.appendChild(listcontainer);
  
  let itemfirst = document.createElement('ul');
  itemfirst.setAttribute('id', nameid);
  listcontainer.appendChild(itemfirst);
  
  let item = document.createElement('input');
  item.setAttribute('type', 'checkbox');
  itemfirst.appendChild(item);
  
  let label = document.createElement('label');
  label.setAttribute('for', nameid);
  label.setAttribute('id', labelid);
  label.textContent = inputVal;
  itemfirst.appendChild(label);
  
  let deletebtn = document.createElement('button');
  deletebtn.classList.add('delete-btn');
  deletebtn.textContent = 'X';
  itemfirst.appendChild(deletebtn);
  
  deletebtn.addEventListener('click', function() {
    itemfirst.remove();
    listcontainer.remove();
  });
}
  