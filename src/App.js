import { useFormik } from "formik";
import * as yup from "yup";
import "./App.css";

const onSubmit = async (values, actions) => {
  console.log("form submitted");
  await new Promise((resolve) => setTimeout(resolve, 0));
  actions.resetForm();
};
const Validation = yup.object().shape({
  firstName: yup.string().required("enter your firstName"),
  lastName: yup.string().required("Enter your lastName"),
  age: yup.number().positive().required("enter your age"),
  password: yup
    .string()
    .min(6, "Too Short!")
    .max(10, "Too Long!")
    .required("required"),
});

function App() {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      age: "",
      password: "",
    },
    validationSchema: Validation,
    onSubmit,
  });

  console.log(formik.errors);
  console.log(formik.values);

  return (
    <div className="container flex justify-center p-3 w-[350px] mt-10 mx-auto my-auto rounded-md">
      <form className="flex flex-col h-auto  " onSubmit={formik.handleSubmit}>
        <h2 className="mt-10 my-2 font-bold text-gray-700 text-[28px]">
          Registration
        </h2>
        <label className="">First Name</label>
        <input
          name="firstName"
          type="text"
          id="firstName"
          placeholder="FirstName"
          value={formik.values.firstName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className={
            formik.errors.firstName && formik.touched.firstName
              ? "input-error"
              : ""
          }
        />
        {formik.errors.firstName && formik.touched.firstName && (
          <p className="errors">{formik.errors.firstName}</p>
        )}
        <br />
        <label className="">Last Name</label>
        <input
          name="lastName"
          type="text"
          id="lastName"
          placeholder="lastName"
          value={formik.values.lastName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className={
            formik.errors.lastName && formik.touched.lastName
              ? "input-error"
              : ""
          }
        />
        {formik.errors.lastName && formik.touched.lastName && (
          <p className="errors">{formik.errors.lastName}</p>
        )}
        <br />
        <label className="">Age</label>
        <input
          name="age"
          type="number"
          id="age"
          placeholder="age"
          value={formik.values.age}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className={
            formik.errors.age && formik.touched.age ? "input-error" : ""
          }
        />
        {formik.errors.age && formik.touched.age && (
          <p className="errors">{formik.errors.age}</p>
        )}
        <br />
        <label className="">Password</label>
        <input
          name="password"
          type="password"
          id="password"
          placeholder="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className={
            formik.errors.password && formik.touched.password
              ? "input-error"
              : ""
          }
        />
        {formik.errors.password && formik.touched.password && (
          <p className="errors">{formik.errors.password}</p>
        )}
        <br />
        <button className="button" type="submit">
          submit
        </button>
      </form>
    </div>
  );
}

export default App;
