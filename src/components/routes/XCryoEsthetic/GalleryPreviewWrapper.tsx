import GalleryPreview from '@components/routes/XCryoOriginal/GalleryPreview';
import { graphql, useStaticQuery } from 'gatsby';

const query = graphql`
    query cryoEstethicGalleryImages {
        img1: file(relativePath: { eq: "web_gallery/mask/gallery-image-18.jpg" }) {
            childImageSharp {
                gatsbyImageData
            }
        }
        img2: file(relativePath: { eq: "web_gallery/mask/gallery-image-25.jpg" }) {
            childImageSharp {
                gatsbyImageData
            }
        }
        img3: file(relativePath: { eq: "web_gallery/mask/gallery-image-30.jpg" }) {
            childImageSharp {
                gatsbyImageData
            }
        }
        img4: file(relativePath: { eq: "web_gallery/mask/gallery-image-33.jpg" }) {
            childImageSharp {
                gatsbyImageData
            }
        }
        img5: file(relativePath: { eq: "web_gallery/mask/gallery-image-34.jpg" }) {
            childImageSharp {
                gatsbyImageData
            }
        }
        img6: file(relativePath: { eq: "web_gallery/gallery-image-28.jpg" }) {
            childImageSharp {
                gatsbyImageData
            }
        }
        img7: file(relativePath: { eq: "web_gallery/gallery-image-50.jpg" }) {
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
