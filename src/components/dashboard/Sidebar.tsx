import { useRouter } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { colors } from '@/src/theme/colors';

type SidebarRoute =
  | '/'
  | '/campaign'
  | '/election'
  | '/finance'
  | '/leader'
  | '/map'
  | '/media'
  | '/party'
  | '/program';

type SidebarItem = {
  aliases?: string[];
  id: string;
  label: string;
  route: SidebarRoute;
};

const navItems: SidebarItem[] = [
  { id: 'map', label: 'Mapa', route: '/map' },
  { aliases: ['Kampan'], id: 'campaign', label: 'Kampaň', route: '/campaign' },
  { id: 'program', label: 'Program', route: '/program' },
  { id: 'party', label: 'Strana', route: '/party' },
  { aliases: ['Lidr'], id: 'leader', label: 'Lídr', route: '/leader' },
  { id: 'finance', label: 'Finance', route: '/finance' },
  { aliases: ['Media'], id: 'media', label: 'Média', route: '/media' },
  { id: 'election', label: 'Volby', route: '/election' },
];

type SidebarProps = {
  activeItem?: string;
};

export function Sidebar({ activeItem = 'Mapa' }: SidebarProps) {
  const router = useRouter();

  return (
    <View style={styles.sidebar}>
      <View style={styles.brand}>
        <Text style={styles.brandTitle}>Volby</Text>
        <Text style={styles.brandSubtitle}>HQ</Text>
      </View>

      <View style={styles.nav}>
        {navItems.map((item) => {
          const isActive = item.id === activeItem || item.label === activeItem || item.aliases?.includes(activeItem);

          return (
            <Pressable
              hitSlop={8}
              key={item.id}
              onPress={() => {
                if (!isActive) {
                  router.replace(item.route);
                }
              }}
              style={[styles.navItem, isActive && styles.navItemActive]}
            >
              <Text style={[styles.navLabel, isActive && styles.navLabelActive]} numberOfLines={1}>
                {item.label}
              </Text>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  brand: {
    alignItems: 'center',
    borderBottomColor: 'rgba(255,255,255,0.18)',
    borderBottomWidth: 1,
    paddingBottom: 9,
  },
  brandSubtitle: {
    color: '#BFD3E6',
    fontSize: 10,
    fontWeight: '800',
    marginTop: 2,
  },
  brandTitle: {
    color: colors.textOnPrimary,
    fontSize: 18,
    fontWeight: '900',
  },
  nav: {
    flex: 1,
    gap: 5,
    paddingTop: 12,
  },
  navItem: {
    alignItems: 'center',
    borderColor: 'transparent',
    borderRadius: 8,
    borderWidth: 1,
    justifyContent: 'center',
    minHeight: 35,
    paddingHorizontal: 4,
  },
  navItemActive: {
    backgroundColor: colors.surface,
    borderColor: 'rgba(214,162,30,0.55)',
  },
  navLabel: {
    color: '#DCEAF7',
    fontSize: 10,
    fontWeight: '800',
  },
  navLabelActive: {
    color: colors.primaryDark,
  },
  sidebar: {
    backgroundColor: colors.primaryDark,
    borderRightColor: colors.primary,
    borderRightWidth: 1,
    paddingHorizontal: 8,
    paddingVertical: 10,
    width: 104,
  },
});
