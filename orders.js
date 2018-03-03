

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
