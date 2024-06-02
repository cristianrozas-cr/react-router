

function Contacto(){
    return(
        <div className="container-form">
            <form action="" className="form">
                <label htmlFor="">Contáctanos</label>
                <input type="text" placeholder="Nombre" />
                <input type="email" placeholder="Correo" />
                <input type="number" placeholder="Teléfono"/>
                <textarea type="text" placeholder="Tú mensaje" />
                <div className="container-button">
                    <button>Enviar</button>
                </div>
            </form>

        </div>
    )
}

export default Contacto