import React, { useEffect, useState } from "react";
import { shallowEqual, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { findPhotoId } from "../utils";

const PhotoDetail: React.FC<PropTypes> = () => {
	const { id } = useParams();
	const [selectedPhoto, setSelectedPhoto] = useState<IPhoto>();
	const photos: readonly IPhoto[] = useSelector(
		(state: PhotoListState) => state.photos,
		shallowEqual
	);

	useEffect(() => {
		const getPhoto = (id: string) => {
			return photos.filter((item) => id === findPhotoId(item.link))[0] || null;
		};
		if (id) setSelectedPhoto(getPhoto(id));
		return () => {};
	}, [id, photos]);
	return (
		<>
			<Link to="/">Back</Link>
			<div>{selectedPhoto && <div>{selectedPhoto.author}</div>}</div>;
		</>
	);
};
type PropTypes = {};
export default PhotoDetail;
