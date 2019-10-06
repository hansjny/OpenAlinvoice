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

var OrderElementClass  = "order-item-wraper";

// var OrderInvoiceButton = '<div class="openai_invoice_button">Generate Invoice</div>"';
function main() {
	var orderElements = document.getElementsByClassName(OrderElementClass);
	for (var key in orderElements) {
		var orderObj = orderElements[key];
		if (typeof orderObj.querySelector != "function")
			break;
		var action = orderObj.querySelector('.product-action');
		var OrderInvoiceButton = document.createElement("div");
		OrderInvoiceButton.className = "openai_invoice_button";
		OrderInvoiceButton.innerHTML = "Generate Invoice";
		action.appendChild(OrderInvoiceButton);
		OrderInvoiceButton.addEventListener("click", function (e) {
			var lnk = this.querySelector('.view-detail-link');
			console.log(e, this);
			window.location  = lnk.href + "&createinvoice=1";
		}.bind(orderObj));
	}

}

main();
