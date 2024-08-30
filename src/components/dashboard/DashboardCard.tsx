import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";
import React from "react";

interface Props {
  title: string;
  count: number;
  icon: React.ReactElement<LucideIcon>;
}
const DashboardCard: React.FC<Props> = ({ title, count, icon }) => {
  return (
    <Card className="bg-slate-100 dark:bg-slate-800 p-4 pb-0">
      <CardContent>
        <h3 className="text-3xl text-center mb-4 font-bold text-slate-500 dark:text-slate-200">
          {title}
        </h3>
        <div className="flex gap-5 justify-center items-center">
          {icon}
          <h3 className="text-5xl font-semibold text-slate-500 dark:text-slate-200">
            {count}
          </h3>
        </div>
      </CardContent>
    </Card>
  );
};

export default DashboardCard;
