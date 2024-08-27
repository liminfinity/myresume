import { Article } from '../../ui';
import { IEducation } from '../../types/entities';
import { Education } from '../../components';
import { EducationsProps } from './educations.types';

const educations: IEducation[] = [
  {
    university:
      'Сибирский федеральный университет, Институт космических и информационных технологий (СФУ, ИКИТ)',
    speciality: 'Прикладная информатика (бакалавриат)',
    yearEnding: 2026,
  },
];

export const Educations = ({className}: EducationsProps) => {
  return (
    <Article title="Образование" className={className}>
      <ul>
        {educations.map((education, idx) => (
          <li>
            <Education education={education} key={idx} />
          </li>
        ))}
      </ul>
    </Article>
  );
};
