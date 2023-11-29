import { type FC } from 'react';

type MiniWalletProps = {};

const MiniWallet: FC<MiniWalletProps> = () => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="w-[320px] bg-black/50 flex flex-col">
        <div className="header">
          <div>
            0xabcdefghijklmnopqrstuvwxyz
          </div>
          <div>
            <span>1,205 USD</span>
          </div>
        </div>
        <div className="body">
          <div>
            <div>
              <div className="token-image" />
            </div>
            <div>
              <span className="token-title">ETH</span>
              <span className="token-price">≈ 2,048 USD</span>
            </div>
            <div>
              <span className="token-balance">0,1567</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiniWallet;
