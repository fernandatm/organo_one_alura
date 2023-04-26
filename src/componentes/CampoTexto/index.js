import './CampoTexto.css'

//  estilo diferente de criar a função, é bastante utilizada em empresas
const CampoTexto = (props) => {

    const placeholderModificada = `${props.placeholder}...`

    // const aoDigitado = (evento) => {
    //     props.aoAlterado(evento.target.value)
    // }

    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input value={props.valor} onChange={evento => props.aoAlterado(evento.target.value)} required={props.obrigatorio} placeholder={placeholderModificada}></input>
        </div>
    )
}

export default CampoTexto