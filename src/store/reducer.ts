import * as actionTypes from "../constants/photoConstants";

const initialState: PhotoListState = {
	photos: []
};

const reducer = (
	state: PhotoListState = initialState,
	action: PhotosAction
): PhotoListState => {
	switch (action.type) {
		case actionTypes.UPDATE_PHOTOS:
			return {
				photos: action.photos
			};
	}
	return state;
};

export default reducer;
