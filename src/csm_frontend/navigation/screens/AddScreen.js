import React, { useState } from 'react';
import { View, TextInput, Text, Button, TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native';

const UploadRecipePage = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [imageURI, setImageURI] = useState(null);

  const handleImageUpload = () => {
    // Implement your image upload functionality here
  };

  const handleSaveDraft = () => {
    // Implement your save draft functionality here
  };

  const handlePublish = () => {
    // Implement your publish functionality here
  };

  return (
    <ScrollView style={styles.container}>
        
        <TouchableOpacity style={styles.imageContainer} onPress={handleImageUpload}>
          {imageURI ? (
            <Image style={styles.image} source={{ uri: imageURI }} />
          ) : (
            <Text style={styles.uploadText}>Upload Image</Text>
          )}
        </TouchableOpacity>
        <View style={styles.header}/>
      
      <TextInput
        style={styles.input}
        placeholder="Title"
        value={title}
        onChangeText={text => setTitle(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Description"
        value={description}
        onChangeText={text => setDescription(text)}
        multiline
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity title="SaveDraft" style={styles.button} onPress={handleSaveDraft}><Text style={{color: "#FFFFFF"}}>บันทึกส่วนตัว</Text></TouchableOpacity>
        <TouchableOpacity title="Publish" style={styles.button} onPress={handlePublish}><Text style={{color: "#FFFFFF"}}>เผยแผร่</Text></TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor:"#FEE8B0"
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
    borderWidth: 3,
    borderColor: '#F09540',
    borderRadius: 8,
    height: 200,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
  },
  uploadText: {
    fontSize: 16,
    color: '#888888',
  },
  input: {
    marginBottom: 16,
    borderWidth: 3,
    borderColor: '#F09540',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 12,
    fontSize: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button:{
    backgroundColor:"#F09540",
    padding: 8,
    borderRadius: 8
  },
  header: {
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#F97B22',
    marginVertical : 10,
  }
});

export default UploadRecipePage;
