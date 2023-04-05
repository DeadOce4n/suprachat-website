export const esTranslations = {
  general: {
    databaseUnavailable:
      'La base de datos no está disponible, intente más tarde'
  },
  auth: {
    missingAuthorizationHeader: 'Hacen falta las credenciales',
    malformedAuthorization: 'Credenciales con formato incorrecto',
    userNotFound: 'Usuario no encontrado',
    wrongPassword: 'Contraseña incorrecta',
    verificationError: 'La verificación de la cuenta falló',
    loginSuccessful: 'Bienvenidx de vuelta, {{nick}}'
  },
  landing: {
    heroTitle: 'Chatea gratis con gente de todo el mundo',
    heroContent:
      'Totalmente gratis y sin registro. Para siempre! Pero si decides registrarte, podrás obtener grandes beneficios 👀',
    chatNow: '¡Chatea ya!',
    signup: 'Registrarse'
  },
  roles: {
    operatorFemale: 'Operadora',
    operatorMale: 'Operador',
    adminMale: 'Administrador',
    adminFemale: 'Administradora'
  },
  pages: {
    chat: {
      title:
        'Bienvenido a SupraChat! Lee las reglas y el manual de usuario si tienes dudas 😉'
    },
    login: {
      rememberMe: 'Recordarme durante 30 días',
      nick: 'Nick',
      password: 'Contraseña'
    },
    verify: {
      title: 'Verifica tu cuenta',
      subtitle:
        'Para continuar, ingresa el código de verificación que llegó a tu correo.',
      verificationCode: 'Código de verificación'
    },
    signup: {
      title: 'Regístrate en SupraChat!',
      nick: 'Nick',
      email: 'Correo electrónico',
      password: 'Contraseña',
      passwordRepeat: 'Confirmar contraseña',
      passwordsNotMatch: 'Las contraseñas no coinciden'
    }
  },
  actions: {
    login: 'Iniciar sesión',
    verify: 'Verificar',
    signup: 'Registrarse'
  },
  formSchema: {
    required: 'Este campo es obligatorio',
    tooSmall: 'Este campo requiere mínimo {{count}} caracteres',
    tooBig: 'Este campo requiere máximo {{count}} caracteres',
    exactLength: 'Este campo requiere exactamente {{count}} caracteres'
  }
}
