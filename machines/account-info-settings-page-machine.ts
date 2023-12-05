import { createMachine } from "xstate";

export const machine = createMachine({
  id: "profileMachine",
  initial: "profile",
  states: {
    profile: {
      on: { REMOVE_PHOTO: "removePhoto",CHANGE_PROFILE_IMAGE_DIALOG_FROM_INITAL: "addProfileImage", BACK_TO_INITIAL_STATE:'profile' },
      
    },
    removePhoto: {
      on:{CHANGE_PROFILE_IMAGE_DIALOG: "addProfileImage"}
    },
    addProfileImage: {
      on:{CUSTOM_AVATAR_EDITOR: "customAvatarEditor"}
    },
    customAvatarEditor: {
      on:{GO_TO_CHANGE_PROFILE_IMAGE: "addProfileImage", BACK_TO_INITIAL:'profile'}
    },

  },
});

