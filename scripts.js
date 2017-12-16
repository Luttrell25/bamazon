var product1Stock = 10;
var product2Stock = 10;
var product3Stock = 10;
var product4Stock = 10;
var product5Stock = 10;

$('.product1Stock').html(product1Stock);
$('.product2Stock').html(product2Stock);
$('.product3Stock').html(product3Stock);
$('.product4Stock').html(product4Stock);
$('.product5Stock').html(product5Stock);

$('.product1').on('click', function() {
  if (product1Stock > 0) {
    product1Stock--;
    $('.product1Stock').html(product1Stock);
  } else {
    alert("No remaining stock!");
  };
});

$('.product2').on('click', function() {
  if (product2Stock > 0) {
    product2Stock--;
    $('.product2Stock').html(product2Stock);
    console.log(product2Stock);
  } else {
    alert("No remaining stock!");
  };
});

$('.product3').on('click', function() {
  if (product3Stock > 0) {
    product3Stock--;
    $('.product3Stock').html(product3Stock);
  } else {
    alert("No remaining stock!");
  };
});

$('.product4').on('click', function() {
  if (product4Stock > 0) {
    product4Stock--;
    $('.product4Stock').html(product4Stock);
  } else {
    alert("No remaining stock!");
  };
});

$('.product5').on('click', function() {
  if (product5Stock > 0) {
    product5Stock--;
    $('.product5Stock').html(product5Stock);
  } else {
    alert("No remaining stock!");
  };
});
