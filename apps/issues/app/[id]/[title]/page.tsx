import React from 'react';
import { ClipList } from '@/constants/id';
import { buildTitle } from '@/utils/buildTitle';

export const dynamicParams = true;

type Props = {
  params: Promise<{ id: string; title: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export const generateStaticParams = () => {
  try {
    //한글 고층 빌딩과 광안대교가 보이는 번잡한 항구 도시 부산의 저녁부터 밤까지의 풍경 cdn  x-matched-path = '밤의 활기찬 도새 스카이라인 blob 깨진 모양의 text << rail header'
    return ClipList.map(({ id, title }) => ({ id, title: buildTitle(title) }));
  } catch (err) {
    console.log(err);
    return [];
  }
};

const Page = async ({ params }: Props) => {
  const { id, title } = await params;

  return (
    <div style={{ display: 'flex', gap: '16px', flexDirection: 'column', padding: '16px' }}>
      <span>{id}</span>
      <span>{title}</span>
    </div>
  );
};

export default Page;
