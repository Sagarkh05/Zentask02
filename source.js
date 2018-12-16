
var count=1;
  window.onload = function () {
      //Build an array containing Friends records.
      var Friendslist = new Array();
      Friendslist.push(["Samantha", "Smith","Samantha@smith.com"]);
      Friendslist.push(["George", "stone","george.stone@gmail.com"]);
  
      //Add the data rows.
      for (var i = 0; i < Friendslist.length; i++) {
          AddRow(Friendslist[i][0], Friendslist[i][1], Friendslist[i][2]);
          count += 1;
      }
  };

  function Add() {
      if (count <= 5 ) {
      var txtName = document.getElementById("txtName");
      var txtSurname = document.getElementById("txtSurname");
      var txtEmail = document.getElementById("txtEmail");
      if(txtName.value && txtSurname.value && txtEmail.value){
        AddRow(txtName.value, txtSurname.value,txtEmail.value);
        count += 1;
        txtName.value = "";
        txtSurname.value = "";
        txtEmail.value = "";
      }
      }
      else{
          window.alert("You exceed the limit");
      }
  };

  function Remove(button) {
      //Determine the reference of the Row using the Button.
      if (count > 0 ) {
      var row = button.parentNode.parentNode;
      var name = row.getElementsByTagName("TD")[0].innerHTML;
      if (confirm("Do you want to delete ? ")) {

          //Get the reference of the Table.
          var table = document.getElementById("tblCustomers");

          //Delete the Table row using it's Index.
          table.deleteRow(row.rowIndex);
          count =  count - 1;
      }
    }
  };

  function AddRow(name, surname, Email) {
      //Get the reference of the Table's TBODY element.
     
          var tBody = document.getElementById("tblCustomers").getElementsByTagName("TBODY")[0];

      //Add Row.
      row = tBody.insertRow(-1);

      //Add Name cell.

      cell = row.insertCell(-1);
      var element1 = document.createElement("input");
      element1.type = "text";
      element1.name = name;
      element1.value = name;
      cell.className = "col";
      cell.appendChild(element1);
      

      //Add surname cell.
      cell = row.insertCell(-1);
      var element2 = document.createElement("input");
      element2.type = "text";
      element2.name = surname;
      element2.value = surname;
      cell.className = "col";
      cell.appendChild(element2);

        //Add email cell.
        cell = row.insertCell(-1);
      var element3 = document.createElement("input");
      element3.type = "text";
      element3.name = Email;
      element3.value = Email;
      cell.className = "col";
      cell.appendChild(element3);
      

      //Add Button cell.
      cell = row.insertCell(-1);
      var btnRemove = document.createElement("a");
      cell.innerHTML='<a class="delete-icon"href="#" onclick="Remove(this)"><i class="fa fa-trash" aria-hidden="true"></i>Remove</a>'
      cell.className = "col";
      cell.appendChild(btnRemove);
      
  }
