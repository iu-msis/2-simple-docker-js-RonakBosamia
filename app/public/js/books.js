const book = {
    data() {
        return {
            "books": [],
            booksform: {},
            selectedBook: null
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
            console.log("Test",this.selectedBook);
            if (this .selectedBook){
                this.postEditBook(evt);
            }else{
                this.postNewBook(evt);
            }
        },
        postEditBook(evt) {
            this.booksform.id = this.selectedBook.id;
            //this.booksform.id = this.selectedStudent.id;        
            
            console.log("Editing!", this.booksform);
    
            fetch('api/books/update.php', {
                method:'POST',
                body: JSON.stringify(this.booksform),
                headers: {
                  "Content-Type": "application/json; charset=utf-8"
                }
              })
              .then( response => response.json() )
              .then( json => {
                console.log("Returned from post:", json);
                // TODO: test a result was returned!
                this.books = json;
                
                // reset the form
                this.handleResetEdit();
              });
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
            this.handleResetEdit();
             });
            }
        },
        postDeleteBook(b) {  
            if ( !confirm("Are you sure you want to delete the book?") ) {
                return;
            }  
            
            console.log("Delete!", b);
    
            fetch('api/books/delete.php', {
                method:'POST',
                body: JSON.stringify(b),
                headers: {
                  "Content-Type": "application/json; charset=utf-8"
                }
              })
              .then( response => response.json() )
              .then( json => {
                console.log("Returned from post:", json);
                // TODO: test a result was returned!
                this.books = json;
                
                // reset the form
                this.booksform ={};
                this.handleResetEdit();
              });
          },
           handleEditBook(book) { 
             this.selectedBook = book;
             this.booksform = Object.assign({}, this.selectedBook);
         },
        // handleResetEdit() {
          //   this.selectedBook = null;
            // this.booksform = {};
         //}
     //},
          
    created() {
         this.fetchBookInfo();

    }    //end created
}      

Vue.createApp(book).mount('#booksApp');