import React, {useState, useEffect} from 'react'
import styles from './styles.module.css'
import classNames from 'classnames';
import Timeout = NodeJS.Timeout;

interface SimpleProps {
  percentage: number;
  striped?: boolean;
  animated?: boolean;
  showLabel?: boolean;

  progressStyle?: any;
  progressBarStyle?: any;
}

export const SimpleProgress = ({striped, animated, percentage, showLabel, progressStyle, progressBarStyle}: SimpleProps) => {

  const stripedStyle = styles.progressBarStriped;
  const animatedStyle = styles.progressBarAnimated;

  return (
    <div className={classNames(styles.progress)} style={progressStyle}>
      <div className={classNames(styles.progressBar, striped ? stripedStyle : null, animated ? animatedStyle : null)}
           style={{width: `${percentage}%`, ...progressBarStyle}}>
        {showLabel ? `${percentage}%` : ''}
      </div>
    </div>
  )
};

interface SmartProps {
  finish: boolean;
  striped?: boolean;
  animated?: boolean;
  showLabel?: boolean;

  progressStyle?: any;
  progressBarStyle?: any;
}

export const SmartProgress = ({striped, animated, finish, showLabel, progressStyle, progressBarStyle}: SmartProps) => {

  const stripedStyle = styles.progressBarStriped;
  const animatedStyle = styles.progressBarAnimated;

  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    let timer: Timeout;
    if (percentage < 90) {
      timer = setTimeout(() => {
        setPercentage(percentage + 5);
      }, 200);
    }
    return () => timer && clearTimeout(timer);
  }, [percentage]);

  useEffect(() => {
    if (finish) {
      setPercentage(100);
    }
  }, [finish]);

  return (
    <div className={classNames(styles.progress)} style={progressStyle}>
      <div className={classNames(styles.progressBar, striped ? stripedStyle : null, animated ? animatedStyle : null)}
           style={{width: `${percentage}%`, ...progressBarStyle}}>
        {showLabel ? `${percentage}%` : ''}
      </div>
    </div>
  )
};
