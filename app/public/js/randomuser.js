const api_url ="https://randomuser.me/api/";
  
      const randoUser = () => {
        fetch("https://randomuser.me/api/")
        .then((data) => data.json())
        .then((data) => console.log(data));
    };
    
    randoUser();
    Vue.createApp('#randoUserApp')
// Calling that async function
//getapi(api_url);
  
// Function to hide the loader
function hideloader() {
    document.getElementById('loading').style.display = 'none';
}
// Function to define innerHTML for HTML table
function show(data) {
    let tab = 
        `<tr>
          <th>Picture</th
          <th>First Name </th>
          <th>Last Name</th>
          <th>Country of Origin</th>
          <th>Email</th>
          <th>Date of Birth</th>
          <th>Age</th>
         </tr>`;
    
    // Loop to access all rows 
    //for (let results of data.list) {
        tab += `<tr> 
        <td><img v-bind:src="results.picture.medium" v-bind:alt="results" class="rounded img-thumbnail"></td>
        <td>${results.name.first}</td>
        <td>${results.name.last}</td>
        <td>${results.location.country}</td>
        <td>${results.email}</td>
        <td>${results.dob.date}</td>
        <td>${results.dob.age}</td>          
</tr>`;
    //}
    // Setting innerHTML as tab variable
    document.getElementById("randoUser").innerHTML = tab;
}
//rando user was employee