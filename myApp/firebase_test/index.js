import {
    initializeApp
} from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import {
    getDatabase,
    ref,
    child,
    get,
    onValue,
    set,
    push,
    update
} from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-database.js';

const firebaseConfig = {
    apiKey: "AIzaSyDNU08M2rAjEg4M5IlXfmuOWtx-1SIHw0E",
    authDomain: "myapp-90a56.firebaseapp.com",
    databaseURL: "https://myapp-90a56-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "myapp-90a56",
    storageBucket: "myapp-90a56.appspot.com",
    messagingSenderId: "875652491492",
    appId: "1:875652491492:web:8827dca389e8251d0de4f1"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase();
const starCountRef = ref(db, '/');

var hbtemplate = Handlebars.compile($('#hbtemplate').html());

onValue(starCountRef, (snapshot) => {
    const data = snapshot.val();
    console.log(data);
    var hbhtml = hbtemplate(data);
    $('#anzeige').html(hbhtml);
    $('.delete').click(function (e) {
        e.preventDefault();
        var key = $(this).attr('data-id');
        console.log(key);
        dbDelete(key);
    });
});

$('#update').click(function (e) {
    dbUpdate(6)
});
$('#add').click(function (e) {
    dbAdd(6)
});

$('#push').click(function (e) {
    dbPush(6)
});

function dbDelete(key) {
    console.log('Delete:' + key);
    // delete firbase element with key
    set(ref(db, 'user/' + key), null);
}

function dbUpdate(key) {
    console.log('Update:' + key);
    // update firbase element with key
    update(ref(db, 'user/' + key), {
        id: key,
        name: "Manuela"
    });
}

function dbAdd(key) {
    console.log('Add:' + key);
    // insert firbase element with key
    set(ref(db, 'user/' + key), {
        id: key,
        name: "Mickey"
    });
}

function dbPush() {
    console.log('Push:');
    // insert firbase element with push
    push(ref(db, 'user/'), {
        id: 6,
        name: "Mickey"
    });
}