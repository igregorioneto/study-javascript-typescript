// Sempre dependa de abstrações, nunca de implementações concretas;

interface IEmailService {
  enviarEmail() : void;
}

class InserirUsuarioController extends BaseController {

  private emailService: IEmailService;
  constructor (emailService: IEmailService) {
    this.emailService = emailService;
  }

  protected enviarEmail (): void {
    // envia mail
    const email = new Email(...);
    this.emailService.enviarEmail(email);
  }
}