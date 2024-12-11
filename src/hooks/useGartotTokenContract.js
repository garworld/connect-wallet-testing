import { CONTRACT_ADDRESS, CONTRACT_ABI } from '../constants/constant';
import { sepolia } from 'viem/chains';
import { readContract } from 'wagmi/actions';
import { config } from '../config';
import { useReadContract } from 'wagmi';

export function useGartotTokenRead(functionName, args = []) {
  const { data: balance, error } = useReadContract({
    abi: CONTRACT_ABI,
    address: CONTRACT_ADDRESS,
    functionName: functionName,
    args: args,
  });

  if (error) {
    console.error(error);
  }

  return balance;
}

export async function useGartotTokenWrite(
  writeContractAsync,
  functionName,
  args = []
) {
  console.log({ functionName });

  const {
    data: result,
    error,
    isPending,
  } = await writeContractAsync({
    chainId: sepolia.id,
    abi: CONTRACT_ABI,
    address: CONTRACT_ADDRESS,
    functionName: functionName,
    args: args,
  });

  if (isPending) {
    console.log('Loading...');
  }

  if (error) {
    console.error(error.message);
  }

  console.log({ result });

  return result;
}
