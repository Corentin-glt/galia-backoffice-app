import { InputHTMLAttributes } from 'react';
import { useFormContext } from 'react-hook-form';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
}

export function Input(props: InputProps) {
  const { name, ...rest } = props;
  const { register } = useFormContext();

  return <input {...register(name)} {...rest} />;
}
