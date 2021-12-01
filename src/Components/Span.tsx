interface SpanProps {
  active?: boolean;
  text: string;
}

function Span(props: SpanProps) {
  const { active, text } = props;
  return (
    <span
      className={`font-sans font-medium ${
        active ? 'text-blueGray-600' : 'text-gray-400'
      }`}
    >
      {text}
    </span>
  );
}

export default Span;
