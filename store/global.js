import { action } from "easy-peasy";

export const Global = {
  getStarted: false,
  setGetStarted: action((state, payload) => {
    state.getStarted = payload;
  }),
  globalSidebar: false,
  setGlobalSidebar: action((state, payload) => {
    state.globalSidebar = payload;
  }),
  adminSidebar: false,
  setAdminSidebar: action((state, payload) => {
    state.adminSidebar = payload;
  }),
  setupWizard: false,
  setSetupWizard: action((state, payload) => {
    state.setupWizard = payload;
  }),
  writeModal: false,
  setWriteModal: action((state, payload) => {
    state.writeModal = payload;
  }),
  language: "english",
  setLanguage: action((state, payload) => {
    state.language = payload;
  }),
};
