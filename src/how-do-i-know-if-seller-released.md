# ¿Cómo sé si el vendedor realmente liberó los USDT-USDC?

Si @DigitalP2PBot te dice que el vendedor liberó, es porque realmente es así, pero si quieres verificarlo puedes hacerlo de la siguiente manera:

Escríbele al bot `/listorders` y si el bot aún está en proceso de pagar tu USDT-USDC el status que verás será `RELEASE`, si el bot ya pagó la factura la orden no aparecerá en la lista.

Cuando una orden tiene status `RELEASE`, el vendedor ya no tiene ninguna responsabilidad debido a que ha liberado los USDT-USDC, si tienes problemas para recibir ve a la sección [El vendedor liberó pero no me llegan los USDT-USDC a mi wallet](./i-cant-receive.md).
