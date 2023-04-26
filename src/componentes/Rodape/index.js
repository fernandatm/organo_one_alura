import './Rodape.css'

const Rodape = () => {
    return (
        <footer className='footer'>
            <section>
                <ul>
                    <li>
                        <a href='facebook.com' target='_blank'>
                            <img src='/imagens/facebook.png' alt=''></img>
                        </a>
                    </li>
                    <li>
                        <a href='facebook.com' target='_blank'>
                            <img src='/imagens/twitter.png' alt=''></img>
                        </a>
                    </li>
                    <li>
                        <a href='facebook.com' target='_blank'>
                            <img src='/imagens/instagram.png' alt=''></img>
                        </a>
                    </li>
                </ul>
            </section>
            <section>
                <img src='/imagens/Logo.png' alt=''></img>
            </section>
            <section>
                <p>Desenvolvido por Alura.</p>
            </section>
        </footer>
    )
}

export default Rodape