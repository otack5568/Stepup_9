export const Practice4 = () => {
  const onClickPractice = () => {
    //alert("");
    calcTotalFee(1100);
  };
  //tsconfigでstrict:trueの場合は、型を指定しないとエラーになる
  //tsconfigでnoImplicitAny:falseにすると、暗黙のanyは許可される
  const calcTotalFee = (num) => {
    const total: number = num * 1.1;
    console.log(total);
  };

  return (
    <div>
      <p>練習問題4：設定ファイルを触ってみる</p>
      <button onClick={onClickPractice}>練習問題4を実行</button>
    </div>
  );
};
