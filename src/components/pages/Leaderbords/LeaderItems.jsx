import React from 'react';
import './leaderBords.scss';
export default function LeaderItems({ className, titleColor, ...props }) {
  return (
    <div className={`leaderBords__item ${className}`} {...props}>
      <div className="flex gap-3">
        <h2
          className={`text-[14px] font-bold !text-[${titleColor}]`}
          style={{ fontFamily: 'var(--inter-font)' }}>
          1
        </h2>
        <div className="flex flex-col">
          <h3 className="text-[14px] font-semibold">Viktor Kotov</h3>
          <span className="text-[12px] text-[#747272]">@username</span>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <h4 className="text-[14px] font-medium">1000</h4>
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 19"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg">
          <path d="M15.3571 11.5587L19.1671 8.31182C19.8081 7.76629 19.4671 6.72527 18.6246 6.6569L13.6166 6.2501C13.4427 6.2361 13.2761 6.17493 13.1349 6.07328C12.9938 5.97163 12.8837 5.83344 12.8166 5.67385L10.8781 1.07972C10.5521 0.306761 9.44808 0.306761 9.12208 1.07972L7.18357 5.67385C7.11648 5.83344 7.00633 5.97163 6.86521 6.07328C6.72409 6.17493 6.55746 6.2361 6.38357 6.2501L1.37507 6.6569C0.533065 6.72527 0.192065 7.76629 0.832566 8.31182L3.14657 10.2838C3.35992 10.466 3.60886 10.6027 3.87787 10.6853C4.14687 10.7679 4.43016 10.7947 4.71007 10.764L9.89108 10.2016C10.3171 10.1555 10.4936 10.7268 10.1146 10.925L5.46407 13.3578C5.2045 13.4933 4.97729 13.6824 4.79778 13.9123C4.61828 14.1422 4.49067 14.4077 4.42357 14.6907L3.79157 17.3366C3.59707 18.1512 4.49057 18.7948 5.21207 18.3598L9.50558 15.7718C9.80908 15.5885 10.1906 15.5885 10.4946 15.7718L14.7876 18.3598C15.5096 18.7948 16.4026 18.1517 16.2086 17.3366L15.0516 12.4907C15.0113 12.3226 15.0184 12.1466 15.0723 11.9822C15.1262 11.8178 15.2247 11.6713 15.3571 11.5587Z" />
        </svg>
      </div>
    </div>
  );
}
