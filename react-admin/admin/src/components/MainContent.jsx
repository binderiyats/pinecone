import MainContentTitle from "./Maincontent/MainContentTitle";
import MainContentTable from "./Maincontent/MainContentTable";
import MainContentWrapper from "./Maincontent/MainContentWrapper";

export default function MainContent() {
  return (
    <MainContentWrapper>
      <MainContentTitle title="Blog" />
      <MainContentTable />
    </MainContentWrapper>
  );
}
