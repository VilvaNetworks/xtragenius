export interface Course {
  id: string;
  slug: string;
  title: string;
  type: string; // e.g. "Free"
  lessons: number;
  students: number;
  image: string;
  instructor: string;
  duration: string;
  language: string;
  deadline: string;
  description?: string;
}

export const coursesData: Course[] = [
  {
    id: "1",
    slug: "abacus",
    title: "Abacus",
    type: "Free",
    lessons: 8,
    students: 0,
    image: "",
    instructor: "Xtragenius Faculty",
    duration: "8 Levels",
    language: "English",
    deadline: "Rolling admissions",
  },
  {
    id: "2",
    slug: "vedic-maths",
    title: "Vedic Maths",
    type: "Free",
    lessons: 8,
    students: 0,
    image: "/images/vedic-math/hero.jpg",
    instructor: "Xtragenius Faculty",
    duration: "8 Levels",
    language: "English",
    deadline: "Rolling admissions",
    description: "Vedic Maths teaches children fast, mental calculation techniques drawn from ancient Indian sutras — quick multiplication, division and squaring without a calculator. It builds on the number sense children develop through Abacus training and helps them solve everyday arithmetic faster and with more confidence."
  },
  {
    id: "3",
    slug: "mind-dart",
    title: "Mind Dart",
    type: "Free",
    lessons: 8,
    students: 0,
    image: "/images/mind-dart/video-poster.jpg",
    instructor: "Xtragenius Faculty",
    duration: "8 Levels",
    language: "English",
    deadline: "Rolling admissions",
    description: "Mind Dart is our memory and visualization programme, designed to strengthen whole-brain development in children. Through structured visualization exercises, kids learn to retain and recall information faster — a skill they can apply well beyond the classroom, from geography and history to everyday problem solving."
  }
];

export function getCourseBySlug(slug: string): Course | undefined {
  return coursesData.find(c => c.slug === slug);
}
