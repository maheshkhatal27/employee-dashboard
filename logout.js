let logOutBtnEl = document.getElementById("logoutbtn");

logOutBtnEl.onclick = function () {
  window.location.replace("index.html");
};


let empName = document.getElementById("empname");
let empEmail = document.getElementById("empemail");
let empNumber = document.getElementById("empnumber");
let empDate = document.getElementById("date");
let empJob = document.getElementById("empjob");

let IndNum = /^[0]?[789]\d{9}$/;

function signup() {

  if (empDate.value == "") {
    alert("Please Enter Date!!");
    return false;
  }
  if (empName.value == "") {
    alert("Please Enter Employee Name!!");
    return false;
  }
  if (empEmail.value == "") {
    alert("Please Enter Employee Email ID!!");
    return false;
  }
  if (!empEmail.value.includes("@")) {
    alert("Please enter Valid email id");
  }
  if (empNumber.value == "") {
    alert("Please Enter Employee Phone Number!!");
    return false;
  }
  if (!IndNum.test(empNumber.value)) {
    alert("Enter correct mobile number");
    return false;
  }
  if (empJob.value == "") {
    alert("Please Enter Job!!");
    return false;
  }

  return true;
}

let employeeList;


function displayData(){
    if(localStorage.getItem("empList")==null){
        employeeList=[];
    }
    else{
        employeeList=JSON.parse(localStorage.getItem("empList"));
    }
        let html = "";
        employeeList.forEach(function(element,index){
            html += "<tr>";
            html += "<td>"+element.id+"</td>";
            html += "<td>"+element.name+"</td>";
            html += "<td>"+element.email+"</td>";

            html +='<td><button class="btn btn-info">Details</button></td>';

            html += '<td><button onclick="updateData(' +
            index + 
            ')" class="btn btn-warning">Edit</button></td>';

            html += '<td><button onclick="deleteData(' +
            index +
            ')" class="btn btn-danger">Delete</button>';    

            html +="</tr>";
        });
       //document.querySelector("#emptable tbody").innerHtml = html;
       document.getElementById("tablebody").innerHTML=html;
     //  console.log("displayData...")
     //  console.log(html);
     //  console.log(document.getElementById("tablebody"));
    }



document.onload=displayData();


function addEmployeeData() {
      if(signup()==true){
          
        let empName = document.getElementById("empname").value;
        let empEmail = document.getElementById("empemail").value;
        let empNumber = document.getElementById("empnumber").value;
        let empDate = document.getElementById("date").value;
        let empJob = document.getElementById("empjob").value;
        if(localStorage.getItem("empList")==null){
            employeeList=[];
        }else{
            employeeList=JSON.parse(localStorage.getItem("empList"));
        }

        //To generate random orderely IDs


        employeeList.push({
            id:employeeList.length + 1,
            name:empName,
            email:empEmail,
            number:empNumber,
            date:empDate,
            job:empJob,
        });
        localStorage.setItem("empList",JSON.stringify(employeeList));
        alert("User Added Successfully!!");
        
    document.getElementById("empname").value="";
    document.getElementById("date").value="";
    document.getElementById("empemail").value="";
    document.getElementById("empjob").value="";
    document.getElementById("empnumber").value="";
      }
    
    displayData();
    
  }


//Deleting data using splice method

function deleteData(index){
    if(localStorage.getItem("empList")==null){
        employeeList=[];
    }
    //now using slice just provide index and count 1 i.e 1 item to be deleted
    employeeList.splice(index,1);
   // console.log("affter deleting checking array list", employeeList);
    // Now set updated array  list to local storage
    localStorage.setItem("empList",JSON.stringify(employeeList));
    // after doing this changes again reflect the new array information in to table hence call the display method

    displayData();
}


//Updating data
/*
function updateData(index){
    document.getElementById("Submit").style.display="none";
    document.getElementById("Update").style.display="block";
    if(localStorage.getItem("empList")==null){
        employeeList=[];
    }else{
        employeeList=JSON.parse(localStorage.getItem("empList"));
    }
    document.getElementById("empname").value=employeeList[index].name;
    document.getElementById("empemail").value=employeeList[index].email;
    document.getElementById("empnumber").value=employeeList[index].number;
    document.getElementById("empjob").value = employeeList[index].job;

    console.log("Edit triggred");

    document.querySelector("#Update").onclick=function(){
        if(signup()==true){
            employeeList[index].name=document.getElementById("empname").value;
            employeeList[index].email=document.getElementById("empemail").value;
            employeeList[index].number=document.getElementById("empnumber").value;
            employeeList[index].job=document.getElementById("empjob").value;

            localStorage.setItem("empList",JSON.stringify("empList"));
            displayData();

           
        }
    }

}

*/




// on click job hide other and show only job frame
let jobEl=document.getElementById("jobnavigate");
let empEl = document.getElementById("empdata");
let jobData = document.getElementById("jobdata");

let empDashboardLink = document.getElementById("empdashnavigate");

jobEl.addEventListener("click",function(){
   //hide emp dashboard
   empEl.classList.add("hide");
   jobData.classList.add("show");
   jobData.classList.remove("hide");
});

// hide job iframe and show employee data

empDashboardLink.addEventListener("click",function(){
    empEl.classList.remove("hide");
    jobData.classList.add("hide");
    
});



