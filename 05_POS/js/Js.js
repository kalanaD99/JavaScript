/*  document.getElementById("btnHome").addEventListener("click", function () {
               $("#Home").css({display: 'block'})
               $("#Item").css({display: 'none'})
               $("#Customer").css({display: 'none'})

           })*/

/*
  document.getElementById("btnOrder").addEventListener("click", function () {
      $("#Home").css({display: 'block'})
      $("#Item").css({display: 'none'})
      $("#Customer").css({display: 'none'})
  })*/

/*document.getElementById("btnItems").addEventListener("click", function () {
      $("#Home").css({display: 'none'})
      $("#Item").css({display: 'block'})
      $("#Customer").css({display: 'none'})
  })
*/
/*document.getElementById("btnCustomer").addEventListener("click", function () {
   $("#Home").css({display: 'none'})
   $("#Item").css({display: 'none'})
   $("#Customer").css({display: 'block'})
})*/

$("#btnHome").click(function (){
    $("#Home").css({display: 'block'})
    $("#Item").css({display: 'none'})
    $("#Customer").css({display: 'none'})
})

$("#btnOrder").click(function (){
    $("#Home").css({display: 'block'})
    $("#Item").css({display: 'none'})
    $("#Customer").css({display: 'none'})
})

$("#btnItems").click(function (){
    $("#Home").css({display: 'none'})
    $("#Item").css({display: 'block'})
    $("#Customer").css({display: 'none'})
})

$("#btnCustomer").click(function (){
    $("#Home").css({display: 'none'})
    $("#Item").css({display: 'none'})
    $("#Customer").css({display: 'block'})
})


/*-------------------------Customer section--------------------------*/

/*---save button------*/
$("#btnSave").click(function (){
      let customerID = $("#txtCId").val();
      let customerName = $("#txtCname").val();
      let customerSalary =  $("#txtSalary").val();
      let customerAddress =  $("#txtAddress").val();

      let row = `<tr><td>${customerID}</td><td>${customerName}</td><td>${customerSalary}</td><td>${customerAddress}</td></tr>`
 $("#tblCustomer").append(row);
})
