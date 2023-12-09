export const Practice2 = () => {
  const onClickPractice = () => {
    //alert("");
    console.log(getTotalFee(1100));
  };
  const getTotalFee = (num: number): number => {
    const total: number = num * 1.1;
    return total;
  };

  return (
    <div>
      <p>練習問題2：返却値の型指定</p>
      <button onClick={onClickPractice}>練習問題2を実行</button>
    </div>
  );
};
