// document.getElementById("add").addEventListener("click", function () {
//   document.getElementById("total").innerHTML =
//     +document.getElementById("total").innerHTML + 1;
// });

$('#add').on('click', function(){
    $('#total').html(+$('#total').html() + 1);
});