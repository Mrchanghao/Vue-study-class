<template>
<div>
    <div id="firebaseui-auth-container"></div>
    <div id="loader"></div>
</div>
  
</template>

<script>
import firebase from 'firebase';
import firebaseui from 'firebaseui';
import {config} from '../helpers/firebaseConfig.js';

export default {
    name: 'auth',
    mounted(){
        var uiConfig = {
            signInSuccessUrl: '/success',
            signInOptions: [
                firebase.auth.GoogleAuthProvider.PROVIDER_ID,
                firebase.auth.FacebookAuthProvider.PROVIDER_ID,
                firebase.auth.TwitterAuthProvider.PROVIDER_ID,
                firebase.auth.GithubAuthProvider.PROVIDER_ID
            ]
        }
        // 파이어베이스 ui  auth 인스턴스를 초기화합니다.
        var ui = new firebaseui.auth.AuthUI(firebase.auth());
        // FirebaseUI 인증 인터페이스를 렌더링합니다
        ui.start('#firebaseui-auth-container', uiConfig);
    }
}

</script>
