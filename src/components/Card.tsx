import React from "react";

interface Props {
  logoPath: string;
  price: string;
  rate: number;
  title: string;
  popularPairs: string[];
}

const Card: React.FC<Props> = ({
  logoPath,
  price,
  title,
  rate,
  popularPairs,
}: Props) => {
  return (
    <div className="card-body w-72 h-[350px] rounded-xl relative">
      <div className="logo-circle top-[-50px] left-[50%] translate-x-[-50%] absolute h-[100px] w-[100px] rounded-full flex justify-center items-center">
        <img className="h-[50px] w-[50px] rounded-full" src={logoPath} />
      </div>
      <p className="text-xs text-center text-[#737BAE] font-semibold mt-[71px]">
        {title}
      </p>
      <div className="w-[242px] h-[40px] text-[#ECF0FF] text-base mx-auto mt-3 font-semibold bg-[#14172B] rounded-2xl flex justify-center items-center price-div">
        {price}
        <p
          style={{ color: rate > 0 ? "#00FFA3" : "#FF4D4D" }}
          className={`my-auto ml-[178px] absolute font-semibold text-xs`}
        >
          {rate > 0 && "+"}
          {rate}%
        </p>
      </div>
      <div className="text-center text-xs h-[31px] text-[#5A5F7D] font-semibold flex justify-center items-center">
        Price
      </div>
      <div className="w-[242px] h-[40px] text-[#ECF0FF] text-base mx-auto font-semibold bg-[#14172B] rounded-2xl flex justify-center items-center price-div">
        $60,000
      </div>
      <div className="text-center text-xs h-[31px] text-[#5A5F7D] font-semibold flex justify-center items-center">
        TVL
      </div>
      <div className="flex h-[40px] w-[121px] gap-3 justify-center items-center bg-[#14172B] rounded-[30px] mx-auto mt-3">
        {popularPairs.map((item, index) => (
          <img key={index} className="h-5 w-5 rounded-full" src={item} />
        ))}
      </div>
      <div className="text-center text-xs h-[31px] text-[#5A5F7D] font-semibold flex justify-center items-center">
        Popular pairs
      </div>
    </div>
  );
};

export default Card;
