import { MouseEvent } from "react";

export interface ButtonState {
  using: "menu" | "arrow_right" | "arrow_left" | "link" | "cancel" | "text" | "github";
  icon? : Element
  text?: string;
  onClick: () => void | ((event: MouseEvent<HTMLButtonElement>) => void);
  onMouseEnter?: (event: MouseEvent<HTMLButtonElement>) => void;
}

export interface BadgeState {
  name: string;
  shape: string | "square" | "one";
  onClick?: () => void | ((event: MouseEvent<HTMLDivElement>) => void);
  onMouseEnter?: (event: MouseEvent<HTMLDivElement>) => void;
}

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