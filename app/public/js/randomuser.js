const randoUser={
    data() {
        return {
            "person": {},

        }
    },
        created(){

            fetch('https://randomuser.me/api/')
            .then( response => response.json() )
            .then( (responseJson) => {
                console.log(responseJson);
    
                this.person = responseJson.results[0]
            })
            .catch( (err) => {
                console.error(err);
        })
 
        }
}
        //.then( (data) => console.log(data));

Vue.createApp(randoUser).mount('#randoUserApp');