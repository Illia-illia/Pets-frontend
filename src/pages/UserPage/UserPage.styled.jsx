import styled from 'styled-components';

export const UserContainer = styled.main`
  font-family: ${p => p.theme.fonts.body};
  font-style: normal;
  padding-top: 60px; // check this
  padding-bottom: 80px; // check this
  padding-left: 20px;
  padding-right: 20px;
  /* margin-left: auto;
  margin-right: auto; */

  @media ${p => p.theme.device.tablet} {
    padding-top: 80px; // check this
    padding-bottom: 100px; // check this
    padding-left: 32px;
    padding-right: 32px;
  }

  @media ${p => p.theme.device.desktop} {
    display: flex;
    padding-top: 50px; // check this
    padding-bottom: 40px; // check this
    padding-left: 16px;
    padding-right: 16px;
  }
`;

export const UserInfoWrap = styled.div`
  /* display: flex; */
`;

export const TitleUser = styled.h2`
  display: flex;
  align-items: center;

  margin-bottom: 18px;

  font-family: inherit;
  font-style: inherit;
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes[4]}px;
  line-height: 1.35;
  letter-spacing: 0.04em;

  color: #111111;

  @media ${p => p.theme.device.tablet} {
    font-size: 28px;
    line-height: 1.36;

    margin-bottom: 40px;
  }

  @media ${p => p.theme.device.desktop} {
    margin-bottom: 40px;
  }
`;

// //You can delete or modify styles below before importing your's pet cards section styles
export const PetSection = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  gap: 20px;
`;

export const PetContainer = styled.div`
  display: inline-block;

  height: 400px;
  width: 100%;

  background-color: #ffffff;
  box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
  border-radius: ${p => p.theme.radii.normal};
`;

export const TitleWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media ${p => p.theme.device.desktop} {
    font-size: 28px;
    line-height: 38px;

    margin-bottom: 24px;
  }
`;

export const TitlePets = styled.h2`
  display: flex;
  align-items: center;

  font-family: inherit;
  font-style: inherit;
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes[4]}px;
  line-height: 27px;
  letter-spacing: 0.04em;

  color: #111111;

  @media ${p => p.theme.device.desktop} {
    font-size: 28px;
    line-height: 38px;
  }
`;
// ///////////////////////////////////////////////