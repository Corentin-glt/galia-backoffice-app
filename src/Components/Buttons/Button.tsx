interface ButtonProps {
  intent?: Intent;
  text: string;
  onClick: () => void;
}

export enum Intent {
  NONE = 'blueGray',
  DANGER = 'red',
  WARNING = 'orange',
}

function Button(props: ButtonProps) {
  const { intent = Intent.NONE, text, onClick } = props;
  return (
    <>
      <button
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
        {text}
      </button>
    </>
  );
}

export default Button;
