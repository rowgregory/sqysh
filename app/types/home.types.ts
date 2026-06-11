export type Project = {
  name: string;
  desc: string;
  url?: string; // no url = sunsetted/offline
};

export type View = "home" | "contact" | "work";

export type WorkProject = {
  name: string;
  desc: string;
  url?: string;
  blurb: string;
  intro?: boolean;
};
