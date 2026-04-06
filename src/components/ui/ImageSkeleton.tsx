import { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';

interface ImageSkeletonProps {
  src: string;
  alt: string;
  className?: string;
}

export default function ImageSkeleton({ src, alt, className = '' }: ImageSkeletonProps) {
  const [loaded, setLoaded] = useState(false);
  const { theme } = useTheme();

  return (
    <div className="relative w-full h-full">
      {/* Skeleton */}
      {!loaded && (
        <div
          className={`absolute inset-0 ${
            theme === 'dark' ? 'bg-dark-border' : 'bg-gray-200'
          }`}
        >
          <div className="absolute inset-0 shimmer-skeleton" />
        </div>
      )}

      {/* Actual image */}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        className={`transition-opacity duration-500 ${
          loaded ? 'opacity-100' : 'opacity-0'
        } ${className}`}
      />
    </div>
  );
}
