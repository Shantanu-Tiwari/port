import React from 'react';
import { BarChart, Bar, ResponsiveContainer, Tooltip, XAxis } from 'recharts';

const data = [
  { name: 'Jan', commits: 45 },
  { name: 'Feb', commits: 52 },
  { name: 'Mar', commits: 38 },
  { name: 'Apr', commits: 65 },
  { name: 'May', commits: 48 },
  { name: 'Jun', commits: 72 },
  { name: 'Jul', commits: 60 },
  { name: 'Aug', commits: 85 },
  { name: 'Sep', commits: 92 },
  { name: 'Oct', commits: 68 },
  { name: 'Nov', commits: 74 },
  { name: 'Dec', commits: 50 },
];

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-surface border border-border p-2 rounded text-xs text-primary shadow-xl">
        <p>{`${payload[0].value} commits`}</p>
      </div>
    );
  }
  return null;
};

interface GitHubChartProps {
    color?: string;
}

const GitHubChart: React.FC<GitHubChartProps> = ({ color = '#ffffff' }) => {
  return (
    <div className="w-full h-32 mt-4">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
            <XAxis 
                dataKey="name" 
                hide 
            />
          <Tooltip content={<CustomTooltip />} cursor={{fill: 'var(--border)'}} />
          <Bar dataKey="commits" fill={color} radius={[2, 2, 0, 0]} animationDuration={1000} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default GitHubChart;