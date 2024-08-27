import { Title, Progress } from '../../ui';
import { formatToCSSVar } from './lib/format';
import styles from './style.module.scss';
import type { SkillProps } from './skill.types';
import { cn } from '../../lib';

export const Skill = ({ skill, className, ...props }: SkillProps) => {
  const {level, name} = skill
  return (
    <article className={cn(styles[formatToCSSVar(name)], className)} {...props}>
      <Title level={4}>{name}</Title>
      <Progress min={1} max={10} value={level} />
    </article>
  );
};
