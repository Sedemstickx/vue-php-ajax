var App = Vue.createApp({
  data() {
      return {
          header: "",
          textDemo: null,
          text: "",
          fullName: "",
          lists: [],
          filledList: false,
          errorMsg: null,
      }
  },
  computed:{
    textCount(){
     return this.text.length;
    },
    fullNameCount(){
     return this.fullName.length;
    }
  },
  methods: {
    get() {
     fetch ("get_res.php?q="+this.text)
    .then((response) => response.text())
    .then((data) => {
      this.textDemo = data;
      this.text = '';
    })
    .catch((error) => {
      console.error("Error:", error);
    })
    },
    post() {
     fetch ("res.php", {
      method: "POST",
      body: JSON.stringify({fullName: this.fullName, site: 'vue.js'}),
      headers: {'Content-Type': 'application/json'},
     })
     .then((response) => response.json())
     .then((data) => {
       this.textDemo = data;
       this.fullName = '';
     })
     .catch((error) => {
       console.error("Error:", error);
     })
   },
   loadJson() {
     fetch ("get_json.php")
     .then((response) => response.json())
     .then((data) => {

      //Check if the response has an error
      if (data.error != null) {
        this.errorMsg = "Error: "+data.error;
        }
        else{ 
        this.filledList = true;
        this.lists = data;//get data list
        }
   
        // console.log("Object length: "+data.length);
        console.log(data);
     })
     .catch((error) => {
       console.error("Error:", error);
     })
     },
  },
  mounted() {
     this.header = "Vue, php and the FETCH api";
  },
})
.mount('#app');