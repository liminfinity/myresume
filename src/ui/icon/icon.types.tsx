import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import type { DefaultProps } from '../../types';
import type { FontAwesomeIconProps } from '@fortawesome/react-fontawesome';

export type IconProps = DefaultProps & {
  icon: IconDefinition;
  iconProps?: FontAwesomeIconProps;
};
