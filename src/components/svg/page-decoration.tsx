export default function PageDecoration({ className }: { className?: string }) {
  return (
    <svg
      viewBox='0 0 100 10'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      preserveAspectRatio='none'
      className={className}
    >
      <g clipPath='url(#clip0_82_2039)'>
        <path d='M0 5L100 -2.90818e-07V10L0 5Z' className='fill-foreground/3' />
      </g>
      <defs>
        <clipPath id='clip0_82_2039'>
          <rect width='100' height='10' fill='white' />
        </clipPath>
      </defs>
    </svg>
  );
}
