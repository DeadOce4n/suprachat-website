import type { PathsOf } from '@utils/types'

export const esTranslations = {
  general: {
    databaseUnavailable:
      'La base de datos no está disponible, intente más tarde'
  },
  hooks: {
    auth: {
      missingAuthorizationHeader: 'Hacen falta las credenciales',
      malformedAuthorization: 'Credenciales con formato incorrecto',
      userNotFound: 'Usuario no encontrado',
      wrongPassword: 'Contraseña incorrecta',
      verificationError: 'La verificación de la cuenta falló',
      loginSuccessful: 'Bienvenidx de vuelta, {{nick}}',
      registrationSuccessful:
        '¡Registro exitoso! Se ha enviado un código de confirmación a tu correo'
    },
    users: {
      successUserUpdate: 'Perfil actualizado correctamente',
      databaseUnavailable: 'Error de conexión, intente más tarde',
      fileTooLarge: 'El archivo es demasiado grande!',
      uploadProfilePictureSuccess: '¡Foto de perfil actualizada correctamente!',
      newPasswordSameAsOld:
        'La nueva contraseña no puede ser igual a la anterior'
    }
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
        'Bienvenido a SupraChat! Lee las reglas y el manual de usuario si tienes dudas 😉',
      openPopupClick: 'Para cerrar la ventana haz click fuera de ella'
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
    },
    profile: {
      editProfile: 'Editar perfil',
      whichCountry: '¿De qué país eres?',
      tellUsAboutYou: 'Cuéntanos más sobre ti',
      changePassword: 'Cambiar contraseña',
      changeProfilePic: 'Cambiar foto',
      userProfilePic: 'Foto de perfil de {{nick}}'
    }
  },
  actions: {
    login: 'Iniciar sesión',
    verify: 'Verificar',
    signup: 'Registrarse',
    save: 'Guardar cambios'
  },
  formSchema: {
    required: 'Este campo es obligatorio',
    tooSmall: 'Este campo requiere mínimo {{count}} caracteres',
    tooBig: 'Este campo requiere máximo {{count}} caracteres',
    exactLength: 'Este campo requiere exactamente {{count}} caracteres',
    invalidEmail: 'El correo no es válido'
  }
} as const

export type EsTranslationPath = PathsOf<typeof esTranslations>
