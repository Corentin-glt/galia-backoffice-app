interface SpanProps {
  active?: boolean;
  font?: Font;
  size?: Size;
  text: string;
}

export enum Size {
  SMALL = 'text-sm',
  NORMAL = 'text-lg',
  BIG = 'text-xl',
}

export enum Font {
  LIGHT = 'font-light',
  MEDIUM = 'font-medium',
  BOLD = 'font-bold',
}

function Span(props: SpanProps) {
  const { active, font = Font.MEDIUM, size = Size.NORMAL, text } = props;
  return (
    <span
      className={`line-clamp-1 font-sans ${font}  text-sm sm:${size} ${
        active ? 'text-blueGray-600' : 'text-gray-400'
      }
      `}
    >
      {text}
    </span>
  );
}

export default Span;
