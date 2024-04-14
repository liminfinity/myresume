import React from 'react'
import { IDefaultProps } from '../../types/components'

interface IProgressProps extends IDefaultProps {
    min?: number,
    max?: number,
    value?: number
}

export default function Progress({min = 1, max = 10, value = 5}: IProgressProps) {
  return (
    <meter min={min} max={max} value={value}></meter>
  )
}