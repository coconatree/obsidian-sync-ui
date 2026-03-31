import { create } from 'zustand'

export const useAppStore = create<AppStore>((set) => ({
    isSidebarOpen: false,
    setIsSidebarOpen: (v: boolean) => set((_) => ({ isSidebarOpen: v }))
}))
