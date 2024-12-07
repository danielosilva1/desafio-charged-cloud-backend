import { Controller, Get, Inject, Req, Res, UseGuards } from '@nestjs/common';
import { GoogleAuthGuard } from './utils/Guards';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    // Injeta dependência para acessar função do AuthService
    constructor(@Inject(AuthService) private readonly authService: AuthService) {}
    
    // Define rota api/aut/google/login do tipo GET
    @Get('google/login')
    @UseGuards(GoogleAuthGuard)
    handleLogin() {
        // Função lida com o login do usuário
        return { msg: 'Google Authentication' };
    }

    // Define rota para a tela de login do Google (para onde usuário será redirecionado quando acessar api/auth/google/login). google/direct foi definido na Google Cloud
    @Get('google/redirect')
    @UseGuards(GoogleAuthGuard)
    async handleRedirect(@Req() req, @Res() res) {
        const token = await this.authService.signIn(req.user);

        // Redireciona para a tela inicial do front mandando token gerado como parâmetro da url
        res.redirect(`${process.env.FRONT_BASE_URL}?token=${token}`);
    }

    @Get('status')
    user(@Req() req: Request | any) {
    }
}