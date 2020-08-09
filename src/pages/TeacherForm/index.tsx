import React from 'react';

import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';

import warningIcon from '../../assets/images/icons/warning.svg';

import './styles.css';

import config from '../../config';

function TeacherForm() {
  return (
    <div id="page-teacher-form" className="container">
      <PageHeader
        title="Que incrível que você quer dar aulas."
        description="O primeiro passo, é preencher esse formulário de inscrição."
      />

      <main>
        <form>
          <fieldset>
            <legend>Seus dados</legend>
            <Input name="name" label="Nome completo" />
            <Input name="avatar" label="Avatar" />
            <Input name="whatsapp" label="WhatsApp" />
            <Textarea name="bio" label="Biografia" />
          </fieldset>

          <fieldset>
            <legend>Sobre a aula</legend>
            <Select name="subject" label="Matéria" options={config.materias} />
            <Input name="cost" label="Custo da sua hora por aula" />
          </fieldset>

          <fieldset>
            <legend>
              Horários disponíveis
              <button type="button">
                + Novo horário
              </button>
            </legend>
            <div className="schedule-item">
              <Select name="week_day" label="Dia da semana" options={config.diasDaSemanda} />
              <Input name="from" label="Das" type="time" />
              <Input name="to" label="Até" type="time" />
            </div>
          </fieldset>

          <footer>
            <p>
              <img src={warningIcon} alt="Aviso importante" />
              Importante!
              <br />
              Preencha todos os dados
            </p>
            <button type="button">
              Salvar cadastro
            </button>
          </footer>
        </form>
      </main>
    </div>
  );
}

export default TeacherForm;
