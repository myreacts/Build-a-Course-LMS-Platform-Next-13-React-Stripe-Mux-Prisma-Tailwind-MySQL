// 这是nextjs路由组，访问/routea /antonio 组内组件共享layout定义
import React from "react";

const GroupLayout = ({ children }: { children: React.ReactNode }) => {
  return <div className="h-full bg-sky-700 text-white">{children}</div>;
};

export default GroupLayout;
