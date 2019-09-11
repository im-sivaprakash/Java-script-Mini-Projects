var getshop = document.getElementById('getshop');
var shname = document.getElementById('shpn');
var addr = document.getElementById('Addr');
var phnum = document.getElementById('Phonenum');

getshop.addEventListener('click', addShopName);


function addShopName(e) {
    localStorage.setItem('shopName', shname.value);
    localStorage.setItem('shopAddress', addr.value);
    localStorage.setItem('ShopPhone', phnum.value);
    
    if(shname.value==='')
    {
        window.alert("Enter shop Name");
    }
    else
    {
        window.location.href = "main.html";
    }
    e.preventDefault;
}


