import { Button } from '@chakra-ui/react';

document.body.style = 'background: grey;';

function LoginButton() {
  return (
    <div className="LoginButton">
      <Button colorScheme='blue' size='lg'>Log in with Reddit</Button>
    </div>
  )
}

function HomePage() {
  return (
    <div className='Background'>
      <div className="HomePage">
        <LoginButton></LoginButton>
      </div>
    </div>
  )
}

export default HomePage;
