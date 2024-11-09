import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import './Formulario.css';

export const Formulario = () => {

    const times = [
        'Programação',
        'Front-End',
        'DevOps',
        'Data Science',
        'UX e Design',
        'Mobile',
        'Inovação e Gestão'
    ]

    return (
        <section className="formulario">
            <form>
                <h1>Preencha os dados para criar o card do colaborador.</h1>
                <CampoTexto label="Nome" placeholder="Digite o seu nome"/>
                <CampoTexto label="Cargo" placeholder="Digite o seu cargo"/>
                <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem"/>
                <ListaSuspensa label="Times" itens={times} />
                <button className="criar-card" type="submit">Criar Card</button>
            </form>
        </section>
    );
}