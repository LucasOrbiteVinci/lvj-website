import emailjs from '@emailjs/browser';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

//css
import styles from './Contact.module.css';

export const Contact = () => {
  const schema = yup.object().shape({
    nome: yup.string().required('Campo Nome é obrigatório.'),
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

  const sendEmail = (data) => {
    emailjs
      .sendForm(
        'gmailMessage',
        'template_ytdwa76',
        JSON.stringify(data),
        '8yfmdKJwS18LGtGpb',
      )
      .then(
        (result) => {
          alert(result.text);
          reset();
        },
        (error) => {
          alert(error.text);
          reset();
        },
      );
  };

  return (
    <div className={styles.body}>
      <form onSubmit={handleSubmit(sendEmail)}>
        <div className={styles.form_group}>
          <label for="nome">Nome:</label>
          <input {...register('nome')} type="text" id="nome" />
          <p>{errors.nome?.message}</p>
        </div>
        <div className={styles.form_group}>
          <label for="email">Email:</label>
          <input {...register('email')} type="email" id="email" />
          <p>{errors.email?.message}</p>
        </div>
        <div className={styles.form_group}>
          <label for="mensagem">Mensagem:</label>
          <textarea {...register('message')} id="mensagem" />
          <p>{errors.message?.message}</p>
        </div>
        <div className={styles.form_group}>
          <input type="submit" value="Enviar" />
        </div>
      </form>
    </div>
  );
};

export default Contact;
