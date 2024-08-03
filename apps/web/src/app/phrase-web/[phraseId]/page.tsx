import { Metadata, ResolvingMetadata } from "next";
import { apis } from "~/apis";
import AppDownloadHeader from "~/components/app-download-header";
import AppDownloadModal from "~/components/app-download-modal";
import AppFooter from "~/components/app-footer";
import EventBanner from "~/components/event-banner";
import EventModal from "~/components/event-modal";
import GoAppCard from "~/components/go-app-card";
import PhraseContent from "~/components/phrase-content";
import PhraseWebGoogleAd from "~/components/phrase-web-google-ad";
import Separator from "~/components/ui/separator";
import PhraseList from "./phrase-list";

export const dynamic = "force-dynamic";
export const revalidate = 0;

interface Props {
  params: { phraseId: string };
}

export default async function PhraseWebPage({
  params,
}: {
  params: { phraseId: string };
}) {
  const res = await apis.phraseApi.getPhrase(params.phraseId);
  const phrase = res.result;

  return (
    <main className="pb-[90px]">
      <div className="sticky top-0 z-[1]">
        <AppDownloadHeader />
        <EventBanner />
      </div>
      <PhraseContent phrase={phrase} />
      <Separator />
      {/* <PhraseWebGoogleAd /> */}
      <PhraseList currentPhraseId={params.phraseId} />
      <Separator />
      <GoAppCard />
      <AppFooter />
      <AppDownloadModal />
      <EventModal />
    </main>
  );
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const id = params.phraseId;
  const res = await apis.phraseApi.getPhrase(id);
  const phrase = res.result;

  const url = `https://www.daily-phrase.com/phrase-web/${id}`;
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: phrase.title,
    description: phrase.content,
    openGraph: {
      title: phrase.title,
      images: [...previousImages, phrase.imageUrl],
      description: phrase.content,
      url,
    },
    twitter: {
      title: phrase.title,
      images: [...previousImages, phrase.imageUrl],
      description: phrase.content,
    },
  };
}
