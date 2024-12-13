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
import { StyledConnectWallet } from '../../styled';
import allUserList from '../../../final-data-perchain.json';

function ClaimToken(props) {
  const { width } = UseScreenSize();

  const { address } = useAccount();

  let tokenAmountList = {};
  let userData = null;

  // console.log({ allUserList });

  let amountPerChain = [
    ['arbAmount', null],
    ['ethAmount', null],
    ['avaxAmount', null],
    ['bscAmount', null],
    ['polAmount', null],
    ['metothAmount', null],
  ];
  const chainTitles = {
    arbAmount: 'Arbitrum',
    ethAmount: 'Ethereum',
    avaxAmount: 'Avalanche',
    bscAmount: 'Binance Smart Chain',
    polAmount: 'Polygon',
    metothAmount: 'Metis & Other Chains',
  };
  if (address) {
    console.log({ address });
    // Cari data berdasarkan address yang terhubung
    userData = allUserList.find(
      (item) =>
        Object.keys(item)[0].toLocaleLowerCase() === address.toLocaleLowerCase()
    );
    console.log({ userData });

    // Simpan hanya nilai di dalam address ke state
    if (userData) {
      const rawData = userData[address];
      const convertedData = Object.entries(rawData).reduce(
        (acc, [key, value]) => {
          acc[key] = parseFloat(value.replace(',', '.'));
          return acc;
        },
        {}
      );
      tokenAmountList = convertedData;
      // console.log({ tokenAmountList });

      amountPerChain = Object.entries(tokenAmountList).filter(([key]) =>
        [
          'arbAmount',
          'ethAmount',
          'avaxAmount',
          'bscAmount',
          'polAmount',
          'metothAmount',
        ].includes(key)
      );
    }
  }
  // console.log({ amountPerChain });

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
            {/* <div className="claim-button clickable">
              <p>Claim Token</p>
            </div> */}
          </div>
          <div className="outer-board">
            <div className="inner-board">
              <div className="header">
                <div className="ellipse-logo">
                  <img src={images.elevateGlass} />
                </div>
                <p className="eligible">You Received!</p>
                <p className="eligible amount">
                  {userData
                    ? `${parseFloat(tokenAmountList ? tokenAmountList?.totalAmount : 0).toFixed(2)} ELVT`
                    : `-`}
                </p>
              </div>
              {/* {width > 850 && <p>Eligible tokens as Relay Holder:</p>} */}
              <div className="task-box">
                {amountPerChain.map(([key, amount]) => {
                  return (
                    <div className="task" key={key}>
                      <p className="task-amount">
                        <p className="task-title">{`Snapshot on ${chainTitles[key]}`}</p>
                        {userData ? parseFloat(amount.toFixed(2)) : '-'}{' '}
                        <span>{userData ? 'ELVT' : null}</span>
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
