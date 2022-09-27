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
     const ref = this;
     const ajax = new XMLHttpRequest();
     ajax.onload = function() {
         ref.textDemo = this.responseText;
         ref.text = '';
         }
     ajax.open("GET", "get_res.php?q="+this.text);
     ajax.send();
    },
    post() {
     const ref = this;
     const ajax = new XMLHttpRequest();
     ajax.onload = function() {
         ref.textDemo = this.responseText;
         ref.fullName = '';
     }
     ajax.open("POST", "res.php");
     ajax.setRequestHeader("content-type","application/x-www-form-urlencoded");
     ajax.send("fullName="+this.fullName+"&site=vue.js");//or new FormData(this). FormData object is used to get all form input data
   },
   loadJson() {
     const ref = this;	
     const xmlhttp = new XMLHttpRequest();
     xmlhttp.onload = function() {
     const res = JSON.parse(this.responseText);

     if (res.error != null) {
     ref.errorMsg = "Error: "+res.error;
     }
     else{ 
     ref.filledList = true;
     ref.lists = res;
     }

     // console.log("Object length: "+res.length);
     console.log(res);

     }
     xmlhttp.open("GET", "get_json.php");
     xmlhttp.send();
     },
  },
  mounted() {
     this.header = "Vue php AJAX";
  },
})
.mount('#app');