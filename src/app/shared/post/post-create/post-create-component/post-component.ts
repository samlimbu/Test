import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-post-create-component',
    templateUrl: './post-component.html',
    styleUrls: ['./post-component.css']
})
export class PostCreateComponent implements OnInit {
    @Output() emittedValue = new EventEmitter();
    form: FormGroup;
    isloading = false;
    constructor(
        private formBuilder: FormBuilder,
    ) { }

    ngOnInit() {
        this.form = this.formBuilder.group({
            title: [{ value: '', disabled: false }],
            detail: [{ value: '', disabled: false }]
        });
    }
    submit() {
        this.form.disable();
        this.isloading = true;
        setTimeout(()=>{
            console.log('submit', this.f);
            let tempObj: any = {};
            Object.keys(this.f).forEach(element => {
                //console.log(element);
                if (element != 'action') {
                    //console.log(element,this.f[element]);
                    tempObj[element] = this.f[element]['value'];
                }
            });
            //console.log(tempObj);
            this.form.enable();
            this.isloading = false;
            this.emittedValue.emit(tempObj);
        },2000);
        
              //this.dialogRef.close({action:this.data.action, data:tempObj});
    }
    get f() {
        return this.form.controls;
    }
}
