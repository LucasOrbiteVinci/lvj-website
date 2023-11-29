import emailjs from '@emailjs/browser';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import toast, { Toaster } from 'react-hot-toast';

//css
import styles from './Contact.module.css';
import { useRef } from 'react';

export const Contact = () => {
  const schema = yup.object().shape({
    name: yup.string().required('Campo Nome é obrigatório.'),
    email: yup
      .string()
      .email('Este email não é valido')
      .required('Campo email é obrigatório.'),
    message: yup.string().required('Campo Menssagem é obrigatório.'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const form = useRef();

  const notifySucess = () => toast.success('Mensagem enviada com sucesso!');
  const notifyError = () =>
    toast.error('Erro no envio da mensagem. Tente novamente!');

  const sendEmail = (data, e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'gmailMessage',
        'template_ytdwa76',
        form.current,
        '8yfmdKJwS18LGtGpb',
      )
      .then(
        () => {
          notifySucess();
          reset();
        },
        () => {
          notifyError();
          reset();
        },
      );
  };

  return (
    <div className={styles.body}>
      <form onSubmit={handleSubmit(sendEmail)} ref={form}>
        <div className={styles.form_group}>
          <label for="name">Nome:</label>
          <input {...register('name')} type="text" id="name" />
          <p>{errors.nome?.message}</p>
        </div>
        <div className={styles.form_group}>
          <label for="email">Email:</label>
          <input {...register('email')} type="email" id="email" />
          <p>{errors.email?.message}</p>
        </div>
        <div className={styles.form_group}>
          <label for="message">Mensagem:</label>
          <textarea {...register('message')} id="message" />
          <p>{errors.message?.message}</p>
        </div>
        <div className={styles.form_group}>
          <input type="submit" value="Enviar" />
        </div>
      </form>
      <Toaster />
    </div>
  );
};

export default Contact;
