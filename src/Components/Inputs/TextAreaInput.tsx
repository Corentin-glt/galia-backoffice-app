import { TextareaHTMLAttributes } from 'react';
import { useFormContext } from 'react-hook-form';

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
}

export function TextArea(props: TextAreaProps) {
  const { name, ...rest } = props;
  const { register } = useFormContext();

  return <textarea {...register(name)} {...rest} />;
}
