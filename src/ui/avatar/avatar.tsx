import React from 'react'
import { IDefaultProps } from '../../types/components'

interface IAvatarProps extends IDefaultProps {
    src: string,
    alt: string
}

export default function Avatar({src, alt}: IAvatarProps) {
  return (
    <img src={src} alt={alt} />
  )
}