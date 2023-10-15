import { FlatList, Text, VStack } from 'native-base';

import { HomeHeader } from '@components/HomeHeader';
import { MyProductsCard } from '@components/MyProductsCard';
import { SearchBar } from '@components/SearchBar';
import { ProductCard } from '@components/ProductCard';

export function Home() {
  const products = [
    {
      id: '1',
      title: 'Tênis vermelho',
      imgUrl: 'https://www.futilish.com/wp-content/uploads/2018/02/resize_unnamed.jpg',
      userImgUrl: 'https://images.unsplash.com/photo-1610737241336-371badac3b66?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fHVzZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
      price: 79.90,
      isNew: false,
    },
    {
      id: '2',
      title: 'Bicicleta',
      imgUrl: 'https://static3.tcdn.com.br/img/img_prod/394779/bicicleta_26_gts_m1_fat_bike_freio_hidraulico_7v_tsi_suspensao_i_vtec_fat_3725_variacao_12237_1_a108f4d9148a848dff7b94d59ae540f7.jpg',
      userImgUrl: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
      price: 2500.00,
      isNew: true,
    },
    {
      id: '3',
      title: 'Cômoda 4 gavetas',
      imgUrl: 'https://static.mobly.com.br/p/Moval-Comoda-4-Gavetas-MS9133-Castanho-Wood-Moval-3554-6010801-2-zoom.jpg',
      userImgUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
      price: 200.00,
      isNew: false,
    },
    {
      id: '4',
      title: 'Sofá 1.80cm',
      imgUrl: 'https://http2.mlstatic.com/D_NQ_NP_882399-MLB69815214733_062023-O.webp',
      userImgUrl: 'https://images.unsplash.com/photo-1522228115018-d838bcce5c3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzh8fHVzZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
      price: 1400.00,
      isNew: true,
    },
    {
      id: '5',
      title: 'Camiseta academia',
      imgUrl: 'https://a-static.mlcdn.com.br/1500x1500/camiseta-academia-shap-life-preciso-de-creatina-corrida-gym/sevengroup/16003483989/3b96814594c3e8490cf34bef884d0aec.jpeg',
      userImgUrl: 'https://images.unsplash.com/photo-1529758146491-1e11fd721f77?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTZ8fHVzZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
      price: 49.90,
      isNew: true,
    },
  ];

  return (
    <VStack flex={1} safeAreaTop px={6}>
      <HomeHeader />

      <Text fontSize='sm' color='gray.500' mb={3}>
        Seus produtos anunciados para venda
      </Text>

      <MyProductsCard />

      <Text fontSize='sm' color='gray.500' mb={3}>
        Compre produtos variados
      </Text>

      <SearchBar />

      <FlatList
        numColumns={2}
        key={2}
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ProductCard
            title={item.title}
            imgUrl={item.imgUrl}
            userImgUrl={item.userImgUrl}
            price={item.price}
            isNew={item.isNew}
            onPress={() => {}}
          />
        )}
        columnWrapperStyle={{
          justifyContent: 'space-between',
          marginBottom: 24
        }}
        showsVerticalScrollIndicator={false}
      />

    </VStack>
  );
}