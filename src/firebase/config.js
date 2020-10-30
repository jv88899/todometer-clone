import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
	apiKey: "AIzaSyArskq4mOeQHmweabb-jfmzPBprOEYCkhk",
	authDomain: "tdc-app-cafb5.firebaseapp.com",
	databaseURL: "https://tdc-app-cafb5.firebaseio.com",
	projectId: "tdc-app-cafb5",
	storageBucket: "tdc-app-cafb5.appspot.com",
	messagingSenderId: "745195701206",
	appId: "1:745195701206:web:db9416bc30b79e506c5a77",
	measurementId: "G-YWQ9P6NVSX",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectAuth = firebase.auth();
const projectFirestore = firebase.firestore();

export { projectAuth, projectFirestore };
