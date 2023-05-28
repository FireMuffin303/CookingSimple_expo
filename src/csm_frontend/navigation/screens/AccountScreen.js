import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Assuming you have the Ionicons library installed

const AccountPage = () => {
  const handleLogout = () => {
    // Implement your logout functionality here
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.profileImage} source={require('csm_frontend/assets/favicon.png')} />
      </View>
      <View style={styles.content}>
        <TouchableOpacity style={styles.button}>
          <Ionicons name="ios-bookmark" size={24} style={styles.icon} />
          <Text style={styles.buttonText}>เมนูของฉัน</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.button}>
          <Ionicons name="ios-heart" size={24}  style={styles.icon} />
          <Text style={styles.buttonText}>ดูเมนูโปรด</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.button}>
          <Ionicons name="ios-time" size={24}  style={styles.icon} />
          <Text style={styles.buttonText}>ดูประวัติการเข้าชม</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Text style={styles.logoutButtonText}>ออกจากระบบ</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FEE8B0',
  },
  header: {
    alignItems: 'center',
    paddingVertical: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#F97B22',
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  content: {
    padding: 24,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    borderRadius: 12,
    marginBottom: 16,
    backgroundColor: '#F97B22'
  },
  icon: {
    marginRight: 8,
    color: '#FFFFFF'
  },
  buttonText: {
    fontSize: 16,
    color: '#FFFFFF',
  },
  logoutButton: {
    backgroundColor: '#FF0000',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  logoutButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
});

export default AccountPage;
