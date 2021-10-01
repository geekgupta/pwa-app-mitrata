<template>
<div>
  <b-navbar toggleable="lg"  class="navbar navbar-light navbar-expand-lg" style="background-color: #e3f2fd;">
     <b-navbar-brand href="#">
      <img src="../assets/images/logo.svg" height="40px" width="100px" class="d-inline-block align-top" alt="Kitten">
      
    </b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        
          <input size="sm" class="form-control me-2" v-model="search" id="search-bar" placeholder="Search" @change="onSearch" />
          <button size="sm" class="btn btn-outline-primary"  @click="onSearch">Search</button>
        

        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template #button-content>
            <em>Logout</em>
          </template>
          
          <b-dropdown-item  v-on:click="logout()">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
  <div class="container" style = "margin-top:50px;">
  <b-table striped hover :items="items"  :fields="fields" :select-mode="selectMode"
      responsive="sm"
      ref="selectableTable"
      selectable @row-selected="getcustomer"></b-table>
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
    };
  },
  mounted() {
    axios
      .get(
        "http://3.108.199.237/api/customers/" +
          this.$store.state.user.user_id.toString() +
          "/"
      )
      .then((res) => (this.items = res.data));
  },

  methods: {
    async getcustomer(item) {
      this.$store.commit("SET_CUSTOMER_ID",item[0].appid);
       
      // let url = 'http://3.108.199.237/api/cust/'+customer_id.toString();
      // console.log(url)
      // let options = { url, method: "get"};
      // let {data} = await axios(options);
      // console.log(data)
      this.$router.replace({ name: "customer" });
    },
    onSearch(event) {
    this.search= event.target.value
    console.log(this.search) 
     axios.get("http://3.108.199.237/api/search/?search=" + this.search )
    .then((res) => (this.items = res.data));
  },
    logout() {
      this.$router.replace({ name: "login" });
      this.$store.commit("SET_CUSTOMER_ID", null);
      this.$store.commit("SET_USER_ID", null);
    },
    

    
  },
};
</script>

<style scoped>
body {
  background:white;
}

</style>