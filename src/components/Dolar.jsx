import React from 'react'
import { useState, useEffect } from 'react'
function Dolar() {

    const [dolar, setDolar] = useState(0);
    useEffect(() => {

        fetch("https://criptoya.com/api/dolar")
            .then(response => response.json()) //.then es para capturar busco los datos con response y lo transformo a .json y cuando termina la captura lo llamo con
            .then((datos) => {
                const cotizacion =
                    <div>
                        <p>{datos.mayorista.price}</p>
                        <p>{datos.oficial.price}</p>
                        <p>{datos.blue.price}</p>
                    </div>
                setDolar(cotizacion)
            }) //.then datos o lo que yo quiera para capturar esos datos dentro del json

    }, [])
    return (
        <div>
            {dolar}
        </div>
    )
}

export default Dolar