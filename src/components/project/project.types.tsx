import type { HTMLAttributes } from 'react';
import type { IProject } from '../../types';

export type ProjectProps = HTMLAttributes<HTMLElement> & {
    project: IProject;
};
