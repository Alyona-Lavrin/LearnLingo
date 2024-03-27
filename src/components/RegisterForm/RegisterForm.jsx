import { useFormik } from "formik";
import * as Yup from 'yup';
import { ErrMsg, EyeBtn, Form, Input, InputWrap, RegisterBtn, Text, Title } from "./RegistrationForm.styled";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate()

  const handleTogglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object().shape({
      name: Yup.string()
        .required('This field is required!')
        .min(3, 'Too short!'),
      email: Yup.string()
        .email('Email not valid!')
        .required('This field is required!'),
      password: Yup.string()
        .required('This field is required!')
      .min(6, 'Too short!'),
    }),
    onSubmit: ({ email, password}, action) => {
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
          toast.success('Autorization successful!')
          navigate ('/teachers')
        })
        .catch((error) => {
          toast.error('Email not valid!')
          console.log(error.message)
        })
      action.resetForm()
    },
  });
  return (
    <Form onSubmit={formik.handleSubmit}>
      <div>
        <Title>Registration</Title>
        <Text>
          Thank you for your interest in our platform! In order to register, we
          need some information. Please provide us with the following
          information
        </Text>
      </div>

      <InputWrap>
        <Input
          id="name"
          name="name"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.name}
          placeholder="Name"
        />
        {formik.touched.name && formik.errors.name ? (
          <ErrMsg>{formik.errors.name}</ErrMsg>
        ) : null}

        <Input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
          placeholder="Email"
        />
        {formik.touched.email && formik.errors.email ? (
          <ErrMsg>{formik.errors.email}</ErrMsg>
        ) : null}

        <Input
          id="password"
          name="password"
          type={showPassword ? "text" : "password"}
          onChange={formik.handleChange}
          value={formik.values.password}
          placeholder="Password"
        />
        {formik.touched.password && formik.errors.password ? (
          <ErrMsg>{formik.errors.password}</ErrMsg>
        ) : null}
        <EyeBtn type="button" onClick={handleTogglePassword}>
          {showPassword ? (
            <Eye color="#121417" size={18} />
          ) : (
            <EyeOff color="#121417" size={18} />
          )}
        </EyeBtn>
      </InputWrap>

      <RegisterBtn type="submit">Sign up</RegisterBtn>
    </Form>
  );
};
