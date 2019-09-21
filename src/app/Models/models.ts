import { FormGroup, FormControl, Validators } from '@angular/forms';
import * as moment from 'moment';
import * as firebase from 'firebase';
export class ModelsService {


    signIn = new FormGroup({
        email: new FormControl("", Validators.compose([
            Validators.required,
            Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
        ])),
        pass: new FormControl("", Validators.compose([
            Validators.required,
            Validators.minLength(6)
        ])),
    });

}