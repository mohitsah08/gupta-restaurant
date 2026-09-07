import React from 'react';

interface VegBadgeProps {
  type: 'veg' | 'non-veg';
  size?: 'sm' | 'md' | 'lg';
  showLabel?: boolean;
}

export const VegBadge: React.FC<VegBadgeProps> = ({
  type,
  size = 'md',
  showLabel = false,
}) => {
  const isVeg = type === 'veg';

  const sizeClasses = {
    sm: 'w-3.5 h-3.5 p-0.5',
    md: 'w-4 h-4 p-0.5',
    lg: 'w-5 h-5 p-1',
  };

  const dotSizes = {
    sm: 'w-1.5 h-1.5',
    md: 'w-2 h-2',
    lg: 'w-2.5 h-2.5',
  };

  return (
    <div className="inline-flex items-center gap-1.5 font-medium select-none" title={isVeg ? 'Pure Vegetarian' : 'Non-Vegetarian'}>
      <div
        className={`border rounded-sm flex items-center justify-center flex-shrink-0 ${
          isVeg
            ? 'border-emerald-600 bg-white'
            : 'border-red-600 bg-white'
        } ${sizeClasses[size]}`}
      >
        {isVeg ? (
          <div className={`rounded-full bg-emerald-600 ${dotSizes[size]}`} />
        ) : (
          <div
            className="w-0 h-0 border-l-[3.5px] border-l-transparent border-r-[3.5px] border-r-transparent border-b-[6px] border-b-red-600"
          />
        )}
      </div>
      {showLabel && (
        <span
          className={`text-xs font-semibold tracking-wider uppercase ${
            isVeg ? 'text-emerald-700' : 'text-red-700'
          }`}
        >
          {isVeg ? 'Veg' : 'Non-Veg'}
        </span>
      )}
    </div>
  );
};
