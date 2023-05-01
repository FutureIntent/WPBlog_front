import GalleryPreview from '@components/routes/XCryoOriginal/GalleryPreview';
import { graphql, useStaticQuery } from 'gatsby';

const query = graphql`
    query cabinGalleryQuery {
        img1: file(relativePath: { eq: "web_gallery/cabin/gallery-image-23.jpg" }) {
            childImageSharp {
                gatsbyImageData
            }
        }
        img2: file(relativePath: { eq: "web_gallery/cabin/gallery-image-24.jpg" }) {
            childImageSharp {
                gatsbyImageData
            }
        }
        img3: file(relativePath: { eq: "web_gallery/cabin/gallery-image-26.jpg" }) {
            childImageSharp {
                gatsbyImageData
            }
        }
        img4: file(relativePath: { eq: "web_gallery/cabin/gallery-image-42.jpg" }) {
            childImageSharp {
                gatsbyImageData
            }
        }
        img5: file(relativePath: { eq: "web_gallery/gallery-image-19.jpg" }) {
            childImageSharp {
                gatsbyImageData
            }
        }
        img6: file(relativePath: { eq: "web_gallery/gallery-image-21.jpg" }) {
            childImageSharp {
                gatsbyImageData
            }
        }
        img7: file(relativePath: { eq: "web_gallery/gallery-image-22.jpg" }) {
            childImageSharp {
                gatsbyImageData
            }
        }
    }
`;

const GalleryPreviewWrapper = () => {
    const { ...images } = useStaticQuery(query);

    return (
        <section>
            <GalleryPreview images={images} />
        </section>
    );
};

export default GalleryPreviewWrapper;
