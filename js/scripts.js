$(document).ready(function() {
  $("form").submit(function(event) {
var lists = ["some-input1","some-input2","some-input3"];


  lists.forEach(function(list){
   var listInput = $("input#" + list).val();
   var listInput1 = [listInput.toUpperCase()];

   $("#demo").append("<li>" + listInput1+"</li>");
 });
    // var person1Input = $("input#some-input1").val();
    // var person2Input = $("input#some-input2").val();
    // var animalInput= $("input#some-input3").val();
    //
    //
    // $(".some-input1").text(person1Input);
    // $(".some-input2").text(person2Input);
    // $(".some-input3").text(animalInput);


    $("#list").show();
    $("form").hide();

    event.preventDefault();
  });
});
