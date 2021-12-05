import { InputHTMLAttributes } from 'react';
import { useFormContext } from 'react-hook-form';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  required?: boolean;
}

export function Input(props: InputProps) {
  const { name, required = false, ...rest } = props;
  const { register } = useFormContext();

  return <input {...register(name, { required })} {...rest} />;
}
