import React from "react";
import { useSelector, shallowEqual } from "react-redux";
import PhotoItem from "../PhotoItem/PhotoItem";
import Search from "../Search/search";

const PhotoList: React.FC<PropTypes> = () => {
	const photos: readonly IPhoto[] = useSelector(
		(state: PhotoListState) => state.photos,
		shallowEqual
	);

	return (
		<>
			<Search />
			{photos &&
				photos.map((photo: IPhoto, index: number) => (
					<PhotoItem key={index} photo={photo} />
				))}
		</>
	);
};
type PropTypes = {};
export default PhotoList;
