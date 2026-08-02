export type CourseSlug =
  | "umumiy"
  | "ingliz-tili"
  | "biologiya-kimyo"
  | "matematika"
  | "tarix-huquq"
  | "ona-tili";

export const COURSE_NAMES: Record<CourseSlug, string> = {
  umumiy: "EDUCenter",
  "ingliz-tili": "Ingliz tili",
  "biologiya-kimyo": "Biologiya-Kimyo",
  matematika: "Matematika",
  "tarix-huquq": "Tarix-Huquq",
  "ona-tili": "Ona tili",
};

export const COURSE_PATHS: Record<CourseSlug, string> = {
  umumiy: "/",
  "ingliz-tili": "/ingliz-tili",
  "biologiya-kimyo": "/biologiya-kimyo",
  matematika: "/matematika",
  "tarix-huquq": "/tarix-huquq",
  "ona-tili": "/ona-tili",
};
