import React from 'react';
import styles from './slider.module.css';

interface InfiSliderProps {
  width: string;
  height: string;
  images: string[];
  reverse?: boolean;
}

const InfiSlider: React.FC<InfiSliderProps> = ({ width, height, images }) => {
  return (
    <>
    <div className={styles.slider} style={{
      '--width': width,
      '--height': height,
      '--quantity': images.length,
    } as React.CSSProperties}>
      <div className={styles.list}>
        {images.map((src, index) => (
          <div
            className={styles.item}
            key={index}
            style={{ '--position': index + 1 } as React.CSSProperties}
          >
            <img src={src} alt={`slider-${index}`} />
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default InfiSlider;
