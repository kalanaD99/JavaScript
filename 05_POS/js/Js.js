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

/*---save button customer section------*/
$("#btnSave").click(function (){
      let customerID = $("#txtCId").val();
      let customerName = $("#txtCname").val();
      let customerSalary =  $("#txtSalary").val();
      let customerAddress =  $("#txtAddress").val();

      let customerRow = `<tr><td>${customerID}</td><td>${customerName}</td><td>${customerSalary}</td><td>${customerAddress}</td></tr>`
 $("#tblCustomer").append(customerRow);

      $("#tblCustomer>tr").click(function (){
          let id = $(this).children().eq(0).text();
          let name = $(this).children().eq(1).text();
          let salary = $(this).children().eq(2).text();
          let address = $(this).children().eq(3).text();
      })
})


/*----save button item section----*/
$("#btnSaveItem").click(function (){

    let itemID = $("#txtItemId").val();
    let itemName = $("#txtItemName").val();
    let QtyOnHand = $("#txtQtyOnHand").val();
    let itemPrice = $("#txtPrice").val();

    let itemRow = `<tr><td>${itemID}</td><td>${itemName}</td><td>${QtyOnHand}</td><td>${itemPrice}</td></tr>`
    $("#tblItem").append(itemRow);
})