var url = "../json/productData.json";

$.ajax({
    url: url,
    dataType: 'JSONP',
    type: 'GET',
    success: function (data) {
        console.log(data);
    }
});

// var dataDump = $.getJSON( url, function() {
// 	var productObjects = dataDump.responseJSON.data;
// 	console.log(productObjects);
// 	$.each( productObjects, function( i, product ) {
// 		//console.log(productObject);
// 		$(".products").append(
// 			"<li class='four columns product'>" +
// 			'<img class="product-image" src="http://www.fashionphile.com/'+product.images+'" alt="'+product.name+'" onError="this.onerror=null;this.src=\'images/noimage.png\';" />'+
// 			'<div class="product-info">'+
// 	        '<p class="product-name">'+product.name+'</p>'+
//         	'<p class="product-brand">'+product.brand+'</p>'+
//         	'</div>'+
// 			"</li>"
// 		)
// 	});
// })
//   .done(function() {
// 	console.log( "Call to product JSON successful" );
//   })
//   .fail(function() {
// 	console.log( "Unable to call product JSON" );
//   })
//   .always(function() {
// 	console.log( "Call complete" );
//   });