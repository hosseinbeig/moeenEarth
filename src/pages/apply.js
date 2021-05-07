import React, { useState, useContext } from 'react';
import { useHistory, Link } from 'react-router-dom';
import Typist from 'react-typist';
import { Formik, Form } from 'formik';
import * as yup from 'yup';
import styles from './style/apply.module.css';
import CustomTextField from '../Components/ui/inputs/textInput';
import CustomRadioField from '../Components/ui/inputs/radio';
import moment from 'moment';
import { Alert } from 'react-bootstrap';
import Modal from '@material-ui/core/Modal';
import {
  Button,
  FormControl,
  FormLabel,
  RadioGroup,
  MenuItem,
  Checkbox,
  FormControlLabel,
} from '@material-ui/core';
import PhoneNumberInput from '../Components/ui/inputs/numberInput';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import CustomDatePicker from '../Components/ui/inputs/datePicker';
import CustomSelectField from '../Components/ui/inputs/select';

import {
  counties,
  nationalities,
  eduLevel,
  interestedStudyLevel,
} from '../Assets/data/data-list';
import CircularStatic from '../Components/ui/loader/loader';
import { LangContext } from '../Context/MainContext';
import MetaDecorator from '../Utils/MetaDecorator';

const validationSchema = yup.object({
  fullName: yup
    .string()
    .trim()
    .required('Full Name is a required field')
    .min(2, 'Full Name must be at least 2 characters')
    .max(100, 'Full Name can not be more than 100 characters'),

  contactNumber: yup
    .string()
    .trim()
    .required('Phone Number is a required field'),

  dateOfBirth: yup
    .date()
    .typeError(
      'Please put the correct format MM-DD-YYYY or use the date picker on the right side ===>'
    )
    .required('Date Of Birth is a required field'),

  email: yup
    .string()
    .trim()
    .required('Email is a required field')
    .email('Please enter a valid email'),

  nationality: yup.string().trim().required('Nationality is a required field'),

  countryOfResidence: yup
    .string()
    .trim()
    .required('Country Of Residence is a required field'),

  currentEducationLevel: yup
    .string()
    .trim()
    .required('Current Education Level is a required field'),

  interestedStudyLevel: yup
    .string()
    .trim()
    .required('Interested Study Level is a required field'),

  fieldOfStudy: yup
    .string()
    .trim()
    .required('Field Of Study is a required field')
    .min(2, 'Field Of Study must be at least 2 characters')
    .max(300, 'Field Of Study can not be more than 300 characters'),

  cGPAAchieved: yup
    .string()
    .trim()
    .required('CGPA Achieved is a required field')
    .max(100, 'CGPA Achieved can not be more than 100 characters'),

  firstProgrammeChoice: yup
    .string()
    .trim()
    .required('First Programme Choice is a required field')
    .min(2, 'Programme Choice must be at least 2 characters')
    .max(300, 'Programme Choice can not be more than 300 characters'),

  secondProgrammeChoice: yup
    .string()
    .trim()
    .required('Second Programme Choice is a required field')
    .min(2, 'Second Programme Choice must be at least 2 characters')
    .max(300, 'Second Programme Choice can not be more than 300 characters'),

  jobExperience: yup
    .string()
    .trim()
    .required('Job Experience is a required field')
    .min(2, 'Job Experience must be at least 2 characters')
    .max(1000, 'Job Experience can not be more than 1000 characters'),

  description: yup
    .string()
    .trim()
    .min(2, 'Description must be at least 2 characters')
    .max(1000, 'Description can not be more than 1000 characters'),
});

const encodeApply = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
};

const Apply = () => {
  const [selectedLang, , englishName, farsiName] = useContext(LangContext);
  const [firstModalOpen, setFirstModal] = useState(true);
  const [firstModalConfirmed, setFirstModalConfirmed] = useState(false);
  const [submitModalOpen, setSubmitModal] = useState(false);
  const [dateValue, setDateValue] = useState(null);
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
          title: `${farsiName} - همکاری با ما`,
          description: `${farsiName} - همکاری با ما`,
          lang: 'fa',
          dir: 'rtl',
        }
      : {
          title: `${englishName} - Contribute`,
          description: `${englishName} - Contribute with us`,
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
        open={firstModalOpen}
        className={styles.modal}
      >
        <Alert
          variant={firstModalConfirmed ? 'success' : 'danger'}
          className={styles.alertModal}
        >
          <div className={styles.firstModalDiv}>
            <h3>Thank you for contacting Study Diamond Team.</h3>
            <h5>
              We're here to guide you every steps of the way to enable you study
              and immigrate to Canada if you meet our necessary requirements.
              <br /> First thing we would like to mention here is that studying
              in Canada requires your ORIGINAL results from your previous school
              and secondly, you or your sponsor will have to provide an ORIGINAL
              4 months bank account statement with a minimum balance of $25,000
              CAD (7,500,000 to 8,000,000 Naira) to prove that you're
              financially capable.
              <br />
              We will give you more details in our next reply but first you need
              to confirm that you're financially eligible to avoid wasting each
              others time. Thank you and please feel free to fill out the
              application form if you think you're financially eligible.
            </h5>
            <FormControlLabel
              value="confirmed"
              control={<Checkbox />}
              label="To Continue Read & Confirm Please"
              onClick={() => setFirstModalConfirmed(!firstModalConfirmed)}
            />
            <div>
              <Button
                disabled={!firstModalConfirmed}
                type="button"
                variant="contained"
                className={styles.button}
                onClick={() => setFirstModal(false)}
              >
                Continue
              </Button>
            </div>
            <Link to="/" className={styles.backButton}>
              Back To Home
            </Link>
          </div>
        </Alert>
      </Modal>
      <Typist cursor={{ show: false }} className={styles.title}>
        <h1 className={styles.centeredText}>Apply Here</h1>
      </Typist>
      <div className={styles.innerDiv}>
        <Formik
          validateOnChange
          initialValues={{
            fullName: '',
            maritalStatus: 'single',
            contactNumber: '',
            dateOfBirth: '',
            email: '',
            nationality: '',
            countryOfResidence: '',
            currentEducationLevel: '',
            fieldOfStudy: '',
            cGPAAchieved: '',
            jobExperience: '',
            description: '',
            englishCertification: 'no',
            interestedStudyLevel: '',
            firstProgrammeChoice: '',
            secondProgrammeChoice: '',
            previousVisaRefusal: 'no',
          }}
          onSubmit={(data, { setSubmitting }) => {
            setSubmitting(true);
            fetch('/', {
              method: 'POST',
              headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
              body: encodeApply({
                'form-name': 'apply',
                ...data,
              }),
            })
              .then(() => {
                setSubmitting(false);
                setSubmitModal(true);
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
        >
          {({ isSubmitting, setFieldValue, isValid, dirty }) => (
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <Form
                name="apply"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
              >
                {/* Full Name */}
                <p style={{ opacity: '0' }}>
                  <label>
                    Don’t fill this out if you're human:
                    <input name="bot-field" />
                  </label>
                </p>
                <div className={styles.formWrapper}>
                  <div className={styles.inputWrapper}>
                    <CustomTextField
                      name="fullName"
                      type="input"
                      placeholder="Enter Your Full Name"
                      label="Full Name"
                      required
                    />
                  </div>

                  {/* Phone Number */}

                  <div className={styles.inputWrapper}>
                    <PhoneNumberInput
                      name="contactNumber"
                      onInputChange={(e) => {
                        setFieldValue('contactNumber', e);
                      }}
                    />
                  </div>

                  {/* Email */}

                  <div className={styles.inputWrapper}>
                    <CustomTextField
                      name="email"
                      type="input"
                      label="Email"
                      placeholder="Enter Your Email"
                      required
                    />
                  </div>

                  {/* Field of Study */}

                  <div className={styles.inputWrapper}>
                    <CustomTextField
                      name="fieldOfStudy"
                      type="input"
                      label="Field of Study"
                      placeholder="Enter Your Field of Study"
                      required
                    />
                  </div>

                  {/* CGPA Achieved */}

                  <div className={styles.inputWrapper}>
                    <CustomTextField
                      name="cGPAAchieved"
                      type="input"
                      label="CGPA Achieved"
                      placeholder="Enter Your CGPA Achieved"
                      required
                    />
                  </div>

                  {/* First Program */}

                  <div className={styles.inputWrapper}>
                    <CustomTextField
                      name="firstProgrammeChoice"
                      type="input"
                      label="First Programme Choice"
                      placeholder="Enter Your First Programme Choice"
                      required
                    />
                  </div>

                  {/* Second Program */}

                  <div className={styles.inputWrapper}>
                    <CustomTextField
                      name="secondProgrammeChoice"
                      type="input"
                      label="Second Programme Choice"
                      placeholder="Enter Your Second Programme Choice"
                      required
                    />
                  </div>

                  {/* Date of birth< */}

                  <div className={styles.inputWrapper}>
                    <CustomDatePicker
                      className={styles.datePicker}
                      name="dateOfBirth"
                      label="Date of birth"
                      handleDateChange={(date) => {
                        setFieldValue(
                          'dateOfBirth',
                          moment(date).format('MM-DD-YYYY')
                        );
                        setDateValue(moment(date).format('MM-DD-YYYY'));
                      }}
                      selectedDate={dateValue}
                    />
                  </div>

                  {/* Nationality */}

                  <div className={styles.inputWrapper}>
                    <CustomSelectField label="Nationality" name="nationality">
                      {nationalities.map((nationality, index) => {
                        return (
                          <MenuItem key={index} value={nationality} id={index}>
                            {nationality}
                          </MenuItem>
                        );
                      })}
                    </CustomSelectField>
                  </div>

                  {/* Country Of Residence */}

                  <div className={styles.inputWrapper}>
                    <CustomSelectField
                      label="Country Of Residence"
                      name="countryOfResidence"
                    >
                      {counties.map((country, index) => {
                        return (
                          <MenuItem key={index} value={country.name} id={index}>
                            {country.name}
                          </MenuItem>
                        );
                      })}
                    </CustomSelectField>
                  </div>

                  {/* Current Educational Level */}

                  <div className={styles.inputWrapper}>
                    <CustomSelectField
                      label="Current Educational Level"
                      name="currentEducationLevel"
                    >
                      {eduLevel.map((edu, index) => {
                        return (
                          <MenuItem key={index} value={edu.value} id={index}>
                            {edu.label}
                          </MenuItem>
                        );
                      })}
                    </CustomSelectField>
                  </div>

                  {/* Interested Study Level */}

                  <div className={styles.inputWrapper}>
                    <CustomSelectField
                      label="Interested Study Level"
                      name="interestedStudyLevel"
                    >
                      {interestedStudyLevel.map((study, index) => {
                        return (
                          <MenuItem key={index} value={study.value} id={index}>
                            {study.label}
                          </MenuItem>
                        );
                      })}
                    </CustomSelectField>
                  </div>

                  {/* Marital Status */}

                  <div className={styles.inputWrapper}>
                    <FormControl required>
                      <FormLabel>Marital Status</FormLabel>
                      <RadioGroup row>
                        <CustomRadioField
                          name="maritalStatus"
                          value="married"
                          label="Married"
                          type="radio"
                        />
                        <CustomRadioField
                          name="maritalStatus"
                          value="single"
                          label="Single"
                          type="radio"
                        />
                      </RadioGroup>
                    </FormControl>
                  </div>

                  {/* English Certification */}

                  <div className={styles.inputWrapper}>
                    <FormControl required>
                      <FormLabel>English Certification</FormLabel>
                      <RadioGroup row>
                        <CustomRadioField
                          name="englishCertification"
                          value="yes"
                          label="Yes"
                          type="radio"
                        />
                        <CustomRadioField
                          name="englishCertification"
                          value="no"
                          label="No"
                          type="radio"
                        />
                      </RadioGroup>
                    </FormControl>
                  </div>

                  {/* Previous Visa Refusal */}

                  <div className={styles.inputWrapper}>
                    <FormControl required>
                      <FormLabel>Previous Visa Refusal</FormLabel>
                      <RadioGroup row>
                        <CustomRadioField
                          name="previousVisaRefusal"
                          value="yes"
                          label="Yes"
                          type="radio"
                        />
                        <CustomRadioField
                          name="previousVisaRefusal"
                          value="no"
                          label="No"
                          type="radio"
                        />
                      </RadioGroup>
                    </FormControl>
                  </div>

                  <div className={styles.inputWrapper}>
                    <CustomTextField
                      name="jobExperience"
                      type="input"
                      label="Job Experience (Duration and Field)"
                      variant="standard"
                      placeholder="Enter Your Job Experience"
                      multiline
                      required
                    />
                  </div>
                  <div className={styles.inputWrapper}>
                    <CustomTextField
                      name="description"
                      type="input"
                      label="Description"
                      variant="standard"
                      placeholder="Description"
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
            </MuiPickersUtilsProvider>
          )}
        </Formik>
        <Modal
          disablePortal
          disableEnforceFocus
          disableAutoFocus
          open={submitModalOpen}
          className={styles.modal}
          onBackdropClick={handleRedirectClick}
        >
          <div>
            <Alert variant="success" className={styles.alertModal}>
              {loading ? (
                <CircularStatic />
              ) : (
                <h5>
                  Thank you <em> {name} </em>
                  for information, now our team will start assessing your case
                  to find the best option for you. <br /> Please be informed
                  that it can take up to two business days and to inform you
                  about final decision
                  <br /> we will contact you through WhatsApp.
                </h5>
              )}
            </Alert>
          </div>
        </Modal>

        <div className={styles.rightDiv}>
          <h1>Thank you for contacting Study Diamond Team.</h1>
          <h4>
            We're here to guide you every steps of the way to enable you study
            and immigrate to Canada if you meet our necessary requirements.
            <br /> <br /> First thing we would like to mention here is that
            studying in Canada requires your ORIGINAL results from your previous
            school and secondly, you or your sponsor will have to provide an
            ORIGINAL 4 months bank account statement with a minimum balance of
            $25,000 CAD (7,500,000 to 8,000,000 Naira) to prove that you're
            financially capable.
            <br /> <br />
            We will give you more details in our next reply but first you need
            to confirm that you're financially eligible to avoid wasting each
            others time. Thank you and please feel free to fill out the
            application form if you think you're financially eligible.
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Apply;
