import type { HTMLAttributes } from 'react';
import { IExperience } from '../../types';

export type ExperienceProps = HTMLAttributes<HTMLElement> & {
  experience: IExperience;
};
