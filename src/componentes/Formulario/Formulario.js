import CampoTexto from '../CampoTexto';
import './Formulario.css';

export const Formulario = () => {

    return (
        <section className="formulario">
            <form>
                <h1>Preencha os dados para criar o card do colaborador.</h1>
                <CampoTexto label="Nome" placeholder="Digite o seu nome"/>
                <CampoTexto label="Cargo" placeholder="Digite o seu cargo"/>
                <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem"/>
                <CampoTexto label="Time" />
                <button className="criar-card" type="submit">Criar Card</button>
            </form>
        </section>
    );
}