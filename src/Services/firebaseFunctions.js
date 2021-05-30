// Ler
// firebase.firestore().collection('nomeDaCollection').doc('idDoDocument')
//   .onSnapshot((doc) => console.log(doc.data()))
//   .then(() => alert('deu certo'))
//   .catch(() => alert('não deu certo'));


// Adicionar
// authConfig.database().ref().child(user.uid).push(data);

// authConfig.database().ref().child(user.uid).set(data);




// Update
// firebase.firestore().collection('nomeDaCollection').doc('idDoDocument').set([alteração] ou {alteração})
//   .then(() => alert('deu certo'))
//   .catch(() => alert('não deu certo'));




// Deletar
// firebase.firestore().collection('nomeDaCollection').doc('idDoDocument').delete()
//   .then(() => alert('deu certo'))
//   .catch(() => alert('não deu certo'));