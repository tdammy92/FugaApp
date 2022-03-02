import React, {useState, useEffect} from 'react';
import {storeData, getData, removeData} from './utils/UseLocalStorage';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  FlatList,
  TextInput,
  TouchableOpacity,
  Alert,
  ScrollView,
  ToastAndroid,
} from 'react-native';
import AppButton from './utils/AppButton';
import {FabButtonL} from './utils/AppButton';
import Icon from 'react-native-vector-icons/FontAwesome';
import Store from '../Store/Store';

Icon.loadFont();

export default function Todo() {
  const {Todos, AddTodo, RemoveTodo, changeStatus, ClearTodos} = Store();

  const [todo, setTodo] = useState('');

  const handleAddtodo = () => {
    const newTodo = {
      id: '' + Math.floor(Math.random() * 100),
      title: todo,
      Completed: false,
    };

    if (todo) {
      try {
        //   console.log(Todos);

        let td = [...Todos, newTodo];
       
        storeData('todos', td);


        ToastAndroid.showWithGravityAndOffset(
          'your Todo has been saved',
          ToastAndroid.LONG,
          ToastAndroid.TOP,
          0,
          200,
        );
      } catch (error) {
        console.log("saving-Error",error);
      }
    } else {
      Alert.alert('Warning', 'You need to enter a Todo  !');
    }

    setTodo('');
  };

  function HandleClearTodos() {
    Alert.alert('confirm', 'Do you want to clear all todos ?', [
      {
        text: 'No',
      },
      {
        text: 'Yes',
        onPress: () => {
          ClearTodos();
          removeData('todos');
        },
      },
    ]);
  }

  async function getTodoFromStorge() {
    const res = await getData('todos');
try {
    AddTodo(res)
} catch (error) {
    console.log(error);
}

  }

  useEffect(() => {
    getTodoFromStorge();
  }, []);

  useEffect(() => {
    getTodoFromStorge();
  }, [Todos]);

  return (
    <View style={styles.PageWrapper}>
      <View>
        <TextInput

        placeholderTextColor={'#4eced4'}
          style={styles.InputFeild}
          placeholder="ADD A TODO"
          onChangeText={setTodo}
          value={todo}
        />

        <AppButton name="+ ADD TODO" onPress={handleAddtodo} color="#4eced4" />
      </View>

      {Todos && (
        <View style={styles.listContainer}>
          <FlatList
            data={Todos}
            keyExtractor={item => item.id}
            renderItem={({item}) => {
              return (
                <TouchableOpacity style={styles.todo}>
                  <Icon
                    name={item.Completed === true ? 'check' : 'minus'}
                    onPress={() => changeStatus(item.id)}
                    size={26}
                    color={item.Completed ? '#4eced4' : 'red'}
                    style={styles.status}
                  />
                  <Text style={styles.todoTitle}>{item.title}</Text>
                  <Icon
                    name="trash"
                    size={26}
                    color="red"
                    onPress={() => RemoveTodo(item.id)}
                  />
                </TouchableOpacity>
              );
            }}
          />
        </View>
      )}

      <FabButtonL color="#fc4c65" icon="trash" onPress={HandleClearTodos} />
    </View>
  );
}

const styles = StyleSheet.create({
  PageWrapper: {
    marginVertical: 20,
    marginHorizontal: 20,
    position: 'relative',
    height: '100%',
    width: '90%',
  },

  InputFeild: {
    borderRadius: 10,
    textAlign: 'center',
    fontSize: 20,
    paddingLeft: 20,
    // fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: 'white',
    color:'#4eced4',
    elevation:3
  },

  backgroundImage: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover',
  },
  listContainer: {
    marginTop: 20,
    marginHorizontal: 20,
  },
  addBtn: {
    borderRadius: 10,
    backgroundColor: '#4eced4',
    padding: 10,
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
  },
  todoTitle: {
    flex: 1,
    flexWrap: 'wrap',
    fontSize: 18,
    textAlign: 'center',
    // fontFamily: 'bold',
    padding: 5,
  },
  todo: {
    flex: 1,
    flexDirection: 'row',
    fontSize: 24,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    marginBottom: 15,
    borderRadius: 20,
  },
  status: {
    marginRight: 15,
  },
});
