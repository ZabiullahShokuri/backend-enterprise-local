import { projects } from './mockData';

export function DashboardTable() {
  if (projects.length === 0) {
    return <p className="text-gray-500">No projects available.</p>;
  }

  return (
    <div className="overflow-x-auto bg-white rounded-lg border">
      <table className="min-w-full text-sm">
        <thead className="border-b bg-gray-50">
          <tr>
            <th className="px-4 py-3 text-left">Name</th>
            <th className="px-4 py-3 text-left">Owner</th>
            <th className="px-4 py-3 text-left">Status</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project) => (
            <tr key={project.id} className="border-b">
              <td className="px-4 py-3">{project.name}</td>
              <td className="px-4 py-3">{project.owner}</td>
              <td className="px-4 py-3 capitalize">{project.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
