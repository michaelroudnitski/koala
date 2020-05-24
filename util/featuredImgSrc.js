/**
 * retrieves the featured image's src uri
 * @param {JSON} postData WordPress post JSON
 */
export default function featuredImgSrc(postData) {
  return (
    postData &&
    postData["_embedded"] &&
    postData["_embedded"]["wp:featuredmedia"] &&
    postData["_embedded"]["wp:featuredmedia"][0].source_url
  );
}
