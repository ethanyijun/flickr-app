import React from "react";
import { Dispatch } from "redux";
import { useDispatch } from "react-redux";
import jsonp from "jsonp";
import { UPDATE_PHOTOS } from "../../constants/photoConstants";
import debounce from "lodash.debounce";

const Search: React.FC<PropTypes> = () => {
	const dispatch: Dispatch<any> = useDispatch();

	const fetchData = (searchTerm = "") => {
		let apiURL = `https://api.flickr.com/services/feeds/photos_public.gne?format=json`;
		if (searchTerm) apiURL = apiURL + `&tags=${searchTerm}`;
		jsonp(apiURL, { name: "jsonFlickrFeed" }, (err, data) => {
			if (err) {
				console.log(err);
			} else {
				dispatch({
					type: UPDATE_PHOTOS,
					photos: data.items
				});
			}
		});
		console.log("got the data!");
	};
	const fechDataWrapperFunc = (e: React.ChangeEvent<HTMLInputElement>) =>
		fetchData(e.target.value);
	const debouncedOnChange = debounce(fechDataWrapperFunc, 600);

	return (
		<input type="text" name="search" id="search" onChange={debouncedOnChange} />
	);
};
type PropTypes = {};
export default Search;
