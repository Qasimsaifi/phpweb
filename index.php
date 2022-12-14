<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>PHP REST API CRUD</title>
  <link rel="stylesheet" href="css/style.css">
  
</head>
<body>
  <table id="main" border="0" cellspacing="0">
    <tr>
      <td id="header">
        <h1>PHP REST API CRUD</h1>
         <div id="loading-image" class="load"><img src="/32x32.gif" alt=""></div>

        <div id="search-bar">
          <label>Search :</label>
          <input type="text" id="search" autocomplete="off">
        </div>
      </td>
    </tr>
    <tr>
      <td id="table-form">
        <form id="addForm">
          Name : <input type="text" name="sname" id="sname">
          Age : <input type="number" name="sage" id="sage">
          City : <input type="text" name="scity" id="scity">
          <input type="submit" id="save-button" value="Save">
        </form>
      </td>
    </tr>
    <tr>
      <td id="table-data">
        <table width="100%" cellpadding="10px" >
          <tr>
            <th width="40px">Id</th>
            <th>Name</th>
            <th width="50px">Age</th>
            <th width="150px">City</th>
            <th width="60px">Edit</th>
            <th width="70px">Delete</th>
          </tr>
          <tbody id="load-table"></tbody>
        </table>
      </td>
    </tr>
  </table>

  <div id="error-message" class="messages"></div>
  <div id="success-message" class="messages"></div>

  <!-- Popup Modal Box for Update the Records -->
  <div id="modal">
    <div id="modal-form">
      <h2>Edit Form</h2>
      <form action="" id="edit-form">
      <table cellpadding="10px" width="100%">
        <tr>
          <td width="90px">Name</td>
          <td><input type="text" name="sname" id="edit-name">
              <input type="text" name="sid" id="edit-id" hidden="">
          </td>
        </tr>
        <tr>
          <td>Age</td>
          <td><input type="number" name="sage" id="edit-age"></td>
        </tr>
        <tr>
          <td>City</td>
          <td><input type="text" name="scity" id="edit-city"></td>
        </tr>
        <tr>
          <td></td>
          <td><input type="button" id="edit-submit" value="Update"></td>
        </tr>

      </table>
      </form>
      <div id="close-btn">X</div>
    </div>
  </div>
  <div id="wow"></div>

<script type="text/javascript" src="jquery.js"></script>

<script src="script.js"></script>
    <button id="btn">Click</button>
    <button id="cbtn">Clinnck</button>

    
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.8.1/html2pdf.bundle.min.js"></script>
    <script>
    document.getElementById('cbtn').addEventListener('click', () => {
        document.getElementById('dbtn').style.display = 'none'
        document.getElementById('ubtn').style.display = 'none'
    
    })
    document.getElementById('btn').addEventListener('click' , () =>{
       let element = document.getElementById('table-data')
       html2pdf(element) 
        
    })
        
    </script>
</body>
</html>
