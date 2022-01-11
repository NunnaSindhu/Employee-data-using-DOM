//Array of object of employees
let employees = [
    {
      id: 1,
      first_name: "Suresh",
      last_name: "Kumar",
      email: "suresh@gmail.com",
      gender: "Male",
      ip_address: "160.192.178.21",
    },
  
    {
      id: 2,
      first_name: "Sourav",
      last_name: "Das",
      email: "sourav@gmail.com",
      gender: "Male",
      ip_address: "160.182.178.21",
    },
  
    {
      id: 3,
      first_name: "John",
      last_name: "paul",
      email: "john@gmail.com",
      gender: "Male",
      ip_address: "160.192.238.21",
    },
    {
      id: 4,
      first_name: "Pavan",
      last_name: "Sai",
      email: "pavan@gmail.com",
      gender: "Male",
      ip_address: "160.192.278.21",
    },
    {
      id: 5,
      first_name: "Sangeetha",
      last_name: "Das",
      email: "sangeetha@gmail.com",
      gender: "Female",
      ip_address: "160.162.178.21",
    },
    {
      id: 6,
      first_name: "Tushar",
      last_name: "Vinocha",
      email: "tushar@gmail.com",
      gender: "Male",
      ip_address: "160.092.178.21",
    },
    {
      id: 7,
      first_name: "Jenny",
      last_name: "Paul",
      email: "jenny@gmail.com",
      gender: "Female",
      ip_address: "160.192.178.21",
    },
  
    {
      id: 8,
      first_name: "Jhansi",
      last_name: "P",
      email: "jhansi@gmail.com",
      gender: "Female",
      ip_address: "160.192.78.11",
    },
    {
      id: 9,
      first_name: "Lavish",
      last_name: "Jain",
      email: "lavish@gmail.com",
      gender: "Male",
      ip_address: "170.192.178.21",
    },
  
    {
      id: 10,
      first_name: "Namrata",
      last_name: "P",
      email: "Namrata@gmail.com",
      gender: "Female",
      ip_address: "160.192.175.21",
    },
  ];
  //All employee data

let allEmpButton=document.querySelector("#all-emp-btn");
allEmpButton.addEventListener("click",function(){
    displayEmployee(employees);
});
//display data of male employees
let maleEmpButton=document.querySelector("#male-emp-btn");
maleEmpButton.addEventListener("click",function(){
    let maleEmployee=employees.filter((employee)=>employee.gender==="Male");
    displayEmployee(maleEmployee);
});
 //Logic to filer out the female employee data
 let femaleEmpButton=document.querySelector("#female-emp-btn");
femaleEmpButton.addEventListener("click",function(){
    let femaleEmployee=employees.filter((employee)=>employee.gender==="Female");
    //calll the function
    displayEmployee(femaleEmployee);
});

 //logic for search functionality
 let searchBox=document.querySelector("#search-box");
searchBox.addEventListener("keyup",function(){
  let enteredText=searchBox.value;
  let filteredEmployees=[];
  if(enteredText!="")
   //write the logic to populate the data
  filteredEmployees=employees.filter((employee)=>(employee.first_name.toLocaleLowerCase().includes(enteredText.toLocaleLowerCase())));
  displayEmployee(filteredEmployees);
});
 
//display data for the selected employees
let displayEmployee=(employees)=>{
    //select the table body
    let tableBody=document.querySelector("#table-body");
    //create a row which is empty and append it to the table tableBody
    let tablerow="";
    for(let employee of employees){
        tablerow +=`<tr>
        <td>${employee.id}</td>
        <td>${employee.first_name}</td>
        <td>${employee.last_name}</td>
        <td>${employee.email}</td>
        <td>${employee.gender}</td>
        <td>${employee.ip_address}</td>
        </tr> `;
    }
    tableBody.innerHTML=tablerow;
}