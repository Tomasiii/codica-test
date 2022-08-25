import React, { Dispatch, SetStateAction } from "react";

import s from "./Days.module.scss";

interface Props {
  visibleDay: number;
  setVisibleDay: Dispatch<SetStateAction<number>>;
}

export const Tabs = ({ visibleDay, setVisibleDay }: Props) => {
  const tabs = [
    {
      label: "На неделю",
      value: 7,
    },
    {
      label: "На 16 дней",
      value: 16,
    },
  ];
  return (
    <div className={s.tabs}>
      <div className={s.tabs__wrapper}>
        {tabs.map(tab => (
          <div
            key={tab.value}
            className={
              tab.value === visibleDay ? `${s.tab} ${s.active}` : s.tab
            }
            onClick={() => setVisibleDay(tab.value)}
          >
            {tab.label}
          </div>
        ))}
      </div>
    </div>
  );
};
