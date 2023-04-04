import { FC } from "react";
import "./ContactUsForm.scss";
import { Field, FieldProps } from "formik";

type Props = {
  name: string;
  placeHolder?: string;
  maxLength?: number;
  label?: string;
  rest?: React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >;
};

export const FormikTextArea: FC<Props> = ({
  name,
  placeHolder,
  label,
  maxLength,
  ...rest
}) => {
  return (
    <Field name={name}>
      {({ field, meta }: FieldProps) => {
        return (
          <div className="contactUsForm__textArea__container">
            <label
              htmlFor="message"
              className="contactUsForm__input__label"
              style={meta.value ? { color: "#000" } : {}}
            >
              {label}
            </label>
            <textarea
              id="message"
              className="contactUsForm__textArea"
              maxLength={maxLength}
              placeholder={placeHolder}
              {...field}
              {...rest}
            ></textarea>
          </div>
        );
      }}
    </Field>
  );
};
