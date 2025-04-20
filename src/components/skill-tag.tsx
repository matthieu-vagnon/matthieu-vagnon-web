export default function SkillTag({ technology }: { technology: string }) {
  return (
    <div className='text-xs sm:text-sm bg-gray-500 px-2 py-1 rounded-md text-white border border-gray-400 outline outline-gray-500'>
      {technology}
    </div>
  );
}
