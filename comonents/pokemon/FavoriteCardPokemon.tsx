import { FC } from 'react';
import { Card, Grid } from '@nextui-org/react';
import { useRouter } from 'next/router';

interface Props {
    pokemonId: number
}

export const FavoriteCardPokemon: FC<Props> = ({ pokemonId }) => {

  const { push } = useRouter();

  const onFavoriteClicked = () => {
    push(`/pokemon/${pokemonId}`);
  }
  return (
    <Grid xs={6} sm={3} md={2} xl={ 1 } key={ pokemonId } onClick={ onFavoriteClicked} >  
      <Card isHoverable css={{ padding: 10 }}>
          <Card.Image 
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${ pokemonId }.svg`}
            width={'100px'}
            height={140}
          />
      </Card>
    </Grid>
  )
}
