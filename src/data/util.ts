/**
 * js 에서 기본으로 제공하는 Array 클래스를 좀 더 간결하게 사용하려고 만듬.
 * @param length
 * @returns
 */
export const makeArray = (length: number) => new Array(length).fill(null);
export const range = (min: number, max: number): number[] => makeArray(max - min).map((notUsed, index) => index + min);
export const random = (min: number, max: number): number => Math.floor(Math.random() * (max - min)) + min;

//const array = new Array(); // [];
//const array = new Array(아이템 개수); // [undefined, undefined, undefined, undefined, undefined];

/**
 * undefined로 채운 배열에서는 map 메서드를 사용할 수 없다.
 */
// [undefined, undefined, undefined, undefined, undefined].map(콜백_함수)  //오류!

/**
 * fill 메서드를 호출하면 runtime error 가 발생하지 않는다.
 * 배열에 undefined값들을 모두 null로 바꾸고, null로 채운 배열에 map 메서드를 적용하면 runtime error가 더 이상 발생하지 않습니다.
 */
// [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined].fill(null).map(callback_function);
