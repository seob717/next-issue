import React from 'react';
import { IdList } from '@/constants/id';

export const maxDuration = 300;
export const dynamicParams = true;

export const generateStaticParams = () => {
  try {
    return IdList;
  } catch (err) {
    console.log(err);
    return [];
  }
};

type Props = {
  params: { id: string };
};

const Page = ({ params: { id } }: Props) => {
  return (
    <div className={'p-16'}>
      <span>{id}</span>
    </div>
  );
};

export default Page;
