import styled from 'styled-components';
import LogoDefalut from '~/components/Logo';
import SearchDefalut from '~/components/Search';

export const Logo = styled(LogoDefalut).attrs({
  size: '60px',
})``;

export const Search = styled(SearchDefalut).attrs({
  styles: {
    width: '580px',
  },
})``;

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;
