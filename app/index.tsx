// App.js
import React from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity, SafeAreaView, StatusBar } from 'react-native';
import { FontAwesome5, Ionicons } from '@expo/vector-icons';

export default function App() {
  const menuItems = [
    { id: 1, icon: 'exchange-alt', label: 'Transfer', color: '#026BB1' },
    { id: 2, icon: 'wallet', label: 'E-Wallet', color: '#026BB1' },
    { id: 3, icon: 'file-invoice', label: 'Pembayaran', color: '#026BB1' },
    { id: 4, icon: 'shopping-cart', label: 'Pembelian', color: '#026BB1' },
    { id: 5, icon: 'chart-line', label: 'Investasi', color: '#026BB1' },
    { id: 6, icon: 'flag', label: 'Life Goals', color: '#026BB1' },
    { id: 7, icon: 'hand-holding-usd', label: 'Digital Loan', color: '#026BB1' },
    { id: 8, icon: 'credit-card', label: 'My Credit Card', color: '#026BB1' },
    { id: 9, icon: 'users', label: 'Rekeningku', color: '#026BB1' },
    { id: 10, icon: 'mobile-alt', label: 'Mobile Tunai', color: '#026BB1' },
    { id: 11, icon: 'gift', label: 'DiKado', color: '#026BB1' },
    { id: 12, icon: 'ellipsis-h', label: 'Menu Lain', color: '#026BB1' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor='#fff' barStyle='dark-content' />

      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerTop}>
          <View style={styles.logoContainer}>
            <Text style={styles.logoText}>BNI</Text>
          </View>
          <View style={styles.headerIcons}>
            <TouchableOpacity>
              <Ionicons name='notifications-outline' size={24} color='#666' />
            </TouchableOpacity>
            <TouchableOpacity style={{ marginLeft: 15 }}>
              <Ionicons name='arrow-forward' size={24} color='#666' />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.userInfo}>
          <Text style={styles.welcomeText}>Selamat Datang,</Text>
          <Text style={styles.userName}>Muhammad Rizki Firdaus</Text>
        </View>
      </View>

      <ScrollView style={styles.content}>
        {/* Balance Card */}
        <View style={styles.balanceCard}>
          <View style={styles.accountInfo}>
            <Text style={styles.balanceLabel}>Rp 1.000.000.000.000.000.000, 00</Text>
            <TouchableOpacity style={styles.accountNumberContainer}>
              <Text style={styles.accountNumber}>0550773458</Text>
              <Ionicons name='copy-outline' size={16} color='#026BB1' />
            </TouchableOpacity>
            <Text style={styles.accountType}>Muhammad Rizki Firdaus</Text>
          </View>
          <TouchableOpacity style={styles.menuButton}>
            <Ionicons name='pencil' size={16} color='#026BB1' />
            <Text style={styles.menuButtonText}>Atur Menu</Text>
          </TouchableOpacity>
        </View>

        {/* Points Info */}
        <View style={styles.pointsInfo}>
          <Text style={styles.pointsLabel}>POIN</Text>
          <Text style={styles.pointsValue}>128.000.000.200</Text>
        </View>

        {/* Menu Grid */}
        <View style={styles.menuGrid}>
          {menuItems.map((item) => (
            <TouchableOpacity key={item.id} style={styles.menuItem}>
              <View style={[styles.iconContainer, { backgroundColor: item.color }]}>
                <FontAwesome5 name={item.icon} size={24} color='white' />
              </View>
              <Text style={styles.menuLabel}>{item.label}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Promo Section */}
        <View style={styles.promoSection}>
          <Text style={styles.promoTitle}>Promo & Informasi</Text>
          <View style={styles.promoCard}>
            <Text style={styles.promoText}>Jaga Selalu</Text>
          </View>
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name='home' size={24} color='#026BB1' />
          <Text style={[styles.navLabel, { color: '#026BB1' }]}>Beranda</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name='time-outline' size={24} color='#666' />
          <Text style={styles.navLabel}>Riwayat</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name='qr-code' size={24} color='#666' />
          <Text style={styles.navLabel}>QRIS</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name='star-outline' size={24} color='#666' />
          <Text style={styles.navLabel}>Favorit</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name='settings-outline' size={24} color='#666' />
          <Text style={styles.navLabel}>Pengaturan</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F6F8',
  },
  header: {
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 16,
    backgroundColor: 'white',
  },
  headerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  logoContainer: {
    backgroundColor: '#F15A23',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  logoText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  headerIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 14,
    color: '#666',
  },
  userName: {
    marginLeft: 4,
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
  },
  content: {
    flex: 1,
  },
  balanceCard: {
    margin: 16,
    padding: 16,
    backgroundColor: 'white',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  accountInfo: {
    marginBottom: 16,
  },
  balanceLabel: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  accountNumberContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  accountNumber: {
    fontSize: 14,
    color: '#026BB1',
    marginRight: 8,
  },
  accountType: {
    fontSize: 12,
    color: '#666',
  },
  pointsInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginBottom: 8,
  },
  pointsLabel: {
    fontSize: 12,
    color: '#666',
    marginRight: 8,
  },
  pointsValue: {
    fontSize: 12,
    color: '#333',
    fontWeight: '600',
  },
  menuButton: {
    backgroundColor: '#F5F6F8',
    padding: 8,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuButtonText: {
    color: '#026BB1',
    marginLeft: 4,
    fontSize: 14,
    fontWeight: '500',
  },
  menuGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 8,
    backgroundColor: 'white',
  },
  menuItem: {
    width: '25%',
    padding: 8,
    alignItems: 'center',
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 4,
  },
  menuLabel: {
    fontSize: 12,
    textAlign: 'center',
    color: '#333',
  },
  promoSection: {
    padding: 16,
  },
  promoTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
  },
  promoCard: {
    backgroundColor: 'white',
    borderRadius: 12,
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  promoText: {
    fontSize: 16,
    color: '#333',
  },
  bottomNav: {
    flexDirection: 'row',
    backgroundColor: 'white',
    paddingVertical: 8,
    borderTopWidth: 1,
    borderTopColor: '#F5F6F8',
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
  },
  navLabel: {
    fontSize: 12,
    marginTop: 4,
    color: '#666',
  },
});
