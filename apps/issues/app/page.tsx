import { IdList } from '@/constants/id';
import Link from 'next/link';

const Page = () => {
  return (
    <div style={{ padding: '40px' }}>
      {IdList.map(({ id }) => {
        return (
          <div key={id}>
            <Link href={`/${id}`}>{id}</Link>
            <br />
          </div>
        );
      })}
    </div>
  );
};

export default Page;
