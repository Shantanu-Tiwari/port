import React, { useEffect, useState } from 'react';
import { BarChart, Bar, ResponsiveContainer, Tooltip, XAxis } from 'recharts';
import { Loader2 } from 'lucide-react';

interface ContributionDay {
  date: string;
  count: number;
  level: number;
}

interface GitHubApiResponse {
  total: {
    [year: string]: number;
  };
  contributions: ContributionDay[];
}

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-surface border border-border p-2 rounded text-xs text-primary shadow-xl">
        <p className="font-semibold mb-1">{label}</p>
        <p>{`${payload[0].value} contributions`}</p>
      </div>
    );
  }
  return null;
};

interface GitHubChartProps {
    color?: string;
}

const GitHubChart: React.FC<GitHubChartProps> = ({ color = '#ffffff' }) => {
  const [data, setData] = useState<{ name: string; commits: number }[]>([]);
  const [totalContributions, setTotalContributions] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchContributions = async () => {
      try {
        // Fetch data for Shantanu-Tiwari
        const response = await fetch('https://github-contributions-api.jogruber.de/v4/Shantanu-Tiwari?y=last');
        
        if (!response.ok) {
            throw new Error('Failed to fetch github data');
        }

        const json: GitHubApiResponse = await response.json();
        
        // The API returns distinct contribution objects. 
        // We need to filter for the last year and aggregate by month.
        const today = new Date();
        const oneYearAgo = new Date();
        oneYearAgo.setFullYear(today.getFullYear() - 1);

        const relevantContributions = json.contributions.filter(day => {
            const date = new Date(day.date);
            return date >= oneYearAgo && date <= today;
        });

        // Calculate Total
        const total = relevantContributions.reduce((acc, curr) => acc + curr.count, 0);
        setTotalContributions(total);

        // Aggregate by Month
        const monthlyData: { [key: string]: number } = {};
        const monthOrder: string[] = [];

        relevantContributions.forEach(day => {
            const date = new Date(day.date);
            const monthName = date.toLocaleString('default', { month: 'short' });
            // Key format: "Jan" (we might want to handle year rollover like "Jan 24" if needed, 
            // but for a 12-month trailing chart, month name is usually unique enough or we rely on order)
            
            if (monthlyData[monthName] === undefined) {
                monthlyData[monthName] = 0;
                monthOrder.push(monthName);
            }
            monthlyData[monthName] += day.count;
        });

        // Transform to Recharts format
        // Note: The `monthOrder` array naturally builds up from one year ago to now
        const chartData = monthOrder.map(month => ({
            name: month,
            commits: monthlyData[month]
        }));

        setData(chartData);
        setLoading(false);

      } catch (err) {
        console.error("Error fetching GitHub data:", err);
        setError(true);
        setLoading(false);
      }
    };

    fetchContributions();
  }, []);

  if (loading) {
      return (
          <div className="w-full h-32 mt-4 flex flex-col items-center justify-center space-y-2">
              <Loader2 className="w-6 h-6 animate-spin text-secondary" />
              <p className="text-xs text-secondary">Loading contributions...</p>
          </div>
      )
  }

  if (error) {
       return (
          <div className="w-full h-32 mt-4 flex items-center justify-center text-xs text-secondary">
              Unable to load GitHub activity.
          </div>
      )
  }

  return (
    <div className="w-full mt-2">
      <div className="flex items-center justify-between mb-4">
            <span className="text-xs text-secondary font-mono">Last 12 Months</span>
            <span className="text-xs text-secondary font-mono">
                {totalContributions.toLocaleString()} Contributions
            </span>
      </div>
      <div className="h-32 w-full">
        <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
            <XAxis 
                dataKey="name" 
                tick={{ fill: 'var(--text-secondary)', fontSize: 10 }}
                axisLine={false}
                tickLine={false}
                interval={0}
            />
            <Tooltip content={<CustomTooltip />} cursor={{fill: 'var(--border)', opacity: 0.4}} />
            <Bar 
                dataKey="commits" 
                fill={color} 
                radius={[4, 4, 0, 0]} 
                animationDuration={1500}
            />
            </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default GitHubChart;