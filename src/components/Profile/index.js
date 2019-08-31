import React from 'react';
import PropTypes from 'prop-types';
import { GoLocation, GoPackage, GoOrganization } from 'react-icons/go';

import Image from '~/components/Image';
import { Container } from './styles';

export default function Profile({ profile }) {
  return (
    profile && (
      <Container>
        <Image src={profile.avatar_url} alt={profile.login} />
        <h1>{profile.name}</h1>
        <h2>@{profile.login}</h2>
        <ul>
          <li>
            <GoLocation size={16} /> {profile.location || 'no location'}
          </li>
          <li>
            <GoPackage size={16} /> {profile.public_repos || 0}
          </li>
          <li>
            <GoOrganization size={16} />
            {profile.followers || 0}
          </li>
        </ul>
      </Container>
    )
  );
}

Profile.propTypes = {
  profile: PropTypes.shape({
    avatar_url: PropTypes.string,
    name: PropTypes.string,
    login: PropTypes.string,
    company: PropTypes.string,
    location: PropTypes.string,
    public_repos: PropTypes.number,
    followers: PropTypes.number,
  }).isRequired,
};
