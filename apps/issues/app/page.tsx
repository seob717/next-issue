import { ClipList } from '@/constants/id';
import Link from 'next/link';
import { buildTitle } from '@/utils/buildTitle';

const Page = () => {
  return (
    <div style={{ display: 'flex', gap: '16px', flexDirection: 'column', padding: '40px' }}>
      {ClipList.map(({ id, title }) => {
        return (
          <div key={id}>
            <Link href={`/${id}/${buildTitle(title)}`}>{`${title} (${id})`}</Link>
            <br />
          </div>
        );
      })}
    </div>
  );
};

export default Page;
