import { ThemeProvider } from "@/hooks/useTheme";
import { Stack } from "expo-router";

export default function RootLayout() {
  return <ThemeProvider>
  <Stack screenOptions={{
    headerStyle:{backgroundColor:'#1F2933'},
    headerShown:false,
  }}>
    <Stack.Screen name="(tabs)" options={{title: "Todo"}}></Stack.Screen>
    </Stack>
    </ThemeProvider>  
}
