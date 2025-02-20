import { Component, OnInit } from '@angular/core';
import { PoPageLoginModule } from '@po-ui/ng-templates';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    PoPageLoginModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  public productName: string = 'VCROOT SEVEN';

  constructor( private loginService: LoginService ) {}

  ngOnInit(): void {}

  public onLoginSubmit({ login, password }: { login: string; password: string }): void {
    this.loginService.signIn(login, password).subscribe({
      next: (response) => {
        // Exibir um alerta com a resposta de sucesso
        alert(`Login bem-sucedido! Token: ${response.token}`);
      },
      error: (err) => {
        // Exibir um alerta com a mensagem de erro
        alert(`Erro ao fazer login: ${err.details.message || 'Verifique suas credenciais.'}`);
      },
    })
  }
}
