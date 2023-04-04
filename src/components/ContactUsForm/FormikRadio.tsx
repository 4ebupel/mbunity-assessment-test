import { FC } from "react";
import "./ContactUsForm.scss";
import { Field, FieldProps } from "formik";

type Props = {
  name: string;
  value: string;
  label?: string;
  rest?: React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >;
};

export const FormikRadio: FC<Props> = ({ name, label, value, ...rest }) => {
  return (
    <Field name={name} type="radio" value={value}>
      {({ field }: FieldProps) => {
        return (
          <div className="contactUsForm__radio__option__container">
            <input
              type="radio"
              className="contactUsForm__radio__input"
              id={value}
              {...field}
              {...rest}
            />
            <label htmlFor={value} className="contactUsForm__radio__label">
              {label}
            </label>
          </div>
        );
      }}
    </Field>
  );
};
