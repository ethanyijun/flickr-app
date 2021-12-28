export const findPhotoId = (url: string) => {
	return url.split("/").slice(-2)[0];
};
