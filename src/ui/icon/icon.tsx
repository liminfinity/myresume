import React from 'react'
import { IDefaultProps } from '../../types/components'

interface IIconProps extends IDefaultProps {
    src: string
}

export default function Icon({src}: IIconProps) {
  return (
    <div>
        <img src={src}  alt='' />
    </div>
  )
}