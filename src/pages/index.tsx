import { ChevronRightIcon, BuildingOfficeIcon } from '@heroicons/react/24/solid';
import { CustomTabs, TitleContainer } from '@/components/Container/Monev/MonevContent';

const Monev = () => {
  return (
    <>
      <section className="mb-16">
        <p className={'text-gray-700 text-3xl font-bold'}>Monev</p>
        <ul className="flex items-center gap-2 text-gray-500 text-sm">
          <li>
            <BuildingOfficeIcon className={'h-4 w-4'} />
          </li>
          <li>
            <ChevronRightIcon className={'h-3 w-3'} />
          </li>
          <li className={'font-medium'}>Monev</li>
        </ul>
      </section>

      <TitleContainer/>
      <CustomTabs />
    </>
  );
};

export default Monev;
