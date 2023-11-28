import { type FC } from 'react';

type MiniWalletProps = {};

const MiniWallet: FC<MiniWalletProps> = () => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="w-[320px] bg-black/50 flex flex-col">
        <div className="header">
          <div className="w-full flex justify-center items-center p-2">
            0xabcdefghijklmnopqrstuvwxyz
          </div>
          <div className="w-full flex justify-center items-center h-4">
            <span>1,205 USD</span>
          </div>
        </div>
        <div className="token-list flex flex-col">
          <div className="w-full bg-white/40 p-2 flex justify-start items-center gap-2">
            <div className="w-full">
              <div className="w-3 h-3 rounded-full bg-red-200" />
            </div>
            <div className="w-full flex flex-col">
              <span className="text-sm text-yellow-300">ETH</span>
              <span className="text-sm text-white">≈ 2,048 USD</span>
            </div>
            <div className="w-full flex justify-end items-center">
              <span className="text-sm text-green-400/50">0,1567</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiniWallet;
