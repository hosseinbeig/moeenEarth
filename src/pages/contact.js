import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Typist from 'react-typist';
import styles from './style/contact.module.css';
import CustomTextField from '../Components/ui/inputs/textInput';
import images from '../Assets/images/index';
import { Alert } from 'react-bootstrap';
import Modal from '@material-ui/core/Modal';
import { Formik, Form } from 'formik';
import { Button } from '@material-ui/core';
import * as yup from 'yup';
import PhoneNumberInput from '../Components/ui/inputs/numberInput';
import CircularStatic from '../Components/ui/loader/loader';
import { LangContext } from '../Context/MainContext';
import MetaDecorator from '../Utils/MetaDecorator';

const validationSchema = yup.object({
  fullName: yup
    .string()
    .required('Full Name is a required field')
    .min(2, 'Full Name must be at least 2 characters')
    .max(100, 'Full Name can not be more than 100 characters'),
  email: yup
    .string()
    .required('Email is a required field')
    .email('Please enter a valid email'),
  contactNumber: yup.string().required('Phone Number is a required field'),

  message: yup.string().max(1000),
});
const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
};
const Contacts = () => {
  const [selectedLang, , englishName, farsiName] = useContext(LangContext);
  const [modalOpen, setModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState('');

  setTimeout(() => {
    setLoading(false);
  }, 2300);

  const history = useHistory();
  const handleRedirectClick = () => {
    history.push('/');
  };
  const dataAlignment = selectedLang === 'far' ? 'right' : 'left';

  const metaData =
    selectedLang === 'far'
      ? {
          title: `${farsiName} - ارتباط با ما`,
          description: `${farsiName} - ارتباط با ما`,
          lang: 'fa',
          dir: 'rtl',
        }
      : {
          title: `${englishName} - Contact Us`,
          description: `${englishName} - Contact Us`,
          lang: 'en',
          dir: 'ltr',
        };

  return (
    <div className={styles.mainDiv} style={{ textAlign: dataAlignment }}>
      <MetaDecorator
        title={metaData.title}
        description={metaData.description}
        lang={metaData.lang}
        dir={metaData.dir}
      />
      <Modal
        disablePortal
        disableEnforceFocus
        disableAutoFocus
        open={modalOpen}
        className={styles.modal}
        onBackdropClick={handleRedirectClick}
      >
        <div>
          <Alert variant="success" className={styles.alertModal}>
            {loading ? (
              <CircularStatic />
            ) : (
              <h5>
                Thank you <em>{name}</em> for getting in touch!
                <br /> We appreciate you contacting us.
                <br /> One of our colleagues will get back in touch with you
                soon!
                <br /> Have a great day!
              </h5>
            )}
          </Alert>
        </div>
      </Modal>
      <Typist cursor={{ show: false }} className={styles.title}>
        <h1 className={styles.centeredText}>Contact Us</h1>
      </Typist>
      <div className={styles.innerDiv}>
        <div className={styles.leftDiv}>
          <h1>Drop us a line</h1>
          <h4>
            WHAT CAN WE DO FOR YOU?
            <br /> Get in touch now and let us help you lay down the foundation
            for a successful future
          </h4>
          <div className={styles.imageWrapper}>
            <img src={images.common.contact} alt="contact us" />
          </div>
        </div>
        <Formik
          validateOnChange={true}
          initialValues={{
            fullName: '',
            email: '',
            contactNumber: '',
            message: '',
          }}
          onSubmit={(data, { setSubmitting }) => {
            setSubmitting(true);
            fetch('/', {
              method: 'POST',
              headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
              body: encode({
                'form-name': 'contact',
                ...data,
              }),
            })
              .then(() => {
                setSubmitting(false);
                setModalOpen(true);
                setLoading(true);
                setName(data.fullName);
              })
              .catch((error) => {
                console.log(error);
                alert('Error: Please Try Again!');
                setSubmitting(false);
              });
          }}
          validationSchema={validationSchema}
          handleBlur
        >
          {({ setFieldValue, isValid, isSubmitting, dirty }) => (
            <Form
              name="contact"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
            >
              <div className={styles.formWrapper}>
                <p style={{ opacity: '0' }}>
                  <label>
                    Don’t fill this out if you're human:
                    <input name="bot-field" />
                  </label>
                </p>
                <div className={styles.inputWrapper}>
                  <CustomTextField
                    name="fullName"
                    type="input"
                    placeholder="Enter Your Full Name"
                    label="Full Name"
                    required
                  />
                </div>
                <div className={styles.inputWrapper}>
                  <CustomTextField
                    name="email"
                    type="input"
                    label="Email"
                    placeholder="Enter Your Email"
                    required
                  />
                </div>
                <div className={styles.inputWrapper}>
                  <PhoneNumberInput
                    name="contactNumber"
                    onInputChange={(e) => {
                      setFieldValue('contactNumber', e);
                    }}
                  />
                </div>
                <div className={styles.inputWrapper}>
                  <CustomTextField
                    name="message"
                    type="input"
                    label="Message"
                    variant="standard"
                    placeholder="Enter Your Message"
                    multiline
                  />
                </div>
                <div className={styles.inputWrapper}>
                  <Button
                    disabled={isSubmitting || !(isValid && dirty)}
                    type="submit"
                    variant="contained"
                    className={styles.button}
                  >
                    Submit
                  </Button>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Contacts;
