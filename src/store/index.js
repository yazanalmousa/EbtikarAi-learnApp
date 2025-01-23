import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useVideoStore = create(
  persist(
    (set) => ({
      videos: [],

      addNewVideo: (video) =>
        set((state) => ({ videos: [...state.videos, video] })),

      deleteVideoById: (id) =>
        set((state) => ({
          videos: state.videos.filter((video) => video.id !== id),
        })),

      modifyVideoDetails: (id, updatedData) =>
        set((state) => ({
          videos: state.videos.map((video) =>
            video.id === id ? { ...video, ...updatedData } : video
          ),
        })),

      setVideos: (newVideos) => set({ videos: newVideos }),
    }),
    {
      name: "video-storage",
    }
  )
);

// export const useSavedVideosStore = create(
//   persist(
//     (set) => ({
//       savedVideos: [],

//       addSavedVideo: (video) =>
//         set((state) => ({ savedVideos: [...state.savedVideos, video] })),

//       removeSavedVideo: (id) =>
//         set((state) => ({
//           savedVideos: state.savedVideos.filter((video) => video.id !== id),
//         })),

//       toggleSavedVideo: (video) =>
//         set((state) => {
//           const isSaved = state.savedVideos.some((v) => v.id === video.id);
//           if (isSaved) {
//             return {
//               savedVideos: state.savedVideos.filter((v) => v.id !== video.id),
//             };
//           } else {
//             return { savedVideos: [...state.savedVideos, video] };
//           }
//         }),
//     }),
//     {
//       name: "saved-videos-storage",
//     }
//   )
// );
