import { initialProfile } from "@/lib/intial-profile";
import db from "@/lib/db";
import { redirect } from "next/navigation";
import { InitialModel } from "@/components/modals/initial-model";

export default async function SetupPage() {
  const profile = await initialProfile();

  const server = await db.server.findFirst({
    where: {
      members: {
        some: {
          profileId: profile.id,
        },
      },
    },
  });

  if (server) {
    return redirect(`/servers/${server.id}`);
  }
  return <InitialModel />;
}
