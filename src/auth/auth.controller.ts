import { Controller, Get, UseGuards } from '@nestjs/common';
import { GoogleAuthGuard } from './utils/Guards';

@Controller('auth')
export class AuthController {
    
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
    handleRedirect() {
        return { msg: 'OK' };
    }
}