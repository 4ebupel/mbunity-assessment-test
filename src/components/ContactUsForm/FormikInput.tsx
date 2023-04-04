import { FC } from "react";
import "./ContactUsForm.scss";
import { Field, FieldProps } from "formik";

type Props = {
  name: string;
  label?: string;
  // rest param in case you want add some vinilla properties
  rest?: React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >;
};

export const FormikInput: FC<Props> = ({ name, label, ...rest }) => {
  return (
    // name property used to make Formik take 
    // all the complicated stuff in its own hands
    <Field name={name}>
      {({ field, meta }: FieldProps) => {
        // rendering vanilla input inside to be able to stylize it
        return (
          <div className="contactUsForm__input__container">
            <label
              htmlFor="name"
              className="contactUsForm__input__label"
              // inline style to make label black 
              // even without focus if it has smth inside
              style={meta.value ? { color: "#000" } : {}}
            >
              {label}
            </label>
            <input
              type="text"
              className="contactUsForm__input"
              id="name"
              {...field}
              {...rest}
            />
            <span className="contactUsForm__input--error">
              {meta.error && meta.touched && meta.error}
            </span>
          </div>
        );
      }}
    </Field>
  );
};
