import { cn } from '../../lib';
import { IconProps } from './icon.types';
import styles from './style.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Icon = ({ icon, iconProps, className }: IconProps) => {
  return (
    <div className={cn(styles.container, className)}>
      <FontAwesomeIcon icon={icon} color="#555555" {...iconProps} />
    </div>
  );
};
