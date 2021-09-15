//const api_url ="https://randomuser.me/api/";
      const randoUser = () => {
        fetch("https://randomuser.me/api/")
        .then((data) => data.json())
        .then((data) => console.log(data));
    };
    //randoUser();
    randoUser();
    //Vue.createApp('#randoUserApp')
// Calling that async function
//getapi(api_url);
  
// Function to hide the loader
//function hideloader() {
//    document.getElementById('loading').style.display = 'none';
//}

// Function to define innerHTML for HTML table
//function show(data) { night thought
Vue.config.errorHandler = function (err, vm, info) {   
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
    

        //for (let results of data.list) 
            //<td><img v-bind:src="results.picture.medium" v-bind:alt="results" class="rounded img-thumbnail"></td>    
        //tab += 
        for (let person in data.list) {  
        `<tr> 
            <td>${person.picture.medium}</td> 
            <td>${person.name.first}</td>
            <td>${person.name.last}</td>
            <td>${person.location.country}</td>
            <td>${person.email}</td>
            <td>${person.dob.date}</td>
            <td>${person.dob.age}</td>          
        </tr>`;
    }
    // Setting innerHTML as tab variable
    document.getElementById("randoUser").innerHTML = tab;
    //$("randoUserApp").append(tab)
//} night thoght
}
//} night thought
Vue.createApp(randoUser).mount('#randoUserApp')
Vue.config.silent = true


