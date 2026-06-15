// Project Specs Shape
export interface ProjectMetric {
  label: string;
  value: string;
}

export interface ProjectSpec {
  title: string;
  shortDesc: string;
  tagline: string;
  stack: string[];
  architecture: string;
  metrics: ProjectMetric[];
  highlight: string;
  imagePath: string;
}

// Calendar Slot Shape
export interface CalendarSlot {
  date: number;
  available: boolean;
}
