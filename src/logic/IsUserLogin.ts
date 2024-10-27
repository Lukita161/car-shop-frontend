export const isUserLogued = ()=> {
    try {
        const isLogued = localStorage.getItem('sessionKey')
        if(isLogued=== null) {
            throw new Error('El token no es valido')
        }
        if(isLogued.length>1) {
            return true
        }
    } catch {
        throw new Error('Ha ocurrido un problema con tu autenticacion')
    }
}