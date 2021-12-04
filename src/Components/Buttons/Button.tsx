import { ButtonHTMLAttributes } from 'react';

import Spinner from '../Spinner';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
  intent?: Intent;
  text: string;
  onClick?: () => void;
}

export enum Intent {
  NONE = 'blueGray',
  DANGER = 'red',
  WARNING = '',
}

function Button(props: ButtonProps) {
  const {
    intent = Intent.NONE,
    text,
    loading,
    onClick,
    ...buttonProps
  } = props;
  return (
    <>
      <button
        {...buttonProps}
        className={`inline-flex 
        justify-center px-4 py-2 
        text-sm font-medium 
        text-${intent}-600
        bg-white 
        border border-transparent rounded-md 
        hover:bg-${intent}-200 
        focus:outline-none 
        focus-visible:ring-2 
        focus-visible:ring-offset-2 
        focus-visible:ring-${intent}-500`}
        type="button"
        onClick={onClick}
      >
        {loading ? <Spinner text="loading" /> : text}
      </button>
    </>
  );
}

export default Button;
