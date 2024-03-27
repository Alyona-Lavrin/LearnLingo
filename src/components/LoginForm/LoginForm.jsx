import { useFormik } from "formik";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import * as Yup from 'yup';
import {
  ErrMsg,
  EyeBtn,
  Form,
  Input,
  InputWrap,
  RegisterBtn,
  Text,
  Title,
} from '../RegisterForm/RegistrationForm.styled'
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";


export const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate()

  const handleTogglePassword = () => {
    setShowPassword((prev) => !prev);
  };
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object().shape({
      email: Yup.string()
        .email("Email not valid!")
        .required("This field is required!"),
      password: Yup.string()
        .required("This field is required!")
        .min(6, "Too short!"),
    }),
    onSubmit: ({email, password}, action) => {
      const auth = getAuth();
      signInWithEmailAndPassword(auth, email, password)
        .then(() => {
          toast.success('Autorization successesful!')
          navigate('/teachers')
        })
        .catch((error) => {
          toast.error(error.message)
          console.log(error.message)
        });
      action.resetForm();
      
    },
  });
  return (
    <Form onSubmit={formik.handleSubmit}>
      <div>
        <Title>Login</Title>
        <Text>
          Welcome back! Please enter your credentials to access your account and
          continue your search for an teacher.
        </Text>
      </div>
      <InputWrap>
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

      <RegisterBtn type="submit" >Log in</RegisterBtn>
    </Form>
  );
};
