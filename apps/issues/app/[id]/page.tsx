import React from 'react';
import { IdList } from '@/constants/id';

export const dynamicParams = true;

type Props = {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export const generateStaticParams = () => {
  try {
    return IdList.map(({ id }) => ({ id: decodeURIComponent(id) }));
  } catch (err) {
    console.log(err);
    return [];
  }
};

const Page = async ({ params }: Props) => {
  const { id } = await params;

  return (
    <div className={'p-16'}>
      <span>{id}</span>
    </div>
  );
};

export default Page;
