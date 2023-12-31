import { NextPage, GetStaticProps } from 'next';
import { Grid } from '@nextui-org/react';

import { pokeApi } from '../api';
import { Layout } from '../comonents/layouts';
import { PokemonListResponse, SmallPokemon } from '../interfaces';
import { PokemonCard } from '../comonents/pokemon/PokemonCard';

interface Props {
  pokemons: SmallPokemon[];
}

const HomePage: NextPage<Props> = ({ pokemons }) => {

    return (
      <Layout>
        <Grid.Container gap={2} justify='flex-start'>
        {
          pokemons.map( pokemon => (
            <PokemonCard key={ pokemon.id } pokemon={pokemon} />
          ))
        }
        
        </Grid.Container>
      </Layout>
    );
}



export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151');

  const pokemons: SmallPokemon[] = data.results.map( (p, index) => ({
    ...p,
    id: index + 1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${index + 1}.svg`,
  }));

  return {
    props: {
      pokemons
    }
  }
}

export default HomePage
