import React from 'react';
import {testParams} from "@/app/constants/test";


export const maxDuration = 300;
export const dynamicParams = true;

export const generateStaticParams =  () => {
  try {
    return testParams
  } catch (error) {
    console.error(error);
    return [];
  }
};

type Props = {
  params:{ id:string; title:string; }
}

const Page = ({params:{id,title}}:Props) => {
  return (
      <div style={{display:'flex', flexDirection:'column',padding:'100px'}}>
        <span>id : {id}</span>
        <span>encoded title : {title}</span>
      </div>
  );
};

export default Page;
