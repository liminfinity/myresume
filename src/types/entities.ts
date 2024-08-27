import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

interface IProject {
  name: string;
  stack: string[];
  experience: string[];
  link: string;
}

interface IContact {
  title: string;
  contact: string;
  icon: IconDefinition;
}

interface ISkill {
  name: string;
  level: number;
}

interface IEducation {
  university: string;
  speciality: string;
  yearEnding: number;
}

export type { IProject, IContact, ISkill, IEducation };
