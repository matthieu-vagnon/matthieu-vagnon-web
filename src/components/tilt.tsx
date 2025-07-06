'use client';

import { useMagneticStatus } from '@/hooks/useMagneticStatus';
import { cn } from '@/lib/utils';
import {
  motion,
  MotionStyle,
  SpringOptions,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useTransform,
} from 'framer-motion';
import React, { useRef } from 'react';
import { Spotlight } from './Spotlight';

type TiltProps = {
  children: React.ReactNode;
  className?: string;
  style?: MotionStyle;
  rotationFactor?: number;
  isRevese?: boolean;
  springOptions?: SpringOptions;
};

export function TiltElement({
  children,
  className,
  style,
  rotationFactor = 15,
  isRevese = false,
  springOptions,
}: TiltProps) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const xSpring = useSpring(x, springOptions);
  const ySpring = useSpring(y, springOptions);

  const rotateX = useTransform(
    ySpring,
    [-0.5, 0.5],
    isRevese
      ? [rotationFactor, -rotationFactor]
      : [-rotationFactor, rotationFactor]
  );

  const rotateY = useTransform(
    xSpring,
    [-0.5, 0.5],
    isRevese
      ? [-rotationFactor, rotationFactor]
      : [rotationFactor, -rotationFactor]
  );

  const transform = useMotionTemplate`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPos = mouseX / width - 0.5;
    const yPos = mouseY / height - 0.5;

    x.set(xPos);
    y.set(yPos);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div className='overflow-visible!'>
      <Spotlight size={100} springOptions={springOptions} />
      <motion.div
        ref={ref}
        className={cn('overflow-visible', className)}
        style={{
          transformStyle: 'preserve-3d',
          ...style,
          transform,
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {children}
      </motion.div>
    </div>
  );
}

export function Tilt({ ...props }: TiltProps) {
  const { isMagnetic } = useMagneticStatus();

  return !isMagnetic ? (
    <div className={props.className}>{props.children}</div>
  ) : (
    <TiltElement {...props}>{props.children}</TiltElement>
  );
}
