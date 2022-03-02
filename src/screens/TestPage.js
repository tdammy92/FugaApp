import React, {useState,useEffect} from 'react';
import {View, Text, StyleSheet, ScrollView, FlatList, RefreshControl, SectionList} from 'react-native';

function TestPage() {
  const [Data, setData] = useState([
    {name: 'item 1'},
    {name: 'item 2'},
    {name: 'item 3'},
    {name: 'item 4'},
    {name: 'item 5'},
  ]);



  const [DataL, setDataL] = useState([
    {
        title:"Section 1",
        data:['item 1-1', 'item 1-2']
    },
    {
        title:"Section 1",
        data:['item 1-1', 'item 1-2']
    },
]);






  const [Refresh, setRefresh] = useState(false);

  function AddData() {
      const len = DataL.length;

      return {title: `Section ${len + 1}`, data:[`item ${len + 1} - 1`,`item ${len + 1} - 2`]}

  }




  function OnRefresh() {
      setRefresh(true)
    //   setData([...Data,AddData()])




  setDataL([...DataL,AddData()]);
      setRefresh(false)
  }

  return (
    <View style={styles.pageContainer}>
      <Text style={styles.subHeading}>Test Page</Text>




      <SectionList
            sections={DataL}
            keyExtractor={(_,idx)=>idx.toString()}
            refreshControl={
         <RefreshControl
         refreshing={Refresh}
         onRefresh={OnRefresh}
             colors={['blue' ,'yellow']}
         />

         
     }
renderItem={({item})=>(
    <View style={styles.ListItem}>
            <Text style={styles.ListText}>{item}</Text>
          </View>
)}

renderSectionHeader={({section})=>(
<View style={styles.SectionItem}>
            <Text style={styles.ListText}>{section.title}</Text>
          </View>
)}





      />
      {/* <FlatList
      horizontal
     refreshControl={
         <RefreshControl
         refreshing={Refresh}
         onRefresh={OnRefresh}
             colors={['blue' ,'yellow']}
         />
     }
        keyExtractor={(_, idx) => idx.toString()}
        data={Data}
        renderItem={({item}) => (
          <View style={styles.ListItem}>
            <Text style={styles.ListText}>{item.name}</Text>
          </View>
        )}
      /> */}
 
       {/* <ScrollView   style={styles.ListConatiner}>
          {Data.map((item,idx)=>(
              <View  key={idx}    style={styles.ListItem}>
                 <Text style={styles.ListText} >

                  {item.name}
                 </Text>
              </View>
          ))}
          </ScrollView>  */}
    </View>
  );
}

const styles = StyleSheet.create({
  pageContainer: {
    margin: 20,
  },

  subHeading: {
    textAlign: 'center',
    color: 'blue',
    fontSize: 18,
  },

  ListConatiner: {
    padding: 10,
    height: '90%',
    // backgroundColor: 'darkgray',
  },

  SectionItem:{
      backgroundColor:'gray',
      borderRadius:10,
  },
  ListItem: {
    height: 50,
    color: 'white',
    backgroundColor: 'blue',
    margin: 10,
    borderRadius: 10,
    // padding:10
  },

  ListText: {
    color: 'white',
    fontSize:18,
    padding: 10,
  },
});

export default TestPage;
