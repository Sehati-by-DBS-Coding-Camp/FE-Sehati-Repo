import * as profileModel from "./profilModel";

export function createProfilPresenter(viewCallbacks) {
  const loadUser = async () => {
    try {
      viewCallbacks.onLoadStart();
      const response = await profileModel.fetchUserProfile();
      const userData = response.data; 
      viewCallbacks.onLoadSuccess(userData);
    } catch (error) {
      viewCallbacks.onLoadError(error.message);
    }
  };

  const updateUser = async (data) => {
    try {
      const response = await profileModel.updateUserProfile(data);
      const updatedUser = response.data; 
      viewCallbacks.onUpdateSuccess(updatedUser);
    } catch (error) {
      viewCallbacks.onUpdateError(error.message);
    }
  };

  return {
    loadUser,
    updateUser,
  };
}
