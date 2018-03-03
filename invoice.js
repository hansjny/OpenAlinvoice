
var receiptLayout = '<div id="openai_content"><span class="openai_ali">AliExpress</span>' + 
'<div class="openai_invoice_storename">Store Name: <span class="openai_store"></span></div>' +
'<div class="openai_invoice_billto"><u>Bill to</u></div>' + 
'<div class="openai_billto openai_billname"></div>' + 
'<div class="openai_billto openai_billadr"></div>' +
'<div class="openai_billto openai_billadr2"></div>' + 
'<div class="openai_billto openai_billzip"></div>' + 
'<div class="openai_billto openai_billphone"></div>' + 
	'<table class="product-table" id="openai_ProductTable" data-spm="6">   '+
	'<colgroup>   '+
	'<col class="baobei">                   '+
	'<col class="price">                    '+
	'<col class="quantity">                 '+
	'<col class="amount">                   '+
	'<col class="trade-status">             '+
	'<col class="shipping">                 '+
	'</colgroup>                            '+
	'<thead>                                '+
	'<tr class="col-name">                  '+
	'<th class="baobei">Product Details</th>'+
	'<th class="price">Price Per Unit</th>   '+
	'<th class="quantity">Quantity</th>   '+
	'<th class="amount">Order Total</th>   '+
	'<th class="trade-status">   '+
	'Status   '+
	'</th>   '+
	'<th class="shipping">&nbsp;</th>   '+
	'</tr>   '+
	'</thead> </table>  '+
'<div class="openai_result">Shipping: <span class="openai_shipping"></span><br>' + 
'Products: <span class="openai_products"></span><hr>' +
'<b>Total:</b> <span class="openai_ordertotal"></span>'+ 
'</div> Payment method: <span class="openai_paymethod"></span>. Payment received: <span class="openai_paydate"></span> </div>';

function getClass(name, index = 0) {
	return document.getElementsByClassName(name)[index];
}
function main() {
	var url = location.href;
	if (url.search("createinvoice=1") == -1)
		return;
	elem = document.createElement("div")
	elem.setAttribute("id", "openai_receipt");
	document.getElementsByTagName("body")[0].appendChild(elem);
	elem.innerHTML = receiptLayout
	
	
	var storeName = getClass("user-name-text", 0).querySelector("a").innerHTML;
	getClass("openai_products", 0).innerHTML = document.querySelector("td[class='product-price']").innerHTML.trim();
	getClass("openai_shipping").innerHTML = document.querySelector("td[class='shipping-price']").innerHTML.trim();
	getClass("openai_ordertotal").innerHTML = document.querySelector("td[class='order-price']").innerHTML.trim();
	console.log(storeName)
	getClass("openai_store", 0).innerHTML = storeName;
	getClass("openai_billname", 0).innerHTML = getClass("i18ncopy", 0).innerHTML.trim()
	getClass("openai_billadr", 0).innerHTML = getClass("i18ncopy", 1).innerHTML.trim();
	getClass("openai_billadr2", 0).innerHTML = getClass("i18ncopy", 2).innerHTML.trim();
	getClass("openai_billzip", 0).innerHTML = getClass("i18ncopy", 3).innerHTML.trim();
	getClass("openai_billphone", 0).innerHTML = getClass("i18ncopy", 4).innerHTML.trim();
	getClass("openai_paymethod", 0).innerHTML = getClass("pay-c3", 2).innerHTML.trim();
	getClass("openai_paydate", 0).innerHTML = getClass("pay-c4", 2).innerHTML.trim();
	
	var prods = document.getElementsByClassName("order-bd");
	for (var key in prods) { 
		m = prods[key].cloneNode(true)
		m.className = "openai_tr";
		document.getElementById("openai_ProductTable").appendChild(m);
	}
}
if(typeof(String.prototype.trim) === "undefined")
{
	String.prototype.trim = function() 
	{
		return String(this).replace(/^\s+|\s+$/g, '');
	};
}
main();



