import React from 'react';
import ExpandableMenu from '../ExpandableMenu';

export default function NumPlayersMenu(){
  const menuItems = [
  {
    onPress: () => console.log('Two players'),
    image: require('../../public/assets/mana/blue_mana.png')
  },
  {
    onPress: () => console.log('Three players'),
    image: require('../../public/assets/mana/blue_mana.png')
  },
  {
    onPress: () => console.log('Four players'),
    image: require('../../public/assets/mana/blue_mana.png')
  },
];

  return (
    <ExpandableMenu
      menuIcon={require('../../public/assets/mana/blue_mana.png')}
      menuItems={menuItems} />
  )
};

// const styles = StyleSheet.create({
//   container: {
//     alignSelf: 'flex-start',
    // backgroundColor: 'rgb(40, 40, 40)',
//     height: 200,
//     justifyContent: 'space-around'
//   },
//   button: {
//     height: 30,
//     width: 30,
//   }
// });
