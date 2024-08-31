import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

export interface IProject {
  name: string;
  stack: string[];
  link: string;
}

export interface IContact {
  title: string;
  source: string;
  icon: IconDefinition;
}

export interface ISkill {
  name: string;
  level: number;
}

export interface IEducation {
  university: string;
  speciality: string;
  yearEnding: number;
}

export interface IExperience {
  startingDate: string;
  endingDate: string;
  position: string;
  company: string;
  achievements: string[];
}

export interface ILanguage {
  name: string;
  level: string;
}
