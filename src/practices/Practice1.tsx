export const Practice1 = () => {
  const onClickPractice = () => {
    //alert("");
    calcTotalFee(1100);
  };
  const calcTotalFee = (num: number) => {
    const total: number = num * 1.1;
    console.log(total);
  };

  return (
    <div>
      <p>練習問題1：引数の型指定</p>
      <button onClick={onClickPractice}>練習問題1を実行</button>
    </div>
  );
};
