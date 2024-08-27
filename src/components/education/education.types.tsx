import type { HTMLAttributes } from 'react';
import { IEducation } from '../../types';

export type EducationProps = HTMLAttributes<HTMLElement> & {
  education: IEducation;
};
