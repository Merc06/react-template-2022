type OccupationProps = {
  company: string
  date_to: string
  date_from: string
  id: string
  job_description: string
  job_title: string
}

type LanguageProps = {
  client: string
  id: string
  language: string
  level: string
}

type SkillListProps = {
  client_id: string
  id: string
  skill_id: string
  skill_name: string
}

type SkillProps = {
  name: string
  id: string
}

type EducationProps = {
  client_id: string
  country: string
  degree: string
  id: string
  school: string
  year_graduated: string
}

type CertificationProps = {
  certificate_name: string;
  certified_from: string;
  client_id: string;
  id: string;
  year: string;
}

type LinkedAccountProps = {
  client: number;
  email: string;
  id: number;
  presence_name: string;
  profile_status: string;
  social_id: string;
  verified: string;
}

type fieldListProps = {
  title: string;
  type: "LANGUAGE" | "OCCUPATION" | "SKILLS" | "EDUCATION" | "CERTIFICATION" | "";
}

export type {
  OccupationProps,
  LanguageProps,
  EducationProps,
  CertificationProps,
  SkillProps,
  SkillListProps,
  fieldListProps,
  LinkedAccountProps
};
