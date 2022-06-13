
import { Image, keyframes, usePrefersReducedMotion } from '@chakra-ui/react'

const spin = keyframes`
  from { transform: rotate(0deg);}
  to { transform: rotate(360deg);}
`;

const Profile = props => {

  const prefersReducedMotion = usePrefersReducedMotion();
  const animation = prefersReducedMotion
    ? undefined
    : `${spin} infinite 20s linear`;

  return <Image animation={animation} {...props} />
}

export default Profile
