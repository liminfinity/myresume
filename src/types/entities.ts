interface IProject {
    name: string,
    stack: string[],
    experience: string[],
    link: string
}

interface IContact {
    title: string,
    contact: string,
    svg: string
}

interface ISkill {
    name: string,
    level: number
}

interface IEducation {
    university: string,
    speciality: string,
    yearEnding: number
}


export type {IProject, IContact, ISkill, IEducation}