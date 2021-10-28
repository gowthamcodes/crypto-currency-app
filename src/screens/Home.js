import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  Image,
  FlatList,
} from 'react-native';
import { PriceAlert } from '../components';
import { COLORS, FONTS, SIZES, dummyData, icons, images } from '../constants';
import { trendingCurrencies } from '../constants/dummy';
import routes from '../navigation/routes';

const Home = ({ navigation }) => {
  const [trending, setTrending] = useState(trendingCurrencies);

  const Header = () => {
    const renderItem = ({ item, index }) => (
      <TouchableOpacity
        style={{
          backgroundColor: COLORS.white,
          borderRadius: 10,
          paddingHorizontal: SIZES.padding,
          paddingVertical: SIZES.padding,
          width: 180,
          marginRight: SIZES.radius,
          marginLeft: index === 0 ? SIZES.padding : 0,
        }}>
        <View style={{ flexDirection: 'row' }}>
          <View>
            <Image
              source={item.image}
              resizeMode={'cover'}
              style={{
                width: 25,
                height: 25,
                marginTop: 5,
              }}
            />
          </View>
          <View
            style={{
              marginLeft: SIZES.base,
            }}>
            <Text
              style={{
                color: COLORS.black,
                ...FONTS.h2,
              }}>
              {item.currency}
            </Text>
            <Text
              style={{
                color: COLORS.gray,
                ...FONTS.body3,
              }}>
              {item.code}
            </Text>
          </View>
        </View>

        {/* Values */}
        <View style={{ marginTop: SIZES.radius }}>
          <Text style={{ color: COLORS.black, ...FONTS.h2 }}>
            ${item.amount}
          </Text>
          <Text
            style={{
              color: item.type === 'I' ? COLORS.green : COLORS.red,
              ...FONTS.h3,
            }}>
            {item.changes}
          </Text>
        </View>
      </TouchableOpacity>
    );

    return (
      <View
        style={{
          width: '100%',
          height: 290,
          ...styles.shadow,
        }}>
        <ImageBackground
          source={images.banner}
          resizeMode={'cover'}
          style={{
            flex: 1,
            alignItems: 'center',
          }}>
          {/* Notification  */}
          <View
            style={{
              paddingTop: SIZES.padding * 2,
              width: '100%',
              alignItems: 'flex-end',
              paddingHorizontal: SIZES.padding,
            }}>
            <TouchableOpacity
              style={{
                width: 35,
                height: 35,
                justifyContent: 'center',
                alignItems: 'center',
              }}
              onPress={() => console.log('Notification')}>
              <Image
                source={icons.notification_white}
                resizeMode={'contain'}
                style={{
                  flex: 1,
                }}
              />
            </TouchableOpacity>
          </View>

          {/* Portfolio Balance */}
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{ color: COLORS.white, ...FONTS.h3 }}>
              Your Portfolio Balance
            </Text>
            <Text
              style={{
                color: COLORS.white,
                marginTop: SIZES.base,
                ...FONTS.h1,
              }}>
              ${dummyData.portfolio.balance}
            </Text>
            <Text
              style={{
                color: COLORS.white,
                ...FONTS.body5,
              }}>
              {dummyData.portfolio.changes} Last 24 hours
            </Text>
          </View>

          {/* Trending */}
          <View
            style={{
              position: 'absolute',
              bottom: '-30%',
            }}>
            <Text
              style={{
                marginLeft: SIZES.padding,
                color: COLORS.white,
                ...FONTS.h2,
              }}>
              Trending
            </Text>
            <FlatList
              contentContainerStyle={{
                marginTop: SIZES.base,
              }}
              horizontal
              showsHorizontalScrollIndicator={false}
              data={trending}
              keyExtractor={item => `${item.id}`}
              renderItem={renderItem}
            />
          </View>
        </ImageBackground>
      </View>
    );
  };

  const NoticeCard = () => (
    <View style={[styles.notice, styles.shadow]}>
      <Text style={{ color: COLORS.white, ...FONTS.h3 }}>Investing Salary</Text>
      <Text
        style={{
          marginTop: SIZES.base,
          color: COLORS.white,
          lineHeight: 18,
          ...FONTS.body4,
        }}>
        It's very difficult to time an investment, especially when the market is
        volatile. Learn how to use doller cost averaging to your advantage.
      </Text>
      <TouchableOpacity
        onPress={() => console.log('Learn More')}
        style={{
          marginTop: SIZES.base,
        }}>
        <Text
          style={{
            textDecorationLine: 'underline',
            color: COLORS.green,
            ...FONTS.h3,
          }}>
          Learn More
        </Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View
        style={{
          flex: 1,
          paddingBottom: 120,
        }}>
        <Header />
        <PriceAlert />
        <NoticeCard />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  notice: {
    marginTop: SIZES.padding,
    marginHorizontal: SIZES.padding,
    padding: 20,
    borderRadius: SIZES.radius,
    backgroundColor: COLORS.secondary,
  },
});

export default Home;
