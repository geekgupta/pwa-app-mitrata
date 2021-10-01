<template>
<div>
<b-navbar toggleable="lg" class="navbar navbar-light navbar-expand-lg" style="background-color: #e3f2fd;border:none;radius:0">
    <b-navbar-brand href="#">
      <img src="../assets/images/logo.svg" height="40px" width="100px" class="d-inline-block align-top" alt="Kitten">
      
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
  
      
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
   
  
          <!-- Using 'button-content' slot -->
          <button  class = "btn btn-outline-primary " style = "text-decoration: none ; " v-on:click="logout()">Logout</button>
          
       
     </b-navbar-nav>
    </b-collapse>
  </b-navbar>
<div class="container"  role="tablist">
    <b-card no-body class="mb-1 r-0 mt-2">
      <b-card-header header-tag="header" class="p-0" role="tab">
        <b-button block v-b-toggle.accordion-1  class = "text-black text-left call-us " style="background-color: #e3f2fd;border:none;radius:0 ;" >Allocation 
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
  <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
</svg></b-button>
      </b-card-header>
      <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
        <b-card-body>
            <b-list-group flush>
                <b-list-group-item button @click="filter('all_accounts',true)">No of Account   <b-badge>{{no_of_account}}</b-badge> </b-list-group-item>
                <b-list-group-item button  @click="filter('all_outstanding',true)">Outstanding  <b-badge>{{all_outstanding}}</b-badge></b-list-group-item>
                <b-list-group-item button v-b-toggle.collapse-1 > <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16">
  <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
</svg> Buckets <b-badge>{{Object.keys(buckets).length}}</b-badge></b-list-group-item>
                <b-collapse id="collapse-1" >
                <div class = "ml-20">
                <b-list-group flush class = "" style="padding-left : 15px ;" v-for="value , item in buckets" :key="item.values">
                    
                    <b-list-group-item button @click="filter('buckets',item)"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
</svg>     {{item}}  <b-badge>{{value}}</b-badge></b-list-group-item>
                    
                </b-list-group>
                </div>
                </b-collapse>
                <b-list-group-item button>Product</b-list-group-item>
            </b-list-group>
        </b-card-body>
      </b-collapse>
    </b-card>

          


    <b-card no-body class="mb-1 r-0 mt-2">
      <b-card-header header-tag="header" class="p-0 "  role="tab">
        <b-button block v-b-toggle.accordion-2  class = "text-black text-left call-us" style="background-color: #e3f2fd;border:none;radius:0">Promises     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
  <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
</svg></b-button>
      </b-card-header>
      <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-body>
            <b-list-group flush>
                <b-list-group-item button @click="filter('yesterday',true)" >Yesterday <b-badge variant="light">{{yesterday}}</b-badge></b-list-group-item>
                <b-list-group-item button @click="filter('today',true)">Today <b-badge variant="light">{{today}}</b-badge></b-list-group-item>
                <b-list-group-item button @click="filter('tommorrow',true)"> Tommorrow <b-badge variant="light">{{tommorrow}}</b-badge></b-list-group-item>
                <b-list-group-item button @click="filter('overmmorrow',true)"> Overmorrow <b-badge variant="light">{{overmmorrow}}</b-badge></b-list-group-item>
            </b-list-group>
        </b-card-body>
        </b-card-body>
      </b-collapse>
    </b-card>

     
    <b-card no-body class="mb-1 r-0 mt-2">
        <b-card-header header-tag="header" class="p-0 "  role="tab">
            <b-button block v-b-toggle.accordion-4  class = "text-black text-left call-us"  style="background-color: #e3f2fd;border:none;radius:0" >Cash Collected     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
  <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
</svg></b-button>
        </b-card-header>
        <b-collapse id="accordion-4" visible accordion="my-accordion" role="tabpanel">
            <b-card-body>
                <b-list-group flush>
                    <b-list-group-item button  v-b-toggle.collapse-x><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16">
  <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
</svg>Count Wise<b-badge variant="light">{{userwhopaid}}</b-badge></b-list-group-item>

<b-collapse id="collapse-x" >
                    <div class = "ml-20">
                    <b-list-group flush class = "" style="padding-left : 15px ;">
                    <b-list-group-item button > <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
</svg>Total Amount Received    <b-badge>{{total_amount_received}}</b-badge></b-list-group-item>
                    </b-list-group>
                    </div>
                    </b-collapse>




                    <b-list-group-item button v-b-toggle.collapse-2> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16">
  <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
</svg> Product Wise <b-badge variant="light">{{Object.keys(products).length}}</b-badge></b-list-group-item>

                    <b-collapse id="collapse-2" >
                    <div class = "ml-20">
                    <b-list-group flush class = "" style="padding-left : 15px ;" v-for="value , item in products" :key="item.values">
                    <b-list-group-item button > <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
</svg>  {{item}}  <b-badge>{{value}}</b-badge></b-list-group-item>
                    </b-list-group>
                    </div>
                    </b-collapse>

                    <b-list-group-item button v-b-toggle.collapse-c3> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16">
  <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
</svg>Region Wise<b-badge variant="light">{{Object.keys(regions).length}}</b-badge></b-list-group-item>
                     <b-collapse id="collapse-c3" >
                    <div class = "ml-20">
                    <b-list-group flush class = "" style="padding-left : 15px ;" v-for="value , item in regions" :key="item.values">
                    <b-list-group-item button > <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
</svg> {{item}}  <b-badge>{{value}}</b-badge></b-list-group-item>
                    </b-list-group>
                    </div>
                    </b-collapse>
                </b-list-group>
            </b-card-body>
        </b-collapse>
        </b-card>
        
    <b-card no-body class="mb-1 r-0 mt-2">
        <b-card-header header-tag="header" class="p-0 "  role="tab">
            <b-button block v-b-toggle.accordion-5  class = "text-black text-left call-us"  style="background-color: #e3f2fd;border:none;radius:0">Target     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
  <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
</svg></b-button>
        </b-card-header>
        <b-collapse id="accordion-5" visible accordion="my-accordion" role="tabpanel">
            <b-card-body>
                <b-list-group flush>
                    <b-list-group-item button>Achivement vs Target<b-badge variant="light">4</b-badge></b-list-group-item>
                </b-list-group>
            </b-card-body>
        </b-collapse>
        </b-card>

    <b-card no-body class="mb-1 r-0 mt-2">
        <b-card-header header-tag="header" class="p-0 " role="tab">
            <b-button block v-b-toggle.accordion-6  class = "text-black text-left call-us"   style="background-color: #e3f2fd;border:none;radius:0">Feedback Wise     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
  <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
</svg></b-button>
        </b-card-header>

        <b-collapse id="accordion-6" visible accordion="my-accordion" role="tabpanel">
            <b-card-body>
                <b-list-group flush>
                        
                    <b-list-group flush>
                    <b-list-group-item button v-b-toggle.collapse-f2 style="padding-left : 30px ;"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16">
  <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
</svg>CONTACTABLE</b-list-group-item>
                   
                    
                    <b-collapse id="collapse-f2" >
                    <div class = "ml-20">
                    <b-list-group flush class = "" style="padding-left : 15px ;" v-for="value , item in contactable" :key="item.values">
                        <b-list-group-item button > <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
</svg>  {{item}}  <b-badge>{{value}}</b-badge></b-list-group-item>
                    </b-list-group>
                    </div>
                    </b-collapse>
                    
                     <b-list-group-item button v-b-toggle.collapse-f3 style="padding-left : 30px ;" ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16">
  <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
</svg>NON CONTACTABLE</b-list-group-item>
                    
                    <b-collapse id="collapse-f3" >
                    <div class = "ml-20">
                    <b-list-group flush class = "" style="padding-left : 15px ;" v-for="value , item in noncontactable" :key="item.values">
                        <b-list-group-item button > <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
</svg>  {{item}}  <b-badge>{{value}}</b-badge></b-list-group-item>
                    </b-list-group>
                    </div>
                    </b-collapse>

                    </b-list-group>
                   

                 
                
                </b-list-group>
            </b-card-body>
        </b-collapse>
    </b-card>

  </div>
  </div>
</template>


<script>
    import Vue from 'vue' ;
    import axios from 'axios';

    export default Vue.extend({
        name : 'dashboard',

        data(){
            return{
                no_of_account : null , 
                all_outstanding : null , 
                buckets : {}  , 
                products : {} , 
                regions : {} , 
                overmmorrow : null , 
                yesterday : null ,
                today : null ,
                tommorrow : null ,
                contactable : {} , 
                noncontactable : {} ,
                userwhopaid : null , 
                total_amount_received : null 
                

            

            }
        },

        mounted(){
        
        axios
        .get('http://3.108.199.237/api/filterdata/'+this.$store.state.user.user_id.toString()+'/') 
        .then((res) => (
         console.log("reponse" , res , "response data " , res.data) ,
         this.no_of_account = JSON.parse(res.data)['no_of_account'] , 
         this.all_outstanding = JSON.parse(res.data)['all_outstanding'] ,
         this.buckets  = JSON.parse(res.data)['buckets'] , 
         this.products = JSON.parse(res.data)['products_cash_collected'],
         this.regions = JSON.parse(res.data)['region_cash_collected'],
         this.noncontactable = JSON.parse(res.data)['noncontactable'],
         this.contactable = JSON.parse(res.data)['contactable'],
         this.overmmorrow = JSON.parse(res.data)['overmmorrow'],
         this.yesterday = JSON.parse(res.data)['yesterday'],
         this.tommorrow = JSON.parse(res.data)['tommorrow'],
         this.today = JSON.parse(res.data)['today'],
         this.userwhopaid = JSON.parse(res.data)['userwhopaid'],
         this.total_amount_received = JSON.parse(res.data)['total_amount_received'] 

        )) ; 
        
        },

        methods : {

        logout(){
          this.$router.replace({ name: "login" });
          this.$store.commit("SET_CUSTOMER_ID", null);
          this.$store.commit("SET_USER_ID", null);
        },

        async filter(key , value){
            console.log("clicked" , key , value);
            // let url = 'http://3.108.199.237/api/filterdata/2000/' ;
            // const data = new FormData();
            // data.append(key, value); 
            // console.log(data)
            this.$store.commit("set_key" , key) ; 
            this.$store.commit("set_value" , value) ; 
            //this.$router.replace({ name: "secure" });
            this.$router.replace({ name: "home" });
            // let res = await axios.post(url,data)
            // if (res.status == 200 || res.status == 201 ){
            //     this.no_of_account = JSON.parse(res.data)['no_of_account'] ;
            // }

        }
  

        }
        

        
    });
</script>

<style scoped>
.container {
    margin-top: 8%;

}
b-card-header {
    background-color: none;
    border : none ; 
    height : 20px;

}
b-card-header:focus { 
    background : none ,

}
b-button {
    text-align: left;
    background : none ;
    background: #e3f2fd;

}

.call-us {
  text-align: left !important;
}

.call-us svg {
  float: right;
}




</style>