export type Stat = {
  value: number;
  suffix: string;
  label: string;
};

export const stats: Stat[] = [
  { value: 50, suffix: "+", label: "Completed Projects" },
  { value: 10, suffix: "+", label: "Years of Experience" },
  { value: 30, suffix: "+", label: "Happy Clients" },
  { value: 2, suffix: "", label: "Studios — UK & UAE" },
];
