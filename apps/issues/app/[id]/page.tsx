import React from 'react';
import { IdList } from '@/constants/id';

export const dynamicParams = true;

type Props = {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export const generateStaticParams = () => {
  try {
    //한글 고층 빌딩과 광안대교가 보이는 번잡한 항구 도시 부산의 저녁부터 밤까지의 풍경 cdn  x-matched-path = '밤의 활기찬 도새 스카이라인 blob 깨진 모양의 text << rail header'
    const result = IdList.map(({ id }) => ({ id: id }));
    console.log({ result });
    return result;
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
