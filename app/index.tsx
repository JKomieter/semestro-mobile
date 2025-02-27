import { useAuth } from "@clerk/clerk-expo";
import { Redirect } from "expo-router";

const Page = () => {
    const { isSignedIn } = useAuth();

    if (isSignedIn) return <Redirect href="/(tabs)/explore" />;

    return <Redirect href="/(auth)/welcome" />;
};

export default Page;