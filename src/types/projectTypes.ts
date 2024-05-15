export interface ProjectDataState {
  id: number;
  name: string;
  title: string;
  imageSrc: string;
  explain: string;
  period: string;
  dev: string;
  link: string;
  github: string;
}

export interface ProjectState {
  data : ProjectDataState;
  handleLinkClick:()=>void
  handleGithubClick: ()=>void
}