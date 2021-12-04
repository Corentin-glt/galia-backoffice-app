import { yupResolver } from '@hookform/resolvers/yup';
import { FormHTMLAttributes, ReactElement } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { AnyObjectSchema } from 'yup';
import Lazy from 'yup/lib/Lazy';

interface FormProps extends FormHTMLAttributes<unknown> {
  children?: ReactElement[];
  defaultValues?: any;
  schema: AnyObjectSchema | Lazy<any>;
  onSubmit: (value: unknown) => void;
}

function Form(props: FormProps) {
  const { children, defaultValues, schema, onSubmit, ...rest } = props;
  const methods = useForm({ defaultValues, resolver: yupResolver(schema) });
  const { handleSubmit } = methods;

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)} {...rest}>
        {children}
      </form>
    </FormProvider>
  );
}

export default Form;
