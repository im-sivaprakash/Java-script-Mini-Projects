//Creators.pub 💕

//Ui components
var form = document.getElementById('bill-form');
var item = document.getElementById('add-item');
var cust = document.getElementById('cn');
var quan = document.getElementById('add-quan');
var shopname = document.getElementById('shopname');
var shopaddr = document.getElementById('addsh');
var mob = document.getElementById('phn');
var amount = document.querySelector('#add-amount');
var ul = document.querySelector('.collection');
var addBtn = document.querySelector('#btn');
var totamt = document.querySelector('#tamount');
var clsbtn = document.querySelector('#cls');
var filter = document.querySelector('#Filter');
var custxt = document.querySelector('#cus-txt');


var time = document.querySelector('#date');
var total = 0;
var today = new Date();

//ShopName
shopname.innerText = localStorage.getItem('shopName');
//ShopAddress
shopaddr.innerText = localStorage.getItem('shopAddress');
//ShopAddress
mob.innerText = localStorage.getItem('ShopPhone');
//bill date and time
time.innerText = today;



//Event listenters
loadEventListeners();

//loading Event listenters
function loadEventListeners() {
  form.addEventListener('submit', additem);
  ul.addEventListener('click', removeItem);
  clsbtn.addEventListener('click', clsItem);
  filter.addEventListener('keyup', filterItem);

}




function additem(e) {

  if (custxt.value === '') {
    custxt.value = 'Customer';
  } else {
    cust.innerText = custxt.value;
  }

  if ((item.value === '') || (amount.value === '')) {
    quan.value === '';
    alert("Enter item and price ");
  }

  var itm = 'items';

  if (quan.value === '' || quan.value === '1') {
    if ((item.value === '') || (amount.value === '')) {
      //Do nothing
    } else {
      quan.value = 1;
      itm = "item";
    }

  }

  if ((item.value !== '') && (amount.value !== '')) {
    total += Math.abs(amount.value) * Math.abs(quan.value);

    totamt.innerText = `₹ ${Math.abs(total)}`;

    //li element creation
    const li = document.createElement('li');

    li.className = 'collection-item';

    var datastr = item.value + "   =   " + "₹ " + Math.abs(amount.value) + " x " + Math.abs(quan.value) + " " + itm + "   =>  " + Math.abs(amount.value) * Math.abs(quan.value);

    //save to local storage

    var billItems;

    if (localStorage.getItem(custxt.value) === null) {
    
      billItems = [];
    } else {
      billItems = JSON.parse(localStorage.getItem(custxt.value));
    }
    billItems.push(datastr);
    localStorage.setItem(custxt.value, JSON.stringify(billItems));




    li.appendChild(document.createTextNode(datastr));


    //a element creation
    var link = document.createElement('a');

    link.className = 'delete-item secondary-content'

    link.innerHTML = '<i class="fas fa-window-close"></i>'

    li.appendChild(link);

    ul.appendChild(li);

    clear();
  }

  e.preventDefault();
}


function removeItem(e) {

  if (e.target.parentElement.classList.contains('delete-item')) {
    if (confirm("Are you sure to remove this item")) {
      var str = e.target.parentElement.parentElement.innerText;

      str = str.split(' ');

      var num = Number(str[8]);
      console.log(num);
      total -= num;
      if (isNaN(total)) {
        total = 0;
      }
      totamt.innerText = `₹ ${Math.abs(total)}`;
      e.target.parentElement.parentElement.remove();
    }
  }

}


function clsItem(e) {

  if (confirm("Want to Clear All items"))
  {
    if (e.target) {
      // ul.innerHTML=""; 
  
      //faster method
      while (ul.firstChild) {
        ul.removeChild(ul.firstChild);
      }
      total = 0;
      if (isNaN(total)) {
        total = 0;
      }
      totamt.innerText = `₹ ${Math.abs(total)}`;
    }
  } 

  e.preventDefault();
}

function filterItem(e) {
  const txt = e.target.value.toLowerCase();
  document.querySelectorAll('.collection-item').forEach(function (task) {
    const ite = task.firstChild.textContent;
    if (ite.toLowerCase().indexOf(txt) != -1) {
      task.style.display = 'block';
    } else {
      task.style.display = 'none';
    }


  });

}

function clear() {
  item.value = '';
  amount.value = '';
  quan.value = '';

}