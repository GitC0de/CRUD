import { create } from "zustand";

const useStore = create((set) => ({
  announce: [],
  addAnnouncement: (title, content, date) =>
    set((state) => ({
      announce: [...state.announce, { id:state.announce.length == 0 ? 0 : state.announce[state.announce.length-1].id+1, title, content, date }],
    })),

  removeAnnouncement: (id) =>   
    set((state) => ({ announce: state.announce.filter((e) => e.id !== parseInt(id)) })),

}));

export default useStore;