import { SelectHTMLAttributes } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import Select from 'react-select';

interface option {
  value: any;
  label: string;
}

export interface MultiSelectProps {
  name: string;
  required?: boolean;
  defaultValue?: option[];
  options: option[];
}

function MultiSelect(props: MultiSelectProps) {
  const { defaultValue, name, options, required = false, ...rest } = props;
  const { register, control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value } }) => (
        <Select
          {...rest}
          {...register(name, { required })}
          styles={{ menuPortal: (base) => ({ ...base, zIndex: 9999 }) }}
          menuPortalTarget={document.body}
          defaultValue={defaultValue}
          isMulti
          classNamePrefix="addl-class"
          options={options}
          value={options.find((c) => c.value === value)}
          onChange={(val) => onChange(val.map((c) => c.value))}
        />
      )}
    />
  );
}

export default MultiSelect;
