/* eslint-disable @typescript-eslint/no-unused-vars */
/** typeScriptの基本の型 */

// boolean
let bool: boolean = true;

//number 数値
let num: number = 0;

//string 文字
let str: string = "A";

//Array 配列
let arr1: Array<number> = [0, 1, 2];
let arr2: number[] = [0, 1, 2];

//tuple 連想配列的な
let tuple: [number, string] = [0, "A"];

//any（型なし。）
let any1: any = false;

//void（何も返さない）
const funcA = (): void => {
  const test = "TEST";
};

//null型
let null1: null = null;

//undefined
let undefined1: undefined = undefined;

//object（どんなものでも入る）
let obj1: object = {};
let obj2: {} = {};
let obj3: { id: number; name: string } = { id: 0, name: "aaa" }; //要素の組となるObjectを型付きで指定できる
