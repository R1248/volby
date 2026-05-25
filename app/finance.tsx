import { Pressable, StyleSheet, Text, View } from "react-native";

import { GameScreen } from "@/src/components/layout/GameScreen";
import { useGameStore } from "@/src/store/useGameStore";
import { colors } from "@/src/theme/colors";

const legalStatusLabel = {
  legal: "legální",
  gray: "šedá zóna",
  illegal: "nelegální",
} as const;

const sponsorKindLabel = {
  bank_loan: "úvěr",
  grassroots_bundle: "malí dárci",
  membership_drive: "členská sbírka",
  opaque_support: "neprůhledná podpora",
  regional_patron_network: "regionální síť",
  registered_third_party: "třetí osoba",
  sector_network: "odvětvová síť",
} as const;

export default function FinanceScreen() {
  const gameState = useGameStore((state) => state.gameState);
  const acceptSponsorOffer = useGameStore((state) => state.acceptSponsorOffer);

  return (
    <GameScreen
      activeItem="Finance"
      title="Finance a sponzoři"
      titleInStatusStrip
    >
      <View style={styles.sponsorBoard}>
        <View style={styles.sponsorGrid}>
          {gameState.sponsors.map((sponsor) => (
            <Pressable
              disabled={sponsor.accepted}
              key={sponsor.id}
              onPress={() => acceptSponsorOffer(sponsor.id)}
              style={[
                styles.sponsorCard,
                sponsor.accepted && styles.sponsorAccepted,
              ]}
            >
              <View style={styles.cardGlow} />
              <View style={styles.sponsorHeader}>
                <View style={styles.sponsorTitleGroup}>
                  <Text style={styles.sponsorName}>{sponsor.name}</Text>
                  <Text style={styles.sponsorKind}>
                    {sponsorKindLabel[sponsor.kind]}
                  </Text>
                </View>
                <Text
                  style={[
                    styles.statusBadge,
                    sponsor.legalStatus !== "legal" && styles.statusRisk,
                  ]}
                >
                  {legalStatusLabel[sponsor.legalStatus]}
                </Text>
              </View>
              <Text style={styles.sponsorAmount}>
                {sponsor.amount.toFixed(1)}M Kč
              </Text>
              <Text style={styles.sponsorRisk}>
                reputace -{Math.round(sponsor.reputationRisk * 100)} · skandál{" "}
                {Math.round(sponsor.scandalRisk * 100)} % · stopa{" "}
                {Math.round(sponsor.traceability * 100)} %
              </Text>
              {Object.keys(sponsor.policyPressure).length > 0 && (
                <Text style={styles.pressure}>
                  Tlak:{" "}
                  {Object.entries(sponsor.policyPressure)
                    .map(
                      ([issue, value]) =>
                        `${issue} ${Math.round((value ?? 0) * 100)} %`,
                    )
                    .join(", ")}
                </Text>
              )}
              <View
                style={[
                  styles.sponsorAction,
                  sponsor.accepted && styles.sponsorActionDone,
                ]}
              >
                <Text style={styles.sponsorActionText}>
                  {sponsor.accepted ? "Přijato" : "Přijmout"}
                </Text>
              </View>
            </Pressable>
          ))}
        </View>
      </View>
    </GameScreen>
  );
}

const styles = StyleSheet.create({
  boardTitle: {
    color: colors.textOnPrimary,
    fontSize: 17,
    fontWeight: "900",
  },
  cardGlow: {
    backgroundColor: colors.accent,
    borderRadius: 999,
    height: 5,
    opacity: 0.95,
    position: "absolute",
    right: 12,
    top: -1,
    width: 74,
  },
  pressure: {
    color: colors.primary,
    fontSize: 11,
    fontWeight: "900",
    lineHeight: 15,
  },
  sponsorAccepted: {
    opacity: 0.62,
  },
  sponsorAction: {
    alignItems: "center",
    alignSelf: "flex-start",
    backgroundColor: colors.accent,
    borderColor: "#FFE6A6",
    borderRadius: 8,
    borderWidth: 1,
    justifyContent: "center",
    minHeight: 32,
    minWidth: 104,
    paddingHorizontal: 13,
  },
  sponsorActionDone: {
    backgroundColor: colors.success,
    borderColor: "#CDEDD3",
  },
  sponsorActionText: {
    color: colors.textOnPrimary,
    fontSize: 12,
    fontWeight: "900",
  },
  sponsorAmount: {
    color: colors.primaryDark,
    fontSize: 25,
    fontWeight: "900",
  },
  sponsorCard: {
    backgroundColor: "#FFF4D0",
    borderColor: "#D5A53B",
    borderRadius: 8,
    borderWidth: 1,
    gap: 7,
    minHeight: 188,
    overflow: "hidden",
    padding: 12,
    position: "relative",
    width: "48.5%",
  },
  sponsorBoard: {
    backgroundColor: colors.primaryDark,
    borderColor: colors.primary,
    borderRadius: 8,
    borderWidth: 1,
    gap: 10,
    minHeight: 260,
    padding: 10,
  },
  sponsorGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  sponsorHeader: {
    alignItems: "center",
    flexDirection: "row",
    gap: 8,
    justifyContent: "space-between",
  },
  sponsorKind: {
    color: colors.textMuted,
    fontSize: 10,
    fontWeight: "900",
    textTransform: "uppercase",
  },
  sponsorName: {
    color: colors.text,
    fontSize: 14,
    fontWeight: "900",
  },
  sponsorRisk: {
    color: colors.textMuted,
    fontSize: 11,
    fontWeight: "800",
    lineHeight: 15,
  },
  sponsorTitleGroup: {
    flex: 1,
    gap: 2,
  },
  statusBadge: {
    backgroundColor: "#DDF0DE",
    borderRadius: 999,
    color: colors.success,
    fontSize: 9,
    fontWeight: "900",
    paddingHorizontal: 7,
    paddingVertical: 3,
    textTransform: "uppercase",
  },
  statusRisk: {
    backgroundColor: "#FFF0D1",
    color: colors.warning,
  },
});
