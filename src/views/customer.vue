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
    <div class="form-row">
    <div class="form-group col-md-6">
      <label for="exampleFormControlSelect1">Status</label>
      <select class="form-control"   ref ="status" @onChange="checkcondition($event)" v-on:click="samplefunction($event)">
        <option value="" selected disabled>Please select</option>
        <option value = "CONTACT">CONTACT</option>
        <option value = "NON CONTACTABLE">NON CONTACTABLE</option>
      </select>
    </div>
    <div class="form-group col-md-6">
      <label for="exampleFormControlSelect1">Feedback</label>
      <!-- <select class="form-control"  ref="feedback" @onChange ="checkcondition($event)">
        <option>Contactable</option>
        <option>Non Contactable</option> 
      </select> -->
    <select class="form-control"  ref="feedback" @onChange="checkcondition($event)" v-on:click="samplefunction($event)" >
    <option v-for="(values) in feedbacks" :value="values" :key="values">{{values}}</option>
  </select>

    </div>
    </div>
    <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Detailed FeedBack</label>
    <input type="text" class="form-control" id="exampleInputPassword1" v-model="feedback"  @change="onFeedbackChanged">
    </div>
    <label for="exampleInputEmail1" class="form-label">Choose Picture</label>
    <input type="file" accept="image/*" @change="onFileChanged" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
  </div>
  <!-- <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" v-on:click="samplefunction($event)">
    <label class="form-check-label" >Contacted</label>
  </div> -->
  <button  class="btn btn-primary" @click="onUpload">Submit</button>
</div>
</div>
<b-modal
      id="modal-prevent-closing"
      ref="modal"
      title="Enter the promise Date and Amount"
      @show="resetModal"
      @hidden="resetModal"
      @ok="handleOk"
    >
      <form ref="form" @submit.stop.prevent="handleSubmit">
        <div>
        <label for="example-datepicker">Enter Date:</label>
         <b-form-datepicker id="example-datepicker" v-model="date"  :min="min" class="mb-2"></b-form-datepicker>
         </div>
         <b-form-group
          label="Enter Amount:"
          label-for="name-input"
          invalid-feedback="Name is required"
          :state="nameState"
         >
          <b-form-input
            id="name-input"
            v-model="name"
            :state="nameState"
            required
          ></b-form-input>
        </b-form-group>
      </form>
    </b-modal>

</div>

</template>

<script>
import axios from 'axios';
 export default {
     name: 'secure',
  data() {
  const now = new Date() ;
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate()) ; 
  const minDate = new Date(today) ;
  minDate.setMonth(now.getMonth()) ; 
   return{
    items: [{"id": 2,"customer_id": 2,
        "name": "Kishan",
        "age": 29,
        "field_agent": 1
        }],
    selectedFile: null,
    name: '',
    nameState: null,
    dateState: null ,
    submittedNames:null,
    min: minDate,
    feedbacks: [],


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
    // if (event.target.checked) {
    //    this.checkbox_val = "CONTACT" ; 
    // }
    // else{
    //      this.checkbox_val = "NON CONTACTABLE" ; 
    //   }
    
    if(event.target.value == "CONTACT") {
      this.feedbacks = ["Busy" ,"Cant Buy","Delay in Payment" ,"Dispute","Insurance Case","Looking for Restructure","Needs Settlement","Part Payment","PTP","Promise to Pay","Refuse to Pay","Wants to settle","Will think"];

    }
    else if(event.target.value == "NON CONTACTABLE"){
      this.feedbacks = ["Absconding","Avoiding Calls","Changed residence /Job","Disconnect","Out of country","RNR","Wrong Number","Message not Delivered"];
    }
     console.log(this.$refs.status.value );
     console.log(this.$refs.feedback.value);
    if(this.$refs.status.value == 'CONTACT' && this.$refs.feedback.value == 'Promise to Pay'){
      this.$bvModal.show('modal-prevent-closing');
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
       data.append('contact' , this.$refs.status.value);
       data.append('amount' , this.submittedNames )
       data.append('selected_feedback' , this.$refs.feedback.value)
       data.append('promise_date' , this.dateState)
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
  // back(){
  //   this.$router.replace({ name: "secure" });
  // },
  back(){
    this.$router.replace({ name: "home" });
  },
  checkFormValidity() {
        const valid = this.$refs.form.checkValidity()
        this.nameState = valid
        return valid
      },
      resetModal() {
        this.name = ''
        this.nameState = null
      },
      handleOk(bvModalEvt) {
        // Prevent modal from closing
        bvModalEvt.preventDefault()
        // Trigger submit handler
        this.handleSubmit()
      },
      handleSubmit() {
        // Exit when the form isn't valid
        if (!this.checkFormValidity()) {
          return
        }
        console.log(this.$refs.status.value);
        // Push the name to submitted names
        this.submittedNames = this.name ; 
        this.dateState = this.date ; 
        // Hide the modal manually
        this.$nextTick(() => {
          this.$bvModal.hide('modal-prevent-closing')
        })
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