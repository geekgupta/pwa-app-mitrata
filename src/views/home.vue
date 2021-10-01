<template>
    
        <div class="wrapper">
            <!-- Sidebar Holder -->
            <nav id="sidebar">
                <b-navbar-brand href="#">
      <img src="../assets/images/logo.svg" height="40px" width="100px" class="d-inline-block align-top" alt="Kitten">
      
    </b-navbar-brand>

                <ul class="list-unstyled components">
                    <p>Navigations</p>
               <li class="active">
                <a href="#allocation" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle"  block v-b-toggle.accordion-1>Allocation</a>
                <!-- <ul class="collapse list-unstyled" id="allocation">
                    <li>
                        <a href="#">No of Account</a>
                    </li>
                    <li>
                        <a href="#">O/S</a>
                    </li>
                    <li>
                        <a href="#">Buckets</a>
                    </li>
                    <li>
                        <a href="#">Product</a>
                    </li>
                </ul> -->
                <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
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
      </b-collapse>
            </li>
            <li>
                <a href="#promise" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle" block v-b-toggle.accordion-2>Promises</a>
                <!-- <ul class="collapse list-unstyled" id="promise">
                    <li>
                        <a href="#">For Yesterday</a>
                    </li>
                    <li>
                        <a href="#">Today</a>
                    </li>
                    <li>
                        <a href="#">Tomorrow</a>
                    </li>
                     <li>
                        <a href="#">Overmorrow</a>
                    </li>
                </ul> -->
                <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
                    
                        <b-list-group flush>
                            <b-list-group-item button @click="filter('yesterday',true)" >Yesterday <b-badge variant="light">{{yesterday}}</b-badge></b-list-group-item>
                            <b-list-group-item button @click="filter('today',true)">Today <b-badge variant="light">{{today}}</b-badge></b-list-group-item>
                            <b-list-group-item button @click="filter('tommorrow',true)"> Tommorrow <b-badge variant="light">{{tommorrow}}</b-badge></b-list-group-item>
                            <b-list-group-item button @click="filter('overmmorrow',true)"> Overmorrow <b-badge variant="light">{{overmmorrow}}</b-badge></b-list-group-item>
                        </b-list-group>
                </b-collapse>
            </li>
            <li>
                <a href="#cashcollected" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle" block v-b-toggle.accordion-4>Cash Collected</a>
                <!-- <ul class="collapse list-unstyled" id="cashcollected">
                    <li>
                        <a href="#">Count Wise</a>
                    </li>
                    <li>
                        <a href="#">Product Wise</a>
                    </li>
                    <li>
                        <a href="#">Region Wise</a>
                    </li>
                    
                </ul> -->
                <b-collapse id="accordion-4" visible accordion="my-accordion" role="tabpanel">

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
           
        </b-collapse>
            </li>
            <li>
                <a href="#target" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle" block v-b-toggle.accordion-5>Target</a>
                <!-- <ul class="collapse list-unstyled" id="target">
                    <li>
                        <a href="#">Achivement vs Target</a>
                    </li>
                </ul> -->
                 <b-collapse id="accordion-5" visible accordion="my-accordion" role="tabpanel">
            
                <b-list-group flush>
                    <b-list-group-item button>Achivement vs Target<b-badge variant="light">4</b-badge></b-list-group-item>
                </b-list-group>
           
        </b-collapse>

            </li>
            <li>
                <a href="#target" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle" block v-b-toggle.accordion-6>Feedback wsie</a>
                <!-- <ul class="collapse list-unstyled" id="target">
                    <li>
                        <a href="#">Achivement vs Target</a>
                    </li>
                </ul> -->
                <b-collapse id="accordion-6" visible accordion="my-accordion" role="tabpanel">
            
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
        
        </b-collapse>
            </li>
        </ul>     
                    
               

                
            </nav>

            <!-- Page Content Holder -->
            <!-- <div id="content">

                <nav class="navbar navbar-default">
                    <div class="container-fluid">

                        <div class="navbar-header">
                            <button type="button" id="sidebarCollapse" class="btn btn-info navbar-btn">
                                <i class="glyphicon glyphicon-align-left"></i>
                                <span>Toggle Sidebar</span>
                            </button>
                        </div>

                        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                            <ul class="nav navbar-nav navbar-right">
                                <li><a href="#">Page</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>

            
            </div> -->
            <b-navbar toggleable="lg" class="navbar navbar-light navbar-expand-lg" style="background-color: #e3f2fd;border:none;radius:0">
    <b-navbar-brand href="#">
      <img src="../assets/images/logo.svg" height="40px" width="100px" class="d-inline-block align-top" alt="Kitten">
      
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse" style="margin:0px"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
</svg></b-navbar-toggle>
 <b-navbar-toggle  @click="opencollapse" class = "m-0 p-2" style="margin:0px"></b-navbar-toggle>
     <b-collapse id="nav-collapse" is-nav>
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        
          <input size="sm" class="form-control me-2" v-model="search" id="search-bar" placeholder="Search" ref="searchvalue" />
          <button size="sm" class="btn btn-outline-primary"  @click="onSearch">Search</button>
        

        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template #button-content>
            <em>Logout</em>
          </template>
          
          <b-dropdown-item  v-on:click="logout()">Sign Out</b-dropdown-item>
          <b-dropdown-item  v-on:click="back()">Previous Page</b-dropdown-item>
          
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>

    <!-- <b-collapse id="nav-collapse" is-nav>
        
      <b-navbar-nav class="ml-auto">
        
          <button  class = "btn btn-outline-primary " style = "text-decoration: none ; " v-on:click="logout()">Logout</button>
        
     </b-navbar-nav>
    </b-collapse> -->
  </b-navbar>
  <div class="container" style = "margin-top:50px;">
  <b-table striped hover :items="items"  :fields="fields" :select-mode="selectMode"
      responsive="sm"
      ref="selectableTable"
      selectable @row-selected="getcustomer"></b-table>
<nav class="d-flex justify-content-center">
      <ul class="pagination pagination-lg">
        <li class="page-item prev" v-if="showPrevButton">
          <a class="page-link" @click="loadPrev()">Previous</a>
        </li>
        
        <li class="page-item next" v-if="showNextButton">
          <a class="page-link" @click="loadNext()">Next</a>
        </li>
      </ul>
    </nav>


<nav class="d-flex justify-content-center">
			<ul class="pagination pagination-sm">
				<li class="page-item">
					<button type="button" class="page-link" v-if="page != 1" @click="page--"> Previous </button>
				</li>
				<li class="page-item">
					<button type="button" class="page-link" v-for="pageNumber in pages.slice(page-1, page+4)" :key="pageNumber.values" @click="page = pageNumber"> {{pageNumber}} </button>
				</li>
				<li class="page-item">
					<button type="button" @click="page++" v-if="page < pages.length" class="page-link"> Next </button>
				</li>
			</ul>
 </nav>



</div>
</div>
       

   
</template>

<script lang="ts">
    import Vue from 'vue'
    import $ from "jquery";
    import axios from 'axios' ; 

    

    export default Vue.extend({
        name : 'home',
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
                total_amount_received : null ,
                items: [],
                perPage: 9,
                currentPage: 1,
                showNextButton: false,
                showPrevButton: false,
                page: 1,
                totalpages : null , 
                pages: []
                

            

            }
        },

        async mounted(){
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
        let url = 'http://3.108.199.237/api/filterdata/'+this.$store.state.user.user_id.toString()+'/' ;
        const data = new FormData();
        data.append(this.$store.state.user.reqkey, this.$store.state.user.reqvalue); 
        console.log(data)
        console.log("current page" , this.page);
        await axios.post(url,data).then((res) => 
        (
        this.items = res.data.results,
        this.totalpages = res.data.total_pages
        
        ));
        console.log(this.totalpages) ; 
        for(var value = 1; value <= this.totalpages; value++) {
            this.pages.push(value);
        }

        
        },
        methods:{
             opencollapse(){
                    console.log("working....")
                    $('#sidebar, #content').toggleClass('active');
                    $('.collapse.in').toggleClass('in');
                    $('a[aria-expanded=true]').attr('aria-expanded', 'false');
                    },
                     async getcustomer(item) {
      this.$store.commit("SET_CUSTOMER_ID",item[0].appid);
    
      
      document.addEventListener("backbutton", this.yourCallBackFunction, false);
      
      this.$router.replace({ name: "customer" });
    },
    onSearch() {
    // this.search= event.target.value
    // console.log(this.search) 
    this.items.length= 0 ; 
    this.pages.length= 0 ; 
    axios.get("http://3.108.199.237/api/search/?search=" + this.$refs.searchvalue.value )
    .then((res) => (this.items = res.data.results));
    },

    logout() {
      this.$router.replace({ name: "login" });
      this.$store.commit("SET_CUSTOMER_ID", null);
      this.$store.commit("SET_USER_ID", null);
    },


    async filter(key , value){
            console.log("clicked" , key , value);
            let url = 'http://3.108.199.237/api/filterdata/'+this.$store.state.user.user_id.toString()+'/' ;
            const data = new FormData();
            data.append(key, value); 
            console.log(data)
            this.page = 1 ;
            this.pages.length = 0;
            console.log("current page" , this.page);
            await axios.post(url,data).then((res) => 
            (
            this.items = res.data.results,
            this.totalpages = res.data.total_pages
            
            ));
            console.log(this.totalpages) ; 
            for(var v = 1; v <= this.totalpages; v++) {
                this.pages.push(v);
            }
            // this.$store.commit("set_key" , key) ; 
            // this.$store.commit("set_value" , value) ; 
            // this.$router.replace({ name: "secure" });
            let res = await axios.post(url,data)
            if (res.status == 200 || res.status == 201 ){
                this.no_of_account = JSON.parse(res.data)['no_of_account'] ;
            
              
            }
           
              

        },

    back() {
      this.$router.replace({ name: "dashboard" });
    },
    setPages () {
			let numberOfPages = Math.ceil(this.posts.length / this.perPage);
			for (let index = 1; index <= numberOfPages; index++) {
				this.pages.push(index);
			}
		},
		paginate (posts) {
			let page = this.page;
			let perPage = this.perPage;
			let from = (page * perPage) - perPage;
			let to = (page * perPage);
			return  posts.slice(from, to);
		}
        },
        watch: {
    page: async function () {
      console.log("current page" , this.page);
       let url = `http://3.108.199.237/api/filterdata/${this.$store.state.user.user_id.toString()}/?page=${this.page}` ;
        const data = new FormData();
        data.append(this.$store.state.user.reqkey, this.$store.state.user.reqvalue); 
        console.log(data)
        await axios.post(url,data)
        .then((res) => res)
        .then(data => {
                console.log("dataaa" , data);
                this.items = data.data.results
            })
            .catch(error => {
                console.log(error)
            })
      console.log("executed");
    },
    
  },
        

        
    })
    $(document).ready(function () {

         console.log("working...")
                $('#sidebarCollapse').on('click', function () {
                    console.log("working....")
                    $('#sidebar, #content').toggleClass('active');
                    $('.collapse.in').toggleClass('in');
                    $('a[aria-expanded=true]').attr('aria-expanded', 'false');
                });
            })
    

    
    

    // $(document).ready(function () {

    // $("#sidebar").mCustomScrollbar({
    //      theme: "minimal"
    // });

    // $('#sidebarCollapse').on('click', function () {
    //     $('#sidebar').toggleClass('active');
    // });

//});
</script>

<style scoped>
@import "https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700";

p {
    font-family: 'Poppins', sans-serif;
    font-size: 1.1em;
    font-weight: 300;
    line-height: 1.7em;
    color: #999;
}

a, a:hover, a:focus {
    color: inherit;
    text-decoration: none;
    transition: all 0.3s;
}

.navbar {
    padding: 15px 10px;
    background: #fff;
    border: none;
    border-radius: 0;
    margin-bottom: 40px;
    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
}

.navbar-btn {
    box-shadow: none;
    outline: none !important;
    border: none;
}

.line {
    width: 100%;
    height: 1px;
    border-bottom: 1px dashed #ddd;
    margin: 40px 0;
}

/* ---------------------------------------------------
    SIDEBAR STYLE
----------------------------------------------------- */
#sidebar {
    width: 250px;
    position: fixed;
    top: 0;
    left: 0;
    min-height:100vh;
    max-height: 100vh;
    overflow-y: scroll;
    z-index: 999;
    background: #7386D5;
    color: #fff;
    transition: all 0.3s;
}

#sidebar.active {
    margin-left: -250px;
}

#sidebar .sidebar-header {
    padding: 20px;
    background: #6d7fcc;
}

#sidebar ul.components {
    padding: 20px 0;
    border-bottom: 1px solid #47748b;
}

#sidebar ul p {
    color: #fff;
    padding: 10px;
}

#sidebar ul li a {
    padding: 10px;
    font-size: 1.1em;
    display: block;
}
#sidebar ul li a:hover {
    color: #7386D5;
    background: #fff;
}

#sidebar ul li.active > a, a[aria-expanded="true"] {
    color: #fff;
    background: #6d7fcc;
}


a[data-toggle="collapse"] {
    position: relative;
}

a[aria-expanded="false"]::before, a[aria-expanded="true"]::before {
    content: '\e259';
    display: block;
    position: absolute;
    right: 20px;
    font-family: 'Glyphicons Halflings';
    font-size: 0.6em;
}
a[aria-expanded="true"]::before {
    content: '\e260';
}


ul ul b-list-group-item {
    font-size: 0.9em !important;
    padding-left: 30px !important;
    background: #6d7fcc;
}

ul.CTAs {
    padding: 20px;
}

ul.CTAs a {
    text-align: center;
    font-size: 0.9em !important;
    display: block;
    border-radius: 5px;
    margin-bottom: 5px;
}
a.download {
    background: hsl(0, 0%, 100%);
    color: #7386D5;
}
a.article, a.article:hover {
    background: #6d7fcc !important;
    color: #fff !important;
}


/* ---------------------------------------------------
    CONTENT STYLE
----------------------------------------------------- */
#content {
    width: calc(100% - 250px);
    padding: 40px;
    min-height: 100vh;
    transition: all 0.3s;
    position: absolute;
    top: 0;
    right: 0;
}
#content.active {
    width: 100%;
}


/* ---------------------------------------------------
    MEDIAQUERIES
----------------------------------------------------- */
@media (max-width: 768px) {
    #sidebar {
        margin-left: -250px;
    }
    #sidebar.active {
        margin-left: 0;
    }
    #content {
        width: 100%;
    }
    #content.active {
        width: calc(100% - 250px);
    }
    #sidebarCollapse span {
        display: none;
    }
}
body {
  background:white;
}
button.page-link {
	display: inline-block;
}
button.page-link {
    font-size: 20px;
    color: #29b3ed;
    font-weight: 500;
}
.offset{
  width: 500px !important;
  margin: 20px auto;  
}

b-navbar-toggle
{
margin : 0px ; 

 
}




</style>