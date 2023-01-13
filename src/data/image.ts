import * as U from './util';
//prettier-ignore
export const picsumUrl=(width:number, height:number):string => `https://picsum.com/${width}x${height}`;

export const randomImage=(width:number=1000, height:number=800,delta:number=200):string => picsumUrl(U.random(width,width+delta), U.random(height,height+delta)