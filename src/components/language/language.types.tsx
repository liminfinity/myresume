import type { HTMLAttributes } from 'react';
import type { ILanguage } from '../../types';

export type LanguageProps = HTMLAttributes<HTMLElement> & {
  language: ILanguage;
};
