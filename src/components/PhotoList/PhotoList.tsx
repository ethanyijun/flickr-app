import React from "react";
import PhotoItem from "../PhotoItem/PhotoItem";
import Search from "../Search/search";

const PhotoList: React.FC<PropTypes> = () => {
	return (
		<>
			<Search />
			<PhotoItem />
		</>
	);
};
type PropTypes = {};
export default PhotoList;
