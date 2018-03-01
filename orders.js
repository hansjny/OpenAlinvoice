

var OrderElementClass  = "order-item-wraper";

// var OrderInvoiceButton = '<div class="openai_invoice_button">Generate Invoice</div>"';
function main() {

	var orderElements = document.getElementsByClassName(OrderElementClass);
	for (var key in orderElements) {
		var orderObj = orderElements[key];
		var lnk = orderObj.querySelector('.view-detail-link');
		var action = orderObj.querySelector('.product-action');
		var OrderInvoiceButton = document.createElement("div");
		OrderInvoiceButton.className = "openai_invoice_button";
		OrderInvoiceButton.innerHTML = "Generate Invoice";
		action.appendChild(OrderInvoiceButton);
		console.log(lnk)
	}

}

main();
