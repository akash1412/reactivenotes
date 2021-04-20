import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyD69K0gKzEKFv0VZv35EkPAM2gcb6mURfM",
	authDomain: "react-image-gallery-888b0.firebaseapp.com",
	databaseURL: "https://react-image-gallery-888b0-default-rtdb.firebaseio.com",
	projectId: "react-image-gallery-888b0",
	storageBucket: "react-image-gallery-888b0.appspot.com",
	messagingSenderId: "821883289532",
	appId: "1:821883289532:web:aced19d5dd0a894ff035b9",
	measurementId: "G-G2LQFDGVX3",
};

firebase.initializeApp(firebaseConfig);

const fireStoreDB = firebase.firestore();

export { fireStoreDB };
