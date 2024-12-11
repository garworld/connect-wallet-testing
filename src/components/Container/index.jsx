import images from '../../assets/images';
import UseScreenSize from '../../helpers/UseScreenSize';
import { StyledContainer, StyledLayout } from '../../Styled';

function Container({ children, withPaddingBottom }) {
  const { width } = UseScreenSize();

  return (
    <StyledContainer>
      <StyledLayout
        withpaddingbottom={withPaddingBottom == true ? true : undefined}
        width={width}
        svgBackground={images.svgBackground}
        svgBackgroundMobile={images.svgBackgroundMobile}
      >
        <div className="bubble">
          {width > 850 && (
            <>
              <img className="logo-8" src={images.image8} />
              <img className="logo-1" src={images.elevateBg} />
              <img className="logo-6" src={images.image6} />
            </>
          )}
          <img className="logo-9" src={images.image9} />
          <img className="logo-3" src={images.image3} />
          <img className="logo-10" src={images.image10} />
        </div>
        {children}
      </StyledLayout>
    </StyledContainer>
  );
}

export default Container;
