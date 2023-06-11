import { useEffect, useState } from 'react';
import { NextPage } from 'next';

import { Layout } from '../../comonents/layouts';
import { NoFavorites } from '../../comonents/ui';
import { localFavorite } from '../../utils';
import { Card, Grid } from '@nextui-org/react';
import { FavoritePokemons } from '../../comonents/pokemon';

export const FavoritesPage: NextPage = () => {

  const [favoritesPokemos, setFavoritesPokemos] = useState<number[]>([]);

  useEffect(() => {
    setFavoritesPokemos( localFavorite.pokemons() );
  }, [])
  

  return (
    <Layout>
      {
        favoritesPokemos.length === 0 
        ? <NoFavorites />
        : <FavoritePokemons pokemons={ favoritesPokemos }/>
      }
    </Layout>
  )
}


export default FavoritesPage;
