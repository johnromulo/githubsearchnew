import React, { useMemo } from 'react';
import { parseISO, formatRelative } from 'date-fns';
import pt from 'date-fns/locale/pt';

import PropTypes from 'prop-types';
import Image from '~/components/Image';

import { Container } from './styles';

export default function Commit({ cmt }) {
  const dateParsed = useMemo(() => {
    return formatRelative(parseISO(cmt.commit.author.date), new Date(), {
      locale: pt,
      addSuffix: true,
    });
  }, [cmt.commit.author.date]);

  return (
    <Container>
      <Image
        src={
          cmt.author && cmt.author.avatar_url ? cmt.author.avatar_url : 'nouser'
        }
        alt={cmt.author && cmt.author.login ? cmt.author.login : 'nouser'}
      />
      <p>{cmt.commit.message}</p>
      <div>
        <h1>{cmt.commit.author.name}</h1>
        <span>{dateParsed}</span>
      </div>
    </Container>
  );
}

Commit.propTypes = {
  cmt: PropTypes.shape({
    sha: PropTypes.string,
    author: PropTypes.shape({
      avatar_url: PropTypes.string,
      login: PropTypes.string,
    }),
    commit: PropTypes.shape({
      message: PropTypes.string,
      author: PropTypes.shape({
        name: PropTypes.string,
        date: PropTypes.string,
      }),
    }),
  }).isRequired,
};
