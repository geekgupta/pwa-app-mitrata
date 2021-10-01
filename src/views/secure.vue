<template>
<div>
  <b-navbar toggleable="lg"  class="navbar navbar-light navbar-expand-lg" style="background-color: #e3f2fd;">
     <b-navbar-brand href="#">
      <img src="../assets/images/logo.svg" height="40px" width="100px" class="d-inline-block align-top" alt="Kitten" @click="back()">
      
    </b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

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
  </b-navbar>
  <div class="container" style = "margin-top:50px;">
  <b-table striped hover :items="items"  :fields="fields" :select-mode="selectMode"
      responsive="sm"
      ref="selectableTable"
      selectable @row-selected="getcustomer"></b-table>

<!-- <template v-if="showPrevButton">
    <button @click="loadPrev()">Prev</button>
</template>

<template v-if="showNextButton">
    <button @click="loadNext()">Next</button>
</template> -->
<!-- <nav class="d-flex justify-content-center">
      <ul class="pagination pagination-lg">
        <li class="page-item prev" v-if="showPrevButton">
          <a class="page-link" @click="loadPrev()">Previous</a>
        </li>
        
        <li class="page-item next" v-if="showNextButton">
          <a class="page-link" @click="loadNext()">Next</a>
        </li>
      </ul>
    </nav> -->


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


  <!-- <div class="col-xl-12">
    <div class="card">
      <div style="text-align: center; margin-top: 2% ; margin-bottom : 60px">
        <img src="../assets/images/logo.svg" height="40" width="175"  />
      </div>
      <div class="search-container">
      <input type="text" v-model="search" id="search-bar" placeholder="Search here ......" @change="onSearch">
      <a href="#">
        <img class="search-icon" src="http://www.endlessicons.com/wp-content/uploads/2012/12/search-icon.png"></a>
      </div>
      
      <div class="card-header text-center" style="margin-bottom: 0.2% ; margin-top:-80px">
        <br />
        <h3>Customer's List</h3>
        <button
          type="button"
          v-on:click="logout()"
          style="float: right; vertical-align: middle"
          class="btn btn-primary shadow-2 mb-4"
        >
          Logout
        </button>
      </div>
      <div class="card-block table-border-style" style = "width:100%">
        <div class="table-responsive" style = "width:100%">
          <table class="table table-striped text-center" style = "width:100%">
            <thead>
              <tr>
                <th>Client Id</th>
                <th>Full Name</th>
              </tr>
            </thead>
            <tbody v-for="item in items" :key="item.appid">
              <tr  v-on:click="getcustomer(item.appid)" style="margin:5px;" >
                <th scope="row" style="margin:5px;">{{ item.appid }}</th>
                <td style="margin:5px;">{{ item.full_name }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div> -->
  <!-- <div class="customer-tempalte" id ="customer">
        <h1>Customer</h1>
        <div v-for="(item) in items" :key="item.customer_id" class="cust">

           <h2> {{item.name}}</h2> <button type="button" v-on:click="getcustomer(item.customer_id)" class="btn btn-dark btn-lg btn-block">Add</button>
        </div>
           
       
    </div> -->
</template>

<script>
import axios from "axios";
export default {
  name: "secure",
  data() {
    return {
      items: [],
      perPage: 9,
      currentPage: 1,
      showNextButton: false,
      showPrevButton: false,
      page: 1,
      totalpages : null , 
			pages: []	
    };
  },
    
  async mounted() {
    // axios
    //   .get(
    //     "http://3.108.199.237/api/customers/" +
    //       this.$store.state.user.user_id.toString() +
    //       "/"
    //   )
    //   .then((res) => (this.items = res.data));
    let url = 'http://3.108.199.237/api/filterdata/'+this.$store.state.user.user_id.toString()+'/' ;
    const data = new FormData();
    data.append(this.$store.state.user.reqkey, this.$store.state.user.reqvalue); 
    console.log(data)
    console.log("current page" , this.page);
    

    // this.$store.commit("set_key" , key) ; 
    // this.$store.commit("set_value" , value) ; 
    // this.$router.replace({ name: "secure" });
    await axios.post(url,data).then((res) => 
    (
      this.items = res.data.results,
      this.totalpages = res.data.total_pages
     
     ));
    console.log(this.totalpages) ; 
    for(var value = 1; value <= this.totalpages; value++) {
        this.pages.push(value);
    }
    
    //this.getPosts(url,data) ; 
  },

  methods: {
      async getcustomer(item) {
      this.$store.commit("SET_CUSTOMER_ID",item[0].appid);
       
      // let url = 'http://3.108.199.237/api/cust/'+customer_id.toString();
      // console.log(url)
      // let options = { url, method: "get"};
      // let {data} = await axios(options);
      // console.log(data)
      
      document.addEventListener("backbutton", this.yourCallBackFunction, false);
      
      this.$router.replace({ name: "customer" });
    },
    // onSearch(event) {
    // this.search= event.target.value
    // console.log(this.search) 
    //  axios.get("http://3.108.199.237/api/search/?search=" + this.search )
    // .then((res) => (this.items = res.data.results));
    // },
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
    back() {
      this.$router.replace({ name: "dashboard" });
    },
    async loadNext() {
      this.currentPage += 1
      let url = `http://3.108.199.237/api/filterdata/${this.$store.state.user.user_id.toString()}/?page=${this.currentPage}` ;
      const data = new FormData();
      data.append(this.$store.state.user.reqkey, this.$store.state.user.reqvalue); 
      console.log(data)
      await axios.post(url,data)
      .then((res) => res)
      .then(data => {
                console.log("dataaa" , data)
                  this.showNextButton = false
                this.showPrevButton = false
                
                if (data.data.next) {
                    this.showNextButton = true
                }

                if (data.data.previous) {
                    this.showPrevButton = true
                }
                console.log(data.results)
                this.items = data.data.results
            })
            .catch(error => {
                console.log(error)
            })

                
      
    },
    async loadPrev() {
        this.currentPage -= 1
        let url = `http://3.108.199.237/api/filterdata/${this.$store.state.user.user_id.toString()}/?page=${this.currentPage}` ;
        const data = new FormData();
        data.append(this.$store.state.user.reqkey, this.$store.state.user.reqvalue); 
        console.log(data)
        await axios.post(url,data)
        .then((res) => res)
        .then(data => {
                console.log("dataaa" , data)

             this.showNextButton = false
                this.showPrevButton = false
                
                if (data.data.next) {
                    this.showNextButton = true
                }

                if (data.data.previous) {
                    this.showPrevButton = true
                }
                console.log(data.results)
                this.items = data.data.results
            })
            .catch(error => {
                console.log(error)
            })
    },
    async getPosts(url , x ){
        await axios.post(url , x)
            .then(response => {
                return response
            })
            .then(data => {
                console.log("dataaa" , data)

                this.showNextButton = false
                this.showPrevButton = false
                
                if (data.data.next) {
                    this.showNextButton = true
                }

                if (data.data.previous) {
                    this.showPrevButton = true
                }
                console.log(data.results)
                this.items = data.data.results
            })
            .catch(error => {
                console.log(error)
            })
    } ,
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
		},

    async loaddetals(){
      let url = `http://3.108.199.237/api/filterdata/2000/?page=${this.page}` ;
        const data = new FormData();
        data.append(this.$store.state.user.reqkey, this.$store.state.user.reqvalue); 
        console.log(data)
        await axios.post(url,data)
        .then((res) => res)
        .then(data => {
                console.log("dataaa" , data);
                console.log(data.results)
                this.items = data.data.results
            })
            .catch(error => {
                console.log(error)
            })


    },




    yourCallBackFunction () {
       this.$router.replace({ name: "dashboard" });
    }
    
  },
  watch: {
    page: async function () {
      console.log("current page" , this.page);
       let url = `http://3.108.199.237/api/filterdata/2000/?page=${this.page}` ;
        const data = new FormData();
        data.append(this.$store.state.user.reqkey, this.$store.state.user.reqvalue); 
        console.log(data)
        await axios.post(url,data)
        .then((res) => res)
        .then(data => {
                console.log("dataaa" , data);
                console.log(data.results)
                this.items = data.data.results
            })
            .catch(error => {
                console.log(error)
            })
      console.log("executed");
    },
    
  },
  beforeDestroy () {
    document.removeEventListener("backbutton", this.yourCallBackFunction);
  }
};
</script>

<style scoped>
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

</style>