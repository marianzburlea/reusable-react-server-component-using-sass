import type { ReactNode } from 'react'

export const colorList = ['red', 'blue', 'green'] as const

export type TColor = (typeof colorList)[number]

export type TButton = {
  children?: ReactNode
  color?: TColor
}
