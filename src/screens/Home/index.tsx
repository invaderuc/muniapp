import React, {useState} from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import PaginationButtons from '../../components/PaginationButtons';
import ListCharacters from '../../components/ListDenuncias';
const Index = () => {
  const [page, setPage] = useState(1);

  return (
    <SafeAreaView>
      <ScrollView>
        <ListCharacters page={page} />
        <PaginationButtons setPage={setPage} page={page} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Index;
