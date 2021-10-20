const book = {
    data() {
        return {
            "books": [],
            booksform: {}

            }
        },
    computed: {},
    methods: {
        prettyDollar(n){
            const d = new Intl.NumberFormat("en-US").format(n);
            return "$ " + d;
        },
        fetchBookInfo(){
            
            fetch('/api/books/')
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
        postBook(evt){ //look at postOffer if needed to add onto this 
            console.log("Test");
            this.postNewBook(evt);
        },
        postNewBook(evt){
            console.log("Posting!",this.booksform);
            //alert("posted");

            fetch('api/books/create.php', {
                method:'POST',
                body: JSON.stringify(this.booksform),
                headers: {
                    "Content-Type": "application/json; charset=utf-8"
                }
            })
            .then( response => response.json() )
            .then( json => {
                console.log("Returned from post:", json);
                //this.books.push(json);
                // could remove above and 
                this.books = json;
                
            //reset form
            this.booksform = {};    
            // this.handleResetEdit();
             });
            }
        },
        // handleResetEdit() {
        //     //this.selectedOffer = null;

            //this.booksform = {};
        //}

    //},
    created() {
         this.fetchBookInfo();

}    //end created
}    //end randomUser
        //.then( (data) => console.log(data));

Vue.createApp(book).mount('#booksApp');