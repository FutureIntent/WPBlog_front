import GalleryPreview from '@components/routes/XCryoOriginal/GalleryPreview';
import { graphql, useStaticQuery } from 'gatsby';

const query = graphql`
    query imagesQuery {
        img1: file(relativePath: { eq: "web_gallery/xcryo/gallery-image-01.jpg" }) {
            childImageSharp {
                gatsbyImageData
            }
        }
        img2: file(relativePath: { eq: "web_gallery/xcryo/gallery-image-02.jpg" }) {
            childImageSharp {
                gatsbyImageData
            }
        }
        img3: file(relativePath: { eq: "web_gallery/xcryo/gallery-image-03.jpg" }) {
            childImageSharp {
                gatsbyImageData
            }
        }
        img4: file(relativePath: { eq: "web_gallery/xcryo/gallery-image-04.jpg" }) {
            childImageSharp {
                gatsbyImageData
            }
        }
        img5: file(relativePath: { eq: "web_gallery/xcryo/gallery-image-08.jpg" }) {
            childImageSharp {
                gatsbyImageData
            }
        }
        img6: file(relativePath: { eq: "web_gallery/xcryo/gallery-image-10.jpg" }) {
            childImageSharp {
                gatsbyImageData
            }
        }
        img7: file(relativePath: { eq: "web_gallery/xcryo/gallery-image-11.jpg" }) {
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
