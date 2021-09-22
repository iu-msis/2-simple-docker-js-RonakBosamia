const randoUser={
    data() {
        return {
            "person": {
                name: {},
                picture: {},
                location:{},
                dob:{},
                email:{}

            },

        }
    },
    computed: {
        prettyBirthday() {
            return dayjs(this.person.dob.date)
            .format('D MMM YYYY')
        }
    },
    methods: {
        fetchUserData(){
            
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

        
    },
        created() {
            this.fetchUserData();

}//end created
}//end randomUser
        //.then( (data) => console.log(data));

Vue.createApp(randoUser).mount('#randoUserApp');