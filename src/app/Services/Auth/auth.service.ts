import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from "@angular/fire/firestore";
import { first } from 'rxjs/operators';
import * as moment from 'moment';
import * as firebase from 'firebase';
@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(
    private fireAuth: AngularFireAuth,
    private db: AngularFirestore,
  ) {
  }


  getUser(id) {
    return this.db.collection("Users").doc(id).snapshotChanges();
  }


  isLoggedIn() {
    return this.fireAuth.authState.pipe(first())
  }
  logout() {
    return this.fireAuth.auth.signOut();
  }
  uploadProfilePic(data, image) {
    return firebase.storage().ref("Users/" + data.id + "/" + data.name).put(image).then(() => {
      firebase.storage().ref("Users/" + data.id + "/" + data.name).getDownloadURL().then((dURL) => {
        this.db.collection("Users").doc(data.id)
          .set({ profilePicture: dURL }, { merge: true });
      })
    })

  }

  //Email Login functions 


  loginM(data) {
    return this.fireAuth.auth.signInWithEmailAndPassword(data.email, data.pass)
  }




}
