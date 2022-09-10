
//#region Load Page actions
$(document).ready(function () {
  console.log("ready!");
  $("#block").attr('disabled', 'disabled');
});
//#endregion

function SaveResultsHandle(){
  $.ajax({
    type: "POST",
    url: "http://localhost:8600/SaveResult",
    headers:{
      "Content-Type": "application/json",
    },
    data: JSON.stringify({
      Name_Of_Algo: $('#NameOfAlgo').val(),
      Number_Of_Actions:($('#numberOfrActions').val()),
      Array_Befor_Sort: $('#beforSort').val(),
      Array_After_Sort: $('#afterSort').val()
    }),
    success: function (data) {
      console.log("The data Saved!");
    }
  });
  location.reload();
}

//#region Handle SubmitClickRunAlgo click to submit the algo 
function SubmitClickRunAlgo() {
  var res;
  console.log("hi");
  $.ajax({
    type: "GET",
    url: "http://localhost:8600/Sorting/SeeAlgo/?NameOfAlgo=" + $('#NameOfAlgo').val() + "&LenghtOfArray=" + $('#LenghtOfArray').val(),
    success: function (data) {
      res = data;
      console.log(data);
      $('#numberOfrActions').val(res['Number of actions performed']);
      $('#beforSort').val(res['The array befor the sorting']);
      $('#afterSort').val(res['The array after the sorting']);
      $(".blocText").attr('disabled', 'disabled'); //disable 
    }
  });
}

function ShowSavedResults(){
  var output;
  $.ajax({
    type: "GET",
    url: "http://localhost:8600/GetAllSavedResults",
    success: function (data) {      
      console.log(data);
      var result="";
      data.forEach(element => {
       
        result += "----------------" + "\n" + "Name of algo: "+ element.Name_Of_Algo + "\n" + "Number of actions: "+ element.Number_Of_Actions + "\n" + "Array befor sort: "+element.Array_Befor_Sort + "\n" + "Array after sort: "+ element.Array_After_Sort + "\n" + "----------------";
        
      });
      $("#textAreaOfSavedResults").val(result);
    }
  });
}


function CleaerSavedResults(){
  $.ajax({
    url: "http://localhost:8600/ClearSavedResults",
    type: 'DELETE',
    success: function (){ 
      console.log("The data was cleared succesfully");
    }
  });
}
//#endregion



