<template>
<div class="login-form" style="margin-top:10%">    
   
		<!-- <div class="avatar"><i class="material-icons">&#xE7FF;</i></div> -->
    <div class="avatar d-flex justify-content-center">
     <img src="../assets/images/logo.svg" height="40px" width="80px" style = "margin-top:25%" /></div>
    	<h4 class="modal-title">Login to Your Account</h4>
        <div class="form-group">
            <input type="email" name="username" v-model="input.username" placeholder="Email" class="form-control"  required="required">
        </div>
        <div class="form-group">
            <input type="password" class="form-control" name="password" v-model="input.password"  placeholder="Password" required="required">
        </div> 
        <input v-on:click="login()" class="btn btn-primary btn-block btn-lg" value="Login">              
   
    <!-- <div class="text-center small">Don't have an account? <a href="#">Sign up</a></div> -->
</div>
  <!-- <form method="post" class="form-signin m-auto" style="max-width: 350px">
  <div class="text-center mb-4">
    <h1 class="h3 mb-3 font-weight-normal">PayMEE</h1>
  </div>

  <div class="form-label-group">
    <label for="inputEmail">Email address:</label>
    <input
      v-model="input.username"
      type="email"
      id="inputEmail"
      name="username"
      class="form-control"
      placeholder="Email address"
      required=""
      autofocus=""
    />
  </div>

  <div class="form-label-group" style="margin-top: 10px">
    <label for="inputPassword">Password:</label>
    <input
      type="password"
      v-model="input.password"
      name="password"
      id="inputPassword"
      class="form-control"
      placeholder="Password"
      required=""
    />
  </div>
  <br />
  <p class="text-center" style="color: red">{{message}}</p>

  <button v-on:click="login()" class="btn btn-lg btn-primary btn-block" type="submit">
    Sign in
  </button>
  <p class="text-center">
    <br /><a href="{% url 'password_reset' %}">Forgot Password?</a>
  </p>
  <p class="mt-5 mb-3 text-muted text-center">© 2020</p>
</form> -->
  <!-- <f7-page>
    <div class="auth-wrapper">
      <div class="auth-bg">
        <span class="r"></span>
        <span class="r s"></span>
        <span class="r s"></span>
        <span class="r"></span>
      </div>
      <f7-card class="login-card">
        <img src="" class="login-logo" />
        <f7-list form class="login-list">
          <f7-list-input
            label="Username"
            type="text"
            :value="email"
            required
            validate
            outline
            floating-label
            @input="email = $event.target.value"
          ></f7-list-input>
          <f7-list-input
            label="Password"
            type="password"
            required
            validate
            outline
            floating-label
            :value="password"
            @input="password = $event.target.value"
          ></f7-list-input>
        </f7-list>
        <f7-button class="ma-5" fill @click="submit">Sign In</f7-button>
      </f7-card>
    </div>
  </f7-page> -->
  <!-- <div class="auth-wrapper d-flex justify-content-center" >
    <div class="auth-content" style="max-width: 40rem">
      <div class="auth-bg">
        <span class="r"></span>
        <span class="r s"></span>
        <span class="r s"></span>
        <span class="r"></span>
      </div>
      <div class="card">
        <div class="card-body text-center">
          <img src="../assets/images/logo.svg" height="40" width="175" />
          <p></p>
          <h3 class="mb-4" style="font-size: 170%">Login</h3>
          <div class="input-group mb-3">
            <input
              type="email"
              name="username"
              v-model="input.username"
              placeholder="Email"
              class="form-control"
            />
          </div>
          <div class="input-group mb-4">
            <input
              type="password"
              name="password"
              v-model="input.password"
              placeholder="Password"
              class="form-control"
            />
          </div>

          <button
            type="button"
            v-on:click="login()"
            class="btn btn-primary shadow-2 mb-4"
          >
            Login
          </button>
          <h6 align="right" style="font-size: 70%">
            powered by PayMEE Fintech
          </h6>
        </div>
      </div>
    </div>
  </div> -->
  <!-- <div class="vue-tempalte" id ="login">
        <form>
            <h3>Sign In</h3>

            <div class="form-group">
                <label>Username</label>
                <input type="text" name="username" v-model="input.username" placeholder="Username" class="form-control form-control-lg" />
            </div>

            <div class="form-group">
                <label>Password</label>
                <input type="password" name="password" v-model="input.password" placeholder="Password" class="form-control form-control-lg" />
            </div>

            <button type="button" v-on:click="login()" class="btn btn-dark btn-lg btn-block">Sign In</button>

            <p class="forgot-password text-right mt-2 mb-4">
                <router-link to="/forgot-password">Forgot password ?</router-link>
            </p>


        </form>

    </div> -->
</template>

<script>
import axios from "axios";

export default {
  name: "Login",
  data() {
    return {
      input: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    async login() {
      try {
        let url = "http://3.108.199.237/api/auth/";

        if (this.input.username == "") return alert("Username is required");
        if (this.input.password == "") return alert("Password is required");

        console.log({
          email: this.input.username,
          password: this.input.password,
        });

        let resp = await axios.post(url, {
          email: this.input.username,
          password: this.input.password,
        });
        console.log(resp.data);
        if (resp.status == 200) {
          this.$emit("authenticated", true);

          let id = resp.data[0].staff_id;
          console.log(id);
          // this.$emit("id", this.id);
          console.log(id);
          this.$store.commit("SET_ID", id);
          this.$router.replace({ name: "secure" });
        } else {
          alert("Unable to log in with provided credentials.");
        }
      } catch (_) {
        alert("Unable to log in with provided credentials.");
      }
    },
  },
  //      login: async function() {
  //         const auth = { username: this.input.username, password: this.input.password };
  //         // Correct username is 'foo' and password is 'bar'
  //         const url = 'http://localhost:4000/users/authenticate';
  //         this.success = false;
  //         this.error = null;
  //         this.data = null;

  //         try {
  //         let res = axios.post(url, { auth })
  //         let {id,firstName, lastName, username,createdAt,updatedAt,token} = res.data
  //         console.log(id)
  //         this.success=true;

  //         } catch (err) {
  //         this.error = err.message;
  //         }
  //         if (this.success==true){
  //             console.log(this.response);
  //             this.$emit("authenticated", true);
  //             this.$router.replace({ name: "secure" });

  //         }
  //         else {
  //                 console.log(this.users);
  //                 console.log("The username and / or password is incorrect");
  //             }
  //     }
  // }
};
</script>

<style scoped>
.form-control {
		box-shadow: none;
		border-color: #ddd;
	}
	.form-control:focus {
		border-color: #ADD8e6; 
	}
	.login-form {
    
		margin: 0 auto;
		padding: 30px 0;
	}
@media only screen and (min-width : 600px) {
  .login-form {
    width:80%;
	
	}
}
@media only screen and (min-width : 601px){
  .login-form {
    width:50%;
	
	}
}
@media only screen and (min-width : 1200px){
  .login-form {
    width:30%;
		
	}
}
    .login-form form {
        color: #434343;
		border-radius: 1px;
    	margin-bottom: 15px;
        background: #fff;
		border: 1px solid #f3f3f3;
        box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
        padding: 30px;
	}
	.login-form h4 {
		text-align: center;
		font-size: 22px;
        margin-bottom: 20px;
	}
    .login-form .avatar {
        color: #fff;
		margin: 0 auto 30px;
        text-align: center;
		width: 100px;
		height: 100px;
		border-radius: 50%;
		z-index: 9;
		background: #ADD8e6;
		padding: 15px;
		box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.1);
	}
    .login-form .avatar i {
        font-size: 62px;
    }
    .login-form .form-group {
        margin-bottom: 20px;
    }
	.login-form .form-control, .login-form .btn {
		min-height: 40px;
		border-radius: 2px; 
        transition: all 0.5s;
	}
	.login-form .close {
        position: absolute;
		top: 15px;
		right: 15px;
	}
	.login-form .btn {
		background: #ADD8e6;
		border: none;
		line-height: normal;
	}
	.login-form .btn:hover, .login-form .btn:focus {
		background: #ADD8e6;
	}
    .login-form .checkbox-inline {
        float: left;
    }
    .login-form input[type="checkbox"] {
        margin-top: 2px;
    }
    .login-form .forgot-link {
        float: right;
    }
    .login-form .small {
        font-size: 13px;
    }
    .login-form a {
        color: #ADD8e6;
    }
.login-logo {
  width: 100%;
  height: 50px;
  object-fit: contain;
  margin-bottom: 10px;
}
.login-card {
  position: absolute;
  width: 90%;
  height: 100%;
  padding-top: 20px;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
.login-list {
  margin-bottom: 15px !important;
}
.auth-wrapper {
  background: #f4f7fa;
  width: 100%;
  height: 100vh;
}
.auth-wrapper .auth-bg .r {
  position: absolute;
  width: 300px;
  height: 300px;
  border-radius: 50%;
}
.auth-wrapper .auth-bg .r:first-child {
  top: -100px;
  right: -100px;
  background: linear-gradient(-135deg, #1de9b6 0%, #1dc4e9 100%);
}
.auth-wrapper .auth-bg .r:last-child {
  left: -100px;
  bottom: -100px;
  background: linear-gradient(-135deg, #899fd4 0%, #a389d4 100%);
}
.auth-wrapper .auth-bg .r.s {
  width: 20px;
  height: 20px;
}
.auth-wrapper .auth-bg .r.s:nth-child(2) {
  top: 150px;
  right: -150px;
  background: #04a9f5;
}
.auth-wrapper .auth-bg .r.s:nth-child(3) {
  left: -150px;
  bottom: 150px;
  background: #1de9b6;
}
.auth-wrapper .auth-bg .r:nth-child(odd) {
  -webkit-animation: floating 7s infinite;
  animation: floating 7s infinite;
}
.auth-wrapper .auth-bg .r:nth-child(even) {
  -webkit-animation: floating 9s infinite;
  animation: floating 9s infinite;
}
@-webkit-keyframes floating {
  from {
    -webkit-transform: rotate(0deg) translate(-10px) rotate(0deg);
    transform: rotate(0deg) translate(-10px) rotate(0deg);
  }
  to {
    -webkit-transform: rotate(360deg) translate(-10px) rotate(-360deg);
    transform: rotate(360deg) translate(-10px) rotate(-360deg);
  }
}
@keyframes floating {
  from {
    -webkit-transform: rotate(0deg) translate(-10px) rotate(0deg);
    transform: rotate(0deg) translate(-10px) rotate(0deg);
  }
  to {
    -webkit-transform: rotate(360deg) translate(-10px) rotate(-360deg);
    transform: rotate(360deg) translate(-10px) rotate(-360deg);
  }
}
</style>