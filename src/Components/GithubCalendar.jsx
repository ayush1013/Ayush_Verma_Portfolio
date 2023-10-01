import React from "react";
import GitHubCalendar from "react-github-calendar";

const GithubCalendar = () => {
  const selectLastHalfYear = (contributions) => {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    const shownMonths = 6;

    return contributions.filter((activity) => {
      const date = new Date(activity.date);
      const monthOfDay = date.getMonth();

      return (
        date.getFullYear() === currentYear &&
        monthOfDay > currentMonth - shownMonths &&
        monthOfDay <= currentMonth
      );
    });
  };

  return (
    <div>
      <GitHubCalendar
        username="ayush1013"
        transformData={selectLastHalfYear}
        hideColorLegend
        labels={{
          totalCount: "{{count}} contributions in the last half year",
        }}
      />
    </div>
  );
};

export default GithubCalendar;
