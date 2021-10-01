<template>
<div>
  <b-navbar toggleable="lg" class="navbar navbar-light navbar-expand-lg" style="background-color: #e3f2fd;">
    <b-navbar-brand href="#">
      <img src="../assets/images/logo.svg" height="40px" width="100px" class="d-inline-block align-top" alt="Kitten">
      
    </b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
  
      
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
   
  
          <!-- Using 'button-content' slot -->
          <button class = "btn btn-outline-primary mr-5" style = "text-decoration: none ; " v-on:click="back()">Back</button>
          <button  class = "btn btn-outline-primary " style = "text-decoration: none ; " v-on:click="logout()">Logout</button>
       
     </b-navbar-nav>
    </b-collapse>
  </b-navbar>
<div class = "container">
  <div class="card-block table-border-style" >
                <div class="table-responsive" style="margin-top:50px ; margin-bottom:60px" >
                    <table class="table table-striped" >
                        <thead>
                            <tr>
                                
                                <th>Details</th>
                                <th>Value</th>
    
                            </tr>
                        </thead>
                        <tbody v-for="(value, key, index) in items" :key="`${ key }-${ index }`" style="background:white">
                            <tr style="background:white">
                                <th scope="row">{{key}}</th>
                                
                                <td>{{value}}</td>

                            </tr>
                        </tbody>
                    </table>
                </div> 
              <div>
              </div>
<!-- 
    <div class="single-customer-tempalte" id ="unique">
      <div class="card">
        <div style="text-align: center; margin-top: 2%; width:100%;display:block;">
             <img src="../assets/images/logo.svg"  height="40" width="175">
      </div> 
      <div class = "d1 text-center" style = "width:100%;justify-content: center;">
        
        <h3><br>Customer Details</h3>
        <button type="button" v-on:click="back()"  style="float: right; vertical-align: middle; " class="btn btn-primary shadow-2 mb-4">Back</button>
        <button type="button" v-on:click="logout()"  style="float: right; vertical-align: middle;" class="btn btn-primary shadow-2 mb-4">Logout</button>
      </div> -->
       
      
  <div class="mb-3">
    <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Write a FeedBack</label>
    <input type="text" class="form-control" id="exampleInputPassword1" v-model="feedback"  @change="onFeedbackChanged">
  </div>
    <label for="exampleInputEmail1" class="form-label">Choose Picture</label>
    <input type="file" accept="image/*" @change="onFileChanged" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" v-on:click="samplefunction($event)">
    <label class="form-check-label" >Contacted</label>
  </div>
  <button  class="btn btn-primary" @click="onUpload">Submit</button>
</div>
          
      <!-- <div class = "d2 text-center" style = "width:100%; display:block;">
        <h4 >Upload Image</h4><br/>
        <input  class="btn btn-primary shadow-2 mb-4" type="file" accept="image/*" @change="onFileChanged"><br/>
        <input  placeholder="FeedBack" v-model="feedback" type="text"  @change="onFeedbackChanged" ><br/>
        <Label>Contacted</Label>
        <input type="checkbox" v-on:click="samplefunction($event)" /><br/>
        <button class="btn btn-primary shadow-2 mb-4" @click="onUpload">Upload!</button>
      </div>    
      -->
    
</div>
</div>

</template>

<script>
import axios from 'axios';
 export default {
     name: 'secure',
  data() {
   return{
    items: [{"id": 2,"customer_id": 2,
        "name": "Kishan",
        "age": 29,
        "field_agent": 1
        }],
    selectedFile: null

   }
  },
  mounted(){
        
        axios.get('http://3.108.199.237/api/cust/'+this.$store.state.user.customer_id.toString()+'/').then(res=> this.items = res.data[0]); 
  },
methods: {
  onFileChanged (event) {
    this.selectedFile = event.target.files[0]
  
  },
  samplefunction : function(event) {
    if (event.target.checked) {
       this.checkbox_val = "CONTACT" ; 
    }
    else{
         this.checkbox_val = "NON CONTACTABLE" ; 
      }
},
  onFeedbackChanged (event) {
    this.feedback = event.target.value
    console.log(this.feedback)
  },
async onUpload() {
      let url = 'http://3.108.199.237/api/photo/'

       const data = new FormData();
       data.append('appid', this.items.appid); 
       data.append('field_agent_id', this.$store.state.user.user_id); 
       data.append('feedback', this.feedback); 
       data.append('photo', this.selectedFile); 
       data.append('contact' , this.checkbox_val);
      console.log(data)
      let res = await axios.post(url,data)
      if (res.status == 201){
        alert("Photo Uploaded");
      }
    // upload file
  },
   logout(){
          this.$router.replace({ name: "login" });
          this.$store.commit("SET_CUSTOMER_ID", null);
          this.$store.commit("SET_USER_ID", null);
      },
  back(){
    this.$router.replace({ name: "secure" });
  }
}
  

 } 
</script>

<style scoped>
    #secure {
        background-color: #FFFFFF;
        border: 1px solid #CCCCCC;
        padding: 20px;
        margin-top: 10px;
    }
</style>