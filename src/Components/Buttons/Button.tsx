import { ButtonHTMLAttributes } from 'react';

import Spinner from '../Spinner';

const buttonConfig = {
  none: {
    text: 'text-blueGray-600',
    hover: 'hover:bg-blueGray-200',
    focus: 'focus-visible:ring-blueGray-500',
  },
  danger: {
    text: 'text-red-600',
    hover: 'hover:bg-red-200',
    focus: 'focus-visible:ring-red-500',
  },
  warning: {
    text: 'text-orange-600',
    hover: 'hover:bg-orange-200',
    focus: 'focus-visible:ring-orange-500',
  },
};

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  disableHover?: boolean;
  loading?: boolean;
  intent?: Intent;
  text: string;
  onClick?: () => void;
}

export enum Intent {
  NONE = 'none',
  DANGER = 'danger',
  WARNING = 'warning',
}

function Button(props: ButtonProps) {
  const {
    intent = Intent.NONE,
    disableHover = false,
    text,
    loading,
    onClick,
    ...buttonProps
  } = props;
  const styles = `inline-flex 
  justify-center px-4 py-2 
  text-sm font-medium 
  bg-white 
  border border-transparent rounded-md 
  focus:outline-none 
  focus-visible:ring-2 
  focus-visible:ring-offset-2 
  ${buttonConfig[intent].text}
  ${!disableHover && buttonConfig[intent].hover} 
  `;

  return (
    <>
      <button
        {...buttonProps}
        className={styles}
        disabled={loading}
        onClick={onClick}
      >
        {loading ? <Spinner text="loading" /> : text}
      </button>
    </>
  );
}

export default Button;
