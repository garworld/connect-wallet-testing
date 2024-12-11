import { useEffect, useState } from 'react';
import icons from '../../assets/icons';
import images from '../../assets/images';
import UseScreenSize from '../../helpers/UseScreenSize';
import {
  useGartotTokenRead,
  useGartotTokenWrite,
} from '../../hooks/useGartotTokenContract';
import {
  useAccount,
  useReadContract,
  useReadContracts,
  useWriteContract,
} from 'wagmi';
// import { sepolia } from 'viem/chains';
// import { sepolia } from '@wagmi/core/chains';
import { CONTRACT_ABI, CONTRACT_ADDRESS } from '../../constants/constant';
import { StyledConnectWallet } from '../../Styled';
import { useWalletStore } from '../../hooks/useStore';

function ClaimToken(props) {
  const { width } = UseScreenSize();
  const connectedAddress = useWalletStore((state) => state.connectedAddress);
  const taskList = [
    { task: 'Snapshot of Relay tokens in Wallet', amount: '3,000' },
    {
      task: 'Snapshot of Relay tokens in Staking Contract',
      amount: '1,000',
    },
    {
      task: 'Snapshot of Relay tokens in Liquidity Pool',
      amount: '2,500',
    },
    {
      task: 'Snapshot of Relay tokens in Farming Contract',
      amount: '1,500',
    },
  ];
  const { address } = useAccount();

  const { writeContractAsync } = useWriteContract();

  const claimHandle = async () => {
    try {
      const data = await useGartotTokenWrite(writeContractAsync, 'claim', []);
      console.log({ data });
    } catch (error) {
      console.log(error);
    }
  };

  const { data, error, isPending } = useReadContract({
    abi: CONTRACT_ABI,
    address: CONTRACT_ADDRESS,
    functionName: 'totalSupply',
    args: [],
    // chainId: sepolia.id,
  });
  let result = 'hello';

  if (isPending) {
    console.log('Loading...');
  }

  if (error) {
    result = `Error: ${error.message}`;
    console.log(error.message);
  }

  if (data) {
    console.log({ data });
    result = data;
  }

  return (
    <StyledConnectWallet
      union={images.union}
      unionBorder={images.unionBorder}
      subtract={images.subtract}
      ellipse={images.ellipse}
      header={icons.claimHeader}
      claimEllipse={images.claimEllipse}
      groupImage={images.groupImage}
      claimEllipseMobile={images.claimEllipseMobile}
      mode={props.mode}
      width={width}
    >
      <div className="content">
        <div className="union-group">
          {/* <div className="subtract"></div> */}
          {/* <div className="traps"></div> */}
          <div className="border">
            <div className="claim-button clickable">
              <p>Claim Token</p>
            </div>
          </div>
          <div className="outer-board">
            <div className="inner-board">
              <div className="header">
                <div className="ellipse-logo">
                  <img src={images.elevateGlass} />
                </div>
                <p className="eligible">You’re Eligible!</p>
                <p className="eligible amount">
                  {connectedAddress ? '8000 ELVT' : '-'}
                </p>
              </div>
              {width > 850 && <p>Eligible tokens as Relay Holder:</p>}
              <div className="task-box">
                {taskList.map((val) => {
                  return (
                    <div className="task">
                      <p className="task-title">{val.task}</p>
                      <p className="task-amount">
                        {connectedAddress ? val.amount : '-'}{' '}
                        <span>{connectedAddress ? 'ELVT' : ''}</span>
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </StyledConnectWallet>
  );
}

export default ClaimToken;
