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

    /*--remove all the lick events---*/
    $("tblCustomer>tr").off();

    /*---get values from textt fields------*/
      let customerID = $("#txtCId").val();
      let customerName = $("#txtCname").val();
      let customerSalary =  $("#txtSalary").val();
      let customerAddress =  $("#txtAddress").val();

      /*--Add values to the Database through object--*/

    var customerObject = {
        id:customerID,
        name:customerName,
        salary:customerSalary,
        address:customerAddress
    };

    customerDB.push(customerObject);



       /* /!*--create html row (save button click krama table ekata data enter enter kranna)---*!/
        let customerRow = `<tr><td>${customerID}</td><td>${customerName}</td><td>${customerSalary}</td><td>${customerAddress}</td></tr>`
            /!*--Apply data int table---*!/
        $("#tblCustomer").append(customerRow);*/

        /*--table eke row ekk click krama eke data text field walata add wenna*/
      $("#tblCustomer>tr").click(function (){
          let id = $(this).children().eq(0).text();
          let name = $(this).children().eq(1).text();
          let salary = $(this).children().eq(2).text();
          let address = $(this).children().eq(3).text();

          /*---Set values to the text fields---*/
            $("#txtCId").val(id);
            $("#txtCname").val(name);
            $("#txtSalary").val(salary);
            $("#txtAddress").val(address);
      })
    /*---delete the row when doubleclick*/
    $("#tblCustomer>tr").dblclick(function (){
       $(this).remove();
    })



})

/*----KeyDown Customer Section-------*/
// text field ekaka data enter krla enter key eka press krama e data tika enter wela eilanga textfield ekata ynna
var regExCusID =/^(C)[0-9]{3}$/;
$("#txtCId").keydown(function (event){
    let input = $("#txtCId").val();
    $("#txtCId").keyup(function (){

        if (regExCusID.test(input)){
            $("#txtCId").css('border','none');
            $("#txtCId").css('border','2px solid green');
        }else{
            $("#txtCId").css('border','none');
            $("#txtCId").css('border','2px solid red');
        }
    })
    if(input && event.key == "Enter") {
        $("#txtCname").focus();
    }
})

$("#txtCname").keydown(function (event){
    if(event.key == "Enter"){
        $("#txtSalary").focus();
    }
})

$("#txtSalary").keydown(function (event){
    if(event.key == "Enter"){
        $("#txtAddress").focus();
    }
})
$("#txtAddress").keydown(function (event){
    if(event.key == "Enter"){
        $("#btnSave").click();
    }
})
/*
/!*--To stop the task and execution of the key*!/
$("#txtCId,#txtSalary,#txtAddress").keydown(function (eventOb){
    if(eventOb.key == "K"){
        eventOb.preventDefault();//execute the task
    }
})*/

/*--Regular Expressions---*/
/*var regExCusID =/^(C)[0-9]{3}$/;
$("#txtCId").keyup(function (){
    let input = $("#txtCId").val();
    if (regExCusID.test(input)){
        $("#txtCId").css('border','none');
        $("#txtCId").css('border','2px solid green');
    }else{
        $("#txtCId").css('border','none');
        $("#txtCId").css('border','2px solid red');
    }
})*/

//======================================================================================================================
/*-----------Item Section--------------*/
/*----save button item section----*/
$("#btnSaveItem").click(function (){

    let itemID = $("#txtItemId").val();
    let itemName = $("#txtItemName").val();
    let QtyOnHand = $("#txtQtyOnHand").val();
    let itemPrice = $("#txtPrice").val();

    let itemRow = `<tr><td>${itemID}</td><td>${itemName}</td><td>${QtyOnHand}</td><td>${itemPrice}</td></tr>`
    $("#tblItem").append(itemRow);
})


/*----KeyDown item Section-------*/
$("#txtItemId").keydown(function (event){
    if(event.key == "Enter"){
        $("#txtItemName").focus();
    }
})
$("#txtItemName").keydown(function (event){
    if(event.key == "Enter"){
        $("#txtQtyOnHand").focus();
    }
})
$("#txtQtyOnHand").keydown(function (event){
    if(event.key == "Enter"){
        $("#txtPrice").focus();
    }
})