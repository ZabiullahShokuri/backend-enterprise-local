export interface Project {
  id: string;
  name: string;
  status: 'active' | 'paused' | 'completed';
  owner: string;
}

export const projects: Project[] = [
  {
    id: '1',
    name: 'E-commerce Platform',
    status: 'active',
    owner: 'Team Alpha',
  },
  {
    id: '2',
    name: 'Booking System',
    status: 'paused',
    owner: 'Team Beta',
  },
  {
    id: '3',
    name: 'Analytics Dashboard',
    status: 'completed',
    owner: 'Team Gamma',
  },
];
