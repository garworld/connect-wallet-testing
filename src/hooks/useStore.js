import { create } from 'zustand';

export const useWalletStore = create((set) => ({
  connectedAddress: null,
  setConnectedAddress: (data) => set(() => ({ connectedAddress: data })),
}));
