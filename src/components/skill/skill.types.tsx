import type { HTMLAttributes } from 'react';
import type { ISkill } from '../../types';

export type SkillProps = HTMLAttributes<HTMLElement> & {
  skill: ISkill;
};
