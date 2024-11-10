import Botao from '../Botao';
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import './Formulario.css';

export const Formulario = () => {

    const times = [
        'Front-End',
        'Programação',
        'DevOps',
        'Data Science',
        'UX e Design',
        'Mobile',
        'Inovação e Gestão'
    ]

    const aoSalvar = (evento) => {
        evento.preventDefault()
        console.log('Salvando dados...')  
    }

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h1>Preencha os dados para criar o card do colaborador.</h1>
                <CampoTexto obrigatorio={true} label="Nome" placeholder="Digite o seu nome"/>
                <CampoTexto obrigatorio={true} label="Cargo" placeholder="Digite o seu cargo"/>
                <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem"/>
                <ListaSuspensa obrigatorio={true} label="Times" itens={times} />
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    );
}