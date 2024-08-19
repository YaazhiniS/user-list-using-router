/* eslint-disable react/prop-types */

const values={
  1:{name:"Adhitya",Details:"Adithya Menon was born in Mumbai into a Malayali family hailing from Palghat in Kerala. He spent his childhood in Dubai, UAE till the age of 18. He finished his schooling from the Our Own English High School Dubai and then went back to India. He earned his bachelor's degree in engineering from the M. S. Ramaiah Institute of Technology in Bangalore."},
  2:{name:"Adhitya",Details:"Vishnu (/ˈvɪʃnuː/; Sanskrit: विष्णु, lit. 'The Pervader', IAST: Viṣṇu, pronounced [ʋɪʂɳʊ]), also known as Narayana and Hari, is one of the principal deities of Hinduism. He is the supreme being within Vaishnavism, one of the major traditions within contemporary Hinduism.[14][15].Vishnu is known as The Preserver within the Trimurti, the triple deity of supreme divinity that includes Brahma and Shiva.[16][17] In Vaishnavism, Vishnu is the supreme Lord who creates, protects, and transforms the universe.Tridevi is stated to be the energy and creative power (Shakti) of each, with Lakshmi being the equal complementary partner of Vishnu.[18] He is one of the five equivalent deities in Panchayatana puja of the Smarta tradition of Hinduism.[17]"},
  3:{name:"Rishi",Details:"Rishi Sunak is a British politician who served as Prime Minister of the United Kingdom from 2022 to 2024. He has been Leader of the Conservative Party since October 2022; after the general election in July 2024, he became Leader of the Opposition."}
}

const NameList=({selectedItem})=>{

  console.log('selectedItem', selectedItem)

  const {name ="", Details=""}=values[selectedItem] || {};
  return(
    <div>
      <h2>{name}</h2>
      <h2>{Details}</h2>
    </div>
  );

}
export default NameList;  
  
  