import { makeAutoObservable } from 'mobx';
import React, { createContext, useContext } from 'react';
import { TBook } from '../types/book.type';

class BookCatalogStore {
  books: Array<TBook> = [];

  constructor () {
    makeAutoObservable(this);
  }

  async fetchBooks () {
    this.books = [
      {
        id: 'z23e35',
        title: 'Love and Peace',
        year: 1982,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc semper finibus augue, id suscipit est vestibulum quis. Praesent pharetra egestas tincidunt. Sed fringilla tristique urna, ac ullamcorper orci suscipit ac. Donec vitae elementum est. Duis semper neque vitae pulvinar pellentesque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam porttitor fringilla felis, id imperdiet urna gravida eu. Donec mattis erat a est iaculis gravida. In mi lectus, condimentum et orci sit amet, consectetur ullamcorper massa. Phasellus tincidunt egestas quam. Nunc non risus elit. Nunc pharetra leo eget eros eleifend tincidunt. Ut elementum dolor nunc, non cursus dolor consectetur nec. Ut convallis a nibh id dictum. Fusce aliquam elit ac rutrum lacinia.'
      },
      {
        id: 'h56fe3',
        title: 'Cooking With Spice',
        year: 1992,
        description: 'Fusce quis mauris ligula. Nunc turpis augue, aliquet id ipsum sed, commodo pharetra sem. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi ante sapien, lobortis vel pharetra eu, sodales vel magna. Aliquam sit amet tellus sagittis, laoreet elit auctor, sagittis nulla. In hac habitasse platea dictumst. Aenean bibendum rhoncus ultrices. Duis lectus erat, tincidunt ac tincidunt id, pulvinar ut magna. In eget aliquet justo. Vivamus ut metus sollicitudin, molestie purus eu, pretium magna. Nulla rhoncus lacus eu faucibus euismod. Nunc tincidunt iaculis ipsum sit amet vehicula. Fusce hendrerit neque in libero accumsan interdum. Mauris enim erat, luctus et posuere quis, vestibulum sit amet nunc.'
      },
      {
        id: '8s38r0',
        title: 'A Trilogy',
        year: 1930,
        description: 'Morbi tempor luctus ante sed euismod. Ut leo eros, consectetur non nulla vel, porta laoreet libero. Ut a augue vitae sem fermentum aliquet in nec ante. Donec at lorem nec arcu condimentum laoreet id in orci. Suspendisse lobortis nec risus id placerat. Ut est mi, vehicula a erat mattis, dictum fermentum nunc. Aenean pulvinar diam at elit tincidunt aliquet. Vestibulum interdum justo id nulla egestas ullamcorper. Morbi id cursus nisi, sit amet posuere velit. Aenean ut est non tellus iaculis dignissim eget eu enim. Vivamus fringilla consequat tellus quis interdum. Suspendisse gravida sit amet turpis eu aliquam. Nulla aliquam fringilla justo consequat fermentum.'
      }
    ];
  }
}

const StoreContext = createContext<BookCatalogStore>(new BookCatalogStore());

const StoreProvider: React.FunctionComponent<{ store: BookCatalogStore }> = ({ store, children }) => {
  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};

const useStore = () => {
  return useContext(StoreContext);
};

export { BookCatalogStore, StoreProvider, useStore };
