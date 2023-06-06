import { create } from "zustand"
import { TABS } from "./constants/tabs"

export const useStore = create((set) => ({
    bookmarks: [],
    setBookmarks: (bookmarks) => set(() => ({ bookmarks: bookmarks })),
    apiKey: "",
    setAPIKey: (apiKey) => set(() => ({ apiKey: apiKey })),
    showAccountMenu: false,
    setShowAccountMenu: (showAccountMenu) => set(() => ({ showAccountMenu: showAccountMenu })),
    showAPIKeyInputModal: false,
    setShowAPIKeyInputModal: (showAPIKeyInputModal) => set(() => ({ showAPIKeyInputModal: showAPIKeyInputModal })),
    trendingShows: [],
    setTrendingShows: (trendingShows) => set(() => ({ trendingShows: trendingShows })),
    recommendedShows: [],
    setRecommendedShows: (recommendedShows) => set(() => ({ recommendedShows: recommendedShows })),
    activeTab: TABS[0],
    setActiveTab: (activeTab) => set(() => ({ activeTab: activeTab })),
}))
