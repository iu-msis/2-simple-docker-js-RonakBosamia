const book={
    data() {
        return {
            books:[],
            booksform:{}

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
        postNewBook(evt){
            console.log("Creating!", this.booksform);

            fetch('api/create.php',{
                method:'POST',
                body: JSON.stringify(this.booksform),
                headers:{
                    "Content-Type": "application/json; charset=utf-8"
                }
            })
            .then( response => response.json() )
            .then( json => {
                console.log("Returned from post:", json);
                this.books =json;

                this.handleResetEdit();
            });
            
            
        }

    },
    created() {
         this.fetchBookInfo();

}    //end created
}    //end randomUser
        //.then( (data) => console.log(data));

Vue.createApp(book).mount('#booksApp');