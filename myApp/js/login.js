import {    signInWithEmailAndPassword,
            createUserWithEmailAndPassword
} from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js';

import {
    auth
} from './module.js'

$('#login').on('click', function(){

    signInWithEmailAndPassword(auth, 'lucaskoeppli@hotmail.com', 'asdf1234')
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user);
    // ...
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
    });

});