import React from 'react';
import Theme from './Theme';
import Register from './Register';


const Home = () => {
  return (
    <>
    <Theme>
<Register/>
      </Theme>
    </>
  );
};

export default Home;











// const ImgButton = styled.button<{ $hasImage: boolean }>`
//   ${({ $hasImage }) => $hasImage && css`
//     display: none;
//   `}
// `;

{
  /* <YearsOld $isHidden={isAgeOverflowing}>years old</YearsOld> */
}
