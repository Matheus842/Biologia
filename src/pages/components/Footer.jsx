import styles from './Footer.module.scss'

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <hr />
            <p>Referencias bibliográficas:</p>
            <hr />
            <ul>
                <li><a href="https://www.saude.mg.gov.br/sus" target='_blank'>SUS</a></li>
                <li><a href="https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/d/depressao#:~:text=É%20um%20problema%20médico%20grave,torno%20de%2015%2C5%25." target='_blank'>Depressão</a></li>
                <li><a href="https://bvsms.saude.gov.br/02-6-variola-dos-macacos/" target='_blank'>Varíola dos Macacos</a></li>
                </ul>
        </footer>
    )
}