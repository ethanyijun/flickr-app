import React from "react";
import { Link } from "react-router-dom";
import { findPhotoId } from "../utils";

const PhotoItem: React.FC<PropTypes> = ({ photo }) => {
	return (
		<div>
			{photo && (
				<div className="photo-wrapper">
					<div className="image-wrapper">
						<Link to={`/photos/${findPhotoId(photo.link)}`}>
							<img src={photo.media.m} alt="" />
						</Link>
					</div>
					<div className="photo-details-wrapper">
						<h2>{photo.title}</h2>
						<div className="photo-details">
							<div className="test">{`Author: ${photo.author}`}</div>

							<div>{`Date: ${photo.date_taken}`}</div>
							<div className="test">{`Tags: ${photo.tags}`}</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};
type PropTypes = {
	photo?: IPhoto;
};
export default PhotoItem;
