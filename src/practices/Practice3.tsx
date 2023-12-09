export const Practice3 = () => {
  const getTotalFee = (num: number) => {
    const total: number = num * 1.1;
    return total.toString;
  };
  const onClickPractice = () => {
    //alert("");
    let total: number = 0;
    //関数側の型をstringに変えてしまっても、変数に型があれば実行前にエラーになる
    total = getTotalFee(1000);
    console.log(total);
  };

  return (
    <div>
      <p>練習問題3：変数の型指定</p>
      <button onClick={onClickPractice}>練習問題3を実行</button>
    </div>
  );
};
