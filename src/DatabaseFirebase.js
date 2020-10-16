import app from "./Firebase";
import * as firebase from 'firebase'
import 'firebase/firestore';
var db = firebase.firestore(app);
export default db