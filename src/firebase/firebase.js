import { initializeApp, firestore, auth, database } from 'firebase';
//let database, firestore, auth;
const init = () => {
  let config = {
    apiKey: 'AIzaSyBqW-b8PMTln_Uy184JUOq6pPOcw4w3zVM',
    authDomain: 'csms-leso.firebaseapp.com',
    databaseURL: 'https://csms-leso.firebaseio.com',
    projectId: 'csms-leso',
    storageBucket: 'csms-leso.appspot.com',
    messagingSenderId: '921034475198',
    appId: '921034475198'
  };
  //firebase.
  initializeApp(config);
  //database = firebase.database();
  //firestore = firebase.firestore();
  //firestore ={}
  //auth = firebase.auth();
};

const login = (email, password) => {
  auth().signInWithEmailAndPassword(email, password);
};

const logoutUser = () => {
  auth().signOut();
};

const passwordReset = email => auth().sendPasswordResetEmail(email);
const changePassword = password => auth().currentUser.updatePassword(password);
const registerUser = (email, password) =>
  auth().createUserWithEmailAndPassword(email, password);

const setUser = setCurrent => {
  auth().onAuthStateChanged(authUser => {
    setCurrent(authUser);
  });
};

let firestoreMethods = {
  get: route => {
    return firestore()
      .collection('/' + route)
      .get()
      .then(querySnapshot => {
        let value = [],
          keys = [];
        querySnapshot.forEach(doc => {
          value.push(doc.data());
          keys.push(doc.id);
        });
        return { value: value, keys: keys };
      });
  },
  add: (route, data) => {
    return firestore()
      .collection('/' + route)
      .add(data)
      .then(function(docRef) {
        return {
          status: true,
          msg: `Document written with ID: ${docRef.id}`,
          _id: docRef.id
        };
      })
      .catch(function(error) {
        return {
          status: false,
          msg: `Error adding document: ${error}`,
          _id: null
        };
      });
  },

  update: (route, data, key) => {
    return firestore()
      .collection('/' + route)
      .doc(key)
      .set(data)
      .then(function(docRef) {
        return { status: true, msg: 'Document successfuly updated' };
      })
      .catch(function(error) {
        return {
          status: false,
          msg: `Error adding document: ${error}`
        };
      });
  },
  //getwhere('equipments','col_id','==','IICS','any attribute'.'ASC'/DESC)
  getwhere: (route, data1, comparator, data2, orderBy, order) => {
    return firestore()
      .collection(route)
      .where(data1, comparator, data2)
      .orderBy(orderBy, order)
      .get()
      .then(querySnapshot => {
        console.log('promos/getall');
        let value = [],
          keys = [];
        querySnapshot.forEach(doc => {
          value.push(doc.data());
          keys.push(doc.id);
        });
        return { value: value, keys: keys };
      });
  },

  getwhereV2: (
    route,
    data1,
    comparator,
    data2,
    dataA,
    dataB,
    orderBy,
    order
  ) => {
    return firestore()
      .collection(route)
      .where(dataA, '==', dataB)
      .where(data1, comparator, data2)
      .orderBy(orderBy, order)
      .get()
      .then(querySnapshot => {
        console.log(
          route,
          data1,
          comparator,
          data2,
          dataA,
          dataB,
          orderBy,
          order
        );
        let value = [],
          keys = [];

        querySnapshot.forEach(doc => {
          value.push(doc.data());
          keys.push(doc.id);
        });
        console.log('LOOKKIIEEEE', { value: value, keys: keys });
        return { value: value, keys: keys };
      });
  },
  getOr: (route, variable, option1, option2, orderBy, order) => {
    return firestore()
      .collection(route)
      .where(variable, '==', option1)
      .orderBy(orderBy, order)
      .get()
      .then(querySnapshot1 => {
        return firestore()
          .collection(route)
          .where(variable, '==', option2)
          .orderBy(orderBy, order)
          .get()

          .then(querySnapshot2 => {
            let value1 = [],
              keys1 = [],
              value2 = [],
              keys2 = [],
              value = [],
              keys = [],
              comparator1 = 0,
              comparator2 = 0;

            querySnapshot1.forEach(doc => {
              value1.push(doc.data());
              keys1.push(doc.id);
            });

            querySnapshot2.forEach(doc => {
              value2.push(doc.data());
              keys2.push(doc.id);
            });
            console.log(
              value1,
              value2,
              typeof value2[comparator2] == 'undefined'
            );

            while (value.length < value1.length + value2.length) {
              if (order === 'asc') {
                if (typeof value1[comparator1] == 'undefined') {
                  value.push(value2[comparator2]);
                  keys.push(keys2[comparator2]);
                  comparator2++;
                } else if (typeof value2[comparator2] == 'undefined') {
                  value.push(value1[comparator1]);
                  keys.push(keys1[comparator1]);
                  comparator1++;
                } else {
                  if (
                    value1[comparator1][orderBy] <= value2[comparator2][orderBy]
                  ) {
                    value.push(value1[comparator1]);
                    keys.push(keys1[comparator1]);
                    comparator1++;
                  } else {
                    value.push(value2[comparator2]);
                    keys.push(keys2[comparator2]);
                    comparator2++;
                  }
                }
              } else if (order === 'desc') {
                if (typeof value1[comparator1] == 'undefined') {
                  value.push(value2[comparator2]);
                  keys.push(keys2[comparator2]);
                  comparator2++;
                } else if (typeof value2[comparator2] == 'undefined') {
                  value.push(value1[comparator1]);
                  keys.push(keys1[comparator1]);
                  comparator1++;
                } else {
                  if (
                    value1[comparator1][orderBy] >= value2[comparator2][orderBy]
                  ) {
                    value.push(value1[comparator1]);
                    keys.push(keys1[comparator1]);
                    comparator1++;
                  } else {
                    value.push(value2[comparator2]);
                    keys.push(keys2[comparator2]);
                    comparator2++;
                  }
                }
              }
            }

            return { value: value, keys: keys };
          });
      });
  },
  Equipments: {
    route: 'equipments',
    add: data => {
      return firestoreMethods
        .add(firestoreMethods.Equipments.route, data)
        .then(value => {
          return value;
        });
    }
  }
};

let realtimeDatabase = {
  create: (route, data) => {
    return database()
      .ref(route)
      .push(data)
      .then(value => {
        return { status: true, msg: 'ok' };
      })
      .catch(e => {
        return { status: false, msg: 'ok' };
      });
  },
  get: route => {
    return database()
      .ref(route)
      .once('value')
      .then(value => {
        let keys = Object.keys(value.val()),
          values = [];

        keys.forEach(key => {
          values.push(value.val()[key]);
        });
        return { keys, values };
      });
  },
  getWhere: (route, key, value) => {
    return database()
      .ref(route)
      .orderByChild(key)
      .equalTo(value)
      .once('value')
      .then(value => {
        let keys = Object.keys(value.val()),
          values = [];

        keys.forEach(key => {
          values.push(value.val()[key]);
        });
        return { keys, values };
      });
  }
};
export {
  init,
  login,
  logoutUser,
  passwordReset,
  registerUser,
  changePassword,
  // setUser,
  firestoreMethods,
  realtimeDatabase,
  auth
};
