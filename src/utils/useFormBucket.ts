import {
  useState,
  type ChangeEvent,
  type FocusEvent,
  type ReactNode,
} from "react";

type FormErrors<T> = { [key in keyof T]?: string };
type FormTouched<T> = { [key in keyof T]?: boolean };

interface UseFormBucketProps<T extends object> {
  initialValues: T;
  validate?: (values: T) => FormErrors<T>;
}

export const useFormBucket = <T extends object>({
  initialValues,
  validate,
}: UseFormBucketProps<T>) => {
  const [values, setValues] = useState<T>(initialValues);
  const [errors, setErrors] = useState<FormErrors<T>>({});
  const [touched, setTouched] = useState<FormTouched<T>>({});

  const onChange = (ev: ChangeEvent<HTMLInputElement>) => {
    let newVal;
    if (ev.target.type === "number") {
      newVal = parseFloat(ev.target.value);
      if (isNaN(newVal)) newVal = "";
    } else {
      newVal = ev.target.value;
    }
    const newValues = { ...values, [ev.target.name]: newVal };
    setValues(newValues);
    if (validate) setErrors(validate(newValues));
  };

  const onBlur = (ev: FocusEvent<HTMLInputElement>) => {
    const field = ev.target.name as keyof T;
    if (touched[field]) return;

    setTouched({ ...touched, [field]: true });
    if (validate) setErrors(validate(values));
  };

  const register = (name: keyof T) => {
    return {
      name,
      value: values[name],
      onChange,
      onBlur,
    };
  };

  const isValid = () => !errors || Object.values(errors).every((err) => !err);

  const errorFor = (name: keyof T, renderErr: (msg: string) => ReactNode) => {
    if (touched[name] && errors[name]) {
      return renderErr(errors[name]);
    }
  };

  return {
    values,
    setValues,
    register,
    isValid,
    errorFor,
  };
};
