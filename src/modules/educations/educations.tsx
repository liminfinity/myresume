import { Article } from '../../ui';
import { IEducation } from '../../types/entities';
import { Education } from '../../components';

const educations: IEducation[] = [
  {
    university:
      'Сибирский федеральный университет, Институт космических и информационных технологий (СФУ, ИКИТ)',
    speciality: 'Прикладная информатика (бакалавриат)',
    yearEnding: 2026,
  },
];

export const Educations = () => {
  return (
    <Article title="Образование">
      <ul>
        {educations.map((education, idx) => (
          <li>
            <Education key={idx} {...education} />
          </li>
        ))}
      </ul>
    </Article>
  );
};
