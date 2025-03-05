# Problemas Comunes y sus soluciones

### Estoy intentando tomar una orden y no pasa nada 

Al pulsar el botón `Comprar USDT-USDC` o `Vender USDT-USDC` de una oferta, [@DigitalP2PBot](https://t.me/DigitalP2PBot) te responderá por privado lo que debes hacer para completar el proceso. 
Para que el bot pueda responder a tu solicitud es necesario que lo [inicialices](./how-do-i-initialize-the-bot.md), pues ningún bot puede abrirte un chat de primero si no lo has usado antes. Abre [@DigitalP2PBot](https://t.me/DigitalP2PBot) y escribe el comando `/start` o toca el botón de `Iniciar`, luego intenta nuevamente tomar la orden, regresa al bot y sigue sus instrucciones.


### Mi contraparte tuvo un problema al enviarme el pago en fíat y luego desapareció, mis USDT-USDC quedaron bloqueados

NO se preocupe, la transacción NO se cancelará automáticamente. Usted debe abrir una disputa con el comando `/dispute <order id>`, para que el solver le regrese los USDT-USDC.

### Un usuario tomó mi compra por error y ya hice el pago de los USDT-USDC.

Se puede iniciar una cancelación cooperativa. Ambos deben ejecutar el comando `/cancel <order id>`.

### Cancelé una orden pero los USDT-USDC no han vuelto a mi wallet. ¿Cuánto debo esperar?

Cuando una orden es cancelada los USDT-USDC del vendedor retornan inmediatamente a la wallet que realizó el pago. algunas veces los USDT-USDC pueden tardar desde unos minutos hasta un par de horas dependiendo de la congestion de la red, pero en todas las wallets retorna el 100% de tus fondos, paciencia.

### Estoy comprando y el bot no me pide una direccion, sino que me pone directamente en contacto con el vendedor

Esto pasa porque ya has ingresado una direccion donde recibir los USDT-USDC. En ese caso los USDT-USDC que compres serán enviados directamente hacia allí sin pedirte una nueva direccion en cada compra. Para revisar tu direccion escribe dentro del [bot](https://t.me/DigitalP2PBot) el comando `/settings`, si quieres cambiar la direccion escribe dentro del [bot](https://t.me/DigitalP2PBot) el comando  `/setwalletaddress`.
