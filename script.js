

const url = "https://api.publicapis.org/entries";

fetch(url) 
     .then(response => response.json())
     .then(data => showData(data));

     function showData(data) {
         let tab = `<tr>
         <th>API</th>
         <th>Description</th>
         <th>Auth</th>
         <th>HTTPS</th>
         <th>Cors</th>
         <th>Link</th>
         <th>Category</th>
         </tr>`;

         for (let i of data.entries) {
              tab = tab + `<tr>
                   <td>${i.API}</td>
                   <td>${i.Description}</td>
                   <td>${i.Auth}</td>
                   <td>${i.HTTPS}</td>
                   <td>${i.Cors}</td>
                   <td>${i.Link}</td>
                   <td>${i.Category}</td>
              </tr>`;
         }
         document.getElementById("entries").innerHTML = tab;
     }


