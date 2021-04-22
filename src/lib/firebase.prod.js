import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// 1) when seeding the database you'll have to uncomment this!
 //import { seedDatabase } from '../seed';

const config = {
    apiKey: "AIzaSyDzjy9NwYU0ZOWv9JyfmcooDxbZloFpRMs",
    authDomain: "netflix-c9d86.firebaseapp.com",
    projectId: "netflix-c9d86",
    storageBucket: "netflix-c9d86.appspot.com",
    messagingSenderId: "823917976730",
    appId: "1:823917976730:web:b9eba17e90bfff74465323",
    measurementId: "G-1KZ30T34H2"
};

const firebase = Firebase.initializeApp(config);
// 2) when seeding the database you'll have to uncomment this!
//seedDatabase(firebase);
// 3) once you have populated the database (only run once!), re-comment this so you don't get duplicate data

export { firebase };
