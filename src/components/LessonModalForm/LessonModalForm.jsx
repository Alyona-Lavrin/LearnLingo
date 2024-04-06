import PropTypes from 'prop-types';
import { useFormik } from "formik";
import { BookBtn, Input, InputWrap, RadioWrap } from "./LessonModalForm.styled";
import * as Yup from "yup";
import { ErrMsg } from "../RegisterForm/RegistrationForm.styled";
import toast from "react-hot-toast";

export const LessonModalForm = ({ modalStateSwapper }) => {
  const formik = useFormik({
    initialValues: {
      fullName: "",
      phone: undefined,
      email: "",
      picked: "",
    },
    validationSchema: Yup.object().shape({
      email: Yup.string()
        .email("Email not valid!")
        .required("This field is required!"),
      fullName: Yup.string()
        .required("This field is required!")
        .min(5, "Too short!"),
      phone: Yup.number()
        .required("This field is required!")
        .min(4, "Too short!"),
      picked: Yup.string().required("Choose one of the options"),
    }),
    onSubmit: (values, action) => {
      toast.success("Congratulation, you have signed up for a trial lesson!");
      action.resetForm();
      modalStateSwapper();
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <div id="my-radio-group"></div>
      <RadioWrap role="group" aria-labelledby="my-radio-group">
        <input
          id="radio1"
          type="radio"
          name="picked"
          value="Career and business"
          checked={formik.values.picked === "Career and business"}
          onChange={formik.handleChange}
        />
        <label htmlFor="radio1">Career and business</label>

        <input
          id="radio2"
          type="radio"
          name="picked"
          value="Lesson for kids"
          checked={formik.values.picked === "Lesson for kids"}
          onChange={formik.handleChange}
        />
        <label htmlFor="radio2">Lesson for kids</label>

        <input
          id="radio3"
          type="radio"
          name="picked"
          value="Living abroad"
          checked={formik.values.picked === "Living abroad"}
          onChange={formik.handleChange}
        />
        <label htmlFor="radio3">Living abroad</label>

        <input
          id="radio4"
          type="radio"
          name="picked"
          value="Exams and coursework"
          checked={formik.values.picked === "Exams and coursework"}
          onChange={formik.handleChange}
        />
        <label htmlFor="radio4">Exams and coursework</label>

        <input
          id="radio5"
          type="radio"
          name="picked"
          value="Culture, travel or hobby"
          checked={formik.values.picked === "Culture, travel or hobby"}
          onChange={formik.handleChange}
        />
        <label htmlFor="radio5">Culture, travel or hobby</label>
        {formik.touched.picked && formik.errors.picked ? (
          <ErrMsg>{formik.errors.picked}</ErrMsg>
        ) : null}
      </RadioWrap>
      <InputWrap>
        <Input
          id="fullName"
          name="fullName"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.fullName}
          placeholder="Full Name"
        />
        {formik.touched.fullName && formik.errors.fullName ? (
          <ErrMsg>{formik.errors.fullName}</ErrMsg>
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
          id="phone"
          name="phone"
          type="number"
          onChange={formik.handleChange}
          value={formik.values.phone}
          placeholder="Phone number"
        />
        {formik.touched.phone && formik.errors.phone ? (
          <ErrMsg>{formik.errors.phone}</ErrMsg>
        ) : null}
      </InputWrap>
      <BookBtn type="submit">Book</BookBtn>
    </form>
  );
};

LessonModalForm.propTypes = {
  modalStateSwapper: PropTypes.func,
};
