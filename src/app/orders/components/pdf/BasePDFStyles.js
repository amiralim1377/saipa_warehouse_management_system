import { StyleSheet, Font } from "@react-pdf/renderer";

Font.register({
  family: "YekanBakh",
  src: "/fonts/yekanbakh/Yekan.ttf",
});

export const styles = StyleSheet.create({
  page: {
    padding: 32,
    fontSize: 12,
    fontFamily: "YekanBakh",
    textAlign: "right",
    lineHeight: 1.6,
  },
  title: {
    fontSize: 20,
    textAlign: "center",
    marginBottom: 24,
    fontWeight: "bold",
    color: "#222",
  },
  sectionTitle: {
    fontSize: 14,
    marginBottom: 8,
    fontWeight: "bold",
    color: "#333",
  },
  headerRow: {
    flexDirection: "row-reverse",
    backgroundColor: "#f2f2f2",
    borderBottomWidth: 1,
    borderBottomColor: "#000",
    paddingVertical: 6,
    marginBottom: 4,
  },
  row: {
    flexDirection: "row-reverse",
    borderBottomWidth: 0.5,
    borderBottomColor: "#ccc",
    paddingVertical: 6,
  },
  cell: {
    flex: 1,
    textAlign: "center",
    paddingHorizontal: 6,
    fontSize: 11,
    color: "#111",
  },
  cellHeader: {
    flex: 1,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 12,
    color: "#222",
  },
  cellNarrow: { flex: 0.7, textAlign: "center", paddingHorizontal: 6 },
  footerText: { marginTop: 6, fontSize: 11, color: "#444", textAlign: "right" },
  section: { marginBottom: 20 },
});
