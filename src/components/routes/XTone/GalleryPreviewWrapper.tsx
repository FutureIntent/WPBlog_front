import GalleryPreview from '@components/routes/XCryoOriginal/GalleryPreview';
import { graphql, useStaticQuery } from 'gatsby';

const query = graphql`
    query xtoneGalleryImages {
        img1: file(relativePath: { eq: "web_gallery/xtone/gallery-image-09.jpg" }) {
            childImageSharp {
                gatsbyImageData
            }
        }
        img2: file(relativePath: { eq: "web_gallery/xtone/gallery-image-35.jpg" }) {
            childImageSharp {
                gatsbyImageData
            }
        }
        img3: file(relativePath: { eq: "web_gallery/xtone/gallery-image-36.jpg" }) {
            childImageSharp {
                gatsbyImageData
            }
        }
        img4: file(relativePath: { eq: "web_gallery/xtone/gallery-image-38.jpg" }) {
            childImageSharp {
                gatsbyImageData
            }
        }
        img5: file(relativePath: { eq: "web_gallery/xtone/gallery-image-39.jpg" }) {
            childImageSharp {
                gatsbyImageData
            }
        }
        img6: file(relativePath: { eq: "web_gallery/xtone/gallery-image-40.jpg" }) {
            childImageSharp {
                gatsbyImageData
            }
        }
        img7: file(relativePath: { eq: "web_gallery/xtone/gallery-image-41.jpg" }) {
            childImageSharp {
                gatsbyImageData
            }
        }
    }
`;

const GalleryPreviewWrapper = () => {
    const { ...images } = useStaticQuery(query);

    return <GalleryPreview images={images} />;
};

export default GalleryPreviewWrapper;
