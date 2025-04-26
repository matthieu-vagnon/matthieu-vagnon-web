export default function Logo() {
  return (
    <svg
      className='h-8 sm:h-10 md:h-12'
      viewBox='0 0 800 800'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <rect width='800' height='800' fill='var(--main-dark)' />
      <rect y='650' width='800' height='150' fill='var(--main)' />
    </svg>
  );
}
