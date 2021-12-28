import React, { useEffect, useState } from "react";
import { shallowEqual, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { findPhotoId } from "../utils";

const PhotoDetail: React.FC<PropTypes> = () => {
	const { id } = useParams();
	const [selectedPhoto, setSelectedPhoto] = useState<IPhoto>();
	const [selectedPhotoDescription, setSelectedPhotoDescription] = useState("");
	const photos: readonly IPhoto[] = useSelector(
		(state: PhotoListState) => state.photos,
		shallowEqual
	);

	useEffect(() => {
		const getPhoto = (id: string) => {
			return photos.filter((item) => id === findPhotoId(item.link))[0] || null;
		};
		if (id) {
			const fetchPhoto = getPhoto(id);
			setSelectedPhoto(fetchPhoto);
			if (fetchPhoto?.description) {
				const descriptionParagraphs =
					fetchPhoto?.description.match(/<p>(.*?)<\/p>/g);
				if (descriptionParagraphs) {
					const mappedValues = descriptionParagraphs.map(function (val) {
						return val.replace(/<\/?p>/g, "");
					});
					if (mappedValues.length === 3)
						setSelectedPhotoDescription(mappedValues[2]);
				}
			}
		}
		return () => {};
	}, [id, photos]);
	return (
		<>
			{selectedPhoto && (
				<Link className="back-btn" to="/">
					Back
				</Link>
			)}
			<div className="photo-content-wrapper">
				{selectedPhoto && (
					<div className="photo-content">
						<div>
							<img src={selectedPhoto.media.m} alt="" />
						</div>
						<div className="photo-descriptions">
							<h2>{`Title: ${selectedPhoto.title}`}</h2>
							<p>{`Author: ${selectedPhoto.author}`}</p>
							<p>{`Description: ${
								selectedPhotoDescription
									? selectedPhotoDescription
									: "No Description"
							}`}</p>
							<p>{`Took on: ${selectedPhoto.date_taken}`}</p>
						</div>
					</div>
				)}
			</div>
		</>
	);
};
type PropTypes = {};
export default PhotoDetail;
