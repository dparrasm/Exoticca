interface ButtonProps {
  color: string
  text: string
  onClick: () => void
}

export default function Button({ color, text, onClick }: ButtonProps) {
  const buttonStyle = { backgroundColor: color }
  return (
    <button onClick={onClick} style={buttonStyle}>
      {text}
    </button>
  )
}
