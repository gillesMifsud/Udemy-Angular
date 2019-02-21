import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    loadedFeature = 'recipe';

    onNavigate(feature: string) {
        this.loadedFeature = feature;
    }

    // Initialize Firebase
    // See in firebase console project in web config(topright corner)
    ngOnInit(): void {
        firebase.initializeApp({
            apiKey: 'AIzaSyBISG42Yb-LY29q69WL1mukdU5CCKaD5XA',
            authDomain: 'ng-recipe-book-ecdc0.firebaseapp.com'
        });
    }
}
