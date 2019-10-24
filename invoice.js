/**
 * OpenInvoice - Chrome plugin to generate AliExpress invoices
 * Copyright (C) 2018  Hans Jørgen Nygårdshaug
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 *
 * @license GPL-3.0+ <http://spdx.org/licenses/GPL-3.0+>
 */

 var receiptLayout = '<div id="openai_content"><div class="openai_header">' +
 '<span class="openai_ali">AliExpress</span>' +
 '<div class="openai_ali_address">' +
 '<b>Alibaba (China) Co., Ltd</b><br>'+
 '969 West Wen Yi Road<br>'+
 'Yu Hang District, Hangzhou 311121, China'+
 '</div>' +
 '</div><div class="clearfix"></div>' +
'<div id="openai_content"><span class="openai_ali">AliExpress</span>' +
'<div class="openai_invoice_storename">Store Name: <span class="openai_store"></span></div>' +
'<div class="openai_invoice_billto"><u>Bill to</u></div>' +
'<div class="openai_billto openai_billname"></div>' +
'<div class="openai_billto openai_billadr"></div>' +
'<div class="openai_billto openai_billadr2"></div>' +
'<div class="openai_billto openai_billzip"></div>' +
'<div class="openai_billto openai_billphone"></div>' +
'<div class="openai_order_details">' +
'<div class="openai_invoice_storename">Store Name: <span class="openai_store"></span></div>' +
'<div class="openai_invoice_order_number">Order No.: <span class="openai_order_number"></span></div>' +
'<div class="openai_invoice_order_date">Order Date: <span class="openai_order_date"></span></div>' +
'</div>' +
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
	getClass("openai_order_number", 0).innerHTML = getClass("order-no", 0).innerHTML.trim();
	getClass("openai_order_date", 0).innerHTML = getClass("pay-c4", 2).innerHTML.trim().split(" ")[0];
	getClass("openai_billname", 0).innerHTML = getClass("i18ncopy", 0).innerHTML.trim();
	getClass("openai_billadr", 0).innerHTML = getClass("i18ncopy", 1).innerHTML.trim();
	getClass("openai_billadr2", 0).innerHTML = getClass("i18ncopy", 2).innerHTML.trim();
	getClass("openai_billzip", 0).innerHTML = getClass("i18ncopy", 3).innerHTML.trim();
	getClass("openai_billphone", 0).innerHTML = getClass("i18ncopy", 4).innerHTML.trim();
	getClass("openai_paymethod", 0).innerHTML = getClass("pay-c3", 2).innerHTML.trim();
	getClass("openai_paydate", 0).innerHTML = getClass("pay-c4", 2).innerHTML.trim();

	var prods = document.getElementsByClassName("order-bd");
	for (let prod of prods) {
		m = prod.cloneNode(true)
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
