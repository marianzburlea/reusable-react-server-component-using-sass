import type { TButton } from './button.type'
import './button.scss'

export const Button = ({ children, color }: TButton) => {
  const style: Record<string, string> = {}

  if (color) {
    style['--button-color'] = color
  }

  return (
    <button className="wowjob-button" style={style}>
      {children}
    </button>
  )
}
