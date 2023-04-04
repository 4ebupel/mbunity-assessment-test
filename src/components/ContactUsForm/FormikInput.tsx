import { FC } from "react";
import "./ContactUsForm.scss";
import { Field, FieldProps } from "formik";

type Props = {
  name: string;
  label?: string;
  rest?: React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >;
};

export const FormikInput: FC<Props> = ({ name, label, ...rest }) => {
  return (
    <Field name={name}>
      {({ field, meta }: FieldProps) => {
        return (
          <div className="contactUsForm__input__container">
            <label
              htmlFor="name"
              className="contactUsForm__input__label"
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
