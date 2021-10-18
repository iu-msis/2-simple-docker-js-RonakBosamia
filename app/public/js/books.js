const book={
    data() {
        return {
            books:[]

        }
    },
    computed: {},
    methods: {
        prettyDollar(n){
            const d = new Intl.NumberFormat("en-US").format(n);
            return "$ " + d;
        },
        fetchBookInfo(){
            
            fetch('/api/student/')
            .then( response => response.json() )
            .then( (responseJson) => {
                console.log(responseJson);
                this.books = responseJson;
                
            })
            .catch( (err) => {
                console.error(err);
        })
        .catch( (error) => {
            console.error(error);
        });
 
        },

    },
    created() {
         this.fetchBookInfo();

}    //end created
}    //end randomUser
        //.then( (data) => console.log(data));

Vue.createApp(book).mount('#booksApp');