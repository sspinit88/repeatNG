import {Component, HostBinding, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../shared/services/auth.service';
import {UserModel} from '../../shared/models/user.model';
import {MessageModel} from '../../shared/models/message.model';
import {Router} from '@angular/router';
import {fadeStateTrigger} from '../../shared/animations/fade.animation';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [fadeStateTrigger]
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  message: MessageModel;

  @HostBinding('@fade') fade = true;

  constructor(private authService: AuthService,
              private router: Router) {
  }

  ngOnInit() {
    this.form = new FormGroup({
      'email': new FormControl(
          null,
          [Validators.required, Validators.email]
      ),
      'password': new FormControl(
          null,
          [Validators.required, Validators.minLength(6)]
      )
    });
    // message init
    this.message = new MessageModel('danger', '');

  }

  submitForm() {
    const formData = this.form.value;

    this.authService.getUserByEmail(formData.email)
        .subscribe((user: UserModel) => {
          if (user) {
            if (user.password === formData.password) {
              this.message.text = '';
              this.showMessage('success', 'Здравствуйте!');
              this.router.navigate(['system', 'bill']);
            } else {
              this.showMessage('danger', 'Введен неверный пароль!');
            }
          } else {
            this.showMessage('danger', 'Пользователь не зарегистрирован!');
          }
        });
  }

  showMessage(type: string = 'danger', text: string) {
    this.message = new MessageModel(type, text);
    window.setTimeout(() => {
      this.message.text = '';
    }, 5000);
  }

}
