<template>
  <div>
      <h1>로그인 성공</h1>
      <button @click="logOut">로그아웃</button>
      <hr>
      <img :src="photo" alt="회원사진">
      <p>{{name}}</p>
      <p>{{email}}</p>
      <p>{{userId}}</p>
      <hr>
      <pre>{{user}}</pre>
  </div>


</template>
<script>
    import firebase from 'firebase';

    export default {
        data(){
           return {
                photo: '',
                userId: '',
                name: '',
                email: '',
                user: {}
           }

        },
        created(){
            this.user = firebase.auth().currentUser;
            if(this.user) {
                this.name = this.user.displayName;
                this.photo = this.user.photoURL;
                this.email = this.user.email;
                this.userId = this.user.uid;
            }
        },
        methods: {
            logOut(){
                firebase.auth().signOut();
            }
        }
    }
</script>