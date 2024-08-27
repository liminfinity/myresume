import type { HTMLAttributes } from 'react';
import { IContact } from '../../types';

export type ContactProps = IContact & HTMLAttributes<HTMLElement>;
